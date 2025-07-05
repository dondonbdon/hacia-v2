'use client';

import { staffData } from '../lib/data/staffData';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Type definitions
interface Position {
	name: string;
}

interface StaffMember {
	name: string;
	position: Position;
	dateJoined: string;
	imageUrl: string;
}

interface StaffMembersByDept {
	staffMembersByDept: {
		deptName: string;
		staffMembers: StaffMember[];
	}[];
}

export default function StaffMemberGrid() {
	const [depts, setDepts] = useState<StaffMembersByDept>({
		staffMembersByDept: [],
	});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		try {
			// Group staff members by department name
			const grouped = staffData.reduce((acc, member) => {
				const deptName = member.department.name;
				const existingDept = acc.find((dept) => dept.deptName === deptName);
				if (existingDept) {
					existingDept.staffMembers.push(member);
				} else {
					acc.push({
						deptName,
						staffMembers: [member],
					});
				}
				return acc;
			}, [] as StaffMembersByDept['staffMembersByDept']);

			setDepts({ staffMembersByDept: grouped });
		} catch (err) {
			setError(
				err instanceof Error ? err.message : 'An unknown error occurred'
			);
		} finally {
			setLoading(false);
		}
	}, []);

	const getYearFromDate = (dateString: string) => {
		return new Date(dateString).getFullYear();
	};

	if (loading) {
		return (
			<div className='flex justify-center items-center h-64'>
				<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600 dark:border-cyan-400'></div>
			</div>
		);
	}

	if (error) {
		return (
			<div className='text-center py-12 text-red-500 dark:text-red-400'>
				<p>Error loading staff members: {error}</p>
				<button
					onClick={() => window.location.reload()}
					className='mt-4 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md dark:bg-cyan-600 dark:hover:bg-cyan-700'>
					Retry
				</button>
			</div>
		);
	}

	return (
		<div className='space-y-16'>
			{depts.staffMembersByDept.map((department) => (
				<div key={department.deptName} className='mb-12'>
					{/* Department Header */}
					<div className='mb-8 pb-4 border-b border-amber-200 dark:border-cyan-800'>
						<h2 className='text-2xl md:text-3xl font-bold text-amber-600 dark:text-cyan-400'>
							{department.deptName} Department
						</h2>
					</div>

					{/* Staff Members Grid */}
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
						{department.staffMembers.map((staffMember) => (
							<div
								key={`${department.deptName}-${staffMember.name}`}
								className='flex flex-col items-center text-center'>
								{/* Circular Staff Image */}
								<div className='relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-amber-500/20 dark:border-cyan-400/20 shadow-lg'>
									<Image
										src={staffMember.imageUrl}
										alt={staffMember.name}
										fill
										className='object-cover'
										sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw'
									/>
								</div>

								{/* Staff Info */}
								<div className='text-center'>
									<h3 className='text-xl font-semibold text-slate-800 dark:text-slate-100 mb-1'>
										{staffMember.name}
									</h3>
									<p className='text-sm text-slate-600 dark:text-slate-300 mb-1'>
										{staffMember.position.name}
									</p>
									<p className='text-xs text-amber-600 dark:text-cyan-400'>
										Since{' '}
										{getYearFromDate(
											staffMember.dateJoined
										)}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

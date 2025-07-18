'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getAllStaff } from '@/pages/api/staff/allStaff';
import { User } from "lucide-react";

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
    const [imageError, setImageError] = useState<Record<string, boolean>>({});

    useEffect(() => {
        try {
            const data = getAllStaff();
            setDepts(data);
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
        <section className="py-20 px-6 md:px-20  transition-colors duration-300">
            <div className="max-w-screen-2xl mx-auto">
                {depts.staffMembersByDept.map((department) => (
                    <div key={department.deptName} className="mb-16">
                        {/* Department Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-slate-100">
                                {department.deptName} Department
                            </h2>
                        </div>

                        {/* Staff Members Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 w-full">
                            {department.staffMembers.map((staffMember, idx) => (
                                <div key={`${department.deptName}-${staffMember.name}-${idx}`}
                                    className="rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-slate-800">
                                    {/* Image Container with 4:5 aspect ratio */}
                                    <div className="relative w-full max-w-xs mx-auto border border-amber-400/50 dark:border-cyan-400/40 rounded-xl overflow-hidden aspect-[4/5] mb-6 flex items-center justify-center bg-slate-100 dark:bg-slate-700">
                                        {!imageError[staffMember.name] ? (
                                            <Image
                                                src={staffMember.imageUrl}
                                                alt={staffMember.name}
                                                fill
                                                className="object-cover transition-opacity duration-200"
                                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                                onError={() => {
                                                    setImageError((prev) => ({ ...prev, [staffMember.name]: true }));
                                                }}
                                            />
                                        ) : (
                                            <User className="w-16 h-16 text-slate-400 dark:text-slate-500" />
                                        )}
                                    </div>

                                    {/* Staff Info */}
                                    <div className="text-center">
                                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                                            {staffMember.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                            {staffMember.position.name}
                                        </p>
                                        <p className="mt-2 text-xs text-amber-600 dark:text-cyan-400">
                                            Since {getYearFromDate(staffMember.dateJoined)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
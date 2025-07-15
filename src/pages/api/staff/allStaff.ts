import staffData from '../../data/staff.json';

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

// Return the full structure
export function getAllStaff(): StaffMembersByDept {
    return staffData;
}

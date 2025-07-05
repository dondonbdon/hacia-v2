// app/lib/data/staffData.ts

export interface Department {
    _id: string;
    name: string;
}

export interface Position {
    _id: string;
    name: string;
}

export interface StaffMember {
    _id: string;
    imageUrl: string;
    name: string;
    department: Department;
    position: Position;
    dateJoined: string; // ISO string for JSON compatibility
}

export const staffData: StaffMember[] = [
    {
        _id: "staff001",
        imageUrl: "https://ui-avatars.com/api/?name=Alice+Moyo&background=random",
        name: "Alice Moyo",
        department: {
            _id: "dept001",
            name: "Science Department",
        },
        position: {
            _id: "pos001",
            name: "Teacher",
        },
        dateJoined: "2016-04-15T08:00:00.000Z",
    },
    {
        _id: "staff002",
        imageUrl: "https://ui-avatars.com/api/?name=Brian+Ncube&background=random",
        name: "Brian Ncube",
        department: {
            _id: "dept001",
            name: "Science Department",
        },
        position: {
            _id: "pos001",
            name: "Teacher",
        },
        dateJoined: "2017-09-20T08:00:00.000Z",
    },
    {
        _id: "staff003",
        imageUrl: "https://ui-avatars.com/api/?name=Chipo+Nyathi&background=random",
        name: "Chipo Nyathi",
        department: {
            _id: "dept002",
            name: "Sports Department",
        },
        position: {
            _id: "pos002",
            name: "Head of Department",
        },
        dateJoined: "2015-01-10T08:00:00.000Z",
    },
    {
        _id: "staff004",
        imageUrl: "https://ui-avatars.com/api/?name=David+Mpofu&background=random",
        name: "David Mpofu",
        department: {
            _id: "dept003",
            name: "Administration",
        },
        position: {
            _id: "pos003",
            name: "Administrator",
        },
        dateJoined: "2020-07-01T08:00:00.000Z",
    },
    {
        _id: "staff005",
        imageUrl: "https://ui-avatars.com/api/?name=Evelyn+Sibanda&background=random",
        name: "Evelyn Sibanda",
        department: {
            _id: "dept002",
            name: "Sports Department",
        },
        position: {
            _id: "pos001",
            name: "Teacher",
        },
        dateJoined: "2019-11-28T08:00:00.000Z",
    },
];

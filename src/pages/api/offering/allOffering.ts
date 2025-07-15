// offering.ts

import offering from '../../data/offering.json';

type Subject = {
    name: string;
    code?: string;
};

type Level = {
    name: string;
    description: string;
    subjects: Subject[];
};

function getAllOffering(): Level[] {
    return offering.levels;
}

export default getAllOffering;

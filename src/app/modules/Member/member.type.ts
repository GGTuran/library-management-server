export type TMember = {
    name: string;
    email: string;
    phone: string;
    membershipDate: Date;
}


export type TMemberUpdate = {
    name: string;
    email: string;
    phone: string;
    membershipDate?: Date;
}
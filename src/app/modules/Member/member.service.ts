import prisma from "../../utils/prisma";
import { TMember, TMemberUpdate } from "./member.type";


const createMemberIntoDB = async (payload: TMember) => {
    const result = await prisma.member.create({
        data: payload
    });

    return result;
};

const getAllMembersFromDB = async () => {
    const result = await prisma.member.findMany();
    return result;
};

const getSingleMemberFromDB = async (memberId: string) => {
    const result = await prisma.member.findUnique({
        where: {
            memberId: memberId
        }
    });
    return result;
};


const updateMemberIntoDB = async (memberId: string, payload: TMemberUpdate) => {
    const result = await prisma.member.update({
        where: {
            memberId: memberId
        },
        data: payload
    });
    return result;
};

const deleteMemberFromDB = async (memberId: string) => {
    const result = await prisma.member.delete({
        where: {
            memberId: memberId
        }
    });
    return result;
}

export const memberServices = {
    createMemberIntoDB,
    getAllMembersFromDB,
    getSingleMemberFromDB,
    updateMemberIntoDB,
    deleteMemberFromDB,
}
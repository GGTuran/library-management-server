import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { memberServices } from "./member.service";

const createMember = catchAsync(async (req, res) => {
    const result = await memberServices.createMemberIntoDB(req.body);
    sendResponse(res, {
        success: true,
        status: 201,
        message: "Member created successfully",
        data: result
    });
});

const getAllMembers = catchAsync(async (req, res) => {
    const result = await memberServices.getAllMembersFromDB();
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Members retrieved successfully",
        data: result
    });
});


const getSingleMember = catchAsync(async (req, res) => {
    const { memberId } = req.params;
    const result = await memberServices.getSingleMemberFromDB(memberId);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Member retrieved successfully",
        data: result
    });
});

const updateMember = catchAsync(async (req, res) => {
    const { memberId } = req.params;
    const result = await memberServices.updateMemberIntoDB(memberId, req.body);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Member updated successfully",
        data: result
    });
});

const deleteMember = catchAsync(async (req, res) => {
    const { memberId } = req.params;
    const result = await memberServices.deleteMemberFromDB(memberId);
    sendResponse(res, {
        success: true,
        status: 200,
        message: "Member successfully deleted"
    })
})

export const memberControllers = {
    createMember,
    getAllMembers,
    getSingleMember,
    updateMember,
    deleteMember,
}
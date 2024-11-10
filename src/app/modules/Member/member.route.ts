import express from 'express';
import { memberControllers } from './member.controller';
import validate from '../../middlewares/validate';
import { memberValidations } from './member.validation';


const router = express.Router();

router.post(
    '/',
    validate(memberValidations.createMemberZod),
    memberControllers.createMember);

router.get('/', memberControllers.getAllMembers);

router.get('/:memberId', memberControllers.getSingleMember);

router.put(
    '/:memberId',
    validate(memberValidations.updateMemberZod),
    memberControllers.updateMember);

router.delete('/:memberId', memberControllers.deleteMember);

export const memberRoutes = router;
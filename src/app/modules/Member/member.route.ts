import express from 'express';
import { memberControllers } from './member.controller';


const router = express.Router();

router.post('/', memberControllers.createMember);

router.get('/', memberControllers.getAllMembers);

router.get('/:memberId', memberControllers.getSingleMember);

router.put('/:memberId', memberControllers.updateMember);

router.delete('/:memberId', memberControllers.deleteMember);

export const memberRoutes = router;
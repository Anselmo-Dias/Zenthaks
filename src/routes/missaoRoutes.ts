import express from 'express';
import * as missaoController from '../controllers/missaoController.js';

const router = express.Router();

router.post('/missions', missaoController.createMissao);
router.post('/players/:playerId/missions/:missionId/assign', missaoController.assignMissao);
router.patch('/players/:playerId/missions/:missionId/start', missaoController.startMissao);
router.patch('/players/:playerId/missions/:missionId/complete', missaoController.completeMissao);
router.get('/players/:playerId/missions', missaoController.getMissoesByJogadorId);

export default router;

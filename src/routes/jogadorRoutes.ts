import express from 'express';
import * as jogadorController from '../controllers/jogadorController.js';

const router = express.Router();

router.post('/players', jogadorController.createJogador);
router.get('/players', jogadorController.getAllJogadores);
router.get('/players/:id', jogadorController.getJogadorById);
router.put('/players/:id', jogadorController.updateJogador);
router.delete('/players/:id', jogadorController.deleteJogador);

export default router;
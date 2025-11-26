import { Request, Response } from 'express';
import * as missaoService from '../services/missaoService.js';

export const createMissao = async (req: Request, res: Response) => {
  const { titulo, descricao, recompensa } = req.body;
  try {
    const newMissao = await missaoService.createMissao(titulo, descricao, recompensa);
    res.status(201).json(newMissao);
  } catch (error) {
    res.status(500).json({ message: 'Error creating mission', error });
  }
};

export const assignMissao = async (req: Request, res: Response) => {
  const { playerId, missionId } = req.params;
  try {
    const result = await missaoService.assignMissao(Number(playerId), Number(missionId));
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error assigning mission', error });
  }
};

export const startMissao = async (req: Request, res: Response) => {
  const { playerId, missionId } = req.params;
  try {
    const result = await missaoService.startMissao(Number(playerId), Number(missionId));
    if (!result) {
      return res.status(404).json({ message: 'Mission not found for this player' });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error starting mission', error });
  }
};

export const completeMissao = async (req: Request, res: Response) => {
  const { playerId, missionId } = req.params;
  try {
    const result = await missaoService.completeMissao(Number(playerId), Number(missionId));
    if (!result) {
      return res.status(404).json({ message: 'Mission not found for this player' });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error completing mission', error });
  }
};

export const getMissoesByJogadorId = async (req: Request, res: Response) => {
  const { playerId } = req.params;
  try {
    const missoes = await missaoService.getMissoesByJogadorId(Number(playerId));
    res.status(200).json(missoes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching missions', error });
  }
};

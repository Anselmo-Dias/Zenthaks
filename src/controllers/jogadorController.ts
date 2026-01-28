import { Request, Response } from 'express';
import * as jogadorService from '../services/jogadorService.js';

export const getAllJogadores = async (req: Request, res: Response) => {
  try {
    const jogadores = await jogadorService.getAllJogadores();
    res.status(200).json(jogadores);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jogadores', error });
  }
};

export const getJogadorById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const jogador = await jogadorService.getJogadorById(Number(id));
    if (!jogador) {
      return res.status(404).json({ message: 'Jogador not found' });
    }
    res.status(200).json(jogador);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jogador', error });
  }
};

export const createJogador = async (req: Request, res: Response) => {
  const { nome, classe, nivel } = req.body;
  try {
    const newJogador = await jogadorService.createJogador(nome, classe, nivel);
    res.status(201).json(newJogador);
  } catch (error) {
    res.status(500).json({ message: 'Error creating jogador', error });
  }
};

export const updateJogador = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { nome, classe, nivel } = req.body;
  try {
    const updatedJogador = await jogadorService.updateJogador(Number(id), nome, classe, Number(nivel));
    if (!updatedJogador) {
      return res.status(404).json({ message: 'Jogador not found' });
    }
    res.status(200).json(updatedJogador);
  } catch (error) {
    res.status(500).json({ message: 'Error updating jogador', error });
  }
};

export const deleteJogador = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedJogador = await jogadorService.deleteJogador(Number(id));
    if (!deletedJogador) {
      return res.status(404).json({ message: 'Jogador not found' });
    }
    res.status(200).json({ message: 'Jogador deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting jogador', error });
  }
};

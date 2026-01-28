import { PrismaClient, Progresso, JogadorMissao, Missao } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

export const getAll = async (): Promise<Missao[]> => {
  return await prisma.missao.findMany()
};

export const createMissao = async (titulo: string, descricao: string, recompensa: string): Promise<Missao> => {
  return await prisma.missao.create({
    data: {
      titulo,
      descricao,
      recompensa,
    },
  });
};

export const assignMissao = async (jogadorId: number, missaoId: number): Promise<JogadorMissao> => {
  return await prisma.jogadorMissao.create({
    data: {
      jogadorId,
      missaoId,
    },
  });
};

export const startMissao = async (jogadorId: number, missaoId: number): Promise<JogadorMissao | null> => {
  return await prisma.jogadorMissao.update({
    where: {
      jogadorId_missaoId: {
        jogadorId,
        missaoId,
      },
    },
    data: {
      progresso: Progresso.EM_ANDAMENTO,
    },
  });
};

export const completeMissao = async (jogadorId: number, missaoId: number): Promise<JogadorMissao | null> => {
  return await prisma.jogadorMissao.update({
    where: {
      jogadorId_missaoId: {
        jogadorId,
        missaoId,
      },
    },
    data: {
      progresso: Progresso.CONCLUIDA,
      concluidaEm: new Date(),
    },
  });
};

export const getMissoesByJogadorId = async (jogadorId: number): Promise<JogadorMissao[]> => {
  return await prisma.jogadorMissao.findMany({
    where: { jogadorId },
    include: {
      missao: true,
    },
  });
};

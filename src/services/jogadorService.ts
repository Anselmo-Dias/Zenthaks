import { PrismaClient, Jogador } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

export const getAllJogadores = async (): Promise<Jogador[]> => {
  return await prisma.jogador.findMany();
};

export const getJogadorById = async (id: number): Promise<Jogador | null> => {
  return await prisma.jogador.findUnique({ where: { id } });
};

export const createJogador = async (nome: string, classe: string, nivel: number): Promise<Jogador> => {
  return await prisma.jogador.create({
    data: {
      nome,
      classe,
      nivel: Number(nivel),
    },
  });
};

export const updateJogador = async (id: number, nome: string, classe: string, nivel: number): Promise<Jogador | null> => {
  return await prisma.jogador.update({
    where: { id },
    data: {
      nome,
      classe,
      nivel: Number(nivel),
    },
  });
};

export const deleteJogador = async (id: number): Promise<Jogador | null> => {
  const [_, deletedJogador] = await prisma.$transaction([
    prisma.jogadorMissao.deleteMany({ where: { jogadorId: id } }),
    prisma.jogador.delete({ where: { id } }),
  ]);
  return deletedJogador;
};

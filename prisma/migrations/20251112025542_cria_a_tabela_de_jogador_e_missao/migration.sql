/*
  Warnings:

  - You are about to drop the `jogador` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDENTE', 'ATIVA', 'CONCLUIDA', 'CANCELADA');

-- CreateEnum
CREATE TYPE "Progresso" AS ENUM ('NAO_INICIADA', 'EM_ANDAMENTO', 'CONCLUIDA');

-- DropTable
DROP TABLE "jogador";

-- CreateTable
CREATE TABLE "Jogador" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "classe" TEXT NOT NULL,
    "nivel" INTEGER NOT NULL,

    CONSTRAINT "Jogador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Missao" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "recompensa" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDENTE',

    CONSTRAINT "Missao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JogadorMissao" (
    "id" SERIAL NOT NULL,
    "jogadorId" INTEGER NOT NULL,
    "missaoId" INTEGER NOT NULL,
    "progresso" "Progresso" NOT NULL DEFAULT 'NAO_INICIADA',
    "atribuidaEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "concluidaEm" TIMESTAMP(3),

    CONSTRAINT "JogadorMissao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JogadorMissao_jogadorId_missaoId_key" ON "JogadorMissao"("jogadorId", "missaoId");

-- AddForeignKey
ALTER TABLE "JogadorMissao" ADD CONSTRAINT "JogadorMissao_jogadorId_fkey" FOREIGN KEY ("jogadorId") REFERENCES "Jogador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JogadorMissao" ADD CONSTRAINT "JogadorMissao_missaoId_fkey" FOREIGN KEY ("missaoId") REFERENCES "Missao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

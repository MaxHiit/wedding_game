/*
  Warnings:

  - Added the required column `wrongAnswers` to the `QuizResult` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QuizResult" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "wrongAnswers" INTEGER NOT NULL;

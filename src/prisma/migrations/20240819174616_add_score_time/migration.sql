/*
  Warnings:

  - You are about to drop the column `score` on the `QuizResult` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "QuizResult" DROP COLUMN "score",
ADD COLUMN     "scoreTime" INTEGER NOT NULL DEFAULT 0;

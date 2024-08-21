-- CreateEnum
CREATE TYPE "Status" AS ENUM ('IN_PROGRESS', 'COMPLETE');

-- AlterTable
ALTER TABLE "QuizResult" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'IN_PROGRESS';

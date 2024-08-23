-- DropForeignKey
ALTER TABLE "QuizResult" DROP CONSTRAINT "QuizResult_userId_fkey";

-- AddForeignKey
ALTER TABLE "QuizResult" ADD CONSTRAINT "QuizResult_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

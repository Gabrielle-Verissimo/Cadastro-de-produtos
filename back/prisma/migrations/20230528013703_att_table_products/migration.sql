/*
  Warnings:

  - You are about to drop the `registerProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "registerProduct";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "disponible" BOOLEAN NOT NULL
);

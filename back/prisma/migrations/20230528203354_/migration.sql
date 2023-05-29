/*
  Warnings:

  - You are about to alter the column `value` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "disponible" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Products" ("createdAt", "description", "disponible", "id", "name", "value") SELECT "createdAt", "description", "disponible", "id", "name", "value" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

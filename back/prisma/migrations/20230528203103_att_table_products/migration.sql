-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "disponible" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Products" ("description", "disponible", "id", "name", "value") SELECT "description", "disponible", "id", "name", "value" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

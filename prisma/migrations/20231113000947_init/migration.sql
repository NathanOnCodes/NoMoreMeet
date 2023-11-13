-- CreateTable
CREATE TABLE "Meet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "integrantes" TEXT NOT NULL,
    "valorHora" REAL NOT NULL,
    "custo" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Meet_nome_key" ON "Meet"("nome");

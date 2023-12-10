import { PrismaClient } from "@prisma/client";
import { seedBoards, seedCards, seedLists, seedUser } from "./seed.data";

const prisma = new PrismaClient();

async function main() {
  // 1. Delete all data
  await prisma.card.deleteMany();
  await prisma.list.deleteMany();
  await prisma.board.deleteMany();
  await prisma.user.deleteMany();

  // 2. Seed data
  await prisma.user.create({
    data: seedUser,
  });

  await prisma.board.createMany({
    data: seedBoards,
  });

  await prisma.list.createMany({
    data: seedLists,
  });

  await prisma.card.createMany({
    data: seedCards,
  });
}

main()
  .then(async () => {
    console.log("Seeding complete...");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

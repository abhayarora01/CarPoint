const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function main() {
  const users = await db.user.findMany({
    select: { id: true, email: true, role: true, clerkUserId: true },
  });
  console.log("All users:", JSON.stringify(users, null, 2));
}

main().catch(console.error).finally(() => db.$disconnect());

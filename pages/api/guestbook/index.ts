import { prisma } from "../../../prisma/client";

export default async function handler(req, res) {
  const data = await prisma.guestBook.findMany({
    take: 100,
  });
  res.json(data);
}

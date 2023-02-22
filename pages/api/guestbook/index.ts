import { prisma } from "../../../prisma/client";

export default async function handler(req:any, res:any) {
  const data = await prisma.guestBook.findMany({
    take: 100,
  });
  res.json(data);
}

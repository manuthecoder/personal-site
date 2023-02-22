import { prisma } from "../../../prisma/client";

export default async function handler(req: any, res: any) {
  const { email } = JSON.parse(req.body);
  const data = await prisma.guestBook.findUnique({
    where: { email },
  });
  res.json(data);
}

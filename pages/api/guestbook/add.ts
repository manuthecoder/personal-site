import { prisma } from "../../../prisma/client";
import { getServerSession } from "next-auth/next";
import authOptions from "../auth/[...nextauth]";

export default async function handler(req: any, res: any) {
  const session = await getServerSession(req, res, authOptions);
  if (!session || !session.user) {
    res.json({ error: "Please sign in" });
    return;
  }

  const { name, email, image } = JSON.parse(req.body || {});
  if (!name || !email || req.method !== "POST") {
    res.json({ error: "Must specify name and email, GET not allowed!" });
    return;
  }

  const data = await prisma.guestBook.upsert({
    where: { email },
    update: { name, email, image },
    create: { name, email, image },
  });

  res.json({ success: true });
}

import { prisma } from "../../../prisma/client";

export default async function handler(req: any, res: any) {
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
  console.log(data);

  res.json({ success: true });
}

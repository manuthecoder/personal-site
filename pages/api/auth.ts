import prisma from "../../prisma/client";

export default async function handler(req, res) {
  const { code } = req.query;

  /* Fetch user information */
  const data = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    code,
  }).then((r) => r.text());

  console.log(data);

  res.json({ code });
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const api = "https://api.github.com/users/FeBotero/repos";

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

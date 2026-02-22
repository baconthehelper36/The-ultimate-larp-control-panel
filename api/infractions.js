let logs = [];

export default async function handler(req, res) {
  // ===== POST = Discord sends infraction =====
  if (req.method === "POST") {
    const body = req.body;

    logs.unshift({
      content: body.content || "New infraction logged",
      time: new Date().toLocaleString()
    });

    // keep only last 50 logs
    logs = logs.slice(0, 50);

    return res.status(200).json({ ok: true });
  }

  // ===== GET = Website fetches logs =====
  if (req.method === "GET") {
    return res.status(200).json(logs);
  }

  res.status(405).end();
}

export default async function handler(req, res) {
  global.infractions = global.infractions || [];

  if (req.method === "POST") {
    const body = req.body;

    global.infractions.unshift({
      message: body.message || "No message",
      timestamp: new Date().toISOString()
    });

    global.infractions = global.infractions.slice(0, 50);

    return res.status(200).json({ success: true });
  }

  if (req.method === "GET") {
    return res.status(200).json(global.infractions);
  }

  res.status(405).end();
}

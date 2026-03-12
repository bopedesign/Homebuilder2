import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { Resend } from "resend";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/schedule", async (req, res) => {
    try {
      const { firstName, lastName, email, phone, community, timeframe, notes } = req.body;

      if (!process.env.RESEND_API_KEY) {
        return res.status(500).json({ error: "RESEND_API_KEY is not configured." });
      }

      const resend = new Resend(process.env.RESEND_API_KEY);

      const { data, error } = await resend.emails.send({
        from: "Oak & Iron Homes <onboarding@resend.dev>",
        to: email, // Sending to the user who filled the form
        subject: "Your Tour Request at Oak & Iron Homes",
        html: `
          <h2>Thank you for your interest, ${firstName}!</h2>
          <p>We have received your request to schedule a tour.</p>
          <h3>Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${firstName} ${lastName}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Community of Interest:</strong> ${community}</li>
            <li><strong>Preferred Timeframe:</strong> ${timeframe}</li>
            <li><strong>Notes:</strong> ${notes || "None"}</li>
          </ul>
          <p>One of our community specialists will be in touch shortly to confirm your appointment.</p>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(400).json({ error: error.message });
      }

      res.status(200).json({ success: true, data });
    } catch (err: any) {
      console.error("Server error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

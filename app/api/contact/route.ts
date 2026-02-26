import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const company = String(body?.company ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL || "linliang1960@gmail.com";
    const from = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;

    if (!from || !pass) {
      return new Response(
        JSON.stringify({ ok: false, error: "Email not configured" }),
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: from,
        pass: pass,
      },
    });

    await transporter.sendMail({
      from: `"Jinma Website" <${from}>`,
      to: to,
      replyTo: email,
      subject: `New Inquiry — ${name}`,
      text: `
New Website Inquiry

Name: ${name}
Email: ${email}
Company: ${company}

Message:
${message}

Time: ${new Date().toLocaleString()}
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ ok: false, error: error.message }),
      { status: 500 }
    );
  }
}
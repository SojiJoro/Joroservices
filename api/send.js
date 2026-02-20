import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, business, email, phone, message, projectType, hearAbout, details } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    await resend.emails.send({
      from: 'Joro Services Website <onboarding@resend.dev>',
      to: ['info@joroservices.org'],
      replyTo: email,
      subject: `New Enquiry from ${name} — ${projectType || 'General'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Project Type:</strong> ${projectType || 'N/A'}</p>
        <p><strong>Heard About Us:</strong> ${hearAbout || 'N/A'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        ${details ? `<p><strong>Project Details:</strong></p><p>${details}</p>` : ''}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send email.' });
  }
}

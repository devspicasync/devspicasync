import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'devspicasync@gmail.com', // Replace with your actual Google Workspace email
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO,
      subject: `New message from ${email}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}


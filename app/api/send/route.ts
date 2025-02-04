// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   try {
//     const { name, email, message } = await request.json();

//     const data = await resend.emails.send({
//       from: "Contact Form <onboarding@resend.dev>",
//       to: process.env.EMAIL_TO as string,
//       subject: `New Contact Form Submission from ${name}`,
//       reply_to: email,
//       text: `
// Name: ${name}
// Email: ${email}
// Message: ${message}
//       `,
//     });

//     return NextResponse.json({ success: true, data });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }

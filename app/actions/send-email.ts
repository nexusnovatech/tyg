"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const message = formData.get("message") as string
  const subject = (formData.get("subject") as string) || "Ny henvendelse fra kontaktformular"

  if (!name || !email || !message) {
    return {
      success: false,
      error: "Navn, email og besked er påkrævet",
    }
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Tryghedspersonale Website <no-reply@tryghedspersonale.dk>",
      to: "anmo@blavora.dk",
      subject: subject,
      reply_to: email,
      text: `
Ny henvendelse fra kontaktformular

Navn: ${name}
Email: ${email}
Telefon: ${phone || "Ikke angivet"}

Besked:
${message}
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return {
        success: false,
        error: "Der opstod en fejl ved afsendelse af email",
      }
    }

    return {
      success: true,
      data,
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      error: "Der opstod en fejl ved afsendelse af email",
    }
  }
}

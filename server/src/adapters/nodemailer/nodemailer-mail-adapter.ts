import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from '../mail-adapter'
import { createReadStream } from 'fs'

const transport = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'fragosooliveira773@gmail.com',
    pass: 'jcni tiex qwmj omxd',
  },
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <fragosooliveira773@gmail.com>',
      to: 'Gabriel Fragoso <gfragoso233@gmail.com>',
      subject,
      html: body,
    })
  }
}

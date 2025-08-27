import nodemailer from 'nodemailer'
import { EMAILPASSWORD } from './env.js'
export const accountEmail = 'mrranger970@gmail.com'
export const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: accountEmail,
        pass: EMAILPASSWORD
    }
})
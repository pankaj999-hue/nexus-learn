import nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.NODEMAILER_USER_GMAIL_ID,
        pass: process.env.NODEMAILER_USER_GMAIL_PASS,
    },
});

async function main() {
    console.log("Attempting to send an email as:", process.env.NODEMAILER_USER_GMAIL_ID);

    try {
        const info = await transporter.sendMail({
            from: process.env.NODEMAILER_USER_GMAIL_ID,
            to: process.env.NODEMAILER_USER_GMAIL_ID,
            subject: "Test Email Auth",
            text: "This is a test of the Nodemailer configuration."
        });
        console.log("✅ Success! Email sent:", info.response);
    } catch (error) {
        console.error("❌ Error sending email!");
        console.error(error);
    }
}

main();

# 📬 Live Email Backend Setup Guide (Formspree & EmailJS)

Target Email: `mayankshrivastava85994@gmail.com`

---

## ⚡ Option 1: Formspree (Recommended — 2-Minute Setup)

1. Go to [https://formspree.io](https://formspree.io) and create a free account.
2. Click **"+ New Form"** → Name it `Portfolio Contact`.
3. Set Target Email to `mayankshrivastava85994@gmail.com`.
4. Copy your **8-character Form ID** (e.g. `xpwzkqab`).
5. Open [`src/config/site.ts`](./src/config/site.ts) and set:
   ```ts
   export const siteConfig = {
     formspreeId: "xpwzkqab", // ← Paste your Formspree ID here
     // ...
   };
   ```
   *Or set in your `.env.local` or Vercel Environment Variables:*
   ```bash
   NEXT_PUBLIC_FORMSPREE_ID=xpwzkqab
   ```

---

## ⚡ Option 2: Full-Stack Next.js API (`/api/contact`)

When deployed on **Vercel** or any Node.js host, the contact form automatically sends through the backend API route `POST /api/contact`, performing:
- Input validation (Name, Email, Subject, Message)
- Message storage in MongoDB (when `MONGODB_URI` is provided)
- Email forwarding to Formspree

---

## ⚡ Option 3: EmailJS Integration

If you prefer EmailJS:
1. Go to [https://www.emailjs.com](https://www.emailjs.com) → Sign up free.
2. Add Email Service (connect Gmail: `mayankshrivastava85994@gmail.com`).
3. Create an Email Template with variables:
   - `{{name}}`
   - `{{email}}`
   - `{{subject}}`
   - `{{message}}`
4. Copy your **Service ID**, **Template ID**, and **Public Key**.

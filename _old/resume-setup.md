# ⚙️ Resume & Contact Form Setup Guide

Two things to configure, both in **one place**: the `CONFIG` block at the very top of [`script.js`](./script.js).

---

## 1. 📄 Google Drive Resume Link

### Step-by-step

1. Go to [drive.google.com](https://drive.google.com) and upload your latest `Mayank_Resume.pdf`.
2. Right-click the uploaded file → **"Share"** → **"Get link"**.
3. Under **"General access"**, change it from *Restricted* → **"Anyone with the link"**, role = **Viewer**.
4. Click **"Copy link"**. The link looks like:
   ```
   https://drive.google.com/file/d/1aBcDeFgHiJkLmNoPqRsTuVwXyZ/view?usp=sharing
   ```
5. Open `script.js` and paste the URL as the value of `RESUME_LINK`:
   ```js
   const CONFIG = {
       RESUME_LINK: "https://drive.google.com/file/d/YOUR_ACTUAL_FILE_ID/view?usp=sharing",
       ...
   };
   ```

### How to update resume in the future
- Just **replace the PDF** in Google Drive (same file, same link).
- If you upload a new file, get the new link and update `RESUME_LINK` in `script.js`.

---

## 2. 📬 Formspree Contact Form

### Step-by-step

1. Go to [formspree.io](https://formspree.io) → **Sign up** (free, no credit card).
2. Click **"+ New Form"** → name it `Portfolio Contact` → click **Create Form**.
3. Under **Form Settings**, set **"Email"** to `mayankshrivastava85994@gmail.com`.
4. Copy the **Form ID** shown on the form page — it looks like:
   ```
   xpwzkqab
   ```
   (NOT the full URL — just the 8-character ID)
5. Open `script.js` and paste ONLY the Form ID:
   ```js
   const CONFIG = {
       RESUME_LINK: "...",
       FORMSPREE_ID: "xpwzkqab",   // ← paste your ID here
   };
   ```

### Testing the form
- Open your local site at `http://localhost:5500`
- Fill out the contact form and submit
- Check `mayankshrivastava85994@gmail.com` — you should receive the email within seconds
- Formspree also shows submissions in their dashboard

### Free tier limits
Formspree free plan: **50 submissions/month**. More than enough for a portfolio.
If you exceed it, upgrade to a paid plan or switch to EmailJS.

---

## 3. 🚀 Deploying to GitHub Pages

After making your changes:

```powershell
cd d:\Portfolio\Mayank_Portfolio
git add .
git commit -m "feat: redesign + Formspree + Drive resume"
git push origin main
```

GitHub Pages will auto-deploy within ~60 seconds.
Your live site: https://mayank-shrivastava-2004.github.io/Mayank_Portfolio/

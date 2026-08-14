"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { siteConfig } from "@/config/site";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setLoading(true);
    setStatus(null);

    const formData = new FormData(form);
    const payload = {
      name: ((formData.get("name") as string) || "").trim(),
      email: ((formData.get("email") as string) || "").trim(),
      subject: ((formData.get("subject") as string) || "").trim(),
      message: ((formData.get("message") as string) || "").trim(),
    };

    // Client-side quick validation
    if (!payload.name || payload.name.length < 2) {
      setStatus({
        type: "error",
        text: "Please provide your name (at least 2 characters).",
      });
      setLoading(false);
      return;
    }

    if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setStatus({
        type: "error",
        text: "Please provide a valid email address.",
      });
      setLoading(false);
      return;
    }

    if (!payload.message || payload.message.length < 10) {
      setStatus({
        type: "error",
        text: "Message must be at least 10 characters long.",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setStatus({
        type: "success",
        text: data.message || "Thank you! Your message has been sent successfully. I will get back to you shortly.",
      });
      form.reset();
    } catch (err: any) {
      setStatus({
        type: "error",
        text: err.message || "An unexpected error occurred. Please email directly at mayankshrivastava85994@gmail.com",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-bg-alt relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
          {/* Left Column: Direct Channels */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <span className="section-label">Let&apos;s Collaborate</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-text leading-tight mb-6">
              Let&apos;s build<br />
              the <em className="italic bg-grad-text bg-clip-text text-transparent">Future.</em>
            </h2>
            <p className="text-text-muted text-[1.03rem] leading-relaxed mb-10 max-w-md">
              I&apos;m currently open to full-time software engineering roles, freelance projects, and research collaborations. Send a message or connect directly through any platform below.
            </p>

            <div className="space-y-5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 group text-text-muted hover:text-text transition-colors"
              >
                <div className="w-11 h-11 rounded-xl border border-border flex items-center justify-center text-primary text-base group-hover:border-primary group-hover:bg-primary/10 transition-all">
                  <i className="fas fa-envelope" />
                </div>
                <div>
                  <div className="text-[0.65rem] font-bold uppercase tracking-wider text-text-dim">Email</div>
                  <div className="text-sm font-semibold text-text">{siteConfig.email}</div>
                </div>
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group text-text-muted hover:text-text transition-colors"
              >
                <div className="w-11 h-11 rounded-xl border border-border flex items-center justify-center text-primary text-base group-hover:border-primary group-hover:bg-primary/10 transition-all">
                  <i className="fab fa-linkedin-in" />
                </div>
                <div>
                  <div className="text-[0.65rem] font-bold uppercase tracking-wider text-text-dim">LinkedIn</div>
                  <div className="text-sm font-semibold text-text">mayankshrivastava-dev</div>
                </div>
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group text-text-muted hover:text-text transition-colors"
              >
                <div className="w-11 h-11 rounded-xl border border-border flex items-center justify-center text-primary text-base group-hover:border-primary group-hover:bg-primary/10 transition-all">
                  <i className="fab fa-github" />
                </div>
                <div>
                  <div className="text-[0.65rem] font-bold uppercase tracking-wider text-text-dim">GitHub</div>
                  <div className="text-sm font-semibold text-text">Mayank-Shrivastava-2004</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[0.68rem] font-bold uppercase tracking-wider text-text-dim">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Mayank Shrivastava"
                    required
                    className="w-full bg-bg-card border border-border rounded-xl px-4 py-3.5 text-sm text-text placeholder:text-text-dim/60 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[0.68rem] font-bold uppercase tracking-wider text-text-dim">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="w-full bg-bg-card border border-border rounded-xl px-4 py-3.5 text-sm text-text placeholder:text-text-dim/60 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-[0.68rem] font-bold uppercase tracking-wider text-text-dim">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Software Engineering Opportunity / Project Inquiry"
                  className="w-full bg-bg-card border border-border rounded-xl px-4 py-3.5 text-sm text-text placeholder:text-text-dim/60 focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[0.68rem] font-bold uppercase tracking-wider text-text-dim">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project, team, or opportunity..."
                  required
                  className="w-full bg-bg-card border border-border rounded-xl px-4 py-3.5 text-sm text-text placeholder:text-text-dim/60 focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Status Alert Notification */}
              {status && (
                <div
                  className={`flex items-start gap-3 p-4 rounded-xl text-xs font-semibold leading-relaxed border transition-all ${
                    status.type === "success"
                      ? "text-emerald-300 bg-emerald-950/40 border-emerald-800/60"
                      : "text-rose-300 bg-rose-950/40 border-rose-800/60"
                  }`}
                >
                  <i
                    className={`mt-0.5 text-sm flex-shrink-0 ${
                      status.type === "success"
                        ? "fas fa-circle-check text-emerald-400"
                        : "fas fa-circle-exclamation text-rose-400"
                    }`}
                  />
                  <div className="flex-1">{status.text}</div>
                </div>
              )}

              {/* Submit Button with Loading State */}
              <button
                type="submit"
                disabled={loading}
                className="w-full btn btn-primary justify-center py-4 rounded-xl text-xs uppercase tracking-widest font-bold disabled:opacity-60 transition-all shadow-md hover:shadow-primary/20"
              >
                {loading ? (
                  <div className="flex items-center gap-2.5">
                    <i className="fas fa-circle-notch fa-spin text-sm" />
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2.5">
                    <i className="fas fa-paper-plane text-xs" />
                    <span>Send Message</span>
                  </div>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

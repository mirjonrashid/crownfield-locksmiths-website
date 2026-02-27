"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { companyInfo } from "@/data/company";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    postcode: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Enquiry from ${formData.name} — ${formData.service}`,
          name: formData.name,
          phone: formData.phone,
          postcode: formData.postcode,
          service: formData.service,
          message: formData.message,
          to_email: companyInfo.email,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setTimeout(() => {
          setFormData({
            name: "",
            phone: "",
            postcode: "",
            service: "",
            message: "",
          });
          setSubmitStatus("idle");
        }, 3000);
      } else {
        throw new Error("Failed");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      href: `tel:${companyInfo.phone}`,
      icon: Phone,
      label: "Emergency Line",
      value: companyInfo.phoneDisplay ?? companyInfo.phone,
      sub: "Available 24/7",
      dark: true,
    },
    {
      href: `mailto:${companyInfo.email}`,
      icon: Mail,
      label: "Email",
      value: companyInfo.email,
      sub: null,
      dark: false,
    },
    {
      href: null,
      icon: MapPin,
      label: "Service Area",
      value: companyInfo.address,
      sub: null,
      dark: false,
    },
    {
      href: null,
      icon: Clock,
      label: "Opening Hours",
      value: companyInfo.hours,
      sub: "Every day of the year",
      dark: false,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(212,175,55,0.05),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(0,59,122,0.04),transparent_40%)]" />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 md:mb-16"
        >
          <p className="text-gold font-bold text-sm uppercase tracking-[0.2em] mb-3">
            Get In Touch
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="heading text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              Let&apos;s Sort
              <br />
              <span className="text-gradient-gold">Your Lock.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-sm md:text-right">
              Emergency? Call now. For quotes, use the form below.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-3"
          >
            {contactCards.map((card, i) => {
              const Icon = card.icon;

              const Inner = (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-4 p-5 rounded-2xl border transition-all ${
                    card.dark
                      ? "bg-gradient-to-br from-primary to-primary-dark text-white border-transparent shadow-lg"
                      : "bg-[#F8F7F4] border-gray-100 hover:border-gold/30 hover:bg-white"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      card.dark ? "bg-white/15" : "bg-primary/8"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        card.dark ? "text-white" : "text-primary"
                      }`}
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className={`text-xs font-semibold mb-0.5 ${
                        card.dark ? "text-white/60" : "text-gray-400"
                      }`}
                    >
                      {card.label}
                    </p>

                    <p
                      className={`font-bold text-sm truncate ${
                        card.dark ? "text-white" : "text-primary"
                      }`}
                    >
                      {card.value}
                    </p>

                    {card.sub && (
                      <p
                        className={`text-xs mt-0.5 ${
                          card.dark ? "text-white/50" : "text-gray-400"
                        }`}
                      >
                        {card.sub}
                      </p>
                    )}
                  </div>
                </motion.div>
              );

              return card.href ? (
                <a key={card.label} href={card.href}>
                  {Inner}
                </a>
              ) : (
                <div key={card.label}>{Inner}</div>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#F8F7F4] rounded-3xl p-6 md:p-10 border border-gray-100"
            >
              <h3 className="heading text-2xl text-primary mb-7">
                Send a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none transition-all text-sm"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none transition-all text-sm"
                    placeholder="07123 456789"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Postcode
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none transition-all text-sm"
                    placeholder="SW1A 1AA"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none transition-all text-sm"
                  >
                    <option value="">Select service</option>
                    <option value="Emergency Lockout">Emergency Lockout</option>
                    <option value="Lock Replacement">Lock Replacement</option>
                    <option value="Lock Repair">Lock Repair</option>
                    <option value="UPVC Issues">UPVC Issues</option>
                    <option value="Security Upgrade">Security Upgrade</option>
                    <option value="Key Cutting">Key Cutting</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-gold/40 focus:border-gold outline-none transition-all resize-none text-sm"
                  placeholder="Describe your issue and when you need help…"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 px-6 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all ${
                  isSubmitting
                    ? "bg-gray-200 cursor-not-allowed text-gray-400"
                    : submitStatus === "success"
                      ? "bg-emerald-500 text-white"
                      : submitStatus === "error"
                        ? "bg-red-500 text-white"
                        : "bg-gradient-to-r from-gold to-gold-light text-primary shadow-lg hover:shadow-gold"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full"
                    />
                    Sending…
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" /> Message Sent!
                  </>
                ) : submitStatus === "error" ? (
                  <>
                    <AlertCircle className="w-5 h-5" /> Failed — Please Call
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send Message
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center text-emerald-800 font-medium text-sm"
                  >
                    ✓ We&apos;ll be in touch shortly.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 text-center text-red-800 font-medium text-sm"
                  >
                    Please call{" "}
                    <a
                      className="font-bold underline"
                      href={`tel:${companyInfo.phone}`}
                    >
                      {companyInfo.phoneDisplay ?? companyInfo.phone}
                    </a>{" "}
                    directly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

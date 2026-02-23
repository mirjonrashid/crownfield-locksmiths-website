"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { companyInfo } from "@/data/content";

type TrackParams = Record<string, string | number | boolean>;

function trackEvent(name: string, params?: TrackParams) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}

interface ContactCard {
  href: string | null;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  sub: string | null;
  dark: boolean;
  onClick?: () => void;
}

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
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    trackEvent("contact_form_attempt", {
      service: formData.service || "unknown",
    });

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
          ...formData,
          to_email: "info@crownfieldlocksmiths.co.uk",
        }),
      });

      const result: { success: boolean } = await response.json();

      if (!result.success) throw new Error("Submission failed");

      setSubmitStatus("success");

      // ✅ PRIMARY CONVERSION EVENT
      trackEvent("generate_lead", {
        service: formData.service || "unknown",
        postcode: formData.postcode || "unknown",
      });

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
    } catch {
      setSubmitStatus("error");

      trackEvent("contact_form_error", {
        service: formData.service || "unknown",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards: ContactCard[] = [
    {
      href: `tel:${companyInfo.phone}`,
      icon: Phone,
      label: "Emergency Line",
      value: companyInfo.phone,
      sub: "Available 24/7",
      dark: true,
      onClick: () =>
        trackEvent("phone_click", {
          location: "contact_card",
          label: "Emergency Line",
        }),
    },
    {
      href: `mailto:${companyInfo.email}`,
      icon: Mail,
      label: "Email",
      value: companyInfo.email,
      sub: null,
      dark: false,
      onClick: () =>
        trackEvent("email_click", {
          location: "contact_card",
          label: "Email",
        }),
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
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-2 space-y-3">
            {contactCards.map((card) => {
              const Icon = card.icon;

              const content = (
                <div
                  className={`flex items-center gap-4 p-5 rounded-2xl border transition-all ${
                    card.dark
                      ? "bg-gradient-to-br from-primary to-primary-dark text-white border-transparent shadow-lg"
                      : "bg-[#F8F7F4] border-gray-100 hover:border-gold/30 hover:bg-white"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      card.dark ? "bg-white/15" : "bg-primary/8"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        card.dark ? "text-white" : "text-primary"
                      }`}
                    />
                  </div>

                  <div>
                    <p
                      className={`text-xs font-semibold ${
                        card.dark ? "text-white/60" : "text-gray-400"
                      }`}
                    >
                      {card.label}
                    </p>
                    <p
                      className={`font-bold text-sm ${
                        card.dark ? "text-white" : "text-primary"
                      }`}
                    >
                      {card.value}
                    </p>
                    {card.sub && (
                      <p
                        className={`text-xs ${
                          card.dark ? "text-white/50" : "text-gray-400"
                        }`}
                      >
                        {card.sub}
                      </p>
                    )}
                  </div>
                </div>
              );

              return card.href ? (
                <a key={card.label} href={card.href} onClick={card.onClick}>
                  {content}
                </a>
              ) : (
                <div key={card.label}>{content}</div>
              );
            })}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-[#F8F7F4] rounded-3xl p-6 md:p-10 border border-gray-100"
            >
              <h3 className="heading text-2xl text-primary mb-7">
                Send a Message
              </h3>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name"
                className="w-full mb-4 p-3 rounded-xl border border-gray-200"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone"
                className="w-full mb-4 p-3 rounded-xl border border-gray-200"
              />

              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                required
                placeholder="Postcode"
                className="w-full mb-4 p-3 rounded-xl border border-gray-200"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Describe your issue..."
                className="w-full mb-4 p-3 rounded-xl border border-gray-200"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl font-bold bg-gradient-to-r from-gold to-gold-light text-primary"
              >
                {isSubmitting ? "Sending…" : "Send Message"}
              </button>

              <AnimatePresence>
                {submitStatus === "success" && (
                  <div className="mt-4 text-emerald-600 text-sm text-center">
                    ✓ We’ll be in touch shortly.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="mt-4 text-red-600 text-sm text-center">
                    Please call {companyInfo.phone} directly.
                  </div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { companyInfo, services } from "@/data/content";
import MotionSection from "@/components/MotionSection";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#areas", label: "Service Areas" },
    { href: "/#testimonials", label: "Reviews" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#contact", label: "Contact" },
  ];

  const social = [
    { Icon: Facebook, href: companyInfo.social.facebook, label: "Facebook" },
    { Icon: Instagram, href: companyInfo.social.instagram, label: "Instagram" },
    { Icon: Twitter, href: companyInfo.social.twitter, label: "Twitter" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white">
      <div className="container-max py-16">
        <MotionSection className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Image
              src="/images/logo_light.png"
              alt="Crownfield Locksmiths"
              width={180}
              height={50}
              className="h-10 w-auto mb-6"
            />
            <p className="text-white/80 mb-6 leading-relaxed">
              Professional locksmith services across London — 24/7 emergency
              response, clean workmanship, upfront quotes.
            </p>
            <div className="flex gap-3">
              {social.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/15 transition"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/80 hover:text-gold transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <Link
                    href="/#services"
                    className="text-white/80 hover:text-gold transition"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gold mb-6">Contact</h3>
            <div className="space-y-4">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-start gap-3 text-white/80 hover:text-gold transition"
              >
                <Phone className="w-5 h-5 mt-1" />
                <div>
                  <div className="text-sm text-white/60">Phone</div>
                  <div className="font-semibold">{companyInfo.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-start gap-3 text-white/80 hover:text-gold transition"
              >
                <Mail className="w-5 h-5 mt-1" />
                <div>
                  <div className="text-sm text-white/60">Email</div>
                  <div className="font-semibold break-all">
                    {companyInfo.email}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 mt-1" />
                <div>
                  <div className="text-sm text-white/60">Service Area</div>
                  <div className="font-semibold">{companyInfo.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-white/80">
                <Clock className="w-5 h-5 mt-1" />
                <div>
                  <div className="text-sm text-white/60">Hours</div>
                  <div className="font-semibold">{companyInfo.hours}</div>
                </div>
              </div>
            </div>
          </div>
        </MotionSection>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {year} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-white/60 hover:text-gold transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-white/60 hover:text-gold transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

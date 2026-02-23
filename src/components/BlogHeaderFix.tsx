"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BlogHeaderFix() {
  const pathname = usePathname();

  useEffect(() => {
    const isBlogPage = pathname?.startsWith("/blog");

    if (isBlogPage) {
      // Add class to body
      document.body.classList.add("blog-page");

      // Force header to show as scrolled (dark logo + white background)
      const header = document.querySelector("header");
      if (header) {
        header.style.backgroundColor = "rgba(255,255,255,0.98)";
        header.style.boxShadow = "0px 4px 24px rgba(0,59,122,0.1)";
      }
    }

    return () => {
      document.body.classList.remove("blog-page");
    };
  }, [pathname]);

  return null;
}

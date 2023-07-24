"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect } from "react";

export default function ThankYou() {
  const linkParams = useSearchParams()

  const link = linkParams.get('link')

  // redirect when component is mounted
  useEffect(() => {
    window.fbq('track', 'Thank You Page Loaded');
    console.log("🚀 ~ file: whatsapp.tsx:12 ~ link:", link)
    if (typeof window !== 'undefined' && link) {
      window.location.href = link
    }
  }, [link]);
  return (
    <div className="w-full grid place-items-center">
      Redirecting...
    </div>

  );
}
"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect } from "react";

export default function ThankYou() {
  const linkParams = useSearchParams()

  const link = linkParams.get('link')

  // redirect when component is mounted
  useEffect(() => {
    gtag('event', 'conversion', { 'send_to': 'AW-10932735020/URmnCL3AlZ0ZEKyYkd0o' })
    window.fbq('track', 'Thank You Page Loaded');
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
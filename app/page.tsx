"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 2200);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="splash-screen">
      <div className="splash-content">

        <div className="splash-logo">
          🛍️
        </div>

        <h1>MarketPlate</h1>

        <p>
          College Marketplace
        </p>

        <div className="splash-loading">
          <span></span>
        </div>

      </div>
    </main>
  );
}
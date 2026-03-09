"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SimulatorPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/money-vs-goods");
  }, [router]);

  return (
    <div className="py-20 text-center text-stone-500">
      Redirecting to Money vs Goods...
    </div>
  );
}

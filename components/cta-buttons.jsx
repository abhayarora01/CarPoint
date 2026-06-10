"use client";

import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CtaButtons() {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Button size="lg" variant="secondary" asChild>
        <Link href="/cars">View All Cars</Link>
      </Button>
      <SignedOut>
        <Button size="lg" asChild>
          <Link href="/sign-up">Sign Up Now</Link>
        </Button>
      </SignedOut>
    </div>
  );
}

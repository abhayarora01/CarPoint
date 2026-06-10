"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

export function UserButtonClient({ isAdminPage }) {
  return (
    <>
      <SignedOut>
        {!isAdminPage && (
          <SignInButton forceRedirectUrl="/">
            <Button variant="outline">Login</Button>
          </SignInButton>
        )}
      </SignedOut>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-10 h-10",
            },
          }}
        />
      </SignedIn>
    </>
  );
}

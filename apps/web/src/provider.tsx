// apps/web/providers.tsx
import { AuthUIProvider } from "@daveyplate/better-auth-ui";
import { authClient } from "./lib/auth-client";
import React from "react";

export function Provider({ children }: { children: React.ReactNode }) {

  return (
    <AuthUIProvider
      authClient={authClient}
      onSessionChange={() => window.location.reload()}
      social={{ providers: ["github", "google", "apple"] }}
      magicLink
      passkey
      multiSession
    >
      {children}
    </AuthUIProvider>
  );
}
"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";

const Logout = () => {
  const handleLogout = async () => {
    await authClient.signOut();
  };
  return (
    <Button onClick={handleLogout} variant="destructive">
      Logout <LogOutIcon className="size-4" />
    </Button>
  );
};
export default Logout;

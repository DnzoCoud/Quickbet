import { Header } from "@/Components";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex" style={{ flexDirection: "column" }}>
        {children}
      </div>
    </>
  );
}

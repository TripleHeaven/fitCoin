import React from "react";
import { Sidebar } from "Sidebar";
import { Footer } from "./Footer";

export const Wrapper: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => (
  <div
    className="w-screen h-screen flex flex-col overflow-scroll"
    style={{
      backgroundColor: "#F7F8F9",
    }}
  >
    <div className="pb-[64px]">
      <Sidebar />
      {children}
    </div>

    <Footer />
  </div>
);

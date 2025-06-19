import React from "react";
import Footer from "./_layouts/Footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <main>{children}</main>
      <Footer />
    </div>
  );
}

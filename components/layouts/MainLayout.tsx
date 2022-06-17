import React, { ReactNode } from "react";
import Topbar from "../Topbar";
import { Iconbar } from "../Iconbar";
import Footer from "../Footer";

export default function MainLayout({ children }: any) {
  return (
    <div className="main-layout">
      <Topbar />
      <Iconbar />
      {children}
      <Footer />
    </div>
  );
}

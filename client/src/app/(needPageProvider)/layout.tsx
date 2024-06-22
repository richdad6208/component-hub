import React from "react";
import PageProvider from "../components/provider/PageProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageProvider>{children}</PageProvider>;
}

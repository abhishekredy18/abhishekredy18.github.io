import type { Metadata } from "next";
import { RedirectStub } from "@/components/redirect-stub";

export const metadata: Metadata = {
  title: "CMS & Chatbot for TaxBandits and Tax990",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function Page() {
  return <RedirectStub to="/projects/tax-cms" label="the TaxBandits/Tax990 CMS case study" />;
}

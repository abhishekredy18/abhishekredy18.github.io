import type { Metadata } from "next";
import { RedirectStub } from "@/components/redirect-stub";

export const metadata: Metadata = {
  title: "Call Analytics Platform",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function Page() {
  return <RedirectStub to="/projects/call-analytics" label="the Call Analytics Platform case study" />;
}

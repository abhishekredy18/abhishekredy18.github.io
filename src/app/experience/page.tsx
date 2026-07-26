import type { Metadata } from "next";
import { RedirectStub } from "@/components/redirect-stub";

export const metadata: Metadata = {
  title: "Experience",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function Page() {
  return <RedirectStub to="/#experience" label="the Experience section" />;
}

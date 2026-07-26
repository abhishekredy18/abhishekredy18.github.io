import type { Metadata } from "next";
import { RedirectStub } from "@/components/redirect-stub";

export const metadata: Metadata = {
  title: "About",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function Page() {
  return <RedirectStub to="/#about" label="the About section" />;
}

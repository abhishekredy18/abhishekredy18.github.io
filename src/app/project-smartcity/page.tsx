import type { Metadata } from "next";
import { RedirectStub } from "@/components/redirect-stub";

export const metadata: Metadata = {
  title: "Smart City Anomaly Detection",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function Page() {
  return <RedirectStub to="/projects/smartcity-anomaly" label="the smart city anomaly detection case study" />;
}

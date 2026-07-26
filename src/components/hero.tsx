import Image from "next/image";
import { FileDown, Mail } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/data/site";

export function Hero() {
  return (
    <div className="flex flex-col gap-6 pt-12 sm:flex-row sm:items-center sm:gap-8 lg:pt-16">
      <Image
        src="/images/dp-hero.jpg"
        alt="Portrait of Abhishek Reddy Malreddy"
        width={480}
        height={480}
        priority
        className="size-24 rounded-full object-cover sm:size-28"
      />
      <div className="min-w-0">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {site.jobTitle} · SPAN Enterprises
        </p>
        <h1 className="mt-1.5 text-[28px] font-semibold leading-tight tracking-tight sm:text-[32px]">
          {site.name}
        </h1>
        <p className="mt-3 max-w-xl text-[15.5px] leading-relaxed text-muted">
          {site.headline}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
          <ButtonLink href={site.resume} download>
            <FileDown className="size-4" aria-hidden /> Résumé
          </ButtonLink>
          <ButtonLink href={`mailto:${site.email}`} external variant="secondary">
            <Mail className="size-4" aria-hidden /> Email
          </ButtonLink>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

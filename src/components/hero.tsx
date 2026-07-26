import Image from "next/image";
import { FileDown, Mail } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/data/site";

export function Hero() {
  return (
    <div className="pt-8 lg:pt-10">
      {/* Cover banner: Hamerschlag Hall, Carnegie Mellon University.
          Photo: Wikimedia Commons, CC0 (public domain). */}
      <div className="overflow-hidden rounded-lg border border-line">
        <Image
          src="/images/cmu-banner.jpg"
          alt="Hamerschlag Hall, Carnegie Mellon University"
          width={1536}
          height={384}
          priority
          className="h-auto w-full dark:brightness-90"
        />
      </div>

      <div className="px-1 sm:px-2">
        <Image
          src="/images/dp-hero.jpg"
          alt="Portrait of Abhishek Reddy Malreddy"
          width={480}
          height={480}
          priority
          className="-mt-12 size-24 rounded-full border-4 border-bg object-cover sm:-mt-14 sm:size-28"
        />
        <div className="mt-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            {site.jobTitle} · SPAN Enterprises
          </p>
          <h1 className="mt-1.5 text-[28px] font-semibold leading-tight tracking-tight sm:text-[32px]">
            {site.name}
          </h1>
          <p className="mt-3 max-w-xl text-[15.5px] leading-relaxed text-muted">
            {site.headline}
          </p>
          <p className="mt-2 font-mono text-[12px] text-faint">
            MS in AI Engineering, Carnegie Mellon University
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
    </div>
  );
}

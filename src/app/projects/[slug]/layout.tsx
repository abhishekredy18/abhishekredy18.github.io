import { Footer } from "@/components/footer";
import { TopBar } from "@/components/top-bar";

/**
 * Case-study chrome. Lives at the [slug] level — deliberately — so it does
 * not wrap the /projects redirect stub.
 */
export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar />
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <main className="pt-10">{children}</main>
        <Footer />
      </div>
    </>
  );
}

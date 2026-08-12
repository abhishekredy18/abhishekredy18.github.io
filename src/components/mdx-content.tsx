import { MDXRemote } from "next-mdx-remote/rsc";

function ProseLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const external = props.href?.startsWith("http");
  return (
    <a
      {...props}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    />
  );
}

function Video({ src, label }: { src: string; label: string }) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded border border-line">
      <video
        src={src}
        controls
        preload="metadata"
        className="h-auto w-full"
        aria-label={label}
      />
    </div>
  );
}

const components = {
  a: ProseLink,
  Video,
};

/** Renders a project's MDX body inside the case-study prose theme. */
export function MdxContent({ source }: { source: string }) {
  return (
    <div className="prose-case prose max-w-none prose-headings:scroll-mt-24">
      <MDXRemote source={source} components={components} />
    </div>
  );
}

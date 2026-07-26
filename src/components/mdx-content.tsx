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

const components = {
  a: ProseLink,
};

/** Renders a project's MDX body inside the case-study prose theme. */
export function MdxContent({ source }: { source: string }) {
  return (
    <div className="prose-case prose max-w-none prose-headings:scroll-mt-24">
      <MDXRemote source={source} components={components} />
    </div>
  );
}

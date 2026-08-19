"use client"

import { cn } from "../lib/utils";
// import Logo from "./psyberspace_logo";
import Image from "next/image";

interface FooterLink {
  name: string;
  href: string;
}
interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLinks {
  name: string;
  url: string;
  icon: string;
}

interface FooterBasicProps {
  description?: string;
  socialLinks?: SocialLinks[];
  sections?: FooterSection[];
  copyright?: string;
  legalLinks?: FooterLink[];
  className?: string;
}

interface FooterProps extends FooterBasicProps {
}
type Props = Partial<FooterProps>;

const defaultProps: FooterProps = {
  description: "From developers, for the world.",
  socialLinks: [
    { name: "Twitter", url: "/", icon: "/x-twitter.svg" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/fobia-ai/", icon: "/linkedin.svg" },
    { name: "YouTube", url: "/", icon: "/youtube.svg" },
  ],
  sections: [
    {
      title: "Product",
      links: [
        { name: "Overview", href: "/" },
        { name: "Download", href: "/download" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Community", href: "/community" },
      ],
    },
  ],
  copyright: "© 2024 Shadcnblocks.com. All rights reserved.",
  legalLinks: [
    { name: "Terms and Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

const MAX_SECTIONS = 4;

const Footer = (props: Props) => {
  const { description, sections, copyright, legalLinks, socialLinks, className } = {
    ...defaultProps,
    ...props,
  };

  const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center lg:justify-start">
                  {/* <Logo size={72} iconSize={44} color="var(--foreground)" animate={false} /> */}
              </div>
              <p className="mt-4 text-sm font-medium text-muted-foreground">
                {description}
              </p>
              <div className="container flex flex-row items-center justify-start gap-4 pt-6">
                {socialLinks?.map((link, linkIdx) => (
                  <a
                    key={linkIdx}
                    href={link.url}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Image
                      src={link.icon}
                      alt={link.name}
                      width={24}
                      height={24}
                    />
                  </a>
                ))}
              </div>
            </div>
            {visibleSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 text-sm font-semibold tracking-tight">
                  {section.title}
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {legalLinks?.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };

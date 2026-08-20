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
  socialLinks?: SocialLinks[];
  // Each entry is a column; a column may stack several sections vertically.
  sections?: FooterSection[][];
  copyright?: string;
  legalLinks?: FooterLink[];
  className?: string;
}

interface FooterProps extends FooterBasicProps {
}
type Props = Partial<FooterProps>;

const defaultProps: FooterProps = {
  socialLinks: [
    { name: "Instagram", url: "https://www.instagram.com/", icon: "/instagram.svg" },
    { name: "Facebook", url: "https://www.facebook.com/", icon: "/facebook.svg" },
    { name: "LinkedIn", url: "https://www.linkedin.com/", icon: "/linkedin.svg" },
    { name: "YouTube", url: "https://www.youtube.com/", icon: "/youtube.svg" },
  ],
  sections: [
    [
      {
        title: "Office Timing",
        links: [
          { name: "Monday-Friday 8am-8pm EST", href: "#" },
          { name: "Saturday 10am-5pm EST", href: "#" },
        ],
      },
      {
        title: "Location",
        links: [
          { name: "1751 2nd Avenue #102 New York, NY 10128", href: "#" },
        ],
      },
    ],
    [
      {
        title: "Contact",
        links: [
          { name: "admin@psyberspacetherapy.com", href: "mailto:admin@psyberspacetherapy.com" },
          { name: "347-321-8629", href: "tel:3473218629" },
        ],
      },
    ],
    [
      {
        title: "Links",
        links: [
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: "About Us", href: "/about" },
          { name: "Services", href: "/services" },
          { name: "Pricing", href: "/pricing" },
          { name: "Contact Us", href: "/contact" },
        ],
      },
    ],
  ],
  copyright: "© 2024 Shadcnblocks.com. All rights reserved.",
  legalLinks: [
    { name: "Terms and Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

const MAX_COLUMNS = 4;

const Footer = (props: Props) => {
  const { sections, copyright, legalLinks, socialLinks, className } = {
    ...defaultProps,
    ...props,
  };

  const visibleColumns = (sections ?? []).slice(0, MAX_COLUMNS);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center lg:justify-start">
                <Image
                  src="/psyberspace_logo.png"
                  alt="Psyberspace Center for Psychedelic Therapy"
                  width={160}
                  height={40}
                  className="h-auto w-40"
                />
              </div>
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
            {visibleColumns.map((column, columnIdx) => (
              <div key={columnIdx} className="space-y-8">
                {column.map((section, sectionIdx) => (
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

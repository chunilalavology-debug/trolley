import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/asset";
import { contactInfo, footerLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer id="contact" className="bg-background pb-8 pt-4">
      <div className="section-container">
        <div className="grid gap-10 border-b border-border pb-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <p className="mb-3 text-sm text-muted">Etrolley</p>
            <Image
              src={assetPath("/logo.png")}
              alt="E-Trolley"
              width={120}
              height={50}
              className="h-16 w-auto rounded-xl"
            />
          </div>

          <div>
            <h3 className="mb-4 font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted">
              {footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-teal">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-3 mt-8 font-bold">Social</h3>
            <div className="flex gap-3">
              {footerLinks.social.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-xs text-muted hover:border-teal hover:text-teal"
                  aria-label={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Site Map</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.siteMap.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={
                      "active" in link && link.active
                        ? "font-medium text-teal"
                        : "text-muted hover:text-teal"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Let&apos;s keep in touch</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <span className="text-teal">📞</span>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-teal">
                  {contactInfo.phone}
                </a>
              </li>
              {contactInfo.emails.map((email) => (
                <li key={email} className="flex items-start gap-2">
                  <span className="text-teal">✉</span>
                  <a href={`mailto:${email}`} className="hover:text-teal">
                    {email}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2">
                <span className="text-teal">📍</span>
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <Link
          href="#contact"
          className="btn-teal-lg mt-8 flex w-full justify-center text-center"
        >
          build your store now
        </Link>

        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 E-trolley All Rights Reserved</p>
          <p>
            <Link href="#" className="hover:text-teal">Privacy Policy</Link>
            {" / "}
            <Link href="#" className="hover:text-teal">Terms & Condition</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>False Hero, game artwork, character designs, logos, and related intellectual property belong to Torchlight Games and publisher Ytopia.</p>
      <p>This website is a non-official fan wiki created for educational, guide, and informational purposes under fair use principles.</p>
      <p>If you own the rights to any media displayed on this site and have concerns, please contact the site operator at <a href={`mailto:${siteConfig.supportEmail}`} className="text-[hsl(var(--nav-theme))] hover:underline">{siteConfig.supportEmail}</a> for immediate review and resolution.</p>
    </LegalPage>
  );
}

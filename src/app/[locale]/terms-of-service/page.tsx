import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service">
      <p>This site is an independent fan-made guide hub for False Hero. Content is provided for informational and entertainment purposes only.</p>
      <p>Game mechanics, combat arts, boss details, builds, and update notes may change without notice as the game evolves. Always verify important information in-game or via official channels.</p>
      <p>By using this site, you agree not to misuse it, attempt unauthorized access, or present this fan wiki as an official Torchlight Games or Ytopia property. Questions can be directed to <a href={`mailto:${siteConfig.supportEmail}`} className="text-[hsl(var(--nav-theme))] hover:underline">{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}

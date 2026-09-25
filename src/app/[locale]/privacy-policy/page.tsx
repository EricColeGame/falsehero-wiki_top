import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>This fan wiki provides informational game guides for False Hero. We do not request user account credentials, Steam passwords, or private payment information.</p>
      <p>Basic analytics, advertising, and hosting providers may process standard technical information such as device type, browser, approximate region, and visited pages.</p>
      <p>External links may lead to Steam, Torchlight Games, Discord, YouTube, or community platforms. Those third-party services are governed by their own privacy policies.</p>
      <p>If you have any questions or data privacy inquiries, please contact <a href={`mailto:${siteConfig.supportEmail}`} className="text-[hsl(var(--nav-theme))] hover:underline">{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}

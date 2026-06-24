import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/halubase-logo.png.asset.json";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Halubase" },
      { name: "description", content: "Privacy policy and data handling practices for the Halubase application." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <img src={logoAsset.uri} alt="Halubase Logo" className="h-8 w-8 rounded-lg" />
            <span className="font-bold text-lg tracking-tight">Halubase</span>
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="/guide" className="text-muted-foreground hover:text-foreground transition-colors">User Guide</a>
            <a href="/premium" className="text-muted-foreground hover:text-foreground transition-colors">Premium</a>
            <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          </nav>
        </div>
      </header>

      <section className="border-b border-border/50 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            Last Updated: June 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            How we handle and protect your personal information.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-a:text-primary">
          <p>
            Welcome to Halubase! Your privacy is of utmost importance to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App"). Please read this Privacy Policy carefully. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE APP.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect via the App includes:</p>
          
          <h3>1.1 Personal Data</h3>
          <p>
            <strong>User-Generated Content:</strong> The text, photos, videos, and audio recordings you create within your diary entries are stored locally on your device by default. We do NOT collect or store your diary entries on our own servers.
          </p>
          <p>
            <strong>Cloud Backup:</strong> If you choose to enable the cloud backup feature, your encrypted data will be stored on your personal cloud storage accounts (such as Google Drive or Dropbox). We only request the minimum required permissions to upload and download your backup files.
          </p>

          <h3>1.2 Automatically Collected Information</h3>
          <p>
            When you access the App, we may automatically collect certain information about your device and usage, such as your IP address, device type, operating system, app version, and interaction events. This data is collected anonymously to help us improve the app and fix crashes.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the App to:</p>
          <ul>
            <li>Provide, operate, and maintain our App.</li>
            <li>Improve, personalize, and expand our App.</li>
            <li>Understand and analyze how you use our App.</li>
            <li>Facilitate the cloud backup and synchronization feature at your request.</li>
            <li>Deliver targeted advertising to you (if you use the free version of the App).</li>
          </ul>

          <h2>3. Third-Party Services and Advertising</h2>
          <p>
            We may use third-party advertising companies, such as <strong>Google AdMob</strong>, to serve ads when you visit the App. These companies may use information about your visits to the App and other websites that are contained in web cookies or device identifiers in order to provide advertisements about goods and services of interest to you.
          </p>
          <p>
            If you purchase the <strong>Premium</strong> upgrade, all advertising and third-party ad tracking within the App will be disabled.
          </p>

          <h2>4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. We provide features such as a "Secret Folder" that uses biometric authentication or a PIN code to encrypt and restrict access to your private entries locally on your device.
          </p>

          <h2>5. Children's Privacy</h2>
          <p>
            Our App does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
          </p>

          <h2>6. User Rights & Data Deletion</h2>
          <p>
            Because your primary diary data is stored locally on your device, you have complete control over it. You can delete your data at any time by:
          </p>
          <ul>
            <li>Using the "Clear All Data" feature within the App settings.</li>
            <li>Deleting the backup files directly from your Google Drive or Dropbox.</li>
            <li>Uninstalling the App from your device.</li>
          </ul>

          <h2>7. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:support@halubase.lovable.app">support@halubase.lovable.app</a>.
          </p>
        </div>
      </section>

      <footer className="border-t border-border/50 py-12 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Halubase. All rights reserved.</p>
      </footer>
    </div>
  );
}

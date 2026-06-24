import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/halubase-logo.png.asset.json";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "User Guide — Halubase" },
      { name: "description", content: "Detailed user guide on how to use the Halubase journal application." },
    ],
  }),
  component: GuidePage,
});

function GuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <img src={logoAsset.url} alt="Halubase logo" className="h-9 w-9 rounded-xl" />
            <span className="font-bold text-lg tracking-tight">Halubase</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground transition">Home</a>
            <a href="/guide" className="text-foreground font-medium transition">Guide</a>
            <a href="/privacy" className="hover:text-foreground transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-foreground transition">Terms</a>
            <a href="/cookies" className="hover:text-foreground transition">Cookies</a>
          </nav>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-gradient-hero py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">User Guide</h1>
          <p className="mt-3 text-lg text-muted-foreground">Discover all the features of Halubase — your digital journal</p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground transition">Home</a>
            <span>›</span>
            <span>User Guide</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-10 px-6 border-b border-border/40">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
          <div className="grid sm:grid-cols-2 gap-2 text-sm">
            <a href="#getting-started" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">1. Getting Started</a>
            <a href="#write-diary" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">2. Write a Diary</a>
            <a href="#photos" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">3. Photos & Images</a>
            <a href="#voice" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">4. Voice Recording</a>
            <a href="#files-links" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">5. Files & Links</a>
            <a href="#hashtags" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">6. Hashtags & Organization</a>
            <a href="#secret-folder" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">7. Secret Folder</a>
            <a href="#timeline" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">8. Timeline</a>
            <a href="#calendar" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">9. Calendar & Alarms</a>
            <a href="#backup" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">10. Backup & Restore</a>
            <a href="#cloud" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">11. Cloud Sync</a>
            <a href="#share" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">12. Content Sharing</a>
            <a href="#settings" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">13. Settings</a>
            <a href="#faq" className="px-3 py-2 rounded-xl bg-card border border-border/60 hover:bg-secondary transition">14. FAQ</a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-3xl space-y-12 text-[15px] leading-relaxed text-muted-foreground">

          {/* 1. Getting Started */}
          <div id="getting-started">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">1. Getting Started</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">1.1 Download & Install</h3>
            <p className="mb-3">Halubase is available on the App Store (iOS) and Google Play (Android). Search for "Halubase" or click the download links on our homepage.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">1.2 First Launch</h3>
            <p className="mb-3">When opening Halubase for the first time:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The app greets you according to the time of day (Good morning / afternoon / evening)</li>
              <li>The current day is highlighted for you to start writing immediately</li>
              <li><strong className="text-foreground">No account registration required</strong> — data is tied to your device</li>
              <li>The app works completely offline, no internet connection needed</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">1.3 Main Interface</h3>
            <p className="mb-3">The bottom navigation bar has 4 tabs:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Journal</strong> — Home page, displaying entries by week/month</li>
              <li><strong className="text-foreground">Timeline</strong> — Review every moment chronologically</li>
              <li><strong className="text-foreground">Calendar</strong> — View by month, set alarms and reminders</li>
              <li><strong className="text-foreground">Settings</strong> — Customize appearance, language, backup, security</li>
            </ul>
          </div>

          {/* 2. Write Diary */}
          <div id="write-diary">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">2. Write a Diary</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">2.1 Create a new entry</h3>
            <p className="mb-3">Press the <strong className="text-foreground">+</strong> button (bottom right corner) to start writing a new diary entry. You can:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enter an optional title for the entry</li>
              <li>Write freeform content without length limits</li>
              <li>Choose an emoji to express your mood</li>
              <li>Mark the entry in the Secret Folder</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">2.2 Edit an entry</h3>
            <p>Tap on any entry to open and edit. All changes are automatically saved when you leave the page or press the save button.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">2.3 Delete an entry</h3>
            <p>On the entry details page, press the <strong className="text-foreground">trash can</strong> icon to delete. Confirm when asked. This action cannot be undone.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">2.4 Week & Month View Modes</h3>
            <p className="mb-3">The Journal page allows switching between views:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">By week</strong> — Displays each week in a month, suitable for detailed viewing</li>
              <li><strong className="text-foreground">By month</strong> — Monthly overview, automatically counting moments</li>
            </ul>
            <p className="mt-3">Tap on a week/month to see all entries during that time period.</p>
          </div>

          {/* 3. Photos */}
          <div id="photos">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">3. Photos & Images</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">3.1 Take a new photo</h3>
            <p>Press the <strong className="text-foreground">camera</strong> icon in the editor to open the camera directly. The photo will be attached to the current entry.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">3.2 Choose from gallery</h3>
            <p>Press the <strong className="text-foreground">gallery</strong> icon to select one or more photos from your device. You can select multiple photos at once.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">3.3 View photos full screen</h3>
            <p>Tap on a photo thumbnail in the entry to view it in full size. You can also share or save the photo from here.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">3.4 Photos in Secret Folder</h3>
            <p>When taking or adding photos in Secret mode, the photos are copied to the internal secure area. You can choose to delete the original from your device gallery to increase privacy.</p>
          </div>

          {/* 4. Voice Recording */}
          <div id="voice">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">4. Voice Recording</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">4.1 Record</h3>
            <p className="mb-3">Hold the <strong className="text-foreground">microphone</strong> icon to start recording. The app will ask for microphone access if not granted. Release to stop recording.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">4.2 Playback</h3>
            <p>Press the play button on the recording in the entry to listen back. The progress bar shows the current playtime and total time.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">4.3 Delete recording</h3>
            <p>Press the delete button on the recording to remove it from the entry. The audio file will be permanently deleted from the device.</p>
          </div>

          {/* 5. Files & Links */}
          <div id="files-links">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">5. Files & Links</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">5.1 Attach files</h3>
            <p className="mb-3">Press the <strong className="text-foreground">paperclip</strong> icon to attach files from your device. Halubase supports multiple formats:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">PDF</strong> — Documents, books, reports</li>
              <li><strong className="text-foreground">DOC/DOCX</strong> — Word documents</li>
              <li><strong className="text-foreground">XLS/XLSX</strong> — Excel spreadsheets</li>
              <li>Other popular file formats</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">5.2 Paste links (URL)</h3>
            <p className="mb-3">Paste a URL into the entry, Halubase will automatically:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Retrieve metadata from the website (title, description, thumbnail)</li>
              <li>Display a beautiful link preview card</li>
              <li>Special support for YouTube — display video thumbnails</li>
              <li>Save thumbnails locally for offline viewing</li>
            </ul>
            <p className="mt-3">The retrieval process is performed directly from the device, without an intermediary server.</p>
          </div>

          {/* 6. Hashtags */}
          <div id="hashtags">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">6. Hashtags & Organization</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">6.1 Add a hashtag</h3>
            <p>Press the <strong className="text-foreground">#</strong> icon in the editor to open the hashtag picker. You can:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Choose from previously used hashtags</li>
              <li>Create a new hashtag by typing and pressing Enter</li>
              <li>Add multiple hashtags to the same entry</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">6.2 Filter by hashtag</h3>
            <p>Tap a hashtag on an entry to filter all entries with the same hashtag. This helps you easily find content by topic.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">6.3 Filter by month</h3>
            <p>Use the month filter at the top of the Journal page to view entries for a specific month. Quickly switch between months in a year.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">6.4 Search</h3>
            <p>Enter a keyword in the search box on the Timeline page to find entries by text content across multiple years of data.</p>
          </div>

          {/* 7. Secret Folder */}
          <div id="secret-folder">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">7. Secret Folder</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">7.1 Activation</h3>
            <p className="mb-3">Go to <strong className="text-foreground">Settings → Secret Folder</strong> to enable the feature. You will need to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Set a 4-digit protection PIN</li>
              <li>Allow biometric authentication (Face ID / fingerprint) — optional</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">7.2 Mark an entry as secret</h3>
            <p>When creating or editing an entry, toggle the <strong className="text-foreground">Secret</strong> switch to hide the entry from the normal list. Secret content is only visible when you open the Secret Folder.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">7.3 Unlock</h3>
            <p>Tap on the Secret Folder to authenticate with Face ID, fingerprint, or PIN. After authentication, all secret content will be displayed until you lock it again.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">7.4 Change PIN</h3>
            <p>Go to <strong className="text-foreground">Settings → Secret Folder</strong> to change your PIN. You need to enter your current PIN before setting a new one.</p>
          </div>

          {/* 8. Timeline */}
          <div id="timeline">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">8. Timeline</h2>
            <p className="mb-3">The <strong className="text-foreground">Timeline</strong> tab displays all your moments chronologically, from newest to oldest. Here you can:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Infinite scroll</strong> — Browse through all created entries</li>
              <li><strong className="text-foreground">Quick view</strong> — Thumbnails, text snippets, hashtags, and emojis</li>
              <li><strong className="text-foreground">Play audio</strong> — Listen to recordings right on the timeline</li>
              <li><strong className="text-foreground">View links</strong> — URL preview cards displayed directly</li>
              <li><strong className="text-foreground">Search</strong> — Find entries by keywords quickly</li>
              <li><strong className="text-foreground">Share</strong> — Long press an entry to share content</li>
            </ul>
          </div>

          {/* 9. Calendar & Alarms */}
          <div id="calendar">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">9. Calendar & Alarms</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">9.1 Calendar View Mode</h3>
            <p className="mb-3">The <strong className="text-foreground">Calendar</strong> tab displays a monthly calendar interface:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Days with entries are marked with colored dots</li>
              <li>Tap a day to view or create an entry for that day</li>
              <li>Switch to another month by swiping or tapping the arrows</li>
              <li>Tap the month at the top to quickly select a specific month</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">9.2 Set an alarm</h3>
            <p className="mb-3">From the Calendar view, you can set a reminder alarm:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Press the <strong className="text-foreground">+</strong> button on the desired day</li>
              <li>Select the alarm time</li>
              <li>Enter the reminder content</li>
              <li>The device will notify you when it's time</li>
            </ul>
          </div>

          {/* 10. Backup & Restore */}
          <div id="backup">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">10. Backup & Restore</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">10.1 Backup Modes</h3>
            <p className="mb-3">In Settings, you can choose 2 backup modes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Copy</strong> — Backup files to the cloud, keep original files on the device. Good for safety.</li>
              <li><strong className="text-foreground">Cut</strong> — Backup files to the cloud and delete local files. Good to save device memory. Halubase always keeps small thumbnails so you can still view photos offline.</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">10.2 Restore</h3>
            <p>When changing devices or reinstalling the app, go to Settings → Restore Data, connect to your cloud account to pull all backup files down to the device.</p>
          </div>

          {/* 11. Cloud Sync */}
          <div id="cloud">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">11. Cloud Sync</h2>
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">11.1 Supported services</h3>
            <p>Halubase currently supports connecting to <strong>Google Drive</strong> and <strong>Dropbox</strong>. Data is stored directly on your personal account.</p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">11.2 Auto Backup</h3>
            <p>When you enable Auto Backup, the app will automatically synchronize new data to the cloud every week in the background, ensuring your memories are always safe without manual operation.</p>
          </div>

          {/* 12. Share */}
          <div id="share">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">12. Content Sharing</h2>
            <p className="mb-3">Halubase supports sharing in 2 ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Share out</strong>: From an entry, select share to send text, photos, files to other apps (Message, Zalo, Email...).</li>
              <li><strong className="text-foreground">Share in</strong>: While browsing the web or looking at photos in another app, choose Share → select Halubase to create a new diary entry instantly with that content.</li>
            </ul>
          </div>

          {/* 13. Settings */}
          <div id="settings">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">13. Settings</h2>
            <p className="mb-3">In the Settings tab, you can customize:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Language</strong> — Switch between English and Vietnamese</li>
              <li><strong className="text-foreground">Interface Mode</strong> — Light / Dark / Follow system</li>
              <li><strong className="text-foreground">Premium</strong> — Unlock premium features, no ads</li>
              <li><strong className="text-foreground">Clear All Data</strong> — Delete all data on the device (Caution)</li>
            </ul>
          </div>

          {/* 14. FAQ */}
          <div id="faq">
            <h2 className="text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border/60">14. FAQ</h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h4 className="font-semibold text-foreground">Halubase có an toàn không? (Is Halubase safe?)</h4>
                <p className="mt-1">Yes, absolute safety. Data is only stored on your device and your personal cloud account. We do not have servers to store user data.</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground">Tại sao tôi không xem được ảnh khi offline? (Why can't I see photos offline?)</h4>
                <p className="mt-1">If you use the "Cut" backup mode, original files have been moved to the cloud to save device space. However, Halubase still keeps thumbnails so you can preview them. You need an internet connection to view the full resolution photo.</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground">Làm sao để lấy lại mật khẩu Thư mục bí mật? (How to recover Secret Folder password?)</h4>
                <p className="mt-1">For your security, there is no way to recover a lost PIN. Please make sure you remember the PIN or enable Face ID/Touch ID.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Halubase. All rights reserved.</p>
      </footer>
    </div>
  );
}

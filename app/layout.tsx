export const runtime = "edge";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sports",
  description: "Live Sports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning
                suppressHydrationWarning>

      <head>
        <script id="_waug5o">var _wau = _wau || []; _wau.push(["classic", "liveab", "g5o"]);</script><script async src="//waust.at/c.js"></script>
      </head>
      
      <body>
        <main className=" max-w-5xl mx-auto my-5">
          <div className="mx-3">{children}</div>
        </main>
      </body>
    </html>
  );
}

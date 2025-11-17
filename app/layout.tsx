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
        <script id="_waug5o">var _wau = _wau || []; _wau.push(["classic", "livetb", "g5o"]);</script><script async src="//waust.at/c.js"></script>
         <script type='text/javascript' src='//reclinecostumepessimistic.com/a6/9d/77/a69d77953fe342a7a7c2b77b30b156df.js'></script>
      </head>
      
      <body>
        <main className=" max-w-5xl mx-auto my-5">
          <div className="mx-3">{children}</div>
        </main>
      </body>
    </html>
  );
}

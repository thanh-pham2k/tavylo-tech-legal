import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TavyloTech | Publishing workspace",
  description: "Thông tin pháp lý và quyền riêng tư của TavyloTech.",
  openGraph: { title: "TavyloTech", description: "Publishing workspace", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body>{children}</body></html>;
}

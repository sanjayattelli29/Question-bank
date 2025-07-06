import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Question Bank - Programming Practice",
  description: "Interactive question bank for Python programming practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={firaCode.variable} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

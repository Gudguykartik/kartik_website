import "@/app/_styles/globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "./_components/ThemeProvider";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "Kartik - %s",
    default: "Kartik - Skilled Data Scientist",
  },
  description:
    "Kartik Rana a skilled data scientist, web developer. Creating intuitive, visually stunning and highly functional ai applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${raleway.className} antialiased bg-white dark:bg-dark-100 text-dark-200 dark:text-stone-200`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";

import SessionProvider from "./components/SessionProvider";
import {ReactQueryClientProvider} from "@/app/components/QueryClientProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Request Management System",
  description: "Request Management System",
};

export default async  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body >
        <SessionProvider session={session}>
          <ReactQueryClientProvider >
          <main>
          {children}
          </main>
          </ReactQueryClientProvider>

        </SessionProvider>

       </body>
    </html>
  );
}

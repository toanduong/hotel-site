import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SignInModal from "@/components/auth/SignInModal";
import SignUpModal from "@/components/auth/SignUpModal";
import ChatSupport from "@/components/common/ChatSupport";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
    title: "Hotel Booking - Find Your Perfect Stay",
    description: "Discover and book amazing hotels for your next trip",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} font-sans antialiased`}>
                <Header />
                {children}
                <Footer />
                <SignInModal />
                <SignUpModal />
                <ChatSupport />
            </body>
        </html>
    );
}

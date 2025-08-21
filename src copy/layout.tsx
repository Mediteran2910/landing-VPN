import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

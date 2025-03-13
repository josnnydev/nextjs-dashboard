import './ui/global.css'
import { monserrat } from "./ui/fonts";
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialiased`}>
        {children}
        <Footer/>
        </body>
    </html>
  );
}

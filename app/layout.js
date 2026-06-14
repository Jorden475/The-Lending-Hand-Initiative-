import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://www.thelendinghandinitiative.org'),
  title: {
    default: 'The Lending Hand Initiative | Patient Advocacy & Rare Kidney Disease Awareness',
    template: '%s | The Lending Hand Initiative',
  },
  description:
    'Helping organizations reach rare kidney disease communities — building awareness, strengthening trust, and ensuring no one faces a diagnosis without the information and support they need.',
  openGraph: {
    title: 'The Lending Hand Initiative',
    description:
      'Helping organizations reach rare kidney disease communities — building awareness, strengthening trust, and ensuring no one faces a diagnosis without the information and support they need.',
    url: 'https://www.thelendinghandinitiative.org',
    siteName: 'The Lending Hand Initiative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Lending Hand Initiative',
    description:
      'Helping organizations reach rare kidney disease communities — building awareness, strengthening trust, and ensuring no one faces a diagnosis without the information and support they need.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <Logo className="mb-4" inverted />
          <p className="text-sm text-green-100 leading-relaxed">
            Advancing trust, equity, and community impact through patient advocacy and APOL1 kidney disease awareness.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-green-300 mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-green-100">
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/services', 'Services'],
              ['/speaking', 'Speaking'],
              ['/contact', 'Contact'],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-green-300 mb-4">Get In Touch</h4>
          <ul className="space-y-2 text-sm text-green-100">
            <li>
              <a href="mailto:JordenDarnellAlbright@gmail.com" className="hover:text-white transition-colors break-all">
                JordenDarnellAlbright@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:4042854529" className="hover:text-white transition-colors">
                404-285-4529
              </a>
            </li>
            <li className="pt-2 flex gap-4">
              <a href="https://twitter.com/JordenAlbright" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                @JordenAlbright
              </a>
            </li>
            <li>
              <a href="https://twitter.com/FaceStruggleGainStrength" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                @FaceStruggleGainStrength
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-800 py-5 text-center text-xs text-green-400">
        © {new Date().getFullYear()} The Lending Hand Initiative. All rights reserved.
      </div>
    </footer>
  );
}

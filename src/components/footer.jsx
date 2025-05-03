import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const footerSections = {
  tentangKami: [
    { label: 'Tentang Kami', href: '/tentang-kami' },
    { label: 'Redaksi', href: '/redaksi' },
    { label: 'Karir', href: '/karir' },
    { label: 'Pedoman Media', href: '/pedoman' },
  ],
  layanan: [
    { label: 'Pasang Iklan', href: '/iklan' },
    { label: 'Kerjasama', href: '/kerjasama' },
    { label: 'Berlangganan', href: '/subscribe' },
  ],
  kategori: [
    { label: 'Nasional', href: '/nasional' },
    { label: 'Internasional', href: '/internasional' },
    { label: 'Ekonomi', href: '/ekonomi' },
    { label: 'Olahraga', href: '/olahraga' },
    { label: 'Teknologi', href: '/teknologi' },
  ],
  hubungiKami: [
    { label: 'Kontak', href: '/kontak' },
    { label: 'Alamat Redaksi', href: '/alamat' },
  ],
};

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com/narasibangsa', icon: <FaFacebook size={20} /> },
  { label: 'Twitter', href: 'https://twitter.com/narasibangsa', icon: <FaTwitter size={20} /> },
  { label: 'Instagram', href: 'https://instagram.com/narasibangsa', icon: <FaInstagram size={20} /> },
  { label: 'YouTube', href: 'https://youtube.com/narasibangsa', icon: <FaYoutube size={20} /> },
];

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Brand Section with Larger Logo */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Narasi Bangsa
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Portal berita terpercaya yang menyajikan informasi aktual dan mendalam untuk Indonesia.
            </p>
          </div>

          {/* Categories */}
          <div className="mt-4 md:mt-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-300">
              Kategori Berita
            </h3>
            <ul className="space-y-4">
              {footerSections.kategori.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 inline-flex"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="mt-4 md:mt-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-300">
              Tentang
            </h3>
            <ul className="space-y-4">
              {footerSections.tentangKami.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 inline-flex"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="mt-4 md:mt-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-300">
              Layanan
            </h3>
            <ul className="space-y-4">
              {footerSections.layanan.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 inline-flex"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section with Copyright and Social Links */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 border-t border-gray-800">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Narasi Bangsa. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-400 hover:text-white transform transition-all duration-200 hover:scale-110"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
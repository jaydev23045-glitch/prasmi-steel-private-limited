import { useState } from 'react';
import { MapPin, Mail, Globe, Phone } from 'lucide-react';
import { LegalModal } from '@/components/ui/LegalModal';
import { Link } from 'react-router-dom';

export function Footer() {
  const [modal, setModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer className="bg-slate-950 text-slate-500 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-16 mb-20">
            <div className="md:col-span-5">
              <Link to="/#home" onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center gap-4 mb-8 cursor-pointer group">
                <img src="/logo-premium.png" alt="Prasmi Steel Logo" className="w-12 h-12 object-contain grayscale-0 brightness-110 transition-transform group-hover:scale-110" />
                <div className="flex flex-col text-left">
                  <span className="font-black text-2xl md:text-3xl tracking-tighter text-white leading-none">
                    Prasmi<span className="text-[#dc2626]">Steel</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mt-1.5 whitespace-nowrap">Private Limited</span>
                </div>
              </Link>
              <p className="text-slate-500 max-w-sm leading-relaxed mb-10 text-lg font-light">
                Your Trusted Partner for Best-Quality Metal Scrap Solutions. Supplying best ferrous and non-ferrous scrap material solutions since 2024.
              </p>
              <div className="flex gap-5">
                {[
                  { name: 'LinkedIn', icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/> },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="https://www.linkedin.com/company/prasmisteel-private-limited/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-none bg-white/5 border border-white/10 hover:bg-white hover:border-white transition-all duration-300 group flex items-center justify-center"
                  >
                    <span className="sr-only">{social.name}</span>
                    <svg className="w-5 h-5 fill-current text-slate-500 group-hover:text-slate-900 transition-colors" viewBox="0 0 24 24">
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <h2 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[10px]">Prasmi Steel: Quick Navigation</h2>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="/#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><Link to="/products" className="hover:text-white transition-colors">Our Products</Link></li>
                <li><Link to="/blogs" className="hover:text-white transition-colors">Industrial Journal</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h2 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[10px]">Global Scrap Metal Operations</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
                  <address className="not-italic flex flex-col text-sm leading-relaxed font-bold uppercase tracking-wider" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp="streetAddress">VISHAL INDUSTRIAL, PLOT NO. 16,</span>
                    <span itemProp="addressLocality">KOTDA SANGANI, Piplana</span>
                    <span itemProp="addressRegion">Gujarat</span> <span itemProp="postalCode">360020</span>
                  </address>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-slate-700 flex-shrink-0" />
                  <span className="text-sm">prasmisteel@gmail.com</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-slate-700 flex-shrink-0" />
                  <span className="text-sm" itemProp="telephone">+91 9586633799</span>
                </li>
                <li className="flex items-center gap-4">
                  <Globe className="w-5 h-5 text-slate-700 flex-shrink-0" />
                  <span className="text-sm">prasmisteel.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 text-xs font-bold uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-600">&copy; {new Date().getFullYear()} Prasmi Steel Private Limited</p>
            <div className="flex gap-10">
              <button
                onClick={() => setModal('privacy')}
                className="hover:text-white transition-colors text-slate-700 cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setModal('terms')}
                className="hover:text-white transition-colors text-slate-700 cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <LegalModal
        isOpen={modal === 'privacy'}
        onClose={() => setModal(null)}
        title="Privacy Policy"
      >
        <section>
          <h3 className="text-white font-bold text-base mb-2">1. Information We Collect</h3>
          <p>When you contact us through our website, we may collect personal information such as your name, email address, phone number, company name, and any details you provide in your inquiry. We do not collect data through cookies, tracking pixels, or third-party analytics without your knowledge.</p>
        </section>
        <section>
          <h3 className="text-white font-bold text-base mb-2">2. How We Use Your Information</h3>
          <p>The information we collect is used solely to respond to your business inquiries, process orders or quotations, communicate updates related to our products and services, and comply with applicable legal obligations. We do not use your data for automated marketing without your explicit consent.</p>
        </section>
        <section>
          <h3 className="text-white font-bold text-base mb-2">3. Data Sharing and Disclosure</h3>
          <p>Prasmi Steel Private Limited does not sell, rent, or trade your personal information to third parties. We may share data with trusted logistics or shipping partners strictly as necessary to fulfill a transaction. Any such partners are contractually bound to maintain confidentiality.</p>
        </section>
        <section>
          <h3 className="text-white font-bold text-base mb-2">4. Data Security</h3>
          <p>We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
        </section>
        <section>
          <h3 className="text-white font-bold text-base mb-2">5. Your Rights</h3>
          <p>You have the right to request access to, correction of, or deletion of the personal information we hold about you. To exercise these rights, please contact us at <span className="text-[#dc2626]">prasmisteel@gmail.com</span>.</p>
        </section>
        <section>
          <h3 className="text-white font-bold text-base mb-2">6. International Transfers</h3>
          <p>As a global supplier, your data may be processed or stored in jurisdictions outside your country of residence. By engaging with us, you consent to such transfers in accordance with applicable data protection laws.</p>
        </section>
        <section>
          <h3 className="text-white font-bold text-base mb-2">7. Changes to This Policy</h3>
          <p>We reserve the right to update this Privacy Policy at any time. Material changes will be communicated via our website. Continued use of our services after changes constitutes your acceptance of the revised policy.</p>
        </section>
        <section>
          <h3 className="text-white font-bold text-base mb-2">8. Contact Us</h3>
          <p>For any questions regarding this Privacy Policy, contact us at:<br />
          <span className="text-white font-medium">Prasmi Steel Private Limited</span><br />
          Vishal Industrial, Plot No. 16, Kotda Sangani, Piplana, Gujarat 360020, India<br />
          Email: <span className="text-[#dc2626]">prasmisteel@gmail.com</span><br />
          Phone: +91 9586633799</p>
        </section>
      </LegalModal>

      {/* Terms of Service Modal */}
      <LegalModal
        isOpen={modal === 'terms'}
        onClose={() => setModal(null)}
        title="Terms of Service"
      >
        <section>
          <h3 className="text-white font-bold text-base mb-2">1. Acceptance of Terms</h3>
          <p>By accessing or using the Prasmi Steel Private Limited website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of our platform immediately.</p>
        </section>
        <section>
          <h3 className="text-white font-bold text-base mb-2">2. Nature of Services</h3>
          <p>Prasmi Steel Private Limited is a B2B supplier of ferrous and non-ferrous metal scrap, including HMS 1, HMS 2, Cast Iron, and related industrial materials. Our website serves as an informational and inquiry platform for qualified buyers, traders, and industrial partners globally.</p>
        </section>
        <section>
          <h3 className="text-white font-bold text-base mb-2">3. Eligibility</h3>
          <p>Our services are intended for business entities and commercial buyers only. By engaging with us, you represent that you are acting on behalf of a duly registered business and have the authority to enter into commercial agreements.</p>
        </section>
        <section>
          <h3 className="text-white font-bold text-base mb-2">4. Quotations and Orders</h3>
          <p>All quotations provided by Prasmi Steel are indicative and subject to final confirmation. Prices are subject to market fluctuations, shipping terms, and quantity specifications. A confirmed purchase order or written agreement shall constitute a binding transaction.</p>
        </section>
        <section>
          <h3 className="text-white font-bold text-base mb-2">5. Payment Terms</h3>
          <p>Payment terms are agreed upon on a per-transaction basis and may include advance payment, LC (Letter of Credit), or other mutually agreed instruments. Failure to adhere to payment terms may result in cancellation of the order and recovery action.</p>
        </section>
        <section>
          <h3 className="text-white font-bold text-base mb-2">6. Quality and Specifications</h3>
          <p>All materials are supplied in accordance with mutually agreed specifications. Prasmi Steel makes no implied warranty beyond what is explicitly stated in the purchase agreement. Disputes regarding quality must be raised within 7 days of delivery with supporting documentation.</p>
        </section>
        <section>
          <h3 className="text-white font-bold text-base mb-2">7. Limitation of Liability</h3>
          <p>Prasmi Steel Private Limited shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services, including delays due to force majeure, shipping disruptions, or regulatory restrictions beyond our control.</p>
        </section>
        <section>
          <h3 className="text-white font-bold text-base mb-2">8. Intellectual Property</h3>
          <p>All content on this website, including text, graphics, logos, and brand elements, is the property of Prasmi Steel Private Limited. Reproduction or commercial use without written consent is strictly prohibited.</p>
        </section>
        <section>
          <h3 className="text-white font-bold text-base mb-2">9. Governing Law</h3>
          <p>These terms shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Rajkot, Gujarat.</p>
        </section>
        <section>
          <h3 className="text-white font-bold text-base mb-2">10. Contact</h3>
          <p>For queries regarding these Terms, contact us at:<br />
          <span className="text-white font-medium">Prasmi Steel Private Limited</span><br />
          Email: <span className="text-[#dc2626]">prasmisteel@gmail.com</span> &nbsp;|&nbsp; Phone: +91 9586633799</p>
        </section>
      </LegalModal>
    </>
  );
}

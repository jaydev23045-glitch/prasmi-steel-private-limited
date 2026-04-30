import { useState } from 'react';
import { MapPin, Mail, Globe, Phone } from 'lucide-react';
import { LegalModal } from '@/components/ui/LegalModal';
import { Link } from 'react-router-dom';
import { EmailLink } from '@/components/ui/EmailLink';

export function Footer() {
  const [modal, setModal] = useState<'privacy' | 'terms' | 'safety' | null>(null);

  return (
    <>
      <footer className="bg-[#1a1a1b] text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Links Bar */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4 mb-12 text-[13px] font-medium text-slate-300">
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <span className="text-slate-700">|</span>
            <Link to="/what-we-do" className="hover:text-white transition-colors">What We Do</Link>
            <span className="text-slate-700">|</span>
            <Link to="/products" className="hover:text-white transition-colors">Industries We Serve</Link>
            <span className="text-slate-700">|</span>
            <Link to="/about#csr" className="hover:text-white transition-colors">CSR</Link>
            <span className="text-slate-700">|</span>
            <Link to="/blogs" className="hover:text-white transition-colors">Blogs</Link>
            <span className="text-slate-700">|</span>
            <button onClick={() => setModal('safety')} className="hover:text-white transition-colors">Safety Policy</button>
            <span className="text-slate-700">|</span>
            <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            <span className="text-slate-700">|</span>
            <button onClick={() => setModal('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
            <div className="text-[13px] text-slate-400">
              Copyright &copy; {new Date().getFullYear()} Prasmi Steel Private Limited
            </div>

            <div className="flex items-center gap-8">
              {/* Scroll to Top */}
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-white p-3 shadow-lg transition-all active:scale-95"
                aria-label="Back to top"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                  <path d="M18 15l-6-6-6 6" />
                </svg>
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
          <p>You have the right to request access to, correction of, or deletion of the personal information we hold about you. To exercise these rights, please contact us at <span className="text-[#dc2626]"><EmailLink /></span>.</p>
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
          Email: <span className="text-[#dc2626]"><EmailLink /></span><br />
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
          Email: <span className="text-[#dc2626]"><EmailLink /></span> &nbsp;|&nbsp; Phone: +91 9586633799</p>
        </section>
      </LegalModal>
      {/* Safety Policy Modal */}
      <LegalModal
        isOpen={modal === 'safety'}
        onClose={() => setModal(null)}
        title="Environment, Health, Safety & Sustainability Commitment"
      >
        <section>
          <p className="mb-6">At Prasmi Steel, our commitment to environmental stewardship, health, safety, and security forms the foundation of everything we do. We uphold this responsibility to all our stakeholders—employees, partners, customers, and the communities we serve.</p>
          
          <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">Our Commitments</h3>
          <ul className="space-y-4 mb-8">
            <li className="flex gap-3">
              <span className="text-[#38bdf8] font-bold">•</span>
              <p><span className="text-white font-semibold">Zero Harm Workplace:</span> We believe that all injuries, occupational illnesses, and incidents are preventable, and we strive to achieve a zero-incident environment.</p>
            </li>
            <li className="flex gap-3">
              <span className="text-[#38bdf8] font-bold">•</span>
              <p><span className="text-white font-semibold">Resource Responsibility:</span> We are dedicated to minimizing waste and maximizing resource efficiency through responsible operations and recycling practices.</p>
            </li>
            <li className="flex gap-3">
              <span className="text-[#38bdf8] font-bold">•</span>
              <p><span className="text-white font-semibold">Safe Operations:</span> Our facilities are designed, operated, and maintained to effectively manage risks, ensure process safety, and minimize environmental impact.</p>
            </li>
            <li className="flex gap-3">
              <span className="text-[#38bdf8] font-bold">•</span>
              <p><span className="text-white font-semibold">Security & Integrity:</span> We safeguard the physical and digital integrity of our operations while collaborating with our value chain to uphold the same standards.</p>
            </li>
            <li className="flex gap-3">
              <span className="text-[#38bdf8] font-bold">•</span>
              <p><span className="text-white font-semibold">Sustainable Solutions:</span> We deliver products and services that contribute to a safer, cleaner, and more sustainable future.</p>
            </li>
            <li className="flex gap-3">
              <span className="text-[#38bdf8] font-bold">•</span>
              <p><span className="text-white font-semibold">Accountability & Compliance:</span> We adhere strictly to all applicable laws, regulations, and internal standards, with every employee and partner sharing this responsibility.</p>
            </li>
          </ul>
          <p className="italic text-slate-400 mb-8 text-sm">We continuously review and improve our practices to enhance performance across environmental, health, safety, and security parameters.</p>
        </section>

        <section className="border-t border-white/5 pt-8 mt-8">
          <h3 className="text-white font-bold text-base mb-2 uppercase tracking-wider">Our Safety Philosophy</h3>
          <p className="text-[#38bdf8] font-black text-lg mb-4">Every Injury is Preventable.</p>
          <p className="mb-6">At Prasmi Steel, safety is not just a policy—it is a core value embedded in our culture. We prioritize the well-being of our people and integrate safety into every aspect of our operations.</p>
        </section>

        <section className="border-t border-white/5 pt-8 mt-8">
          <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">Driving Safety Excellence</h3>
          <p className="mb-6">We have established robust systems including safety policies, standard operating procedures, work permits, and safe work practices. However, we recognize that systems alone are not enough. Sustainable safety performance requires consistent behavior and mindset transformation.</p>
          
          <h4 className="text-white font-semibold mb-4">Our Approach:</h4>
          <ul className="space-y-3 mb-6">
            <li className="flex gap-3">
              <span className="text-[#38bdf8]">•</span>
              <span>Continuous training and awareness programs</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#38bdf8]">•</span>
              <span>Behaviour-based safety practices</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#38bdf8]">•</span>
              <span>Reinforcement of safe work habits</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#38bdf8]">•</span>
              <span>Active participation from employees, workers, and partners</span>
            </li>
          </ul>
          <p className="font-medium text-white italic">Our goal is to build a workplace where safety becomes instinctive—not just instructed.</p>
        </section>

        <section className="border-t border-white/5 pt-8 mt-8 pb-4">
          <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">Environmental & Energy Responsibility</h3>
          <p className="mb-6">We are deeply committed to protecting natural resources and promoting sustainability in every aspect of our operations.</p>
          
          <h4 className="text-white font-semibold mb-4">Our Initiatives:</h4>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3">
              <span className="text-[#38bdf8]">•</span>
              <span>Efficient use of energy and water</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#38bdf8]">•</span>
              <span>Adoption of energy-efficient technologies and machinery</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#38bdf8]">•</span>
              <span>Waste reduction and recycling practices</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#38bdf8]">•</span>
              <span>Tree plantation and environmental conservation efforts</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#38bdf8]">•</span>
              <span>Ongoing training to build awareness and responsibility among employees and stakeholders</span>
            </li>
          </ul>
          <p className="text-white font-bold border-l-2 border-[#38bdf8] pl-4 italic">We believe that responsible actions today ensure a sustainable tomorrow.</p>
        </section>
      </LegalModal>
    </>
  );
}

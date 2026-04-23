import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Globe, Shield, Clock, Building2 } from 'lucide-react';
import { EmailLink } from '@/components/ui/EmailLink';

export function Contact() {
  return (
    <div className="bg-white min-h-screen relative flex flex-col">
      {/* Main Content Section */}
      <section className="pt-12 md:pt-16 flex-1 flex flex-col pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Main Title Synchronized - Refined Size */}
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-10 tracking-tight">
            Contact <span className="text-[#dc2626]">Us</span>
          </h1>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Contact Details */}
            <div className="space-y-14">
              {/* India Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">India</h2>
                  <div className="h-px flex-1 bg-slate-100" />
                </div>
                <div className="space-y-3">
                  <p className="text-[#dc2626] font-bold text-sm uppercase tracking-[0.2em]">Registered Office & Works</p>
                  <address className="not-italic text-lg text-slate-600 leading-relaxed max-w-md font-medium">
                    Prasmi Steel Private Limited.<br />
                    Vishal Industrial, Plot No. 16, Kotda Sangani, Piplana, Rajkot 360020, Gujarat, India.
                  </address>
                </div>
              </div>

              {/* Communication Hub */}
              <div className="grid sm:grid-cols-2 gap-12 pt-12 border-t border-slate-100">
                {/* Call Us */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    Call <span className="text-[#dc2626]">Us</span>
                  </h2>
                  <a href="tel:+919586633799" className="inline-block text-xl font-bold text-slate-700 hover:text-[#dc2626] transition-colors tracking-tight">
                    +91 9586633799
                  </a>
                </div>

                {/* Email Us */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    Email <span className="text-[#dc2626]">Us</span>
                  </h2>
                  <div className="inline-block text-lg font-bold text-slate-700 hover:text-[#dc2626] transition-colors break-all tracking-tight">
                    <EmailLink />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Map - Clean Rectangle without Overlay */}
            <div className="relative aspect-square lg:aspect-auto lg:h-[500px] bg-slate-50 overflow-hidden shadow-2xl border border-slate-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2174.586197048526!2d70.86041946882847!3d22.147834272495352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2baf0857bfae69a9%3A0xe01851a10b7c13!2sPRASMI%20STEEL%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1776176080364!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="brightness-[1.02] contrast-[1.05]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

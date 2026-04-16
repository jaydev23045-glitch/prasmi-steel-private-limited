import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Globe, Shield, Clock, Building2 } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-mesh bg-grid min-h-screen relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none -z-10 rotate-12 scale-150">
        <img src="/favicon.png" alt="" className="w-full h-full object-contain" />
      </div>
      
      {/* Header Space */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter text-center mb-24 uppercase">
            Global <span className="text-[#4682b4]">Inquiries & Logistics</span>: Contact Us
          </h1>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="flex items-center gap-4 mb-2 md:hidden">
              <div className="h-px w-8 bg-slate-200"></div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Get in Touch</h2>
            </div>

            {/* Left Column: Contact Details */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               className="space-y-16"
            >
              <div className="hidden md:flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-slate-200"></div>
                <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Reach Our Experts</h2>
              </div>
              {/* Regional Offices */}
              <div className="grid sm:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#4682b4] mb-2">
                    <Globe className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Registered Office & Works:</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight underline decoration-[#4682b4]/30 decoration-4 underline-offset-8 mb-6 uppercase">Rajkot</h3>
                  <p className="text-sm text-slate-600 font-bold leading-relaxed uppercase tracking-wider">
                    VISHAL INDUSTRIAL, PLOT NO. 16,<br />
                    KOTDA SANGANI, Piplana,<br />
                    Gujarat 360020
                  </p>
                </div>
              </div>

              {/* Direct Communication */}
              <div className="space-y-12 pt-12 border-t border-slate-50">
                <div className="group">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Direct Line</h4>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-slate-900 flex items-center justify-center text-white scale-90 group-hover:scale-100 group-hover:bg-[#4682b4] transition-all duration-500">
                      <Phone className="w-5 h-5" />
                    </div>
                    <a href="tel:+919586633799" className="text-2xl font-black text-slate-900 tracking-tighter hover:text-[#4682b4] transition-colors">
                      +91 95866 33799
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-12 pt-12 border-t border-slate-50">
                  <div className="group">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Official Email</h4>
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-slate-900 flex items-center justify-center text-white scale-90 group-hover:scale-100 group-hover:bg-[#4682b4] transition-all duration-500">
                        <Mail className="w-5 h-5" />
                      </div>
                      <a href="mailto:prasmisteel@gmail.com" className="text-xl sm:text-2xl font-black text-slate-900 tracking-tighter hover:text-[#4682b4] transition-colors break-all">
                        prasmisteel@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operational Status */}
              <div className="grid sm:grid-cols-3 gap-8 pt-12 border-t border-slate-50">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#4682b4]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">24/7 Logistics</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-[#4682b4]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">ISRI Compliant</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-4 h-4 text-[#4682b4]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">Grade Verified</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Map */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-square lg:aspect-auto lg:h-[700px] bg-slate-100 overflow-hidden shadow-2xl border border-slate-200"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2174.586197048526!2d70.86041946882847!3d22.147834272495352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2baf0857bfae69a9%3A0xe01851a10b7c13!2sPRASMI%20STEEL%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1776176080364!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-10 left-10 bg-slate-900/90 backdrop-blur-md px-8 py-6 text-white border border-white/10 hidden sm:block">
                <div className="text-[8px] font-black uppercase tracking-[0.3em] text-[#4682b4] mb-2">Visit Our Yard</div>
                <div className="text-xl font-black tracking-tighter">Kotda Sangani Area</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

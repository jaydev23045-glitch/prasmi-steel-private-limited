import { MapPin, Mail, Globe, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="flex flex-col">
                <span className="font-black text-3xl tracking-tighter text-white leading-none">
                  Prasmi<span className="text-red-600">Steel</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mt-2">Private Limited</span>
              </div>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed mb-10 text-lg font-light">
              Your Trusted Partner for Best-Quality Metal Scrap Solutions. Supplying international industry with premium ferrous and non-ferrous materials since 2024.
            </p>
            <div className="flex gap-5">
              {[
                { name: 'LinkedIn', icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/> },
                { name: 'Twitter', icon: <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/> }
              ].map((social) => (
                <a 
                    key={social.name}
                    href="#" 
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
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs">Quick Access</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#global" className="hover:text-white transition-colors">Global Partners</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-xs">Operations</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col text-sm leading-relaxed font-bold uppercase tracking-wider">
                  <span>VISHAL INDUSTRIAL, PLOT NO. 16,</span>
                  <span>KOTDA SANGANI, Piplana</span>
                  <span>Gujarat 360020</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-slate-700 flex-shrink-0" />
                <span className="text-sm">prasmisteel@gmail.com</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-slate-700 flex-shrink-0" />
                <span className="text-sm">+91 9586633799</span>
              </li>
              <li className="flex items-center gap-4">
                <Globe className="w-5 h-5 text-slate-700 flex-shrink-0" />
                <span className="text-sm">www.prasmisteel.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 text-xs font-bold uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600">&copy; {new Date().getFullYear()} Prasmi Steel Private Limited.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors text-slate-700">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors text-slate-700">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

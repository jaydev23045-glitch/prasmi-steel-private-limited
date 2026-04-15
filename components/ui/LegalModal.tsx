import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function LegalModal({ isOpen, onClose, title, children }: LegalModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-slate-950 border border-white/10 w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-white/10 flex-shrink-0">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-red-600 font-bold mb-1">Prasmi Steel Private Limited</p>
            <h2 className="text-xl font-black text-white tracking-tight">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center border border-white/10 text-slate-500 hover:text-white hover:border-white/30 transition-all duration-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-8 py-8 text-slate-400 text-sm leading-relaxed space-y-6 flex-1">
          {children}
        </div>

        {/* Footer */}
        <div className="px-8 py-5 border-t border-white/10 flex-shrink-0">
          <p className="text-xs text-slate-600 uppercase tracking-widest">
            Last updated: April 2025 &nbsp;&mdash;&nbsp; Prasmi Steel Private Limited
          </p>
        </div>
      </div>
    </div>
  );
}

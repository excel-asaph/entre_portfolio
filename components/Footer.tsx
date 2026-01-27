import React, { useState } from 'react';
import { Mail, Instagram, Copy, Check } from 'lucide-react';

const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "f.william@alustudent.com";

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="bg-navy-900 text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-4">Let's Connect</h2>
            <p className="text-slate-300 max-w-md mb-8">
              Interested in collaborating on healthcare technology initiatives or discussing my research? I'd love to hear from you.
            </p>
            
            <div className="flex items-center gap-2">
              <a 
                href={`mailto:${email}?subject=Portfolio%20Inquiry`}
                className="inline-flex items-center gap-3 text-lg font-medium text-teal-400 hover:text-teal-300 transition-colors"
              >
                <div className="p-3 bg-white/10 rounded-full">
                  <Mail size={24} />
                </div>
                {email}
              </a>
              <button 
                onClick={handleCopy}
                className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-slate-400 hover:text-teal-400 transition-all"
                title="Copy email address"
              >
                {copied ? (
                  <Check size={16} />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col md:items-end space-y-4">
             <h3 className="text-lg font-semibold text-slate-200">Social Profiles</h3>
             <div className="flex gap-4">
                <SocialIcon href="https://linkedin.com/in/faith-william" label="LinkedIn">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com/adoree_faith?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" label="Instagram">
                     <Instagram size={24} />
                </SocialIcon>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} Faith William. All rights reserved.</p>
            <p className="mt-2 md:mt-0 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                Built with a focus on accessibility and healthcare equity.
            </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ href: string; label: string; children: React.ReactNode }> = ({ href, label, children }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label={label}
        className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all duration-300"
    >
        {children}
    </a>
)

export default Footer;
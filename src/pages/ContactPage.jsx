import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/brand';

export const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <main className="w-full pt-24 sm:pt-28 pb-16 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Editorial Hero */}
      <div className="max-w-xl mb-10 sm:mb-12">
        <span className="text-[11px] font-bold tracking-widest text-[#C85A32] uppercase block mb-1.5">
          GET IN TOUCH
        </span>
        <h1 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#191817] leading-tight mb-2.5">
          Let's talk snacks.
        </h1>
        <p className="text-sm sm:text-base text-[#6E6B65]">
          Questions, wholesale collaborations, recipe feedback or just want to say hello? Our Mumbai team is all ears.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: Contact Form */}
        <div className="lg:col-span-7 bg-[#F4F0E8] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#191817]/8">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="w-12 h-12 rounded-full bg-[#4D5842]/10 text-[#4D5842] mx-auto flex items-center justify-center mb-3">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-editorial text-xl font-bold text-[#191817] mb-1.5">
                Message Sent!
              </h3>
              <p className="text-xs text-[#6E6B65] max-w-xs mx-auto mb-5">
                Thanks for reaching out, {form.name}. A member of our Mumbai team will get back to you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setForm({ name: '', email: '', message: '' });
                  setSubmitted(false);
                }}
                className="px-5 py-2 rounded-full bg-[#191817] text-[#FAF8F5] text-xs font-semibold hover:bg-[#2A2926] transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#191817] mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Roshni Kapoor"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#191817]/10 text-xs sm:text-sm text-[#191817] placeholder:text-[#9B9790] focus:outline-none focus:border-[#191817] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#191817] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="roshni@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#191817]/10 text-xs sm:text-sm text-[#191817] placeholder:text-[#9B9790] focus:outline-none focus:border-[#191817] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#191817] mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us what's on your mind..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#191817]/10 text-xs sm:text-sm text-[#191817] placeholder:text-[#9B9790] focus:outline-none focus:border-[#191817] transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="text-xs text-[#C85A32] font-semibold">{error}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#191817] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#2A2926] transition-all group shadow-sm"
              >
                <span>Send message</span>
                <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>

        {/* Right: Studio & Contact Information */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white border border-[#191817]/8 shadow-2xs">
              <div className="flex items-center gap-2 text-[#191817] mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                <h4 className="text-xs font-bold">Mumbai Studio</h4>
              </div>
              <p className="text-xs text-[#6E6B65] leading-relaxed">
                {BRAND_INFO.location.studio}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#191817]/8 shadow-2xs">
              <div className="flex items-center gap-2 text-[#191817] mb-1.5">
                <Mail className="w-3.5 h-3.5 text-[#4D5842]" />
                <h4 className="text-xs font-bold">Direct Correspondence</h4>
              </div>
              <p className="text-xs text-[#6E6B65]">
                General: <a href={`mailto:${BRAND_INFO.location.email}`} className="text-[#191817] font-medium hover:underline">{BRAND_INFO.location.email}</a>
              </p>
              <p className="text-xs text-[#6E6B65] mt-0.5">
                Press: <a href={`mailto:${BRAND_INFO.location.press}`} className="text-[#191817] font-medium hover:underline">{BRAND_INFO.location.press}</a>
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#191817]/8 shadow-2xs">
              <div className="flex items-center gap-2 text-[#191817] mb-1.5">
                <Phone className="w-3.5 h-3.5 text-[#D9822B]" />
                <h4 className="text-xs font-bold">Phone & Support</h4>
              </div>
              <p className="text-xs text-[#191817] font-medium">
                {BRAND_INFO.location.phone}
              </p>
              <p className="text-[10px] text-[#6E6B65] mt-0.5">
                {BRAND_INFO.location.hours}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#191817]/8">
            <span className="text-[10px] font-bold tracking-widest text-[#6E6B65] uppercase block mb-2">
              Social Community
            </span>
            <div className="flex flex-wrap gap-2">
              {BRAND_INFO.social.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded-full bg-white border border-[#191817]/8 text-xs font-medium text-[#191817] hover:border-[#191817]/30 inline-flex items-center gap-1 transition-colors"
                >
                  <span>{soc.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#6E6B65]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

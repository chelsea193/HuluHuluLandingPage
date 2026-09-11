/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle, Compass, Mail, MapPin, MessageSquare, Heart, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface FooterAndCTAProps {
  onNavigatePage?: (page: 'quiz' | 'faq' | 'home' | 'menu' | 'yinyang' | 'wellness') => void;
}

export default function FooterAndCTA({ onNavigatePage }: FooterAndCTAProps) {
  const { isZh } = useLanguage();
  const t = TRANSLATIONS[isZh ? 'zh' : 'en'].footer;

  const handleWhatsAppConsult = () => {
    window.open('https://wa.me/601157444931', '_blank');
  };

  return (
    <div className="w-full bg-[#FAF8F4]" id="cta-footer-parent">

      {/* FINAL CTA SECTION */}
      <section className="relative w-full pt-10 pb-24 md:pt-16 md:pb-24 px-6 md:px-12 bg-[#FFFAE8] overflow-hidden" id="final-cta-section">

        {/* Organic backdrop lines */}
        <div className="absolute inset-x-0 bottom-0 top-1/2 pointer-events-none select-none opacity-5" id="cta-patterns">
          <svg className="w-full h-full" viewBox="0 0 1000 300">
            <path d="M0,150 C300,200 600,100 1000,180" stroke="#A4B799" strokeWidth="2" fill="none" />
            <path d="M0,100 C200,50 500,250 1000,120" stroke="#9BA88B" strokeWidth="2.5" fill="none" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10" id="final-cta-container">

          {/* Headline and Narrative */}
          <div className="lg:col-span-7" id="final-cta-left">
            <span className="text-[10px] uppercase tracking-[0.2em] font-noto-sans-sc font-extrabold text-[#8F6641] bg-amber-50 border border-amber-200/40 px-3.5 py-1.5 rounded-full mb-6 inline-block">
              {t.ctaBadge}
            </span>
            <h2 className="text-3xl md:text-5xl font-noto-sans-sc text-[#2F2F2F] tracking-tight leading-tight mb-6" id="cta-headline">
              {t.ctaHeadline}
            </h2>
            <p className="text-sm md:text-base font-noto-sans-sc text-gray-500 font-light leading-relaxed mb-10 max-w-lg" id="cta-description">
              {t.ctaDesc[0]}<br />
              {t.ctaDesc[1]}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8" id="cta-action-row">
              <button
                onClick={() => onNavigatePage?.('quiz')}
                className="px-8 py-4 rounded-full bg-[#A4B799] hover:bg-[#8E9F84] text-white text-sm font-semibold tracking-wider transition-all duration-300 shadow-lg shadow-amber-950/15 cursor-pointer flex items-center gap-2 group"
                id="cta-join-community-btn"
              >
                <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                {t.joinBtn}
              </button>

              <button
                onClick={handleWhatsAppConsult}
                className="px-6 py-4 rounded-full border-2 border-[#9BA88B]/60 hover:bg-[#9BA88B]/10 text-gray-700 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-2 pointer-events-auto cursor-pointer"
                id="cta-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4 text-[#69725F]" />
                {t.whatsappBtn}
              </button>
            </div>

            {/* Success message banner popup */}
            {/* Trust Line requested */}
            <div className="flex items-center gap-3 border-t border-gray-100 pt-6" id="trust-indicator-zone">
              <div className="flex -space-x-2" id="member-avatars">
                <div className="w-7 h-7 rounded-full border-2 border-white bg-[#9BA88B] text-[8px] text-white flex items-center justify-center font-bold">H</div>
                <div className="w-7 h-7 rounded-full border-2 border-white bg-[#D89A63] text-[8px] text-white flex items-center justify-center font-bold">U</div>
                <div className="w-7 h-7 rounded-full border-2 border-white bg-[#A4B799] text-[8px] text-white flex items-center justify-center font-bold">L</div>
              </div>
              <span className="text-xs text-gray-500 font-noto-sans-sc tracking-wide" id="trust-line-text">
                {t.trustLinePrefix}<strong className="text-gray-800 font-extrabold font-noto-sans-sc bg-amber-50 px-1 py-0.5 rounded">1,850</strong>{t.trustLineSuffix}
              </span>
            </div>
          </div>

          {/* QR Section requested */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center" id="final-cta-right">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl max-w-[280px] w-full flex flex-col items-center text-center relative group" id="qr-code-holder">

              <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F4] to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              <span className="text-[10px] uppercase tracking-widest font-noto-sans-sc font-bold text-gray-600 mb-4 block">
                {t.qrLabel}
              </span>

              {/* QR code framed by the mascot illustration */}
              <div className="w-48 h-48 relative" id="qr-box">
                <img
                  src={`${import.meta.env.BASE_URL}QR Mascot-01.webp`}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none z-0"
                  id="qr-mascot-frame"
                />
                <img
                  src={`${import.meta.env.BASE_URL}qr.webp`}
                  alt={isZh ? '扫码二维码' : 'QR code'}
                  loading="lazy"
                  decoding="async"
                  className="absolute object-contain z-10"
                  style={{ top: '39.5%', left: '30%', width: '41%', height: '48%' }}
                  id="qr-code-image"
                />
              </div>

              <p className="text-[10px] font-noto-sans-sc text-gray-600 font-light leading-relaxed mt-4">
                {t.qrCaption}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#A4B799] border-t border-white/10 pt-20 pb-12" id="hulu-footer">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12" id="footer-widgets">

          {/* Footer widget 1: Brand intro */}
          <div className="md:col-span-5" id="f-widget-brand">
            <span className="text-2xl font-noto-sans-sc font-black text-white tracking-wider block mb-4">
              Hulu Hulu
            </span>
            <span className="text-[10px] uppercase tracking-widest font-noto-sans-sc font-bold text-[#FFFAE8] border border-white/30 px-3 py-1 rounded-full mb-6 inline-block">
              {t.brandTag}
            </span>
            <p className="text-xs md:text-sm font-noto-sans-sc text-[#FFFAE8] leading-loose font-light max-w-sm" id="brand-concept-footer">
              {t.brandConcept}
            </p>
          </div>

          {/* Footer widget 2: Contacts */}
          <div className="md:col-span-4 flex flex-col justify-start" id="f-widget-contact">
            <h3 className="text-xs uppercase tracking-wider font-noto-sans-sc font-extrabold text-white mb-6">
              {t.contactsTitle}
            </h3>
            <div className="space-y-4" id="footer-contacts-list">
              <a href="https://wa.me/601157444931" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs text-[#FFFAE8] hover:text-white transition-colors pointer-events-auto" id="f-con-whatsapp">
                <MessageSquare className="w-4 h-4 text-[#FFFAE8]" />
                <div className="font-noto-sans-sc">
                  <span className="font-semibold block text-white">WhatsApp</span>
                  <span className="font-light">+6011-57444931</span>
                </div>
              </a>

              <a href="mailto:hello@huluhuluwellness.com" className="flex items-center gap-3 text-xs text-[#FFFAE8] hover:text-white transition-colors pointer-events-auto" id="f-con-email">
                <Mail className="w-4 h-4 text-[#FFFAE8]" />
                <div className="font-noto-sans-sc">
                  <span className="font-semibold block text-white">{isZh ? '电子邮箱' : 'Email'}</span>
                  <span className="font-light">hello@huluhuluwellness.com</span>
                </div>
              </a>

              <div className="flex items-start gap-3 text-xs text-[#FFFAE8]" id="f-con-location">
                <MapPin className="w-4 h-4 text-[#FFFAE8] shrink-0 mt-0.5" />
                <div className="font-noto-sans-sc">
                  <span className="font-semibold block text-white">{isZh ? '门市地址' : 'Address'}</span>
                  <span className="font-light leading-relaxed">A-G-9, Flat, Jalan Udang Harimau 1, Taman Megah Kepong, 52200 Kuala Lumpur</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer widget 3: Social & Media */}
          <div className="md:col-span-3 flex flex-col justify-start" id="f-widget-socials">
            <h3 className="text-xs uppercase tracking-wider font-noto-sans-sc font-extrabold text-white mb-6">
              {t.followTitle}
            </h3>
            <div className="flex flex-col gap-3 font-noto-sans-sc" id="social-links-col">
              <a href="#facebook" className="text-xs text-[#FFFAE8] font-light hover:text-white flex items-center gap-2 transition-colors pointer-events-auto">
                <Facebook className="w-4 h-4 text-[#FFFAE8]" /> Facebook
              </a>
              <a href="#instagram" className="text-xs text-[#FFFAE8] font-light hover:text-white flex items-center gap-2 transition-colors pointer-events-auto">
                <Instagram className="w-4 h-4 text-[#FFFAE8]" /> Instagram
              </a>
              <a href="https://wa.me/601157444931" target="_blank" rel="noreferrer" className="text-xs text-[#FFFAE8] font-light hover:text-white flex items-center gap-2 transition-colors pointer-events-auto">
                <MessageCircle className="w-4 h-4 text-[#FFFAE8]" /> WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Copy block */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/20 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[#FFFAE8] font-noto-sans-sc" id="footer-bottom">
          <div className="flex items-center gap-1" id="heart-stamp">
            <span>{t.rightsReserved}</span>
            <span className="flex items-center"><Heart className="w-2.5 h-2.5 text-white fill-current inline mx-0.5" /> {t.madeWith}</span>
          </div>
          <div className="flex flex-wrap items-center gap-4" id="legal-terms">
            {onNavigatePage && (
              <>
                <button
                  onClick={() => onNavigatePage('quiz')}
                  className="hover:underline hover:text-white cursor-pointer"
                  id="footer-quiz-link"
                >
                  {t.quizLink}
                </button>
                <button
                  onClick={() => onNavigatePage('faq')}
                  className="hover:underline hover:text-white cursor-pointer"
                  id="footer-faq-link"
                >
                  {t.faqLink}
                </button>
              </>
            )}
            <a href="#terms" className="hover:underline hover:text-white">{t.termsLink}</a>
            <a href="#privacy" className="hover:underline hover:text-white">{t.privacyLink}</a>
          </div>
        </div>

      </footer>

    </div>
  );
}

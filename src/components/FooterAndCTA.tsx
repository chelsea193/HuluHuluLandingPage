/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Compass, Mail, MapPin, QrCode, MessageSquare, Heart, Shield, Facebook, Instagram } from 'lucide-react';

export default function FooterAndCTA() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleConsultJoin = (type: 'whatsapp' | 'community') => {
    if (type === 'whatsapp') {
      window.open('https://wa.me/601157444931', '_blank');
    } else {
      setCopiedText('🎉 恭喜！您已成功提交预约。我们的健康顾问将会在 WhatsApp 尽快与您取得联系。');
      setTimeout(() => setCopiedText(null), 8000);
    }
  };

  return (
    <div className="w-full bg-[#FAF8F4]" id="cta-footer-parent">
      
      {/* FINAL CTA SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto rounded-3xl bg-gradient-to-b from-[#ECE7DE]/60 to-white border border-[#ECE7DE] relative overflow-hidden" id="final-cta-section">
        
        {/* Organic backdrop lines */}
        <div className="absolute inset-x-0 bottom-0 top-1/2 pointer-events-none select-none opacity-5" id="cta-patterns">
          <svg className="w-full h-full" viewBox="0 0 1000 300">
            <path d="M0,150 C300,200 600,100 1000,180" stroke="#EB288B" strokeWidth="2" fill="none" />
            <path d="M0,100 C200,50 500,250 1000,120" stroke="#9BA88B" strokeWidth="2.5" fill="none" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10" id="final-cta-container">
          
          {/* Headline and Narrative */}
          <div className="lg:col-span-7" id="final-cta-left">
            <span className="text-[10px] uppercase tracking-[0.2em] font-noto-sans-sc font-extrabold text-[#D89A63] bg-amber-50 border border-amber-200/40 px-3.5 py-1.5 rounded-full mb-6 inline-block">
              EMBARK ON YOUR HEALTH JOURNEY
            </span>
            <h2 className="text-3xl md:text-5xl font-noto-sans-sc text-[#2F2F2F] tracking-tight leading-tight mb-6" id="cta-headline">
              开启你的食物能量旅程
            </h2>
            <p className="text-sm md:text-base font-noto-sans-sc text-gray-500 font-light leading-relaxed mb-10 max-w-lg" id="cta-description">
           加入 Hulu Hulu 社群<br />
             一起探索食物能量和健康饮食。
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8" id="cta-action-row">
              <button
                onClick={() => handleConsultJoin('community')}
                className="px-8 py-4 rounded-full bg-[#EB288B] hover:bg-[#D1167B] text-white text-sm font-semibold tracking-wider transition-all duration-300 shadow-lg shadow-amber-950/15 cursor-pointer flex items-center gap-2 group"
                id="cta-join-community-btn"
              >
                <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                进入 Hulu Hulu 食物能量世界
              </button>
              
              <button
                onClick={() => handleConsultJoin('whatsapp')}
                className="px-6 py-4 rounded-full border-2 border-[#9BA88B]/60 hover:bg-[#9BA88B]/10 text-gray-700 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-2 pointer-events-auto cursor-pointer"
                id="cta-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4 text-[#9BA88B]" />
                WhatsApp 咨询
              </button>
            </div>

            {/* Success message banner popup */}
            {copiedText && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs mb-6 font-medium max-w-xl flex items-center gap-2"
                id="join-success-banner"
              >
                <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{copiedText}</span>
              </motion.div>
            )}

            {/* Trust Line requested */}
            <div className="flex items-center gap-3 border-t border-gray-100 pt-6" id="trust-indicator-zone">
              <div className="flex -space-x-2" id="member-avatars">
                <div className="w-7 h-7 rounded-full border-2 border-white bg-[#9BA88B] text-[8px] text-white flex items-center justify-center font-bold">H</div>
                <div className="w-7 h-7 rounded-full border-2 border-white bg-[#D89A63] text-[8px] text-white flex items-center justify-center font-bold">U</div>
                <div className="w-7 h-7 rounded-full border-2 border-white bg-[#EB288B] text-[8px] text-white flex items-center justify-center font-bold">L</div>
              </div>
              <span className="text-xs text-gray-500 font-noto-sans-sc tracking-wide" id="trust-line-text">
                超过 <strong className="text-gray-800 font-extrabold font-noto-sans-sc bg-amber-50 px-1 py-0.5 rounded">1,850+</strong> 位会员正在学习食物与能量的关系
              </span>
            </div>
          </div>

          {/* QR Section requested */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center" id="final-cta-right">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl max-w-[280px] w-full flex flex-col items-center text-center relative group" id="qr-code-holder">
              
              <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F4] to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              <span className="text-[10px] uppercase tracking-widest font-noto-sans-sc font-bold text-gray-400 mb-4 block">
                扫码了解更多
              </span>

              {/* Hand-drawn Mock QR frame */}
              <div className="w-36 h-36 bg-[#F7F3EC] rounded-2xl border-4 border-[#EB288B]/40 flex items-center justify-center p-3 relative group-hover:border-[#9BA88B]/60 transition-colors duration-300" id="qr-box">
                <QrCode className="w-full h-full text-[#EB288B] group-hover:text-[#576751] transition-colors" />
                
                {/* Decorative border brackets */}
                <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#EB288B]"></div>
                <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#EB288B]"></div>
                <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#EB288B]"></div>
                <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#EB288B]"></div>
              </div>

              <span className="text-[11px] font-noto-sans-sc text-gray-500 font-semibold mt-4 mb-1 block">
                [ QR Code Center ]
              </span>
              <p className="text-[10px] font-noto-sans-sc text-gray-400 font-light leading-relaxed">
                微信/小红书扫描二维码<br />关注我们获取每日食谱
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#FAF8F4] border-t border-gray-200/80 pt-20 pb-12 mt-20" id="hulu-footer">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12" id="footer-widgets">
          
          {/* Footer widget 1: Brand intro */}
          <div className="md:col-span-5" id="f-widget-brand">
            <span className="text-2xl font-noto-sans-sc font-black text-[#EB288B] tracking-wider block mb-4">
              Hulu Hulu
            </span>
            <span className="text-[10px] uppercase tracking-widest font-noto-sans-sc font-bold text-[#D89A63] border border-[#D89A63]/30 px-3 py-1 rounded-full mb-6 inline-block">
              Food Is Energy
            </span>
            <p className="text-xs md:text-sm font-noto-sans-sc text-gray-500 leading-loose font-light max-w-sm" id="brand-concept-footer">
              帮助现代人重新认识食物与能量之间的关系。
              通过对宏观大健康、自然饮食法（Macrobiotic）以及东方非物质五行能量学的调养，找回身体真正的和谐平衡。
            </p>
          </div>

          {/* Footer widget 2: Contacts */}
          <div className="md:col-span-4 flex flex-col justify-start" id="f-widget-contact">
            <h4 className="text-xs uppercase tracking-wider font-noto-sans-sc font-extrabold text-[#EB288B] mb-6">
              联络我们 CONTACTS
            </h4>
            <div className="space-y-4" id="footer-contacts-list">
              <a href="https://wa.me/601157444931" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs text-gray-500 hover:text-[#EB288B] transition-colors pointer-events-auto" id="f-con-whatsapp">
                <MessageSquare className="w-4 h-4 text-[#9BA88B]" />
                <div className="font-noto-sans-sc">
                  <span className="font-semibold block text-gray-700">WhatsApp</span>
                  <span className="font-light">+6011-57444931</span>
                </div>
              </a>

              <a href="mailto:hello@huluhuluwellness.com" className="flex items-center gap-3 text-xs text-gray-500 hover:text-[#EB288B] transition-colors pointer-events-auto" id="f-con-email">
                <Mail className="w-4 h-4 text-[#9BA88B]" />
                <div className="font-noto-sans-sc">
                  <span className="font-semibold block text-gray-700">Email</span>
                  <span className="font-light">hello@huluhuluwellness.com</span>
                </div>
              </a>

              <div className="flex items-start gap-3 text-xs text-gray-500" id="f-con-location">
                <MapPin className="w-4 h-4 text-[#9BA88B] shrink-0 mt-0.5" />
                <div className="font-noto-sans-sc">
                  <span className="font-semibold block text-gray-700">Address</span>
                  <span className="font-light leading-relaxed">A-G-9, Flat, Jalan Udang Harimau 1, Taman Megah Kepong, 52200 Kuala Lumpur</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer widget 3: Social & Media */}
          <div className="md:col-span-3 flex flex-col justify-start" id="f-widget-socials">
            <h4 className="text-xs uppercase tracking-wider font-noto-sans-sc font-extrabold text-[#EB288B] mb-6">
              关注我们 FOLLOW US
            </h4>
            <div className="flex flex-col gap-3 font-noto-sans-sc" id="social-links-col">
              <a href="#facebook" className="text-xs text-gray-600 font-light hover:text-[#EB288B] flex items-center gap-2 transition-colors pointer-events-auto">
                <Facebook className="w-4 h-4 text-[#9BA88B]" /> Facebook
              </a>
              <a href="#instagram" className="text-xs text-gray-600 font-light hover:text-[#EB288B] flex items-center gap-2 transition-colors pointer-events-auto">
                <Instagram className="w-4 h-4 text-[#9BA88B]" /> Instagram
              </a>
              <a href="https://wa.me/601157444931" target="_blank" rel="noreferrer" className="text-xs text-gray-600 font-light hover:text-[#EB288B] flex items-center gap-2 transition-colors pointer-events-auto">
                <MessageCircle className="w-4 h-4 text-[#9BA88B]" /> WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Copy block */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-gray-200/60 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-400 font-noto-sans-sc" id="footer-bottom">
          <div className="flex items-center gap-1" id="heart-stamp">
            <span>© 2026 Hulu Hulu. All Rights Reserved.</span>
            <span className="flex items-center"><Heart className="w-2.5 h-2.5 text-rose-500 fill-current inline mx-0.5" /> Made with pure botanical intent.</span>
          </div>
          <div className="flex gap-4" id="legal-terms">
            <a href="#terms" className="hover:underline">能量服务条款 Services</a>
            <a href="#privacy" className="hover:underline">隐私策略与Cookies</a>
          </div>
        </div>

      </footer>

    </div>
  );
}

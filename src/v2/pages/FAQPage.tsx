/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ChevronDown, 
  Sparkles, 
  Leaf, 
  CircleDot, 
  Utensils, 
  ShieldAlert, 
  MessageSquare, 
  HelpCircle, 
  MessageCircle, 
  ArrowRight,
  Home,
  Tag
} from 'lucide-react';
import { FAQ_CATEGORIES, FAQ_ITEMS, FAQItem } from '../data/faqData';
import { useLanguage } from '../context/LanguageContext';

interface FAQPageProps {
  onNavigateHome?: (sectionId?: string) => void;
  onNavigateQuiz?: () => void;
}

export default function FAQPage({ onNavigateHome, onNavigateQuiz }: FAQPageProps) {
  const { isZh } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>('faq-01');

  // Filter FAQ items by active category and search query
  const filteredFAQs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCat = activeCategory === 'all' || item.category === activeCategory;
      if (!matchesCat) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inQuestion = (item.question + ' ' + (item.questionEn || '')).toLowerCase().includes(q);
      const inAnswer = (item.answer + ' ' + (item.answerEn || '')).toLowerCase().includes(q);
      const inTags = item.tags.some((t) => t.toLowerCase().includes(q)) || 
                     (item.tagsEn && item.tagsEn.some((t) => t.toLowerCase().includes(q)));

      return inQuestion || inAnswer || inTags;
    });
  }, [activeCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleWhatsAppHelp = (question?: string) => {
    const text = question 
      ? (isZh 
          ? `你好 Hulu Hulu！我在查看官网常见问题时，想进一步深入了解关于：“${question}”的食愈建议。`
          : `Hello Hulu Hulu! I am exploring your FAQ and would like deeper guidance regarding: "${question}".`)
      : (isZh 
          ? '你好 Hulu Hulu！我想咨询关于原型食愈与五行调理的更多细节。'
          : 'Hello Hulu Hulu! I would like to consult with a mentor regarding whole-food healing and Five-Element balance.');
    window.open(`https://wa.me/601157444931?text=${encodeURIComponent(text)}`, '_blank');
  };

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'concept':
        return <Leaf className="w-3.5 h-3.5" />;
      case 'dining':
        return <Utensils className="w-3.5 h-3.5" />;
      case 'dietary':
        return <CircleDot className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="w-full min-h-screen pb-28 pt-4 px-4 sm:px-6 lg:px-12 relative overflow-hidden" id="faq-page-root">
      {/* Decorative background blobs */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-[#9BA88B]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#D89A63]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top breadcrumb navigation */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between text-xs font-noto-sans-sc">
        <div className="flex items-center gap-2 bg-white/85 backdrop-blur-xs border border-[#ECE7DE] px-4 py-2 rounded-full shadow-xs text-gray-500">
          <button
            onClick={() => onNavigateHome?.()}
            className="hover:text-[#A4B799] flex items-center gap-1.5 transition-colors cursor-pointer font-medium"
          >
            <Home className="w-3.5 h-3.5" />
            {isZh ? '首页' : 'Home'}
          </button>
          <span className="text-gray-300">/</span>
          <span className="text-[#A4B799] font-bold">
            {isZh ? '常见问题' : 'Frequently Asked Questions'}
          </span>
        </div>
        {onNavigateQuiz && (
          <button
            onClick={onNavigateQuiz}
            className="text-gray-600 hover:text-[#A4B799] bg-white/85 backdrop-blur-xs border border-[#ECE7DE] px-4 py-2 rounded-full shadow-xs flex items-center gap-1.5 text-xs font-medium cursor-pointer transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#A4B799]" />
            {isZh ? '测试你的五行能量' : 'Energy Quiz'}
          </button>
        )}
      </div>

      {/* FAQ Hero Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9BA88B]/20 text-[#576751] text-xs font-semibold uppercase tracking-widest mb-4 font-noto-sans-sc">
            <HelpCircle className="w-3.5 h-3.5" />
            {isZh ? '常见问题解答 · 饮食指南' : 'FREQUENTLY ASKED QUESTIONS'}
          </div>

          <h1 className="text-3xl sm:text-5xl font-noto-sans-sc font-black text-[#2F2F2F] tracking-tight mb-4">
            {isZh ? (
              <>常见问题｜<span className="text-[#A4B799]">答疑指南</span></>
            ) : (
              <>Frequently Asked <span className="text-[#A4B799]">Questions</span></>
            )}
          </h1>

          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed max-w-2xl mx-auto font-noto-sans-sc">
            {isZh 
              ? '探索 Hulu Hulu Wellness 五星能量餐、五行金木水火土饮食理念、吉隆坡体验门市与专属用餐指引。'
              : 'Discover Five Elements Energy Dining, our food philosophy, Kuala Lumpur dining experience, and tailored meal options.'}
          </p>
        </motion.div>

        {/* Live Search Box */}
        <div className="mt-8 max-w-xl mx-auto relative">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isZh ? '搜索问题关键词（如：五星能量餐、金木水火土、甜点、孕妇、控盐、吉隆坡、儿童、健身）...' : 'Search questions or keywords (e.g. Five Elements, desserts, pregnant, lower-sodium, Kuala Lumpur, active)...'}
              className="w-full pl-12 pr-10 py-3.5 rounded-full bg-white border border-[#ECE7DE] focus:border-[#A4B799] focus:outline-none focus:ring-2 focus:ring-[#A4B799]/20 text-sm text-[#2F2F2F] font-noto-sans-sc placeholder-gray-400 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                {isZh ? '清除' : 'Clear'}
              </button>
            )}
          </div>
          {searchQuery && (
            <div className="text-left mt-2 px-4 text-xs text-gray-600 font-noto-sans-sc">
              {isZh ? (
                <>找到 <strong className="text-[#A4B799]">{filteredFAQs.length}</strong> 条相关解答</>
              ) : (
                <>Found <strong className="text-[#A4B799]">{filteredFAQs.length}</strong> matching answers</>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {FAQ_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold font-noto-sans-sc whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-[#A4B799] text-white shadow-md shadow-[#A4B799]/20'
                    : 'bg-white/80 border border-[#ECE7DE] text-gray-600 hover:bg-white hover:text-[#2F2F2F]'
                }`}
              >
                {getCategoryIcon(cat.key)}
                <span>{isZh ? cat.label : cat.labelEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Accordion List */}
      <div className="max-w-4xl mx-auto space-y-4 mb-14">
        {filteredFAQs.length === 0 ? (
          <div className="bg-[#FAF8F4] border border-[#ECE7DE] rounded-3xl p-12 text-center">
            <HelpCircle className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-700 font-noto-sans-sc mb-1">
              {isZh ? `未找到与 “${searchQuery}” 相关的答疑` : `No answers matching "${searchQuery}"`}
            </h3>
            <p className="text-xs text-gray-600 font-light mb-6 font-noto-sans-sc">
              {isZh 
                ? '您可以尝试更换搜索词，或者直接点击下方按钮向我们的食愈导师提出您的具体问题。'
                : 'Try adjusting your search terms, or contact our wellness mentor directly via WhatsApp.'}
            </p>
            <button
              onClick={() => handleWhatsAppHelp(searchQuery)}
              className="px-6 py-2.5 rounded-full bg-[#A4B799] text-white text-xs font-semibold font-noto-sans-sc inline-flex items-center gap-1.5 cursor-pointer shadow-sm hover:bg-[#8E9F84] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              {isZh ? '向 WhatsApp 导师提问' : 'Ask Mentor on WhatsApp'}
            </button>
          </div>
        ) : (
          filteredFAQs.map((item) => {
            const isExpanded = expandedId === item.id;
            const currentBadge = isZh ? item.badge : item.badgeEn;
            const currentQuestion = isZh ? item.question : item.questionEn;
            const currentHighlight = isZh ? item.highlightText : item.highlightTextEn;
            const currentAnswer = isZh ? item.answer : item.answerEn;
            const currentTags = isZh ? item.tags : (item.tagsEn || item.tags);

            return (
              <motion.div
                key={item.id}
                layout
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-white border-[#9BA88B]/60 shadow-md'
                    : 'bg-[#FAF8F4] border-[#ECE7DE] hover:bg-white hover:border-[#9BA88B]/30'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="flex-1 font-noto-sans-sc">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#9BA88B]/15 text-[#576751] text-[10px] font-bold">
                        {currentBadge}
                      </span>
                    </div>
                    <h2
                      className={`text-base sm:text-lg font-bold leading-snug transition-colors ${
                        isExpanded ? 'text-[#A4B799]' : 'text-[#2F2F2F]'
                      }`}
                    >
                      {currentQuestion}
                    </h2>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 bg-[#A4B799]/10 text-[#A4B799]' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content Body */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 border-t border-[#ECE7DE]/50 font-noto-sans-sc space-y-4">
                        {/* Highlight Key Takeaway */}
                        {currentHighlight && (
                          <div className="p-3.5 rounded-xl bg-[#9BA88B]/10 border-l-4 border-[#9BA88B] text-xs font-semibold text-[#576751] flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 shrink-0 text-[#9BA88B]" />
                            <span>{currentHighlight}</span>
                          </div>
                        )}

                        {/* Answer paragraphs */}
                        <div className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed whitespace-pre-line">
                          {currentAnswer}
                        </div>

                        {/* Tags and Ask Button */}
                        <div className="pt-3 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-gray-100">
                          <div className="flex flex-wrap items-center gap-1.5 text-gray-600">
                            <Tag className="w-3 h-3 text-gray-600" />
                            {currentTags.map((tag, i) => (
                              <span
                                key={i}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSearchQuery(tag);
                                }}
                                className="px-2 py-0.5 rounded-md bg-gray-100 hover:bg-gray-200 text-[11px] text-gray-600 cursor-pointer transition-colors"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleWhatsAppHelp(currentQuestion);
                            }}
                            className="text-[11px] font-semibold text-[#A4B799] hover:text-[#8E9F84] flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            <MessageCircle className="w-3 h-3" />
                            {isZh ? '对该问题有疑问？咨询导师' : 'Questions on this topic? Ask a mentor'}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        )}
      </div>

      {/* Still Have Questions Dual CTA Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Quiz Link */}
        <div className="bg-[#FAF8F4] border border-[#ECE7DE] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[#A4B799]/10 text-[#A4B799] flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-[#2F2F2F] font-noto-sans-sc mb-2">
              {isZh ? '还不知道自己的五行失衡点？' : 'Unsure of your Five-Element pattern?'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-light font-noto-sans-sc leading-relaxed mb-6">
              {isZh 
                ? '回答 15 道身体本能自测题，生成专属的五行食愈分析报告与五边形雷达图。'
                : 'Answer 15 lifestyle questions to generate your personalized Five Elements radar chart and dietary guide.'}
            </p>
          </div>
          {onNavigateQuiz && (
            <button
              onClick={onNavigateQuiz}
              className="px-6 py-3 rounded-full bg-[#A4B799] hover:bg-[#8E9F84] text-white text-xs font-bold font-noto-sans-sc transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#A4B799]/20"
            >
              {isZh ? '参加五行能量测试' : 'Take Energy Assessment'}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Card 2: WhatsApp Consultation */}
        <div className="bg-[#FAF8F4] border border-[#ECE7DE] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-[#9BA88B]/20 text-[#576751] flex items-center justify-center mb-4">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-[#2F2F2F] font-noto-sans-sc mb-2">
              {isZh ? '有未列出的个性化饮食疑问？' : 'Have personal dietary questions?'}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-light font-noto-sans-sc leading-relaxed mb-6">
              {isZh 
                ? '直接通过 WhatsApp 与我们的五行食愈导师对话，获取 1 对 1 针对性解答。'
                : 'Chat directly with our Five-Element wellness mentors on WhatsApp for tailored answers.'}
            </p>
          </div>
          <button
            onClick={() => handleWhatsAppHelp()}
            className="px-6 py-3 rounded-full bg-[#9BA88B] hover:bg-[#859275] text-white text-xs font-bold font-noto-sans-sc transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#9BA88B]/20"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            {isZh ? '通过 WhatsApp 咨询导师' : 'Consult via WhatsApp'}
          </button>
        </div>
      </div>
    </div>
  );
}

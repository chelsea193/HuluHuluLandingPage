/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  RotateCcw,
  Share2,
  ArrowRight,
  ArrowLeft,
  Home,
  HelpCircle,
  Check,
  Copy,
  Facebook,
  Instagram,
  Sparkles
} from 'lucide-react';
import { ElementType } from '../types';
import { QUIZ_QUESTIONS, RESULT_PROFILES, QuizResultProfile } from '../data/quizData';
import { useLanguage } from '../context/LanguageContext';

interface QuizPageProps {
  onNavigateHome?: (sectionId?: string) => void;
  onNavigateFAQ?: () => void;
  onNavigateMenu?: () => void;
}

export default function QuizPage({ onNavigateHome, onNavigateFAQ, onNavigateMenu }: QuizPageProps) {
  const { language, isZh } = useLanguage();
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const selectedOptionIndex = answers[currentQuestion?.id];

  // Calculate scores and dominant element
  const resultData = useMemo(() => {
    if (!showResult) return null;

    const scores: Record<ElementType, number> = {
      wood: 0,
      fire: 0,
      earth: 0,
      metal: 0,
      water: 0
    };

    QUIZ_QUESTIONS.forEach((q) => {
      const selectedIdx = answers[q.id];
      if (selectedIdx !== undefined && q.options[selectedIdx]) {
        const el = q.options[selectedIdx].element;
        scores[el] += 1;
      }
    });

    const total = 15;
    const percentages: Record<ElementType, number> = {
      wood: Math.round((scores.wood / total) * 100),
      fire: Math.round((scores.fire / total) * 100),
      earth: Math.round((scores.earth / total) * 100),
      metal: Math.round((scores.metal / total) * 100),
      water: Math.round((scores.water / total) * 100)
    };

    // Determine highest score
    let dominantElement: ElementType = 'wood';
    let maxScore = -1;
    const order: ElementType[] = ['wood', 'fire', 'earth', 'metal', 'water'];
    order.forEach((el) => {
      if (scores[el] > maxScore) {
        maxScore = scores[el];
        dominantElement = el;
      }
    });

    const profile: QuizResultProfile = RESULT_PROFILES[dominantElement];

    return {
      scores,
      percentages,
      dominantElement,
      profile,
      total
    };
  }, [showResult, answers]);

  const handleSelectOption = (idx: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: idx
    }));
  };

  const handleNext = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } else {
      setShowResult(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentStep(0);
    setShowResult(false);
    setStarted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyShare = () => {
    if (!resultData) return;
    const shareText = isZh
      ? `我在 Hulu Hulu 完成了【测试你的五行能量】测评！\n我的测试结果是：${resultData.profile.constitutionType}（主要五行倾向：${resultData.profile.chineseName}）\n五行能量比重：木 ${resultData.percentages.wood}% | 火 ${resultData.percentages.fire}% | 土 ${resultData.percentages.earth}% | 金 ${resultData.percentages.metal}% | 水 ${resultData.percentages.water}%\n快来测测你的五行能量吧！\n${window.location.href}`
      : `I just completed the Five Elements Energy Assessment on Hulu Hulu!\nMy Result: ${resultData.profile.constitutionTypeEn} (${resultData.profile.englishName})\nBreakdown: Wood ${resultData.percentages.wood}% | Fire ${resultData.percentages.fire}% | Earth ${resultData.percentages.earth}% | Metal ${resultData.percentages.metal}% | Water ${resultData.percentages.water}%\nDiscover your energy profile now!\n${window.location.href}`;
    navigator.clipboard.writeText(shareText);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  // Helper for Pentagon Radar Coordinates
  const getRadarPolygon = (scores: Record<ElementType, number>) => {
    const elements: ElementType[] = ['wood', 'fire', 'earth', 'metal', 'water'];
    const center = 150;
    const radius = 100;
    const points = elements.map((el, i) => {
      const angle = (Math.PI / 180) * (-90 + i * 72);
      const val = Math.max(0.12, scores[el] / 15);
      const r = radius * val;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      return `${x},${y}`;
    });
    return points.join(' ');
  };

  const getAxisPoints = (i: number, val = 1) => {
    const center = 150;
    const radius = 100 * val;
    const angle = (Math.PI / 180) * (-90 + i * 72);
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle)
    };
  };

  return (
    <div className="w-full min-h-screen pb-24 pt-4 px-4 sm:px-6 lg:px-12 relative overflow-hidden" id="quiz-page-root">
      {/* Decorative ambient background blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#9BA88B]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#A4B799]/10 rounded-full blur-3xl pointer-events-none -z-10" />

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
            {isZh ? '测试你的五行能量' : 'Five Elements Energy Assessment'}
          </span>
        </div>
        {onNavigateFAQ && (
          <button
            onClick={onNavigateFAQ}
            className="text-gray-600 hover:text-[#A4B799] bg-white/85 backdrop-blur-xs border border-[#ECE7DE] px-4 py-2 rounded-full shadow-xs flex items-center gap-1.5 text-xs font-medium cursor-pointer transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#9BA88B]" />
            {isZh ? '常见答疑' : 'Wisdom FAQ'}
          </button>
        )}
      </div>

      {/* ========================================================= */}
      {/* 1. INTRO / START SCREEN */}
      {/* ========================================================= */}
      {!started && !showResult && (
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#FAF8F4] border border-[#ECE7DE] rounded-3xl p-8 sm:p-12 shadow-xl shadow-[#2F2F2F]/5 relative overflow-hidden text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9BA88B]/20 text-[#576751] text-xs font-semibold uppercase tracking-widest mb-6 font-noto-sans-sc">
              <Sparkles className="w-3.5 h-3.5" />
              {isZh ? '东方五行能量自测' : '5-MINUTE ENERGY QUIZ'}
            </div>

            <h1 className="text-3xl sm:text-5xl font-noto-sans-sc font-black text-[#2F2F2F] tracking-tight mb-5 leading-tight">
              {isZh ? (
                <>测试你的<span className="text-[#A4B799]">五行能量</span></>
              ) : (
                <>Discover Your <span className="text-[#A4B799]">Five Elements Energy</span></>
              )}
            </h1>

            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed max-w-xl mx-auto mb-8 font-noto-sans-sc">
              {isZh ? (
                '东方五行（木、火、土、金、水）深刻映射着身体的代谢节律、情绪反应与生活状态。共 15 道题，带你清晰剖析五大能量比重，找回顺应自然的身心平衡。'
              ) : (
                'The Five Elements (Wood, Fire, Earth, Metal, Water) shape your daily energy, mood, and health. Take this 15-question quiz to discover your balance and learn what foods suit you best.'
              )}
            </p>

            {/* Five Elements Display Pill Bar */}
            <div className="grid grid-cols-5 gap-2 sm:gap-4 max-w-md mx-auto mb-8">
              {[
                { label: isZh ? '木' : 'Wood', color: '#8CA080', char: isZh ? '木' : 'W' },
                { label: isZh ? '火' : 'Fire', color: '#C86D5C', char: isZh ? '火' : 'F' },
                { label: isZh ? '土' : 'Earth', color: '#C28E5C', char: isZh ? '土' : 'E' },
                { label: isZh ? '金' : 'Metal', color: '#A69B8D', char: isZh ? '金' : 'M' },
                { label: isZh ? '水' : 'Water', color: '#4A5859', char: isZh ? '水' : 'Wa' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-white/80 border border-[#ECE7DE] flex flex-col items-center justify-center transition-transform hover:-translate-y-1"
                >
                  <span
                    className="w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center mb-1.5 shadow-sm"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.char}
                  </span>
                  <span className="text-[11px] font-bold text-gray-700 font-noto-sans-sc">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculation Rules Note */}
            <div className="bg-[#FFFAE8]/80 rounded-2xl p-4 sm:p-5 mb-10 text-left border border-[#ECE7DE] max-w-lg mx-auto space-y-2 text-xs sm:text-sm text-gray-600 font-noto-sans-sc">
              <div className="font-semibold text-gray-800 mb-1">
                {isZh ? '📋 测验规则说明：' : '📋 Quiz Instructions:'}
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A4B799]" />
                <span>
                  {isZh ? '共 15 道题，每题 5 个选项，单选题。' : '15 simple multiple-choice questions.'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A4B799]" />
                <span>
                  {isZh ? '每个选项对应木、火、土、金、水之一，对应属性 +1 分。' : 'Each answer adds 1 point to Wood, Fire, Earth, Metal, or Water.'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A4B799]" />
                <span>
                  {isZh ? '完成后系统将生成五行百分比雷达图与专属体质调和解读。' : 'Get a personalized chart and food advice based on your results.'}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setStarted(true);
                window.scrollTo({ top: 120, behavior: 'smooth' });
              }}
              className="px-10 py-4 rounded-full bg-[#A4B799] hover:bg-[#8E9F84] text-white text-base font-bold font-noto-sans-sc tracking-wider transition-all duration-300 shadow-xl shadow-[#A4B799]/20 cursor-pointer inline-flex items-center gap-2 group"
            >
              {isZh ? '开始测试五行能量' : 'Start Energy Quiz'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. QUESTIONNAIRE STEPS (15 QUESTIONS) */}
      {/* ========================================================= */}
      {started && !showResult && currentQuestion && (
        <div className="max-w-2xl mx-auto">
          {/* Progress Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs font-noto-sans-sc text-gray-500 mb-2">
              <span className="font-semibold text-[#A4B799] uppercase tracking-wider">
                {currentQuestion.code} ｜ {isZh ? currentQuestion.topic : currentQuestion.topicEn}
              </span>
              <span>
                {isZh ? (
                  <>第 <strong className="text-[#2F2F2F] text-sm">{currentStep + 1}</strong> / {totalQuestions} 题</>
                ) : (
                  <>Question <strong className="text-[#2F2F2F] text-sm">{currentStep + 1}</strong> of {totalQuestions}</>
                )}
              </span>
            </div>

            {/* Animated Progress Bar */}
            <div className="w-full h-2 bg-[#ECE7DE] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#9BA88B] via-[#D89A63] to-[#A4B799]"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="bg-[#FAF8F4] border border-[#ECE7DE] rounded-3xl p-6 sm:p-10 shadow-lg shadow-[#2F2F2F]/5"
            >
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#A4B799]/10 text-[#A4B799] text-xs font-bold mb-3 font-noto-sans-sc">
                  {currentQuestion.code}
                </span>
                <h2 className="text-xl sm:text-2xl font-noto-sans-sc font-bold text-[#2F2F2F] leading-snug">
                  {isZh ? currentQuestion.title : currentQuestion.titleEn}
                </h2>
              </div>

              {/* 5 Options List */}
              <div className="space-y-3 mb-8">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedOptionIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center gap-4 relative group ${isSelected
                        ? 'bg-white border-[#A4B799] ring-2 ring-[#A4B799]/20 shadow-md'
                        : 'bg-white/70 border-[#ECE7DE] hover:bg-white hover:border-[#9BA88B]/60'
                        }`}
                    >
                      {/* Option Key Badge (A, B, C, D, E) */}
                      <div
                        className={`w-7 h-7 rounded-full border text-xs font-bold flex items-center justify-center shrink-0 transition-colors font-mono ${isSelected
                          ? 'border-[#A4B799] bg-[#A4B799] text-white'
                          : 'border-gray-300 text-gray-500 group-hover:border-[#9BA88B] group-hover:text-gray-700'
                          }`}
                      >
                        {option.key}
                      </div>

                      {/* Option Text */}
                      <div className="flex-1 font-noto-sans-sc">
                        <span
                          className={`text-sm sm:text-base leading-relaxed ${isSelected ? 'text-[#2F2F2F] font-semibold' : 'text-gray-700'
                            }`}
                        >
                          {isZh ? option.text : option.textEn}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-[#ECE7DE]">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={`px-5 py-2.5 rounded-full border border-[#ECE7DE] text-xs font-semibold font-noto-sans-sc flex items-center gap-1.5 transition-all ${currentStep === 0
                    ? 'opacity-30 cursor-not-allowed text-gray-400'
                    : 'hover:bg-white text-gray-600 cursor-pointer'
                    }`}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  {isZh ? '上一题' : 'Previous'}
                </button>

                <button
                  onClick={handleNext}
                  disabled={selectedOptionIndex === undefined}
                  className={`px-7 py-3 rounded-full text-xs font-bold font-noto-sans-sc tracking-wider transition-all flex items-center gap-2 ${selectedOptionIndex !== undefined
                    ? 'bg-[#A4B799] hover:bg-[#8E9F84] text-white shadow-md shadow-[#A4B799]/20 cursor-pointer'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                >
                  {currentStep === totalQuestions - 1
                    ? (isZh ? '查看测试结果' : 'View Energy Report')
                    : (isZh ? '下一题' : 'Next Question')
                  }
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. RESULTS DISPLAY (RESULT 01 - 05) */}
      {/* ========================================================= */}
      {showResult && resultData && (
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Top Result Card */}
            <div className="bg-[#FAF8F4] border border-[#ECE7DE] rounded-3xl p-6 sm:p-10 shadow-xl shadow-[#2F2F2F]/5 relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/80 border border-[#ECE7DE] text-gray-700 font-noto-sans-sc">
                  <Sparkles className="w-3.5 h-3.5 text-[#A4B799]" />
                  {isZh ? '测试报告' : 'QUIZ REPORT'} ｜ {isZh ? resultData.profile.chineseName : resultData.profile.englishName}
                </span>
                <span className="text-xs text-gray-500 font-mono">
                  {isZh ? '主要五行倾向' : 'Dominant Element'}: {isZh ? resultData.profile.chineseName : resultData.profile.englishName}
                </span>
              </div>

              {/* Title & Core Feature */}
              <div className="max-w-3xl mb-8">
                <h1 className="text-3xl sm:text-5xl font-noto-sans-sc font-black text-[#2F2F2F] tracking-tight leading-tight mb-3">
                  {isZh ? resultData.profile.constitutionType : resultData.profile.constitutionTypeEn}
                </h1>
                <div className="inline-block px-4 py-1.5 rounded-xl bg-[#A4B799]/10 text-[#A4B799] text-sm font-bold font-noto-sans-sc mb-6">
                  {isZh ? '核心特征：' : 'Key Feature: '}
                  {isZh ? resultData.profile.coreFeature : resultData.profile.coreFeatureEn}
                </div>

                <div className="space-y-3 text-sm sm:text-base text-gray-600 font-light leading-relaxed font-noto-sans-sc">
                  {(isZh ? resultData.profile.description : resultData.profile.descriptionEn).map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* 调和重点 Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#ECE7DE] font-noto-sans-sc mb-8">
                <div className="text-xs uppercase tracking-widest font-bold text-[#9BA88B] mb-2">
                  {isZh ? '您的调和重点是：' : 'How to Balance Your Body:'}
                </div>
                <div className="text-base sm:text-lg font-bold text-[#2F2F2F] mb-2">
                  {isZh ? resultData.profile.keyAdvice.highlight : resultData.profile.keyAdvice.highlightEn}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {isZh ? resultData.profile.keyAdvice.details : resultData.profile.keyAdvice.detailsEn}
                </p>
              </div>

              {/* ========================================================= */}
              {/* 五行能量密码 & 雷达图 */}
              {/* ========================================================= */}
              <div className="pt-6 border-t border-[#ECE7DE]">
                <h2 className="text-xl font-bold font-noto-sans-sc text-[#2F2F2F] mb-2">
                  {isZh ? '您的五行能量密码' : 'Your Energy Breakdown'}
                </h2>
                <p className="text-xs text-gray-500 font-noto-sans-sc mb-6">
                  {isZh
                    ? '数值代表在15道题中所选该属性的次数（最大15分 / 最小0分）'
                    : 'Points scored out of 15 questions for each element'}
                </p>

                {/* Score Pills Row */}
                <div className="grid grid-cols-5 gap-2 sm:gap-4 mb-8">
                  {[
                    { label: isZh ? '木' : 'Wood', key: 'wood' as ElementType, color: '#8CA080' },
                    { label: isZh ? '火' : 'Fire', key: 'fire' as ElementType, color: '#C86D5C' },
                    { label: isZh ? '土' : 'Earth', key: 'earth' as ElementType, color: '#C28E5C' },
                    { label: isZh ? '金' : 'Metal', key: 'metal' as ElementType, color: '#A69B8D' },
                    { label: isZh ? '水' : 'Water', key: 'water' as ElementType, color: '#4A5859' }
                  ].map((item) => {
                    const score = resultData.scores[item.key];
                    const pct = resultData.percentages[item.key];
                    const isDominant = item.key === resultData.dominantElement;
                    return (
                      <div
                        key={item.key}
                        className={`p-1.5 sm:p-4 rounded-2xl border text-center transition-all flex flex-col justify-between ${isDominant
                          ? 'bg-white border-[#A4B799] shadow-md ring-2 ring-[#A4B799]/20'
                          : 'bg-white/60 border-[#ECE7DE]'
                          }`}
                      >
                        {/* Line 1：皇冠（独占一行） */}
                        <div className="h-4 sm:h-5 flex items-center justify-center text-xs sm:text-sm mb-0.5">
                          {isDominant ? <span>👑</span> : null}
                        </div>

                        {/* Line 2：五行名称 */}
                        <div className="text-xs sm:text-sm font-bold text-gray-700 font-noto-sans-sc">
                          {item.label}
                        </div>

                        {/* Line 3：分数（核心修复：加上 whitespace-nowrap 绝不换行，并降低小屏字号） */}
                        <div className="text-[9px] sm:text-[11px] text-gray-400 font-noto-sans-sc my-0.5 whitespace-nowrap tracking-tighter sm:tracking-normal">
                          （{score}{isZh ? '分' : 'pts'}）
                        </div>

                        {/* Line 4：百分比 */}
                        <div className="text-sm sm:text-2xl font-black font-mono text-[#2F2F2F]">
                          {pct}%
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* SVG Radar Chart & Percentage Bars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/70 p-6 rounded-3xl border border-[#ECE7DE]">
                  {/* Radar Chart Column */}
                  <div className="md:col-span-6 flex flex-col items-center">
                    <div className="text-xs font-bold text-gray-500 font-noto-sans-sc mb-2">
                      {isZh ? '五行能量密码雷达图' : 'Energy Radar Chart'}
                    </div>
                    <div className="relative w-[280px] h-[280px]">
                      <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
                        {/* Background Concentric Pentagon Grid */}
                        {[0.25, 0.5, 0.75, 1].map((scale, sIdx) => {
                          const gridPoints = [0, 1, 2, 3, 4]
                            .map((i) => {
                              const p = getAxisPoints(i, scale);
                              return `${p.x},${p.y}`;
                            })
                            .join(' ');
                          return (
                            <polygon
                              key={sIdx}
                              points={gridPoints}
                              fill="none"
                              stroke="#ECE7DE"
                              strokeWidth={scale === 1 ? '1.5' : '1'}
                              strokeDasharray={scale === 1 ? 'none' : '3 3'}
                            />
                          );
                        })}

                        {/* Radial Axis lines */}
                        {[0, 1, 2, 3, 4].map((i) => {
                          const p = getAxisPoints(i, 1);
                          return (
                            <line
                              key={i}
                              x1={150}
                              y1={150}
                              x2={p.x}
                              y2={p.y}
                              stroke="#ECE7DE"
                              strokeWidth="1"
                            />
                          );
                        })}

                        {/* Dynamic User Polygon */}
                        <polygon
                          points={getRadarPolygon(resultData.scores)}
                          fill="rgba(145, 161, 121, 0.25)"
                          stroke="#A4B799"
                          strokeWidth="2.5"
                          className="transition-all duration-700"
                        />

                        {/* Polygon Corner Dots */}
                        {[0, 1, 2, 3, 4].map((i) => {
                          const elements: ElementType[] = ['wood', 'fire', 'earth', 'metal', 'water'];
                          const el = elements[i];
                          const angle = (Math.PI / 180) * (-90 + i * 72);
                          const val = Math.max(0.12, resultData.scores[el] / 15);
                          const r = 100 * val;
                          const x = 150 + r * Math.cos(angle);
                          const y = 150 + r * Math.sin(angle);
                          return (
                            <circle
                              key={i}
                              cx={x}
                              cy={y}
                              r="4.5"
                              fill="#A4B799"
                              stroke="#FAF8F4"
                              strokeWidth="2"
                            />
                          );
                        })}

                        {/* Outer Labels */}
                        {[
                          { name: isZh ? '木' : 'Wood', i: 0, dy: -12, dx: 0, textAnchor: 'middle' },
                          { name: isZh ? '火' : 'Fire', i: 1, dy: 5, dx: 14, textAnchor: 'start' },
                          { name: isZh ? '土' : 'Earth', i: 2, dy: 16, dx: 10, textAnchor: 'start' },
                          { name: isZh ? '金' : 'Metal', i: 3, dy: 16, dx: -10, textAnchor: 'end' },
                          { name: isZh ? '水' : 'Water', i: 4, dy: 5, dx: -14, textAnchor: 'end' }
                        ].map((label, idx) => {
                          const p = getAxisPoints(label.i, 1.22);
                          return (
                            <text
                              key={idx}
                              x={p.x + label.dx}
                              y={p.y + label.dy}
                              textAnchor={label.textAnchor as any}
                              className="text-[11px] font-bold fill-gray-600 font-noto-sans-sc"
                            >
                              {label.name}
                            </text>
                          );
                        })}
                      </svg>
                    </div>
                  </div>

                  {/* Percentage Progress Bars Column */}
                  <div className="md:col-span-6 space-y-3.5 font-noto-sans-sc">
                    <div className="text-xs font-bold text-gray-500 mb-1">
                      {isZh ? '各五行百分比明细' : 'Element Percentages'}
                    </div>
                    {[
                      { key: 'wood' as ElementType, name: isZh ? '木能' : 'Wood', color: '#8CA080' },
                      { key: 'fire' as ElementType, name: isZh ? '火能' : 'Fire', color: '#C86D5C' },
                      { key: 'earth' as ElementType, name: isZh ? '土能' : 'Earth', color: '#C28E5C' },
                      { key: 'metal' as ElementType, name: isZh ? '金能' : 'Metal', color: '#A69B8D' },
                      { key: 'water' as ElementType, name: isZh ? '水能' : 'Water', color: '#4A5859' }
                    ].map((item) => {
                      const score = resultData.scores[item.key];
                      const pct = resultData.percentages[item.key];
                      const isDominant = item.key === resultData.dominantElement;
                      return (
                        <div key={item.key} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className={`font-semibold flex items-center gap-1.5 ${isDominant ? 'text-[#A4B799] font-bold' : 'text-gray-700'}`}>
                              {isDominant && <span>👑</span>}
                              <span>{item.name}</span>
                              <span className="text-gray-600 font-normal">({score}{isZh ? '分' : 'pts'})</span>
                            </span>
                            <span className="font-mono font-bold text-gray-700">{pct}%</span>
                          </div>
                          <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden p-0.5">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ backgroundColor: isDominant ? '#A4B799' : item.color }}
                              initial={{ width: 0 }}
                              animate={{ width: `${pct}%` }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================= */}
            {/* 五大能量属性比重剖析 */}
            {/* ========================================================= */}
            <div className="bg-[#FAF8F4] border border-[#ECE7DE] rounded-3xl p-6 sm:p-10 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold font-noto-sans-sc text-[#2F2F2F] mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#A4B799]" />
                {isZh ? '五大能量属性比重剖析' : 'In-Depth Analysis of Five Energy Properties'}
              </h2>

              <div className="space-y-6 font-noto-sans-sc">
                {(Object.keys(resultData.profile.elementDetails) as ElementType[]).map((elKey) => {
                  const detail = resultData.profile.elementDetails[elKey];
                  const score = resultData.scores[elKey];
                  const isDominant = elKey === resultData.dominantElement;
                  return (
                    <div
                      key={elKey}
                      className={`p-5 sm:p-6 rounded-2xl border transition-all ${isDominant
                        ? 'bg-white border-[#A4B799] shadow-md ring-1 ring-[#A4B799]/20'
                        : 'bg-white/70 border-[#ECE7DE]'
                        }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          {isDominant && <span className="text-lg">👑</span>}
                          <span className={`text-base font-bold ${isDominant ? 'text-[#A4B799]' : 'text-gray-800'}`}>
                            {isZh ? detail.name : detail.nameEn} ｜ {score}{isZh ? '分' : ' pts'}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {isZh
                            ? `${detail.quote}：${detail.subQuote}`
                            : `${detail.quoteEn}: ${detail.subQuoteEn}`}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                        {isZh ? detail.description : detail.descriptionEn}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ========================================================= */}
            {/* 六、结果页底部统一 CTA */}
            {/* ========================================================= */}
            <div className="bg-gradient-to-b from-[#FAF8F4] to-[#ECE7DE]/50 border border-[#ECE7DE] rounded-3xl p-8 sm:p-12 text-center font-noto-sans-sc space-y-6">
              <div className="max-w-xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2F2F2F] mb-3">
                  {isZh
                    ? '从一个小改变开始，找回自己的生活节奏。'
                    : 'Begin with a gentle shift to reclaim your natural rhythm.'}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {isZh ? (
                    <>睡眠、饮食、情绪和生活方式，<br />都会影响我们每天的身心状态。</>
                  ) : (
                    <>Sleep, diet, emotional flow, and living patterns<br />profoundly shape our daily energetic well-being.</>
                  )}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                {/* 重新测试 */}
                <button
                  onClick={handleRestart}
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-gray-50 border border-[#ECE7DE] text-gray-700 text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 shadow-sm"
                >
                  <RotateCcw className="w-4 h-4 text-gray-500" />
                  {isZh ? '重新测试' : 'Retake Assessment'}
                </button>

                {/* 分享我的五行结果 */}
                <button
                  onClick={() => setShowShareModal(true)}
                  className="px-6 py-3.5 rounded-full bg-[#A4B799] hover:bg-[#8E9F84] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md shadow-[#A4B799]/20 cursor-pointer flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  {isZh ? '分享我的五行结果' : 'Share My Results'}
                </button>

                {/* 浏览御膳食材库 */}
                <button
                  onClick={() => onNavigateMenu?.()}
                  className="px-6 py-3.5 rounded-full bg-[#9BA88B] hover:bg-[#859275] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md shadow-[#9BA88B]/20 cursor-pointer flex items-center gap-1.5"
                >
                  <span>
                    {isZh
                      ? '根据结果查看推荐食材 · 浏览御膳食材库'
                      : 'Recommended Foods · Explore Healing Pantry'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Disclaimer */}
              <p className="text-[11px] text-gray-600 font-light pt-4 max-w-lg mx-auto border-t border-[#ECE7DE]">
                {isZh
                  ? '本测验基于养生概念设计，仅供个人状态观察及一般生活方式参考，测试结果不代表医学诊断。'
                  : 'This assessment is designed on holistic wellness principles for personal reflection and does not substitute medical diagnosis.'}
              </p>
            </div>
          </motion.div>
        </div>
      )}

      {/* Share Modal Dialog */}
      <AnimatePresence>
        {showShareModal && resultData && (
          <div className="fixed inset-0 z-[6000] flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs font-noto-sans-sc">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#FAF8F4] border border-[#ECE7DE] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative"
            >
              <h4 className="text-lg font-bold text-[#2F2F2F] mb-2 text-center">
                {isZh ? '分享我的五行能量结果' : 'Share My Five Elements Profile'}
              </h4>
              <p className="text-xs text-gray-500 text-center mb-6">
                {isZh
                  ? '让朋友也来测测属于自己的五行能量密码'
                  : 'Invite friends to uncover their personalized Five-Element energy'}
              </p>

              {/* Share Preview Card */}
              <div className="p-4 rounded-2xl bg-white border border-[#ECE7DE] mb-6 text-left">
                <div className="text-[10px] text-[#A4B799] font-bold uppercase tracking-wider mb-1">
                  Hulu Hulu · {isZh ? '五行能量测试' : 'Energy Assessment'}
                </div>
                <div className="text-base font-bold text-[#2F2F2F] mb-1">
                  {isZh ? resultData.profile.constitutionType : resultData.profile.constitutionTypeEn}
                </div>
                <div className="text-xs text-gray-600 mb-3">
                  {isZh ? '主要五行倾向：' : 'Dominant Element: '}{isZh ? resultData.profile.chineseName : resultData.profile.englishName}
                </div>
                <div className="text-[11px] text-gray-500 font-mono bg-gray-50 p-2 rounded-lg">
                  {isZh ? '木' : 'Wood'} {resultData.percentages.wood}% ｜ {isZh ? '火' : 'Fire'} {resultData.percentages.fire}% ｜ {isZh ? '土' : 'Earth'} {resultData.percentages.earth}% ｜ {isZh ? '金' : 'Metal'} {resultData.percentages.metal}% ｜ {isZh ? '水' : 'Water'} {resultData.percentages.water}%
                </div>
              </div>

              {/* Share Actions */}
              <div className="space-y-3">
                <button
                  onClick={handleCopyShare}
                  className="w-full py-3 rounded-full bg-[#A4B799] text-white text-xs font-bold hover:bg-[#8E9F84] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  {copiedLink ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copiedLink
                    ? (isZh ? '已复制分享文案与链接！' : 'Link & summary copied!')
                    : (isZh ? '复制结果文案与链接' : 'Copy Summary & Link')}
                </button>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 rounded-full bg-white border border-[#ECE7DE] hover:bg-gray-50 text-xs font-semibold text-gray-700 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Facebook className="w-3.5 h-3.5 text-blue-600" />
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 rounded-full bg-white border border-[#ECE7DE] hover:bg-gray-50 text-xs font-semibold text-gray-700 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pink-600" />
                    Instagram
                  </a>
                </div>

                <button
                  onClick={() => setShowShareModal(false)}
                  className="w-full py-2.5 text-xs text-gray-600 hover:text-gray-700 cursor-pointer transition-colors"
                >
                  {isZh ? '关闭' : 'Close'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

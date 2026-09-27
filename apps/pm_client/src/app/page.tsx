'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState({
    goal: 'pcos',
    setting: 'home',
    time: '20min',
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubscribed(true);
      setTimeout(() => setEmailSubscribed(false), 4500);
      setEmailInput('');
    }
  };

  const faqs = [
    {
      question: 'Will I have to cook separate meals from my family?',
      answer:
        'Never. Our entire philosophy is rooted in traditional Indian home cooking — dal, roti, sabzi, rice, and regional staples. We teach you how to portion, optimize protein intake, and adapt home-cooked meals so you can dine happily with your family without cooking two separate meals.',
    },
    {
      question: 'Can I do this if I have severe PCOD or Thyroid issues?',
      answer:
        'Yes, this is our core clinical specialization. Over 70% of our clients join with PCOS/PCOD, hypothyroidism, or insulin resistance. We customize carb distribution, focus on anti-inflammatory micronutrients, and incorporate restorative strength sessions that lower cortisol rather than elevate stress hormones.',
    },
    {
      question: 'Do I need gym equipment or heavy weights?',
      answer:
        'Not at all. You can start right in your living room with just a single pair of light adjustable dumbbells or resistance bands. As your confidence and strength grow, we progressively upgrade your routine to suit your home space or gym preference.',
    },
    {
      question: 'What if I travel frequently or attend family weddings?',
      answer:
        'Life happens, and Indian celebrations are non-negotiable! We give you a tailored "Social & Festive Dining Protocol". You will learn how to navigate buffets, enjoy sweets mindfully, and maintain your metabolism on the go without guilt or rebound weight gain.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1E1D1B] selection:bg-[#EADBCC] selection:text-[#1F1E1C] overflow-x-hidden font-sans">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <aside
        aria-label="Announcement"
        className="bg-[#F6EFE4] border-b border-[#E8DEC9] text-[#554B3E] text-xs sm:text-[13px] py-2.5 px-4 sm:px-8"
      >
        <div className="max-w-[1480px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2.5 font-medium flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center px-2 py-0.5 bg-[#B85D3B]/10 text-[#B85D3B] rounded-full text-[11px] font-semibold tracking-wide uppercase">
              Limited Spots Offer
            </span>
            <span>Exclusive 1-on-1 Mentorship spots open for this cohort (only 5 left)</span>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="font-semibold text-[#B85D3B] hover:text-[#914427] inline-flex items-center gap-1.5 transition-colors group cursor-pointer text-xs sm:text-[13px]"
          >
            <span>Apply To Qualify</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </aside>

      {/* 2. HEADER & NAVIGATION (WIDE FULL-WIDTH) */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EAE1D3] transition-all">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3.5 group shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#EFE6D7] border border-[#DDD0BC] flex items-center justify-center text-[#B85D3B] group-hover:bg-[#E8DCC8] transition-colors shadow-xs">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3v18M12 3C8.5 7.5 5 10 5 14a7 7 0 0 0 14 0c0-4-3.5-6.5-7-11Z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 12c-2.5 1-4 3-4 5M12 12c2.5 1 4 3 4 5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold tracking-tight text-[#1C1B19] leading-none">
                Prerna Coaching
              </div>
              <div className="text-[10px] tracking-widest text-[#7C7468] uppercase font-semibold mt-1">
                Strength & Hormonal Wellness
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[14px] font-medium text-[#4D473E]">
            <a href="#" className="text-[#1C1B19] font-semibold border-b-2 border-[#B85D3B] pb-0.5">
              Home
            </a>
            <a href="#programs" className="hover:text-[#B85D3B] transition-colors">
              Programs
            </a>
            <a href="#transformation" className="hover:text-[#B85D3B] transition-colors">
              Transformation Stories
            </a>
            <a href="#about" className="hover:text-[#B85D3B] transition-colors">
              About Coach
            </a>
            <a href="#tools" className="hover:text-[#B85D3B] transition-colors">
              Space & Tools
            </a>
            <a href="#faq" className="hover:text-[#B85D3B] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="text-[#665F53] hover:text-[#1C1B19] p-2 transition-colors cursor-pointer"
              title="Search programs"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m20 20-3.5-3.5" />
              </svg>
            </button>

            <button
              onClick={() => setModalOpen(true)}
              className="text-[#665F53] hover:text-[#1C1B19] p-2 transition-colors cursor-pointer relative"
              title="Shopping Cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h15l-1.5 9h-12zM6 6l-1.5-3H2M9 19.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
              </svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#B85D3B]"></span>
            </button>

            {/* Profile Avatar & Sign In */}
            <div className="flex items-center gap-3 pl-3 border-l border-[#E2D8C9]">
              <div className="relative">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-white shadow-xs">
                  <Image
                    src="/images/coach_bhavya.jpg"
                    alt="Coach Bhavya"
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="text-xs font-semibold px-4 py-2 rounded-full border border-[#D5C7B4] bg-white hover:bg-[#F6EFE5] text-[#2F2B25] transition-all cursor-pointer shadow-2xs"
              >
                Sign In ↗
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#3E3A33] hover:bg-[#EFE7DC] transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-[#E5DACB] bg-[#FAF7F2] px-6 py-6 space-y-4 shadow-lg">
            <nav className="flex flex-col space-y-3 font-medium text-[#464139]">
              <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-[#B85D3B] font-semibold">
                Home
              </a>
              <a href="#programs" onClick={() => setMobileMenuOpen(false)}>
                Programs
              </a>
              <a href="#transformation" onClick={() => setMobileMenuOpen(false)}>
                Transformation Stories
              </a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                About Coach
              </a>
              <a href="#tools" onClick={() => setMobileMenuOpen(false)}>
                Space & Tools
              </a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </a>
            </nav>
            <div className="pt-4 border-t border-[#E8DEC7]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setModalOpen(true);
                }}
                className="w-full text-center py-3 rounded-full bg-[#1C1B19] text-white font-medium text-sm shadow-md"
              >
                Apply for Coaching
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (WIDE RESPONSIVE WITH BALANCED COLUMNS) */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        {/* Ambient atmospheric glow */}
        <div className="absolute top-12 right-0 w-[600px] h-[600px] rounded-full bg-[#F3E6D3]/60 blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#FAECE0]/50 blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
            {/* Left Column (Hero Content - Expanded to fill screen harmoniously) */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-6 sm:space-y-8">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D8CDBC] bg-[#F4EFE6] text-xs font-semibold text-[#544D42] uppercase tracking-wide shadow-2xs">
                  <svg className="w-3.5 h-3.5 text-[#3D5A45]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M12 2a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9A9 9 0 0 1 3 11a9 9 0 0 1 9-9Z" />
                    <path d="M12 12a4 4 0 0 0-4-4" />
                  </svg>
                  <span>Sustainable Strength & Metabolic Reset</span>
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D8CDBC] bg-[#F4EFE6] text-xs font-semibold text-[#544D42] uppercase tracking-wide shadow-2xs">
                  <svg className="w-3.5 h-3.5 text-[#3D5A45]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M7 20h10M12 20v-8M12 12a5 5 0 0 0 5-5c0-3-2.5-4-5-4s-5 1-5 4a5 5 0 0 0 5 5Z" />
                  </svg>
                  <span>PCOS & Thyroid Protocol</span>
                </span>
              </div>

              {/* Main Headline - Generous Line Length */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] text-[#1C1B19] leading-[1.12] tracking-tight font-normal">
                Build Strength, Balance Hormones &{' '}
                <span className="italic font-serif text-[#B85D3B] font-normal">Feel Radiant</span>{' '}
                in Your Body.
              </h1>

              {/* Subtitle with generous readable width */}
              <p className="text-base sm:text-lg lg:text-[19px] text-[#554F45] leading-relaxed max-w-2xl font-normal">
                Customized workout and nutrition blueprints designed for busy Indian lifestyles, festive schedules, and joint realities — without starvation or scary gym culture.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#1C1B19] hover:bg-[#312F2A] text-white text-sm sm:text-[15px] font-semibold transition-all shadow-md hover:shadow-xl cursor-pointer group"
                >
                  <span>Explore Programs</span>
                  <span className="text-[#EADBCC] group-hover:rotate-12 transition-transform">✦</span>
                </button>

                <a
                  href="#transformation"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full border border-[#D8CDBD] bg-white/80 hover:bg-white text-[#2B2721] text-sm sm:text-[15px] font-semibold transition-all shadow-xs hover:border-[#B85D3B]"
                >
                  <span className="w-5 h-5 rounded-full bg-[#B85D3B]/10 text-[#B85D3B] flex items-center justify-center text-[10px]">
                    ▶
                  </span>
                  <span>Watch Client Stories</span>
                </a>
              </div>

              {/* Trust Metric Strip - Generous Breathing Space */}
              <div className="pt-8 border-t border-[#EAE0D1] grid grid-cols-3 gap-6 sm:gap-12 max-w-2xl">
                <div>
                  <div className="flex items-center gap-1.5 font-serif text-lg sm:text-2xl font-bold text-[#1C1B19]">
                    <span className="text-amber-500 text-base sm:text-lg">★</span> 4.9/5
                  </div>
                  <div className="text-xs sm:text-[13px] text-[#6B6457] mt-1 font-medium">120+ Verified Reviews</div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 font-serif text-lg sm:text-2xl font-bold text-[#1C1B19]">
                    <span className="text-[#3D5A45] text-base sm:text-lg">↻</span> 88% Success
                  </div>
                  <div className="text-xs sm:text-[13px] text-[#6B6457] mt-1 font-medium">Clinical Health Goals</div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 font-serif text-lg sm:text-2xl font-bold text-[#1C1B19]">
                    <span className="text-[#B85D3B] text-base sm:text-lg">📍</span> Worldwide
                  </div>
                  <div className="text-xs sm:text-[13px] text-[#6B6457] mt-1 font-medium">14+ Countries, UK, US, UAE</div>
                </div>
              </div>
            </div>

            {/* Right Column (Hero Coach Portrait Card) */}
            <div id="about" className="lg:col-span-5 xl:col-span-5 relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
              {/* Outer Photo Card with balanced proportion */}
              <div className="relative w-full max-w-[440px] xl:max-w-[480px] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-[#EFE7DC] group">
                <div className="aspect-[4/5] relative w-full overflow-hidden">
                  <Image
                    src="/images/coach_bhavya.jpg"
                    alt="Coach Bhavya Rao"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  {/* Subtle gradient dark scrim for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
                </div>

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-md text-[11px] font-bold text-[#2A2722] border border-[#E9DFD1]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>AVAILABLE: 3 SLOTS THIS COHORT</span>
                  </div>
                </div>

                {/* Bottom Overlay Info on Coach Card */}
                <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                  <div className="text-[10px] tracking-widest uppercase font-semibold text-[#E5D7C5]">
                    Founder & Lead Coach
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-0.5">
                    Coach Bhavya Rao
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#EDE4D8] mt-1 font-light leading-snug">
                    CSCS Certified Coach | Women&apos;s Hormone & Strength Specialist
                  </p>
                </div>
              </div>

              {/* Floating Stat Pill (overlapping bottom-left) */}
              <div className="absolute -bottom-6 left-2 sm:-left-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-[#E8DFD0] flex items-center gap-3.5 max-w-[280px]">
                <div className="w-10 h-10 rounded-xl bg-[#F9ECE7] text-[#B85D3B] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1C1B19]">80% Weight Kept Off</div>
                  <div className="text-[11px] text-[#6E675D]">Clinically proven sustainable routine</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 4-PILLAR BENEFIT STRIP */}
      <section className="border-y border-[#E6DDCF] bg-[#F7F2E8]/70 py-8">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Pillar 1 */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white border border-[#E2D6C5] flex items-center justify-center text-[#B85D3B] shrink-0 shadow-xs">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1C1B19]">Indian Diets & Khana</h4>
                <p className="text-xs text-[#686154] mt-1 leading-snug">
                  Rotis, dals, sabzis, and festive meals included.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white border border-[#E2D6C5] flex items-center justify-center text-[#B85D3B] shrink-0 shadow-xs">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1C1B19]">15–30 Min Workouts</h4>
                <p className="text-xs text-[#686154] mt-1 leading-snug">
                  Progressive, short sessions built around busy days.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white border border-[#E2D6C5] flex items-center justify-center text-[#B85D3B] shrink-0 shadow-xs">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1C1B19]">Gynec & Endocrine Care</h4>
                <p className="text-xs text-[#686154] mt-1 leading-snug">
                  Real guidance for PCOS, Thyroid & Peri-menopause.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-white border border-[#E2D6C5] flex items-center justify-center text-[#B85D3B] shrink-0 shadow-xs">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1C1B19]">1-1 Daily Mentoring</h4>
                <p className="text-xs text-[#686154] mt-1 leading-snug">
                  Direct WhatsApp accountability weekly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 2: "What Does Your Body Need Today?" */}
      <section id="programs" className="py-20 lg:py-24">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Header with generous description width */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#EAE1D3]">
            <div>
              <span className="text-[11px] uppercase tracking-widest font-bold text-[#B85D3B]">
                Curated For Every Woman
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1B19] mt-2 tracking-tight">
                What Does Your Body Need Today?
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#615A4F] max-w-xl leading-relaxed">
              We provide 3 distinct paths tailored to where you are right now. Every journey starts by understanding your baseline hormones, lifestyle, and goals to build lasting vitality.
            </p>
          </div>

          {/* 3 Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {/* Card 1: Sustainable Fat Loss & PCOS */}
            <div className="rounded-3xl bg-white border border-[#E6DDCF] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="p-3 relative aspect-[16/11] w-full overflow-hidden bg-[#F4EFE7]">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/nutrition_bowl.jpg"
                    alt="Indian Balanced Meal"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#1C1B19] tracking-wider uppercase">
                    Metabolic Nutrition
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#3D5A45] mb-2 uppercase tracking-wide">
                    <span>🌱</span> Hormones & Weight Regulation
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1B19] leading-snug">
                    Sustainable Fat Loss & PCOS Management
                  </h3>
                  <p className="text-sm text-[#5F584D] mt-3 leading-relaxed">
                    Target insulin resistance, calm chronic bloating, and restore regular cycles. Focused nutrition coaching and gentle daily protocols tailored to your schedule.
                  </p>

                  <ul className="mt-5 space-y-2.5 text-xs sm:text-[13px] text-[#474238]">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#3D5A45] font-bold">✓</span>
                      <span>Personalized macro and fiber targets</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#3D5A45] font-bold">✓</span>
                      <span>Anti-inflammatory meal plans for Indian diets</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#3D5A45] font-bold">✓</span>
                      <span>WhatsApp check-ins and lab review</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F0E9DE]">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full py-3 rounded-full border border-[#D8CDBD] hover:border-[#1C1B19] hover:bg-[#FAF7F2] text-xs font-bold text-[#1C1B19] flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Explore PCOS Blueprint</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Strength & Muscle Toning */}
            <div className="rounded-3xl bg-white border border-[#E6DDCF] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="p-3 relative aspect-[16/11] w-full overflow-hidden bg-[#F4EFE7]">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/strength_workout.jpg"
                    alt="Strength Workout"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#1C1B19] tracking-wider uppercase">
                    Strength Training
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#B85D3B] mb-2 uppercase tracking-wide">
                    <span>💪</span> Progressive Resistance
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1B19] leading-snug">
                    Strength & Muscle Toning (Home or Gym)
                  </h3>
                  <p className="text-sm text-[#5F584D] mt-3 leading-relaxed">
                    Safe progressive overload to build bone density, rev metabolism, and lean muscle mass designed for beginners or intermediate gym-goers.
                  </p>

                  <ul className="mt-5 space-y-2.5 text-xs sm:text-[13px] text-[#474238]">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#3D5A45] font-bold">✓</span>
                      <span>Customized dumbbell or barbell track</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#3D5A45] font-bold">✓</span>
                      <span>Form check video analysis via coach</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#3D5A45] font-bold">✓</span>
                      <span>Mobility and joint rehabilitation focus</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F0E9DE]">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full py-3 rounded-full border border-[#D8CDBD] hover:border-[#1C1B19] hover:bg-[#FAF7F2] text-xs font-bold text-[#1C1B19] flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Explore Strength Track</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: 1-on-1 VIP Transformational Coaching (POPULAR) */}
            <div className="rounded-3xl bg-white border-2 border-[#B85D3B] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col relative group">
              {/* Popular Tag */}
              <div className="absolute top-4 right-4 z-20 bg-[#B85D3B] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Most Popular
              </div>

              <div className="p-3 relative aspect-[16/11] w-full overflow-hidden bg-[#F4EFE7]">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/coaching_call.jpg"
                    alt="VIP Coaching"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#1C1B19] tracking-wider uppercase">
                    1-on-1 Coaching
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8B4228] mb-2 uppercase tracking-wide">
                    <span>⭐</span> Complete VIP Immersion
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1B19] leading-snug">
                    1-on-1 VIP Transformational Coaching
                  </h3>
                  <p className="text-sm text-[#5F584D] mt-3 leading-relaxed">
                    One-on-one deep mentorship with Coach Bhavya. Weekly video calls, public event / travel meal adaptations, and complete lifestyle integration.
                  </p>

                  <ul className="mt-5 space-y-2.5 text-xs sm:text-[13px] text-[#474238]">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#3D5A45] font-bold">✓</span>
                      <span>Direct WhatsApp access & continuous guidance</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#3D5A45] font-bold">✓</span>
                      <span>Weekly 1-on-1 video call consultations</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#3D5A45] font-bold">✓</span>
                      <span>Dedicated gynecologist & hormone specialist input</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F0E9DE]">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full py-3 rounded-full bg-[#1C1B19] hover:bg-[#312F2A] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                  >
                    <span>Apply for VIP Mentorship</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 3: "The 90-Day Metamorphosis Blueprint" */}
      <section id="tools" className="py-12 sm:py-16">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="rounded-[32px] bg-gradient-to-br from-[#FDF9F3] via-[#FAF4EA] to-[#F5ECE0] border border-[#E5DACB] p-6 sm:p-10 lg:p-14 shadow-xl relative overflow-hidden">
            {/* Background subtle radial glow */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#F3DEC5]/40 blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3.5 py-1 rounded-full bg-[#EADDCB] text-[#554C40] text-xs font-bold uppercase tracking-wider">
                    Flagship Program
                  </span>
                  <span className="text-xs font-semibold text-[#B85D3B] flex items-center gap-1.5">
                    <span>🔥</span> Next Cohort Starts Soon (Only 5 Slots Left)
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1B19] font-normal leading-tight max-w-xl">
                  The 90-Day Metamorphosis Blueprint
                </h2>

                <p className="text-sm sm:text-base text-[#5F584D] leading-relaxed max-w-xl">
                  Our comprehensive 3-step solution and endocrine reset system built around Indian households. Learn how to transform without stress and eat joyfully without counting every single almond.
                </p>

                {/* 4 Feature Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 max-w-2xl">
                  <div className="flex items-start gap-3.5 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-[#E9DFCF]">
                    <div className="w-8 h-8 rounded-full bg-[#FAF3E8] border border-[#E3D6C2] flex items-center justify-center text-[#B85D3B] shrink-0 text-xs font-bold">
                      01
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1C1B19]">Custom Home Plan</div>
                      <div className="text-[11px] text-[#696357] mt-1 leading-snug">
                        Workouts tailor-made to your floor, joints & gear.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-[#E9DFCF]">
                    <div className="w-8 h-8 rounded-full bg-[#FAF3E8] border border-[#E3D6C2] flex items-center justify-center text-[#B85D3B] shrink-0 text-xs font-bold">
                      02
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1C1B19]">Weekly Video Form Checks</div>
                      <div className="text-[11px] text-[#696357] mt-1 leading-snug">
                        Send WhatsApp videos, get voice memo feedback.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-[#E9DFCF]">
                    <div className="w-8 h-8 rounded-full bg-[#FAF3E8] border border-[#E3D6C2] flex items-center justify-center text-[#B85D3B] shrink-0 text-xs font-bold">
                      03
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1C1B19]">Smart Nutrition Guide</div>
                      <div className="text-[11px] text-[#696357] mt-1 leading-snug">
                        How to dine out, handle weddings, and eat rotis.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-[#E9DFCF]">
                    <div className="w-8 h-8 rounded-full bg-[#FAF3E8] border border-[#E3D6C2] flex items-center justify-center text-[#B85D3B] shrink-0 text-xs font-bold">
                      04
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1C1B19]">365-Day Access to Core</div>
                      <div className="text-[11px] text-[#696357] mt-1 leading-snug">
                        Community library, recipe bank & support.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="pt-6 flex flex-col sm:flex-row sm:items-center gap-6">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1B19]">
                        ₹4,999
                      </span>
                      <span className="text-sm text-[#7D7569]">/month</span>
                      <span className="text-sm line-through text-stone-400">₹7,999</span>
                      <span className="text-[11px] font-bold text-[#B85D3B] bg-[#FCECE8] px-2 py-0.5 rounded-full">
                        SAVE 37%
                      </span>
                    </div>
                    <div className="text-xs text-[#6F685B] mt-1">
                      Limited to 15 women this cohort — 10 spots claimed
                    </div>
                  </div>

                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1C1B19] hover:bg-[#312F2A] text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <span>View Details & Join</span>
                    <span className="text-[#EADBCC] group-hover:translate-x-0.5 transition-transform">✦</span>
                  </button>
                </div>
              </div>

              {/* Right Column (Laptop Mockup Display) */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <div className="aspect-[4/3] relative w-full overflow-hidden bg-stone-100">
                    <Image
                      src="/images/metamorphosis_laptop.jpg"
                      alt="Metamorphosis Program Dashboard"
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover"
                    />
                  </div>

                  {/* Overlaid Bottom Card */}
                  <div className="p-4 bg-white border-t border-[#EAE2D5] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-[#B85D3B]">
                        Live Cohort Intake
                      </div>
                      <div className="font-serif text-base font-bold text-[#1C1B19]">
                        Next Intake: Batch 18
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-bold text-emerald-700">10 / 15 Enrolled</div>
                      <div className="w-24 bg-stone-200 h-1.5 rounded-full overflow-hidden mt-1">
                        <div className="bg-emerald-600 h-full w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 4: "How Your Transformation Unfolds" */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <span className="text-[11px] uppercase tracking-widest font-bold text-[#B85D3B]">
            A Structured, Scientific Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1B19] mt-2 tracking-tight">
            How Your Transformation Unfolds
          </h2>
          <p className="text-sm sm:text-base text-[#655E52] max-w-2xl mx-auto mt-3 leading-relaxed">
            A deeply considered, clinical-yet-warm journey designed around your real life and cultural traditions.
          </p>

          {/* 3 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-14 text-left">
            {/* Step 01 */}
            <div className="rounded-3xl bg-white border border-[#E6DCCF] p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#F0E8DC]">
                  <span className="font-serif text-4xl font-bold text-[#D8CEBF] group-hover:text-[#B85D3B] transition-colors">
                    01
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#FAF0E7] text-[#B85D3B] flex items-center justify-center text-sm font-bold">
                    📋
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C1B19] mt-6">
                  Complete In-Depth Questionnaire
                </h3>
                <p className="text-xs sm:text-[13px] text-[#5F584D] mt-3 leading-relaxed">
                  Tell us about your cycles, energy dips, food habits, joint pains, and daily schedule. Our team evaluates your history and past medical and blood chemistry reports.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F2EDE3]">
                <div className="text-[11px] font-bold tracking-wider text-[#B85D3B] uppercase flex items-center gap-1.5">
                  <span>➔</span> Step 1: Evaluation
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="rounded-3xl bg-white border border-[#E6DCCF] p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#F0E8DC]">
                  <span className="font-serif text-4xl font-bold text-[#D8CEBF] group-hover:text-[#B85D3B] transition-colors">
                    02
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#FAF3E4] text-amber-700 flex items-center justify-center text-sm font-bold">
                    📐
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C1B19] mt-6">
                  Receive Custom 1:1 Blueprint
                </h3>
                <p className="text-xs sm:text-[13px] text-[#5F584D] mt-3 leading-relaxed">
                  Coach Bhavya crafts your tailored Indian-compatible nutrition strategy, workout guidelines, and a mindful strength routine you&apos;re excited to perform at home.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F2EDE3]">
                <div className="text-[11px] font-bold tracking-wider text-[#B85D3B] uppercase flex items-center gap-1.5">
                  <span>➔</span> Delivered Within 48–72 Hrs
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div className="rounded-3xl bg-white border border-[#E6DCCF] p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#F0E8DC]">
                  <span className="font-serif text-4xl font-bold text-[#D8CEBF] group-hover:text-[#B85D3B] transition-colors">
                    03
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#EBF4EC] text-[#3D5A45] flex items-center justify-center text-sm font-bold">
                    🎯
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C1B19] mt-6">
                  Weekly Video Coaching & Tracking
                </h3>
                <p className="text-xs sm:text-[13px] text-[#5F584D] mt-3 leading-relaxed">
                  We walk by you each week through video check-ins and adjust metrics with unconditional compassion. Real-world adaptation as life and festive weddings happen.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F2EDE3]">
                <div className="text-[11px] font-bold tracking-wider text-[#B85D3B] uppercase flex items-center gap-1.5">
                  <span>➔</span> Continuous Accountability
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION 5: "Real Women. Real Indian Lives." */}
      <section id="transformation" className="py-20 bg-[#F6F0E5]/70 border-y border-[#E8DFCFA0]">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12">
            <div>
              <span className="text-[11px] uppercase tracking-widest font-bold text-[#B85D3B]">
                Real Results & Reviews
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1B19] mt-2 tracking-tight">
                Real Women. Real Indian Lives.
              </h2>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="text-xs sm:text-sm font-semibold text-[#B85D3B] hover:text-[#914427] inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Browse All 120+ Verified Client Stories</span>
              <span>↗</span>
            </button>
          </div>

          {/* 2 Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Review 1 */}
            <div className="rounded-3xl bg-white border border-[#E4D9C8] p-8 sm:p-9 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500 text-sm tracking-wider">
                    ★★★★★
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Verified Client
                  </span>
                </div>

                <p className="font-serif italic text-base sm:text-lg text-[#2A2621] mt-5 leading-relaxed">
                  &ldquo;Lost 9kg sustainably while managing travel and eating home food with my family. For years I thought I had to eat bland chicken and was traumatized by crash diets. Now lifting with confidence and my energy is unshakable.&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0E8DC] flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#E5DACB]">
                    <Image
                      src="/images/avatar_radha.jpg"
                      alt="Radha M."
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1C1B19]">Radha M.</div>
                    <div className="text-xs text-[#6F685C]">Senior Director, Product (Bengaluru) | 38 yrs</div>
                  </div>
                </div>

                <span className="text-[11px] font-semibold text-[#B85D3B] bg-[#FCEEEA] px-2.5 py-1 rounded-full border border-[#F1D6CE]">
                  Lost 9kg & PCOS
                </span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="rounded-3xl bg-white border border-[#E4D9C8] p-8 sm:p-9 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500 text-sm tracking-wider">
                    ★★★★★
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Verified Client
                  </span>
                </div>

                <p className="font-serif italic text-base sm:text-lg text-[#2A2621] mt-5 leading-relaxed">
                  &ldquo;First time I felt empowered lifting weights at home. My PCOS cycle synced naturally within 4 months without harsh pills. Coach Bhavya helped us navigate 4 family weddings without dogmatic restriction or feeling guilty!&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0E8DC] flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#E5DACB]">
                    <Image
                      src="/images/avatar_ananya.jpg"
                      alt="Ananya S."
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1C1B19]">Ananya S.</div>
                    <div className="text-xs text-[#6F685C]">Chartered Accountant (Mumbai) | 32 yrs</div>
                  </div>
                </div>

                <span className="text-[11px] font-semibold text-[#B85D3B] bg-[#FCEEEA] px-2.5 py-1 rounded-full border border-[#F1D6CE]">
                  PCOS Reversal & Muscle
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION 6: "Frequently Asked Questions" */}
      <section id="faq" className="py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#B85D3B]">
              Clear Answers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1C1B19] mt-2 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#665F52] mt-2">
              Everything you need to know about our method, nutrition approach, and how we deliver results.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#D6C7B2] shadow-sm'
                      : 'bg-white/70 border-[#E8DFD0] hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-[#1C1B19]">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 transition-transform ${
                        isOpen ? 'bg-[#B85D3B] text-white rotate-180' : 'bg-[#F2ECE1] text-[#4E483E]'
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-[15px] text-[#575146] leading-relaxed border-t border-[#F2ECE1]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. SECTION 7: Coach Philosophy / Quote Banner Card */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="rounded-[32px] bg-gradient-to-r from-[#FDF6ED] via-[#F8EDE3] to-[#FDF4EB] border border-[#ECDDCF] p-8 sm:p-14 lg:p-18 text-center shadow-lg relative overflow-hidden">
            {/* Heart Icon Badge */}
            <div className="w-12 h-12 rounded-full bg-white border border-[#E9D9C8] flex items-center justify-center text-[#B85D3B] mx-auto shadow-sm">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            <span className="inline-block text-[11px] uppercase tracking-widest font-bold text-[#8A4A35] mt-4">
              Coach Bhavya&apos;s Core Philosophy
            </span>

            {/* Main Quote with generous width */}
            <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-[38px] text-[#1C1B19] font-normal leading-snug mt-4 max-w-4xl mx-auto">
              &ldquo;You don&apos;t have to punish yourself to be healthy. Sustainable strength begins when you make peace with your plate and honour your natural rhythms.&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-[#615B50] mt-5 max-w-2xl mx-auto leading-relaxed">
              Take our quick 2-minute diagnostic questionnaire. Receive an instant breakdown of your metabolic profile and the recommended coaching path.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-[#1C1B19] hover:bg-[#312F2A] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <span>Take the 2-Minute Diagnostic</span>
                <span className="text-[#EADBCC] group-hover:rotate-12 transition-transform">✦</span>
              </button>

              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-[#D5C7B4] bg-white/80 hover:bg-white text-[#2B2823] text-sm font-semibold transition-all shadow-xs"
              >
                Book a Free Discovery Call
              </button>
            </div>

            {/* Trust Micro-Tags */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 mt-8 pt-6 border-t border-[#EADECE]/80 text-xs sm:text-sm text-[#6B6356]">
              <span className="flex items-center gap-2">
                <span className="text-emerald-700 font-bold">✓</span> 100% Free Consultation
              </span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-700 font-bold">✓</span> No Card Required
              </span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-700 font-bold">✓</span> Instant Personalized Insights
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER - REDESIGNED FOR ULTRA-CLEAN, PROFESSIONAL & LUXURIOUS LOOK */}
      <footer className="bg-[#F6EFE5] border-t border-[#E5DAC8] pt-20 pb-14 text-[#443E35]">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* Main Footer Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#E3D6C1]">
            {/* Col 1-5: Brand & Newsletter */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EAE0D1] border border-[#D8CBB6] flex items-center justify-center text-[#B85D3B]">
                    <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 3v18M12 3C8.5 7.5 5 10 5 14a7 7 0 0 0 14 0c0-4-3.5-6.5-7-11Z" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="font-serif text-2xl font-bold tracking-tight text-[#1C1B19]">
                    Prerna Coaching
                  </span>
                </div>
                <p className="text-sm text-[#60594D] leading-relaxed max-w-md">
                  Empowering modern Indian women through strength training and hormonal wellness. Intentionally crafted for Indian women across all stages of life.
                </p>
              </div>

              {/* Newsletter Block */}
              <div className="pt-2 max-w-md">
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#8C533D] mb-2.5">
                  Dispatches & Guides
                </div>
                <form onSubmit={handleSubscribe} className="relative flex items-center">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-5 py-3.5 pr-32 rounded-full bg-white border border-[#D8CBB7] text-sm text-[#1C1B19] placeholder:text-[#948B7C] focus:outline-none focus:border-[#B85D3B] focus:ring-1 focus:ring-[#B85D3B] transition-all shadow-xs"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-6 rounded-full bg-[#1C1B19] hover:bg-[#312F2A] text-white text-xs font-semibold tracking-wide transition-all shadow-xs cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
                {emailSubscribed && (
                  <div className="text-xs text-emerald-700 font-medium mt-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    <span>Welcome to our inner circle! Check your inbox shortly.</span>
                  </div>
                )}
              </div>
            </div>

            {/* Col 6-7: Current Programs */}
            <div className="lg:col-span-2 space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[#1C1B19]">
                Current Programs
              </div>
              <ul className="space-y-3 text-sm text-[#5D564A]">
                <li>
                  <a href="#programs" className="hover:text-[#B85D3B] transition-colors inline-block">
                    PCOS Metabolic Reset
                  </a>
                </li>
                <li>
                  <a href="#programs" className="hover:text-[#B85D3B] transition-colors inline-block">
                    Postpartum Strength Study
                  </a>
                </li>
                <li>
                  <a href="#programs" className="hover:text-[#B85D3B] transition-colors inline-block">
                    VIP 1-on-1 Mentorship
                  </a>
                </li>
                <li>
                  <a href="#programs" className="hover:text-[#B85D3B] transition-colors inline-block">
                    Festive Survival Guide
                  </a>
                </li>
                <li>
                  <a href="#programs" className="hover:text-[#B85D3B] transition-colors inline-block">
                    Menopause Vitality Track
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 8-9: Support & Story */}
            <div className="lg:col-span-2 space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[#1C1B19]">
                Support & Story
              </div>
              <ul className="space-y-3 text-sm text-[#5D564A]">
                <li>
                  <a href="#about" className="hover:text-[#B85D3B] transition-colors inline-block">
                    The Method & Ethos
                  </a>
                </li>
                <li>
                  <a href="#transformation" className="hover:text-[#B85D3B] transition-colors inline-block">
                    Client Transformations
                  </a>
                </li>
                <li>
                  <a href="#tools" className="hover:text-[#B85D3B] transition-colors inline-block">
                    Science & Tools
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#B85D3B] transition-colors inline-block">
                    Frequently Asked
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="hover:text-[#B85D3B] transition-colors inline-block cursor-pointer text-left"
                  >
                    Direct WhatsApp
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 10-12: Connect & Consult */}
            <div className="lg:col-span-3 space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[#1C1B19]">
                Connect & Consult
              </div>

              <div className="space-y-2.5">
                {/* Clean, luxury-styled WhatsApp card */}
                <a
                  href="https://wa.me/?text=Hi%20Prerna%20Coaching"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/90 border border-[#E2D5C2] hover:border-[#B85D3B] hover:bg-white transition-all shadow-2xs group"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1C1B19] group-hover:text-[#B85D3B] transition-colors">
                      Direct WhatsApp
                    </div>
                    <div className="text-xs text-[#524B40] font-semibold mt-0.5">+91 98765 43210</div>
                    <div className="text-[10px] text-[#857C6F]">Mon–Sat 10am–7pm IST</div>
                  </div>
                </a>

                {/* Clean, luxury-styled Email card */}
                <a
                  href="mailto:hello@prernacoaching.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/90 border border-[#E2D5C2] hover:border-[#B85D3B] hover:bg-white transition-all shadow-2xs group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#FBF0EB] text-[#B85D3B] flex items-center justify-center shrink-0 border border-[#F3D7CC]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1C1B19] group-hover:text-[#B85D3B] transition-colors">
                      Email Us
                    </div>
                    <div className="text-xs text-[#524B40] font-semibold mt-0.5">hello@prernacoaching.com</div>
                    <div className="text-[10px] text-[#857C6F]">Typical reply within 4 hours</div>
                  </div>
                </a>
              </div>

              {/* Minimalist social follow strip */}
              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A7163]">Follow:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-full bg-white border border-[#DDCFBC] flex items-center justify-center text-[#554D41] hover:text-[#B85D3B] hover:border-[#B85D3B] transition-all shadow-2xs"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-full bg-white border border-[#DDCFBC] flex items-center justify-center text-[#554D41] hover:text-[#B85D3B] hover:border-[#B85D3B] transition-all shadow-2xs"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="w-8 h-8 rounded-full bg-white border border-[#DDCFBC] flex items-center justify-center text-[#554D41] hover:text-[#B85D3B] hover:border-[#B85D3B] transition-all shadow-2xs"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3v6Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Disclaimer & Bottom Copyright Row */}
          <div className="pt-8 space-y-4 text-xs text-[#736B5E] leading-relaxed">
            <p>
              <span className="font-semibold text-[#484136]">Medical & Clinical Disclaimer:</span> Prerna Coaching provides lifestyle, nutrition guidance, and general fitness coaching strictly meant for general wellness purposes. It is not intended to be a substitute for medical diagnosis, treatment, or clinical consultation. Always consult your personal physician before starting any exercise or diet program.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#E4D7C2] text-xs">
              <div>
                © 2026 Prerna Coaching LLP. All rights reserved. Handcrafted for Indian women.
              </div>
              <div className="flex items-center gap-4 text-[#5D5548]">
                <a href="#" className="hover:text-[#B85D3B] transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-[#B85D3B] transition-colors">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-[#B85D3B] transition-colors">Refund & Guarantee Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* 12. INTERACTIVE DIAGNOSTIC / APPLICATION MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-[#FAF7F2] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E5DACB] relative">
            {/* Close Button */}
            <button
              onClick={() => {
                setModalOpen(false);
                setModalStep(1);
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white border border-[#DDD1C0] flex items-center justify-center text-[#554E43] hover:text-[#1C1B19] cursor-pointer"
            >
              ✕
            </button>

            {modalStep === 1 && (
              <div className="space-y-5">
                <span className="text-[11px] uppercase tracking-widest font-bold text-[#B85D3B]">
                  Step 1 of 2 • 2-Minute Diagnostic
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1C1B19]">
                  What is your primary health focus?
                </h3>
                <p className="text-xs text-[#635C50]">
                  Select the option that best mirrors your daily routine and body state right now:
                </p>

                <div className="space-y-2.5 pt-1">
                  {[
                    { id: 'pcos', label: 'PCOS / Thyroid & stubborn belly weight', icon: '🌱' },
                    { id: 'strength', label: 'Tone muscles, build strength & rev metabolism', icon: '💪' },
                    { id: 'postpartum', label: 'Postpartum recovery & diastasis recti care', icon: '🌸' },
                    { id: 'vip', label: 'Complete 1-on-1 VIP VIP mentoring with Coach Bhavya', icon: '⭐' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setQuizAnswers({ ...quizAnswers, goal: opt.id })}
                      className={`w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm font-medium flex items-center gap-3 transition-all cursor-pointer ${
                        quizAnswers.goal === opt.id
                          ? 'border-[#B85D3B] bg-[#FCECE8] text-[#8B3B22] font-semibold'
                          : 'border-[#E2D6C5] bg-white text-[#332F28] hover:border-[#C4B7A5]'
                      }`}
                    >
                      <span className="text-base">{opt.icon}</span>
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => setModalStep(2)}
                    className="w-full py-3 rounded-full bg-[#1C1B19] hover:bg-[#312F2A] text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                  >
                    Continue to Recommendation →
                  </button>
                </div>
              </div>
            )}

            {modalStep === 2 && (
              <div className="space-y-5 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl mx-auto">
                  ✨
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-widest font-bold text-emerald-800">
                    Recommended Path Identified
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1B19] mt-1">
                    {quizAnswers.goal === 'pcos'
                      ? 'Metabolic Reset & Endocrine Protocol'
                      : quizAnswers.goal === 'strength'
                      ? 'Progressive Strength & Muscle Track'
                      : quizAnswers.goal === 'postpartum'
                      ? 'Postpartum Core & Pelvic Floor Recovery'
                      : 'VIP 1-on-1 Mentorship with Coach Bhavya'}
                  </h3>
                </div>

                <p className="text-xs text-[#585145] leading-relaxed max-w-sm mx-auto">
                  You are eligible for our next intake cohort. Connect directly with Coach Bhavya&apos;s team on WhatsApp for your custom hormonal evaluation.
                </p>

                <div className="p-4 rounded-2xl bg-white border border-[#E2D6C5] text-left text-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-[#3D5A45] font-semibold">
                    <span>✓</span> Cohort discount applied (-37%)
                  </div>
                  <div className="flex items-center gap-2 text-[#3D5A45] font-semibold">
                    <span>✓</span> Indian diet macro guide included
                  </div>
                  <div className="flex items-center gap-2 text-[#3D5A45] font-semibold">
                    <span>✓</span> 100% money-back guarantee if no shift in 30 days
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <a
                    href="https://wa.me/?text=Hi%20Coach%20Bhavya,%20I%20just%20completed%20the%20diagnostic%20on%20your%20website%20and%20would%20love%20to%20apply%20for%20the%20upcoming%20cohort!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BE5B] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                  >
                    <span>Chat on WhatsApp Now</span>
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                    </svg>
                  </a>

                  <button
                    onClick={() => {
                      setModalOpen(false);
                      setModalStep(1);
                    }}
                    className="w-full py-2.5 text-xs text-[#6F685B] hover:text-[#1C1B19] font-medium cursor-pointer"
                  >
                    Back to website
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

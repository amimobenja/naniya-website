import Link from 'next/link';
import { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import ProductMockup from '@/components/ProductMockup';
import {
  WhatsAppIcon, ArrowRightIcon, BarChartIcon, UploadIcon, CpuIcon,
  RefreshIcon, AlertTriangleIcon, DocumentIcon, ChatIcon, UsersIcon,
  LockIcon, GridIcon, StoreIcon, UtensilsIcon, TruckIcon, HotelIcon,
  BriefcaseIcon, BuildingIcon,
} from '@/components/Icons';

export const metadata: Metadata = {
  title: "LipaClear - M-PESA Reconciliation SaaS | Naniya Technologies",
  description:
    "Automated M-PESA reconciliation for Kenyan SMEs. Upload CSV statements, get instant variance analysis, PDF reports, and WhatsApp alerts. Built for Till and Paybill businesses.",
  keywords: [
    "LipaClear", "M-PESA reconciliation", "M-PESA statements", "business reconciliation Kenya",
    "M-PESA Till", "M-PESA Paybill", "transaction reconciliation", "SME tools Kenya",
  ],
};

export default function LipaClearPage() {
  const features = [
    { icon: <UploadIcon className="text-primary-600" size={24} />, title: "CSV Upload", desc: "Simply upload your M-PESA statement CSV and your internal transaction records. We handle the rest.", bg: "bg-blue-50" },
    { icon: <CpuIcon className="text-primary-600" size={24} />, title: "Smart Parsing", desc: "Our AI parses M-PESA statements automatically, extracting all relevant transaction details accurately.", bg: "bg-indigo-50" },
    { icon: <RefreshIcon className="text-primary-600" size={24} />, title: "Daily Reconciliation", desc: "Set up automated daily reconciliation runs. Wake up to completed reports every morning.", bg: "bg-blue-50" },
    { icon: <AlertTriangleIcon className="text-primary-600" size={24} />, title: "Variance Analysis", desc: "Instantly identify mismatches, missing transactions, duplicates, and amount discrepancies.", bg: "bg-amber-50" },
    { icon: <DocumentIcon className="text-primary-600" size={24} />, title: "PDF & CSV Reports", desc: "Download professional reconciliation reports in PDF or CSV format for your records and accountant.", bg: "bg-indigo-50" },
    { icon: <ChatIcon className="text-primary-600" size={24} />, title: "WhatsApp Alerts", desc: "Get real-time WhatsApp notifications when reconciliation completes or issues are detected.", bg: "bg-green-50" },
    { icon: <UsersIcon className="text-primary-600" size={24} />, title: "Multi-tenant", desc: "Manage multiple businesses or branches from one account. Perfect for franchises and holding companies.", bg: "bg-blue-50" },
    { icon: <LockIcon className="text-primary-600" size={24} />, title: "Secure & Private", desc: "Your financial data is encrypted and stored securely. We never share your data with third parties.", bg: "bg-red-50" },
    { icon: <GridIcon className="text-primary-600" size={24} />, title: "Analytics Dashboard", desc: "Visualize transaction trends, reconciliation success rates, and identify patterns over time.", bg: "bg-indigo-50" },
  ];

  const useCases = [
    { icon: <StoreIcon className="text-primary-600" size={24} />, title: "Retail Shops", desc: "Reconcile daily M-PESA Till transactions with your POS system.", bg: "bg-blue-50" },
    { icon: <UtensilsIcon className="text-primary-600" size={24} />, title: "Restaurants & Cafes", desc: "Match M-PESA payments with your order management system.", bg: "bg-orange-50" },
    { icon: <TruckIcon className="text-primary-600" size={24} />, title: "Transport & Logistics", desc: "Track M-PESA payments for rides and deliveries against your records.", bg: "bg-indigo-50" },
    { icon: <HotelIcon className="text-primary-600" size={24} />, title: "Hospitality", desc: "Reconcile M-PESA bookings with your reservation system.", bg: "bg-teal-50" },
    { icon: <BriefcaseIcon className="text-primary-600" size={24} />, title: "Professional Services", desc: "Match client M-PESA payments with invoices and service records.", bg: "bg-purple-50" },
    { icon: <BuildingIcon className="text-primary-600" size={24} />, title: "Multi-branch", desc: "Manage reconciliation for multiple locations from one dashboard.", bg: "bg-blue-50" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-nav border-b border-gray-100/80 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">Naniya</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-gray-600 hover:text-primary-600 transition-colors font-medium flex items-center gap-1">
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              Home
            </Link>
            <a
              href="https://lipaclear.naniya.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-700 transition-all hover:shadow-md inline-flex items-center gap-2"
            >
              Get Started
              <ArrowRightIcon size={14} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-20 px-6 bg-gradient-to-br from-primary-50 via-white to-primary-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary-200/60">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                Now Live for Kenyan Businesses
              </div>
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-5">
                <BarChartIcon className="text-primary-600" size={28} />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-4 tracking-tight">
                LipaClear
              </h1>
              <p className="text-xl text-gray-600 mb-3 font-medium">
                M-PESA Reconciliation Made Simple
              </p>
              <p className="text-gray-500 mb-8 max-w-lg leading-relaxed">
                Stop spending hours manually matching M-PESA statements. Upload your
                CSV, get instant variance reports, and receive WhatsApp alerts.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://lipaclear.naniya.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/20 hover:-translate-y-0.5"
                >
                  Start Free Trial
                  <ArrowRightIcon size={18} />
                </a>
                <a
                  href="https://wa.me/254701557978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-7 py-3.5 rounded-xl font-semibold hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50/50 transition-all"
                >
                  <WhatsAppIcon size={18} />
                  Chat With Us
                </a>
              </div>
            </div>
            <div className="hidden md:block animate-fade-in">
              <div className="animate-float">
                <ProductMockup variant="lipaclear" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-24 px-6 bg-gray-50/80">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-3 py-1.5 rounded-full text-sm font-semibold mb-6 border border-red-100">
                  The Problem
                </div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight">
                  Manual Reconciliation Is Killing Your Productivity
                </h2>
                <ul className="space-y-4 text-gray-600">
                  {[
                    "Hours spent manually matching M-PESA statements with business records",
                    "Human errors leading to accounting discrepancies",
                    "Missing transactions that go unnoticed for weeks",
                    "Tedious Excel work that should be automated",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="text-red-400 mt-0.5 flex-shrink-0" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-semibold mb-6 border border-green-100">
                  The Solution
                </div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight">
                  LipaClear Automates Everything
                </h2>
                <ul className="space-y-4 text-gray-600">
                  {[
                    "Upload M-PESA CSV and internal records — results in seconds",
                    "AI-powered matching eliminates human error",
                    "Instant alerts for missing or duplicate transactions",
                    "Professional PDF reports ready for your accountant",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="text-green-500 mt-0.5 flex-shrink-0" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">Features</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Powerful Features for Kenyan Businesses
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to keep your M-PESA transactions perfectly reconciled.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 60}>
                <div className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-primary-300 hover:shadow-xl transition-all duration-300 group card-hover h-full">
                  <div className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-gray-50/80">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">Getting Started</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get started in minutes and run your first reconciliation today.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Sign Up", desc: "Create your LipaClear account. No credit card required for your free trial." },
              { step: "2", title: "Upload CSVs", desc: "Upload your M-PESA statement CSV and your internal transaction records." },
              { step: "3", title: "Run Reconciliation", desc: "Click 'Reconcile' and watch as LipaClear matches transactions automatically." },
              { step: "4", title: "Review & Download", desc: "Review variance reports, fix issues, and download professional PDF reports." },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-primary-600/20">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">Use Cases</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Perfect For
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                LipaClear is built for Kenyan businesses that depend on M-PESA.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, i) => (
              <ScrollReveal key={useCase.title} delay={i * 80}>
                <div className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-primary-300 hover:shadow-xl transition-all duration-300 group card-hover h-full">
                  <div className={`w-14 h-14 ${useCase.bg} rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}>
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{useCase.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-gray-50/80">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">Pricing</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Plans that scale with your business. Start free, upgrade as you grow.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl border-2 border-primary-200 p-8 md:p-10 shadow-xl">
              <div className="text-center mb-8">
                <p className="text-gray-600 text-lg leading-relaxed">
                  We offer flexible pricing based on transaction volume and business needs.
                  Plans start from <span className="font-bold text-primary-600">KES 1,500/month</span> with a <span className="font-bold text-primary-600">14-day free trial</span>.
                </p>
              </div>
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="https://lipaclear.naniya.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/20 hover:-translate-y-0.5"
                >
                  Start Free Trial
                  <ArrowRightIcon size={18} />
                </a>
                <a
                  href="https://wa.me/254701557978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-7 py-3.5 rounded-xl font-semibold hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50/50 transition-all"
                >
                  <WhatsAppIcon size={18} />
                  Get Custom Quote
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary-600 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
            Stop Wasting Time on Manual Reconciliation
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join Kenyan businesses saving hours every week with automated
            M-PESA reconciliation. Start your free trial today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://lipaclear.naniya.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-all hover:shadow-lg"
            >
              Start Free 14-Day Trial
              <ArrowRightIcon size={18} />
            </a>
            <a
              href="https://wa.me/254701557978"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              <WhatsAppIcon size={18} />
              Ask Questions
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Naniya Technologies</span>
          </Link>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Building technology solutions for Kenyan communities and businesses.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Naniya Technologies Limited. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

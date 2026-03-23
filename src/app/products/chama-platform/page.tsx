import Link from 'next/link';
import { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import ProductMockup from '@/components/ProductMockup';
import {
  WhatsAppIcon, ArrowRightIcon, BankIcon, ChatIcon, WalletIcon,
  GridIcon, BellIcon, UsersIcon, DocumentIcon, CheckCircleIcon,
} from '@/components/Icons';

export const metadata: Metadata = {
  title: "Chama Platform - WhatsApp Savings Group Management | Naniya Technologies",
  description:
    "Manage your chama through WhatsApp with M-PESA integration. Track contributions, handle loans, and view group dashboards. No app download needed. Built for Kenyan savings groups.",
  keywords: [
    "Chama Platform", "chama management", "WhatsApp savings group", "M-PESA chama",
    "savings group Kenya", "WhatsApp business", "chama software", "group savings",
  ],
};

export default function ChamaPlatformPage() {
  const features = [
    { icon: <ChatIcon className="text-accent-600" size={24} />, title: "WhatsApp-First", desc: "No app to download. Your entire chama operates through WhatsApp — a platform everyone already uses daily.", bg: "bg-green-50" },
    { icon: <WalletIcon className="text-accent-600" size={24} />, title: "M-PESA Integration", desc: "Process contributions directly via M-PESA through Kopo Kopo. Automated tracking and instant confirmation.", bg: "bg-emerald-50" },
    { icon: <GridIcon className="text-accent-600" size={24} />, title: "Group Dashboards", desc: "View contribution history, member balances, and group financial health in real-time dashboards.", bg: "bg-teal-50" },
    { icon: <BellIcon className="text-accent-600" size={24} />, title: "Automated Reminders", desc: "Never miss a contribution deadline. Automated WhatsApp reminders keep everyone on track.", bg: "bg-green-50" },
    { icon: <UsersIcon className="text-accent-600" size={24} />, title: "Member Management", desc: "Add members, assign roles, track attendance, and manage permissions — all through simple commands.", bg: "bg-emerald-50" },
    { icon: <DocumentIcon className="text-accent-600" size={24} />, title: "Loan Tracking", desc: "Record loans, track repayments, calculate interest, and send payment reminders automatically.", bg: "bg-teal-50" },
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
              href="https://chama.naniya.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-accent-700 transition-all hover:shadow-md inline-flex items-center gap-2"
            >
              Get Started
              <ArrowRightIcon size={14} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-20 px-6 bg-gradient-to-br from-accent-50 via-white to-accent-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent-100/40 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-accent-200/60">
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                Now Live in Kenya
              </div>
              <div className="w-14 h-14 bg-accent-100 rounded-2xl flex items-center justify-center mb-5">
                <BankIcon className="text-accent-600" size={28} />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-4 tracking-tight">
                Chama Platform
              </h1>
              <p className="text-xl text-gray-600 mb-3 font-medium">
                Manage Your Savings Group Right From WhatsApp
              </p>
              <p className="text-gray-500 mb-8 max-w-lg leading-relaxed">
                Track contributions, handle loans, process M-PESA payments, and view
                group dashboards — all through WhatsApp. No app download needed.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://chama.naniya.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-accent-700 transition-all hover:shadow-lg hover:shadow-accent-600/20 hover:-translate-y-0.5"
                >
                  Try Chama Platform
                  <ArrowRightIcon size={18} />
                </a>
                <a
                  href="https://wa.me/254701557978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-7 py-3.5 rounded-xl font-semibold hover:border-accent-300 hover:text-accent-700 hover:bg-accent-50/50 transition-all"
                >
                  <WhatsAppIcon size={18} />
                  Chat With Us
                </a>
              </div>
            </div>
            <div className="hidden md:block animate-fade-in">
              <div className="animate-float">
                <ProductMockup variant="chama" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-3">Features</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Everything Your Chama Needs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Designed specifically for Kenyan savings groups with features
                that make group management effortless.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 80}>
                <div className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-accent-300 hover:shadow-xl transition-all duration-300 group card-hover h-full">
                  <div className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent-600 transition-colors">
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
              <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-3">Getting Started</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get your chama up and running in minutes, not hours.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Sign Up", desc: "Visit chama.naniya.co.ke and create your group account. Takes less than 2 minutes." },
              { step: "2", title: "Connect WhatsApp", desc: "Link your chama's WhatsApp number or use our provided number to get started." },
              { step: "3", title: "Add Members", desc: "Invite your chama members via WhatsApp. They can interact with the bot instantly." },
              { step: "4", title: "Start Managing", desc: "Record contributions, track loans, send reminders — all from WhatsApp." },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg shadow-accent-600/20">
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

      {/* Pricing */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-accent-600 uppercase tracking-wider mb-3">Pricing</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Transparent Pricing
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Affordable plans for chamas of all sizes. Start free, upgrade when you&apos;re ready.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl border-2 border-accent-200 p-8 md:p-10 shadow-xl">
              <div className="text-center mb-8">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Contact us for custom pricing based on your chama&apos;s size and needs.
                  We offer flexible plans starting from as low as <span className="font-bold text-accent-600">KES 500/month</span>.
                </p>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://wa.me/254701557978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-accent-700 transition-all hover:shadow-lg hover:shadow-accent-600/20 hover:-translate-y-0.5"
                >
                  <WhatsAppIcon size={18} />
                  Get Pricing on WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-accent-600 to-accent-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
            Ready to Transform Your Chama?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join Kenyan chamas already managing their finances effortlessly through
            WhatsApp. No app download, no complicated setup.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://chama.naniya.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-accent-600 px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-all hover:shadow-lg"
            >
              Get Started Free
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

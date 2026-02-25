import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "LipaClear - M-PESA Reconciliation SaaS | Naniya Technologies",
  description:
    "Automated M-PESA reconciliation for Kenyan SMEs. Upload CSV statements, get instant variance analysis, PDF reports, and WhatsApp alerts. Built for Till and Paybill businesses.",
  keywords: [
    "LipaClear",
    "M-PESA reconciliation",
    "M-PESA statements",
    "business reconciliation Kenya",
    "M-PESA Till",
    "M-PESA Paybill",
    "transaction reconciliation",
    "SME tools Kenya",
  ],
};

export default function LipaClearPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Naniya</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-primary-600 transition"
            >
              ← Back to Home
            </Link>
            <a
              href="https://lipaclear.naniya.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              Now Live for Kenyan Businesses
            </div>
            <div className="text-6xl mb-6">📊</div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              LipaClear
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              M-PESA Reconciliation Made Simple
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Stop spending hours manually matching M-PESA statements. Upload your
              CSV, get instant variance reports, and receive WhatsApp alerts. Built
              specifically for Kenyan SMEs using M-PESA Till or Paybill.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://lipaclear.naniya.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all hover:shadow-lg hover:scale-105 inline-flex items-center gap-2"
              >
                🚀 Start Free Trial
              </a>
              <a
                href="https://wa.me/254701557978"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50 transition-all inline-flex items-center gap-2"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                The Problem
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Manual Reconciliation Is Killing Your Productivity
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">✗</span>
                  <span>Hours spent manually matching M-PESA statements with business records</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">✗</span>
                  <span>Human errors leading to accounting discrepancies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">✗</span>
                  <span>Missing transactions that go unnoticed for weeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">✗</span>
                  <span>Tedious Excel work that should be automated</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                The Solution
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                LipaClear Automates Everything
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>Upload your M-PESA CSV and internal records — get results in seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>AI-powered matching eliminates human error</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>Instant alerts for missing or duplicate transactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>Professional PDF reports ready for your accountant</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Kenyan Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to keep your M-PESA transactions perfectly reconciled.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📁",
                title: "CSV Upload",
                desc: "Simply upload your M-PESA statement CSV and your internal transaction records. We handle the rest.",
              },
              {
                icon: "🤖",
                title: "Smart Transaction Parsing",
                desc: "Our AI parses M-PESA statements automatically, extracting all relevant transaction details accurately.",
              },
              {
                icon: "🔄",
                title: "Daily Reconciliation",
                desc: "Set up automated daily reconciliation runs. Wake up to completed reports every morning.",
              },
              {
                icon: "⚠️",
                title: "Variance Analysis",
                desc: "Instantly identify mismatches, missing transactions, duplicates, and amount discrepancies.",
              },
              {
                icon: "📄",
                title: "PDF & CSV Reports",
                desc: "Download professional reconciliation reports in PDF or CSV format for your records and accountant.",
              },
              {
                icon: "💬",
                title: "WhatsApp Alerts",
                desc: "Get real-time WhatsApp notifications when reconciliation completes or issues are detected.",
              },
              {
                icon: "👥",
                title: "Multi-tenant",
                desc: "Manage multiple businesses or branches from one account. Perfect for franchises and holding companies.",
              },
              {
                icon: "🔒",
                title: "Secure & Private",
                desc: "Your financial data is encrypted and stored securely. We never share your data with third parties.",
              },
              {
                icon: "📊",
                title: "Analytics Dashboard",
                desc: "Visualize transaction trends, reconciliation success rates, and identify patterns over time.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-gray-200 bg-white hover:border-primary-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started in minutes and run your first reconciliation today.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Sign Up",
                desc: "Create your LipaClear account. No credit card required for your free trial.",
              },
              {
                step: "2",
                title: "Upload CSVs",
                desc: "Upload your M-PESA statement CSV and your internal transaction records.",
              },
              {
                step: "3",
                title: "Run Reconciliation",
                desc: "Click 'Reconcile' and watch as LipaClear matches transactions automatically.",
              },
              {
                step: "4",
                title: "Review & Download",
                desc: "Review variance reports, fix issues, and download professional PDF reports.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              LipaClear is built for Kenyan businesses that depend on M-PESA.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏪",
                title: "Retail Shops",
                desc: "Reconcile daily M-PESA Till transactions with your POS system or manual records.",
              },
              {
                icon: "🍽️",
                title: "Restaurants & Cafes",
                desc: "Match M-PESA payments with your order management system and identify discrepancies.",
              },
              {
                icon: "🚕",
                title: "Transport & Logistics",
                desc: "Track M-PESA payments for rides, deliveries, or bookings against your trip records.",
              },
              {
                icon: "🏨",
                title: "Hospitality",
                desc: "Reconcile M-PESA bookings and payments with your reservation system.",
              },
              {
                icon: "💼",
                title: "Professional Services",
                desc: "Match client M-PESA payments with invoices and service records.",
              },
              {
                icon: "🏢",
                title: "Multi-branch Businesses",
                desc: "Manage reconciliation for multiple locations or franchises from one dashboard.",
              },
            ].map((useCase) => (
              <div
                key={useCase.title}
                className="p-6 rounded-xl border border-gray-200 bg-white hover:border-primary-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 transition-transform group-hover:scale-110">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {useCase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Plans that scale with your business. Start free, upgrade as you grow.
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border-2 border-primary-200 p-8 shadow-xl">
            <div className="text-center mb-8">
              <p className="text-gray-600 text-lg">
                We offer flexible pricing based on transaction volume and business needs.
                Plans start from <span className="font-bold text-primary-600">KES 1,500/month</span> with a <span className="font-bold text-primary-600">14-day free trial</span>.
              </p>
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://lipaclear.naniya.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all hover:shadow-lg hover:scale-105 inline-flex items-center gap-2"
              >
                🚀 Start Free Trial
              </a>
              <a
                href="https://wa.me/254701557978"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50 transition-all inline-flex items-center gap-2"
              >
                💬 Get Custom Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stop Wasting Time on Manual Reconciliation
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join Kenyan businesses already saving hours every week with automated
            M-PESA reconciliation. Start your free trial today — no credit card required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://lipaclear.naniya.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all hover:shadow-lg hover:scale-105 inline-flex items-center gap-2"
            >
              🚀 Start Free 14-Day Trial
            </a>
            <a
              href="https://wa.me/254701557978"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2"
            >
              💬 Ask Questions on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold">Naniya Technologies</span>
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

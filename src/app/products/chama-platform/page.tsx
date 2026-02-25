import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Chama Platform - WhatsApp Savings Group Management | Naniya Technologies",
  description:
    "Manage your chama through WhatsApp with M-PESA integration. Track contributions, handle loans, and view group dashboards. No app download needed. Built for Kenyan savings groups.",
  keywords: [
    "Chama Platform",
    "chama management",
    "WhatsApp savings group",
    "M-PESA chama",
    "savings group Kenya",
    "WhatsApp business",
    "chama software",
    "group savings",
  ],
};

export default function ChamaPlatformPage() {
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
              href="https://chama.naniya.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-accent-700 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-accent-50 via-white to-accent-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              Now Live in Kenya
            </div>
            <div className="text-6xl mb-6">🏦</div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Chama Platform
            </h1>
            <p className="text-2xl text-gray-600 mb-4">
              Manage Your Savings Group Right From WhatsApp
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              Track contributions, handle loans, process M-PESA payments, and view
              group dashboards — all through WhatsApp. No app download needed.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://chama.naniya.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-700 transition-all hover:shadow-lg hover:scale-105 inline-flex items-center gap-2"
              >
                🚀 Try Chama Platform
              </a>
              <a
                href="https://wa.me/254701557978"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-accent-500 hover:text-accent-600 hover:bg-accent-50 transition-all inline-flex items-center gap-2"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything Your Chama Needs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Designed specifically for Kenyan savings groups (chamas) with features
              that make group management effortless.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💬",
                title: "WhatsApp-First",
                desc: "No app to download. Your entire chama operates through WhatsApp — a platform everyone already uses daily.",
              },
              {
                icon: "💰",
                title: "M-PESA Integration",
                desc: "Process contributions directly via M-PESA through Kopo Kopo. Automated tracking and instant confirmation.",
              },
              {
                icon: "📊",
                title: "Group Dashboards",
                desc: "View contribution history, member balances, and group financial health in real-time dashboards.",
              },
              {
                icon: "🔔",
                title: "Automated Reminders",
                desc: "Never miss a contribution deadline. Automated WhatsApp reminders keep everyone on track.",
              },
              {
                icon: "👥",
                title: "Member Management",
                desc: "Add members, assign roles, track attendance, and manage permissions — all through simple commands.",
              },
              {
                icon: "📝",
                title: "Loan Tracking",
                desc: "Record loans, track repayments, calculate interest, and send payment reminders automatically.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-gray-200 bg-white hover:border-accent-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent-600 transition">
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
              Get your chama up and running in minutes, not hours.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Sign Up",
                desc: "Visit chama.naniya.co.ke and create your group account. Takes less than 2 minutes.",
              },
              {
                step: "2",
                title: "Connect WhatsApp",
                desc: "Link your chama's WhatsApp number or use our provided number to get started immediately.",
              },
              {
                step: "3",
                title: "Add Members",
                desc: "Invite your chama members via WhatsApp. They can start interacting with the bot instantly.",
              },
              {
                step: "4",
                title: "Start Managing",
                desc: "Record contributions, track loans, send reminders, and manage finances — all from WhatsApp.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-accent-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Affordable plans for chamas of all sizes. Start free, upgrade when you're ready.
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border-2 border-accent-200 p-8 shadow-xl">
            <div className="text-center mb-8">
              <p className="text-gray-600 text-lg">
                Contact us for custom pricing based on your chama's size and needs.
                We offer flexible plans starting from as low as <span className="font-bold text-accent-600">KES 500/month</span>.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://wa.me/254701557978"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-700 transition-all hover:shadow-lg hover:scale-105 inline-flex items-center gap-2"
              >
                💬 Get Pricing on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-accent-600 to-accent-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
              className="bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all hover:shadow-lg hover:scale-105 inline-flex items-center gap-2"
            >
              🚀 Get Started Free
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

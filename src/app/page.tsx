import MobileMenu from '@/components/MobileMenu';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <StructuredData />

      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50" role="navigation" aria-label="Main navigation">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2" aria-label="Naniya Technologies Home">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Naniya</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="https://chama.naniya.co.ke" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition">Chama Platform</a>
            <a href="#products" className="hover:text-primary-600 transition">Products</a>
            <a href="#services" className="hover:text-primary-600 transition">Services</a>
            <a href="#about" className="hover:text-primary-600 transition">About</a>
            <a href="#contact" className="hover:text-primary-600 transition">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/254701557978"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-accent-700 transition"
              aria-label="Contact us on WhatsApp"
            >
              💬 WhatsApp Us
            </a>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="main-content" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              Chama Platform is LIVE
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Manage Your Chama{" "}
              <span className="text-primary-600">Right From WhatsApp</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Naniya Technologies builds products that solve real problems for
              Kenyan communities. Our flagship product, Chama Platform, lets
              savings groups track contributions, manage loans, and process
              M-PESA payments — all through WhatsApp. No app download needed.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://chama.naniya.co.ke/signup"
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

      {/* Stats */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { stat: "2", label: "Products Built" },
            { stat: "WhatsApp API", label: "Business Integration" },
            { stat: "M-PESA", label: "Payments Built-in" },
            { stat: "Kenya-first", label: "Made for Local Needs" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl font-bold text-gray-900">{item.stat}</div>
              <div className="text-sm text-gray-500 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Purpose-built digital products solving real problems for Kenyan
              communities and businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Chama Platform — LIVE */}
            <div className="rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-accent-300 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 p-8 text-white relative">
                <div className="absolute top-4 right-4 bg-white text-accent-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  ✅ Live
                </div>
                <div className="text-4xl mb-3">🏦</div>
                <h3 className="text-2xl font-bold">Chama Platform</h3>
                <p className="text-white/80 mt-2">
                  WhatsApp-first savings group management for Kenya
                </p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  The easiest way for Kenyan chamas to manage money. Track
                  contributions, handle loans, process M-PESA payments, and view
                  group dashboards — all through WhatsApp. No app to download,
                  no complicated setup.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "WhatsApp Bot",
                    "M-PESA Integration",
                    "Contribution Tracking",
                    "Loan Management",
                    "Group Dashboards",
                    "No App Download",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent-50 text-accent-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://chama.naniya.co.ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-accent-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-accent-700 transition-all hover:shadow-lg hover:scale-105"
                  >
                    Try Chama Platform →
                  </a>
                  <a
                    href="https://wa.me/254701557978"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 hover:text-accent-600 transition"
                  >
                    or message us on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* LipaClear — Coming Soon */}
            <div className="rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-primary-300 transition-all duration-300 group">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-8 text-white relative">
                <div className="absolute top-4 right-4 bg-white/90 text-primary-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  🚀 Coming Soon
                </div>
                <div className="text-4xl mb-3">📊</div>
                <h3 className="text-2xl font-bold">LipaClear</h3>
                <p className="text-white/80 mt-2">
                  M-PESA reconciliation for businesses
                </p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Stop manually matching M-PESA statements with your records.
                  LipaClear automatically reconciles M-PESA transaction
                  statements with your internal business records — saving hours
                  of tedious bookkeeping and reducing errors.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "M-PESA Statements",
                    "Auto-Reconciliation",
                    "Error Detection",
                    "Business Reports",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-primary-600 text-sm font-medium">
                  Fully built — launching soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end technology solutions tailored for African
              businesses and their unique needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💬",
                title: "WhatsApp Business Automation",
                desc: "Build powerful chatbots, automate customer communications, and manage group interactions using the WhatsApp Business API.",
              },
              {
                icon: "💰",
                title: "Mobile Money Integration",
                desc: "Seamless M-PESA and mobile money payment integration for your applications, with real-time transaction processing and reconciliation.",
              },
              {
                icon: "🖥️",
                title: "Custom Software Development",
                desc: "Full-stack web and mobile application development using modern technologies like Next.js, React, and Node.js.",
              },
              {
                icon: "☁️",
                title: "Cloud & Infrastructure",
                desc: "Cloud architecture, deployment, and DevOps services to keep your applications running smoothly and securely.",
              },
              {
                icon: "📊",
                title: "Data & Analytics",
                desc: "Turn your business data into actionable insights with custom dashboards, reporting tools, and analytics solutions.",
              },
              {
                icon: "🔒",
                title: "API Development & Integration",
                desc: "Build robust APIs and integrate third-party services to connect your systems and streamline operations.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl border border-gray-200 bg-white hover:border-primary-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Naniya Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Naniya Technologies Limited is a registered Kenyan technology
                company founded in 2026. Based in Nairobi, we build digital
                products that address real challenges faced by communities and
                businesses across Kenya.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our flagship product, Chama Platform, is already live and
                helping savings groups manage their finances through WhatsApp.
                We leverage technologies like WhatsApp Business API, M-PESA
                integration, and modern web frameworks to create products that
                are accessible and impactful.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe technology should work for everyone — not just big
                corporations. That&apos;s why we build solutions that empower
                community groups, small businesses, and entrepreneurs to thrive
                in the digital economy.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                  📍 Nairobi, Kenya
                </div>
                <div className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                  🏢 Registered Company
                </div>
                <div className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                  🇰🇪 KRA Compliant
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Values</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Innovation",
                    desc: "We push boundaries to find creative solutions to African challenges.",
                  },
                  {
                    title: "Accessibility",
                    desc: "Technology should be available and usable by everyone, everywhere.",
                  },
                  {
                    title: "Integrity",
                    desc: "We build trust through transparency, honesty, and delivering on our promises.",
                  },
                  {
                    title: "Impact",
                    desc: "Every product we build aims to create measurable positive change.",
                  },
                ].map((value) => (
                  <div key={value.title}>
                    <h4 className="font-semibold text-white/90">{value.title}</h4>
                    <p className="text-white/70 text-sm">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to transform your business with technology? Let&apos;s talk.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <a
              href="https://wa.me/254701557978"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-accent-400 hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1"
            >
              <div className="text-4xl mb-3 transition-transform group-hover:scale-110">💬</div>
              <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
              <p className="text-accent-600 text-sm font-medium">Message Us</p>
            </a>
            <a
              href="mailto:info@naniya.co.ke"
              className="flex flex-col items-center p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1"
            >
              <div className="text-4xl mb-3 transition-transform group-hover:scale-110">📧</div>
              <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
              <p className="text-primary-600 text-sm font-medium break-all">info@naniya.co.ke</p>
            </a>
            <a
              href="tel:+254701557978"
              className="flex flex-col items-center p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1"
            >
              <div className="text-4xl mb-3 transition-transform group-hover:scale-110">📱</div>
              <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
              <p className="text-primary-600 text-sm font-medium">+254 701 557 978</p>
            </a>
{/* Visit Us section temporarily removed */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="text-xl font-bold">Naniya Technologies</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Naniya Technologies Limited is a registered Kenyan company
                building products that help communities and businesses manage
                their finances through technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="https://chama.naniya.co.ke" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Chama Platform</a>
                </li>
                <li>
                  <span className="text-gray-500">LipaClear — Coming Soon</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#products" className="hover:text-white transition">Products</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">Services</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">About</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white transition">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Naniya Technologies Limited. All rights
            reserved.
            <br />
            <span className="text-gray-600">
              Registered in Kenya | KRA PIN: P052500513K
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

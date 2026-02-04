export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Naniya</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#services" className="hover:text-primary-600 transition">Services</a>
            <a href="#about" className="hover:text-primary-600 transition">About</a>
            <a href="#products" className="hover:text-primary-600 transition">Products</a>
            <a href="#contact" className="hover:text-primary-600 transition">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-primary-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              Building the future of African tech
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Technology Solutions{" "}
              <span className="text-primary-600">That Move Africa Forward</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Naniya Technologies builds innovative digital products and provides
              technology services that help businesses across Africa automate,
              scale, and thrive in the digital economy.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition"
              >
                Our Services
              </a>
              <a
                href="#products"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-primary-300 hover:text-primary-600 transition"
              >
                View Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { stat: "2026", label: "Founded" },
            { stat: "Kenya", label: "Headquarters" },
            { stat: "WhatsApp", label: "API Expertise" },
            { stat: "M-PESA", label: "Payments Integration" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl font-bold text-gray-900">{item.stat}</div>
              <div className="text-sm text-gray-500 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
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
                className="p-6 rounded-xl border border-gray-200 hover:border-primary-200 hover:shadow-lg transition group"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition">
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
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Naniya Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Naniya Technologies Limited is a registered Kenyan technology
                company founded in 2026. Based in Nairobi, we are dedicated to
                building innovative digital solutions that address real
                challenges faced by businesses across Africa.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our focus is on leveraging technologies like WhatsApp Business
                API, M-PESA integration, and modern web frameworks to create
                products and services that are accessible, affordable, and
                impactful.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe technology should work for everyone — not just big
                corporations. That&apos;s why we build solutions that empower small
                businesses, community groups, and entrepreneurs to thrive in
                the digital economy.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="bg-white px-4 py-2 rounded-lg border border-gray-200">
                  📍 Nairobi, Kenya
                </div>
                <div className="bg-white px-4 py-2 rounded-lg border border-gray-200">
                  🏢 Registered Company
                </div>
                <div className="bg-white px-4 py-2 rounded-lg border border-gray-200">
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

      {/* Products */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Purpose-built digital products solving real problems for African
              communities and businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-8 text-white">
                <div className="text-4xl mb-3">🏦</div>
                <h3 className="text-2xl font-bold">Chama Platform</h3>
                <p className="text-white/80 mt-2">
                  WhatsApp-first savings group management
                </p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  A comprehensive platform that helps Kenyan savings groups
                  (chamas) manage contributions, track loans, and handle M-PESA
                  transactions — all through WhatsApp.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["WhatsApp Bot", "M-PESA", "Dashboard", "Auto-Tracking"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="bg-accent-50 text-accent-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 text-white">
                <div className="text-4xl mb-3">🛠️</div>
                <h3 className="text-2xl font-bold">Custom Solutions</h3>
                <p className="text-white/80 mt-2">
                  Tailored technology for your business
                </p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Need a custom WhatsApp bot, payment integration, or web
                  application? We build bespoke solutions designed around your
                  specific business requirements.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Bespoke", "Scalable", "Supported", "Affordable"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
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
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a
              href="mailto:info@naniya.co.ke"
              className="flex flex-col items-center p-6 rounded-xl bg-white border border-gray-200 hover:border-primary-300 hover:shadow-lg transition text-center"
            >
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
              <p className="text-primary-600 text-sm">info@naniya.co.ke</p>
            </a>
            <a
              href="tel:+254721506974"
              className="flex flex-col items-center p-6 rounded-xl bg-white border border-gray-200 hover:border-primary-300 hover:shadow-lg transition text-center"
            >
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
              <p className="text-primary-600 text-sm">+254 721 506 974</p>
            </a>
            <div className="flex flex-col items-center p-6 rounded-xl bg-white border border-gray-200 text-center">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
              <p className="text-gray-600 text-sm">
                Mararo Road, Lavington
                <br />
                Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="text-xl font-bold">Naniya Technologies</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Naniya Technologies Limited is a registered Kenyan company
                providing innovative technology solutions for businesses across
                Africa.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#services" className="hover:text-white transition">Services</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">About</a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition">Products</a>
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

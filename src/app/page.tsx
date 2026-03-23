import MobileMenu from '@/components/MobileMenu';
import StructuredData from '@/components/StructuredData';
import ScrollReveal from '@/components/ScrollReveal';
import ProductMockup from '@/components/ProductMockup';
import {
  WhatsAppIcon, ArrowRightIcon, BankIcon, BarChartIcon,
  BrainIcon, LinkIcon, RocketIcon, ShieldIcon, CodeIcon, ZapIcon,
  EnvelopeIcon, PhoneIcon, MapPinIcon, BuildingIcon, FlagIcon,
  CheckCircleIcon,
} from '@/components/Icons';

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
      <nav className="fixed top-0 w-full glass-nav border-b border-gray-100/80 z-50" role="navigation" aria-label="Main navigation">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5" aria-label="Naniya Technologies Home">
            <div className="w-9 h-9 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">Naniya</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#products" className="hover:text-primary-600 transition-colors">Products</a>
            <a href="#services" className="hover:text-primary-600 transition-colors">Services</a>
            <a href="#about" className="hover:text-primary-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-primary-600 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/254701557978"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-accent-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-accent-700 transition-all hover:shadow-md"
              aria-label="Contact us on WhatsApp"
            >
              <WhatsAppIcon size={16} />
              WhatsApp Us
            </a>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="main-content" className="pt-28 pb-20 px-6 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100/30 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-accent-200/60">
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                Both Products Now LIVE
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                Technology Solutions{" "}
                <span className="text-primary-600">Built for Kenya</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                From WhatsApp-based chama management to automated M-PESA
                reconciliation — we deliver powerful, accessible solutions
                designed for the Kenyan market.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 bg-accent-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-accent-700 transition-all hover:shadow-lg hover:shadow-accent-600/20 hover:-translate-y-0.5"
                >
                  Explore Products
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
            {/* Hero visual - decorative floating cards */}
            <div className="hidden md:block relative animate-fade-in">
              <div className="relative">
                <div className="animate-float">
                  <ProductMockup variant="chama" />
                </div>
                {/* Floating accent badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                    <CheckCircleIcon className="text-accent-600" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">M-PESA</div>
                    <div className="text-sm font-bold text-gray-900">Integrated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50/80 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { stat: "2", label: "Products Live" },
            { stat: "WhatsApp", label: "API Integrated" },
            { stat: "M-PESA", label: "Payments Built-in" },
            { stat: "Kenya-first", label: "Made for Local Needs" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl font-extrabold text-gray-900">{item.stat}</div>
              <div className="text-sm text-gray-500 mt-1 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">Our Products</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Purpose-Built Digital Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Solving real problems for Kenyan communities and businesses with tools
                that work the way you already do.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Chama Platform */}
            <ScrollReveal delay={100}>
              <div className="rounded-2xl border border-gray-200 overflow-hidden card-hover group h-full">
                <div className="bg-gradient-to-br from-accent-500 to-accent-600 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute top-4 right-4 bg-white text-accent-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
                    Live
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <BankIcon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Chama Platform</h3>
                  <p className="text-white/80 mt-2">
                    WhatsApp-first savings group management for Kenya
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    The easiest way for Kenyan chamas to manage money. Track
                    contributions, handle loans, process M-PESA payments, and view
                    group dashboards — all through WhatsApp.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      "WhatsApp Bot", "M-PESA Integration", "Contribution Tracking",
                      "Loan Management", "Group Dashboards", "No App Download",
                    ].map((tag) => (
                      <span key={tag} className="bg-accent-50 text-accent-700 px-3 py-1 rounded-full text-xs font-medium border border-accent-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://chama.naniya.co.ke"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-accent-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-accent-700 transition-all hover:shadow-lg hover:shadow-accent-600/20"
                    >
                      Try Chama Platform
                      <ArrowRightIcon size={16} />
                    </a>
                    <a
                      href="/products/chama-platform"
                      className="text-xs text-center text-gray-500 hover:text-accent-600 transition font-medium"
                    >
                      Learn more about Chama Platform
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* LipaClear */}
            <ScrollReveal delay={200}>
              <div className="rounded-2xl border border-gray-200 overflow-hidden card-hover group h-full">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute top-4 right-4 bg-white text-primary-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    Live
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <BarChartIcon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">LipaClear</h3>
                  <p className="text-white/80 mt-2">
                    M-PESA reconciliation SaaS for Kenyan SMEs
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    Stop manually matching M-PESA statements. LipaClear automatically
                    reconciles transactions with your records — saving hours
                    of tedious bookkeeping and reducing errors.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      "CSV Upload", "Auto-Reconciliation", "Variance Analysis",
                      "PDF Reports", "WhatsApp Alerts", "Multi-tenant",
                    ].map((tag) => (
                      <span key={tag} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium border border-primary-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href="https://lipaclear.naniya.co.ke"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/20"
                    >
                      Try LipaClear
                      <ArrowRightIcon size={16} />
                    </a>
                    <a
                      href="/products/lipaclear"
                      className="text-xs text-center text-gray-500 hover:text-primary-600 transition font-medium"
                    >
                      Learn more about LipaClear
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Product Screenshots Showcase */}
      <section className="py-24 px-6 bg-gray-50/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="max-w-6xl mx-auto relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">See It In Action</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Built for Real Kenyan Businesses
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our products are already live and serving customers. Here&apos;s what they look like.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <ScrollReveal delay={100}>
              <div>
                <ProductMockup variant="chama" />
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-gray-900">Chama Platform</h3>
                  <p className="text-sm text-gray-500">WhatsApp-first savings group management</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <ProductMockup variant="lipaclear" />
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-gray-900">LipaClear</h3>
                  <p className="text-sm text-gray-500">M-PESA reconciliation made simple</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Professional Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Expert technology consulting and development services that deliver measurable results.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <BrainIcon className="text-primary-600" size={28} />,
                title: "AI Solutions & Integration",
                desc: "Deploy production-ready AI systems powered by LLMs. From intelligent chatbots to automated workflows and custom AI agents.",
                color: "group-hover:border-purple-300",
                bg: "bg-purple-50",
              },
              {
                icon: <LinkIcon className="text-primary-600" size={28} />,
                title: "Technology Consulting",
                desc: "Strategic technology planning and seamless system integration. We connect platforms, modernize legacy systems, and architect scalable solutions.",
                color: "group-hover:border-blue-300",
                bg: "bg-blue-50",
              },
              {
                icon: <RocketIcon className="text-primary-600" size={28} />,
                title: "DevOps",
                desc: "Accelerate delivery with automated CI/CD pipelines, infrastructure as code, and optimized cloud deployments.",
                color: "group-hover:border-orange-300",
                bg: "bg-orange-50",
              },
              {
                icon: <ShieldIcon className="text-primary-600" size={28} />,
                title: "DevSecOps",
                desc: "Security-first development practices. Automated vulnerability scanning, secure pipelines, and compliance monitoring.",
                color: "group-hover:border-red-300",
                bg: "bg-red-50",
              },
              {
                icon: <CodeIcon className="text-primary-600" size={28} />,
                title: "Custom Software",
                desc: "Build scalable, maintainable applications tailored to your requirements using modern frameworks and clean architecture.",
                color: "group-hover:border-green-300",
                bg: "bg-green-50",
              },
              {
                icon: <ZapIcon className="text-primary-600" size={28} />,
                title: "API Development",
                desc: "Design and implement robust RESTful and GraphQL APIs. Build the backbone for your digital ecosystem.",
                color: "group-hover:border-yellow-300",
                bg: "bg-yellow-50",
              },
            ].map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 80}>
                <div className={`p-6 rounded-2xl border border-gray-200 bg-white ${service.color} hover:shadow-xl transition-all duration-300 group card-hover h-full`}>
                  <div className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={300}>
            <div className="mt-12 text-center">
              <a
                href="https://wa.me/254701557978?text=Hi%2C%20I'm%20interested%20in%20learning%20more%20about%20Naniya's%20professional%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/20 hover:-translate-y-0.5"
              >
                <WhatsAppIcon size={18} />
                Discuss Your Project
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-gray-50/80">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">About Us</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
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
                  We leverage WhatsApp Business API, M-PESA integration, and
                  modern web frameworks to create accessible, impactful products.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We believe technology should work for everyone — not just big
                  corporations. That&apos;s why we build solutions that empower
                  community groups, small businesses, and entrepreneurs.
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="bg-white px-4 py-2.5 rounded-xl border border-gray-200 inline-flex items-center gap-2 font-medium">
                    <MapPinIcon className="text-primary-600" size={16} />
                    Nairobi, Kenya
                  </div>
                  <div className="bg-white px-4 py-2.5 rounded-xl border border-gray-200 inline-flex items-center gap-2 font-medium">
                    <BuildingIcon className="text-primary-600" size={16} />
                    Registered Company
                  </div>
                  <div className="bg-white px-4 py-2.5 rounded-xl border border-gray-200 inline-flex items-center gap-2 font-medium">
                    <FlagIcon className="text-primary-600" size={16} />
                    KRA Compliant
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-8">Our Values</h3>
                <div className="space-y-6">
                  {[
                    { title: "Innovation", desc: "We push boundaries to find creative solutions to African challenges." },
                    { title: "Accessibility", desc: "Technology should be available and usable by everyone, everywhere." },
                    { title: "Integrity", desc: "We build trust through transparency, honesty, and delivering on promises." },
                    { title: "Impact", desc: "Every product we build aims to create measurable positive change." },
                  ].map((value) => (
                    <div key={value.title} className="flex gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircleIcon className="text-white/80" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{value.title}</h4>
                        <p className="text-white/70 text-sm mt-0.5">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Location / Visit Us */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl" />
              <div className="grid md:grid-cols-2 gap-8 items-center relative">
                <div>
                  <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center mb-4">
                    <MapPinIcon className="text-primary-400" size={24} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Visit Us</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Our office is located in the heart of Lavington, Nairobi. We&apos;d love to meet
                    and discuss how we can help with your technology needs.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <BuildingIcon className="text-primary-400 mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="font-semibold text-white">Neptune Residency</p>
                        <p className="text-gray-400 text-sm">Mararo Road, Lavington</p>
                        <p className="text-gray-400 text-sm">Nairobi, Kenya</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <PhoneIcon className="text-primary-400 flex-shrink-0" size={18} />
                      <a href="tel:+254701557978" className="text-gray-300 hover:text-white transition-colors">+254 701 557 978</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <EnvelopeIcon className="text-primary-400 flex-shrink-0" size={18} />
                      <a href="mailto:info@naniya.co.ke" className="text-gray-300 hover:text-white transition-colors">info@naniya.co.ke</a>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600/50">
                  <div className="aspect-[4/3] bg-gray-600/50 rounded-lg flex items-center justify-center">
                    <a
                      href="https://maps.google.com/?q=Neptune+Residency+Mararo+Road+Lavington+Nairobi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center"
                    >
                      <MapPinIcon className="text-primary-400 mx-auto mb-3" size={32} />
                      <p className="text-white font-semibold text-sm">View on Google Maps</p>
                      <p className="text-gray-400 text-xs mt-1">Lavington, Nairobi</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-gray-50/80">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">Contact</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to transform your business with technology? Let&apos;s talk.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <WhatsAppIcon className="text-accent-600" size={28} />,
                title: "WhatsApp",
                info: "Message Us",
                href: "https://wa.me/254701557978",
                external: true,
                hoverBorder: "hover:border-accent-300",
                bg: "bg-accent-50",
              },
              {
                icon: <EnvelopeIcon className="text-primary-600" size={28} />,
                title: "Email Us",
                info: "info@naniya.co.ke",
                href: "mailto:info@naniya.co.ke",
                external: false,
                hoverBorder: "hover:border-primary-300",
                bg: "bg-primary-50",
              },
              {
                icon: <PhoneIcon className="text-primary-600" size={28} />,
                title: "Call Us",
                info: "+254 701 557 978",
                href: "tel:+254701557978",
                external: false,
                hoverBorder: "hover:border-primary-300",
                bg: "bg-primary-50",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`flex flex-col items-center p-8 rounded-2xl bg-white border-2 border-gray-100 ${item.hoverBorder} hover:shadow-xl transition-all duration-300 text-center group card-hover`}
                >
                  <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm font-medium text-gray-500">{item.info}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="text-xl font-bold tracking-tight">Naniya Technologies</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Naniya Technologies Limited is a registered Kenyan company
                building products that help communities and businesses manage
                their finances through technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Products</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="https://chama.naniya.co.ke" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Chama Platform</a>
                </li>
                <li>
                  <a href="https://lipaclear.naniya.co.ke" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LipaClear</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Naniya Technologies Limited. All rights reserved.
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

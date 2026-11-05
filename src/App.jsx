export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600" />
            Sapcex
          </a>
          <ul className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <li><a href="#solutions" className="hover:text-white">Solutions</a></li>
            <li><a href="#products" className="hover:text-white">Products</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
          <a href="#contact" className="rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 transition hover:bg-sky-400">
            Get Started
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden pt-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.25),_transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
          <span className="inline-block rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-sky-300">
            Sapcex Technology
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Engineering the future of <span className="text-sky-400">space technology</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            We build advanced aerospace systems, satellite networks and deep-space
            infrastructure to take humanity further than ever before.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#solutions" className="rounded-full bg-sky-500 px-7 py-3 font-medium text-slate-950 transition hover:bg-sky-400">
              Explore Solutions
            </a>
            <a href="#about" className="rounded-full border border-white/20 px-7 py-3 font-medium text-white transition hover:bg-white/10">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-6 py-10 md:grid-cols-4">
          {[
            ['24+', 'Missions'],
            ['12', 'Satellites'],
            ['3', 'Launch Sites'],
            ['99.9%', 'Uptime'],
          ].map(([value, label]) => (
            <div key={label} className="px-4 py-2 text-center">
              <div className="text-3xl font-bold text-sky-400">{value}</div>
              <div className="mt-1 text-sm text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Our Solutions</h2>
          <p className="mt-4 text-slate-300">
            End-to-end aerospace capabilities designed for the next era of space.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ['Launch Systems', 'Reusable orbital-class rockets with proven reliability.'],
            ['Satellite Networks', 'Global coverage LEO constellations for connectivity & imaging.'],
            ['Deep Space', 'Probes & landers engineered for exploration beyond Earth orbit.'],
            ['Ground Stations', 'High-throughput telemetry and command infrastructure.'],
            ['Software & AI', 'Mission control, simulation and autonomous flight software.'],
            ['Mission Services', 'Full-lifecycle launch booking, payload integration & support.'],
          ].map(([title, body]) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-slate-900/50 p-8 transition hover:border-sky-400/50 hover:bg-slate-900">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600" />
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-slate-400">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="bg-slate-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Featured Products</h2>
            <p className="mt-4 text-slate-300">Hardware built for the harshest environments.</p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              ['Falcon-X', 'Medium-lift reusable rocket. 12,000 kg to LEO.'],
              ['NovaSat', 'Earth-observation microsatellite platform.'],
              ['Orion-X', 'Deep-space exploration vehicle platform.'],
            ].map(([name, desc]) => (
              <div key={name} className="rounded-2xl border border-white/10 bg-slate-950 p-8">
                <div className="mb-6 h-40 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900" />
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="mt-2 text-slate-400">{desc}</p>
                <a href="#contact" className="mt-4 inline-block text-sm font-medium text-sky-400 hover:underline">
                  Request specs
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">About Sapcex</h2>
            <p className="mt-4 text-slate-300">
              Founded to accelerate humanity's multi-planetary future, Sapcex Technology
              combines engineering excellence with bold vision. Our teams work across
              aerospace, software and manufacturing to deliver breakthrough systems on time.
            </p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                Mission-driven engineering culture
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                Vertical integration across the supply chain
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                Relentless focus on safety and reliability
              </li>
            </ul>
          </div>
          <div className="h-80 rounded-2xl bg-gradient-to-br from-sky-600/30 to-indigo-700/30 border border-white/10" />
        </div>
      </section>

      <section id="contact" className="bg-slate-900/40 py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Get in touch</h2>
          <p className="mt-4 text-slate-300">
            Ready to plan your next mission? Reach out to our team.
          </p>
          <form className="mt-10 grid gap-4 text-left">
            <input
              type="text"
              placeholder="Your name"
              className="rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              className="rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
            />
            <textarea
              rows="4"
              placeholder="Your message"
              className="rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-sky-500 px-7 py-3 font-medium text-slate-950 transition hover:bg-sky-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} Sapcex Technology. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Careers</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
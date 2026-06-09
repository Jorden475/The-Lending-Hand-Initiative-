import Link from 'next/link';

const stats = [
  { value: '70K+', label: 'Radio Listeners Reached' },
  { value: '20+', label: 'National Speaking Engagements' },
  { value: '3', label: 'Federal Advisory Boards' },
  { value: '2026', label: 'Georgia Kidney Champion Award' },
];

const valueProps = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Lived Expertise',
    body: "Firsthand understanding of the APOL1 patient journey — offering real insight into barriers, motivations, and daily realities that don't appear in clinical data.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
    title: 'National Credibility',
    body: 'Recognized across the kidney health ecosystem through engagements with the Congressional Black Caucus, FDA/KHI APOL1 Advisory Council, ISGD, NORD, NKF, AKF, and NephCure.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Community Relationships',
    body: 'Deep-rooted relationships with patient communities, HBCUs, local organizations, and trusted community partners — essential access points for APOL1 outreach and awareness.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Patient Engagement & Program Insight',
    body: 'Patient-centered insight that ensures programs reflect real community priorities, while identifying and recommending trusted patient voices when broader perspectives are needed.',
  },
];

const partners = [
  'Congressional Black Caucus',
  'American Kidney Fund',
  'NephCure',
  'National Organization for Rare Disorders',
  'AstraZeneca',
  'Food & Drug Administration',
  'National Kidney Foundation',
  'Kidney Health Initiative',
  'International Society of Glomerular Disease',
  'Travere Therapeutics',
  'Maze Therapeutics',
  'Apellis Pharmaceuticals',
  'Biogen',
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-mid rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-brand-mid/30 text-green-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Patient Advocacy · Health Equity · Community Impact
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Advancing Trust,<br />
              <span className="text-brand-accent">Equity &amp; Community</span><br />
              Impact
            </h1>
            <p className="text-green-100 text-lg leading-relaxed mb-8 max-w-lg">
              Helping organizations reach APOL1-affected communities early — building awareness, strengthening trust, and ensuring no one faces a diagnosis without the information and support they need.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="bg-white text-brand-dark font-semibold px-7 py-3 rounded-full hover:bg-green-50 transition-colors"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="border border-white/40 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/10 transition-colors"
              >
                Work With Us
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-brand-accent mb-1">{value}</div>
                <div className="text-sm text-green-200 leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission strip */}
      <section className="bg-brand-light py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-brand-dark text-xl md:text-2xl font-medium leading-relaxed italic">
            “My goal is to ensure that conversations around APOL1 move upstream — increasing awareness, strengthening trust, and connecting more individuals to the information and support they need.”
          </p>
          <p className="mt-4 text-brand-mid font-semibold">— Jaime Albright, MSW</p>
        </div>
      </section>

      {/* Value props */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-brand-dark mb-3">Strategic Value We Bring</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A unique combination of lived experience, national credibility, and deep community trust.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {valueProps.map(({ icon, title, body }) => (
            <div key={title} className="flex gap-5 p-7 rounded-2xl border border-gray-100 hover:border-brand-accent/40 hover:shadow-md transition-all">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-dark">
                {icon}
              </div>
              <div>
                <h3 className="font-semibold text-brand-dark mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners / Recognized By */}
      <section className="bg-brand-muted py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-mid mb-8">
            Recognized &amp; Engaged By
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((p) => (
              <span
                key={p}
                className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-5 py-2 rounded-full shadow-sm"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-brand-dark mb-4">Ready to Collaborate?</h2>
        <p className="text-gray-500 max-w-lg mx-auto mb-8">
          Whether you're a pharmaceutical company, patient organization, or advocacy group — let's work together to build trust and drive impact in APOL1-affected communities.
        </p>
        <Link
          href="/contact"
          className="bg-brand-dark text-white font-semibold px-9 py-4 rounded-full hover:bg-brand-mid transition-colors inline-block"
        >
          Get In Touch
        </Link>
      </section>
    </>
  );
}

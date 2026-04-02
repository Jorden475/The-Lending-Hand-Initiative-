const boards = [
  {
    org: 'APOL1 Kidney Disease Roadmap Implementation Roundtable',
    role: 'Member',
    years: '2024–2025',
  },
  {
    org: 'FDA APOL1 Kidney Disease Roundtable (NKF/KHI)',
    role: 'Advisory Member',
    years: '2024–present',
  },
  {
    org: 'American Kidney Fund (AKF) – Patient Advisory Council',
    role: 'Member',
    years: '2022–present',
  },
];

const certifications = [
  {
    title: 'NORD Rare Disease Drug Development Certificate',
    date: 'Completed August 2025',
  },
  {
    title: 'American Kidney Fund Kidney Health Coach Program',
    date: 'Completed August 18, 2025',
  },
];

const awards = [
  {
    title: 'Georgia Kidney Champion Award',
    org: 'National Kidney Foundation – Inaugural Southern Santé Event',
    date: 'March 2026',
  },
];

export const metadata = {
  title: 'About | The Lending Hand Initiative',
  description: 'Meet Jorden Albright — Patient Advocate, National Speaker, and APOL1 Community Advisor.',
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block bg-brand-mid/30 text-green-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            About
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Jorden Albright</h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Patient Advocate · National Speaker · APOL1 Community Advisor
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-14 items-start">
        <div className="md:col-span-3 space-y-5 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-brand-dark">Who I Am</h2>
          <p>
            Living with APOL1-mediated FSGS (Focal Segmental Glomerulosclerosis) shaped Jorden Albright's
            commitment to improving awareness, education, and engagement around kidney health. Rather than
            letting his diagnosis define him, Jorden channeled it into a mission.
          </p>
          <p>
            Through national advocacy, public speaking, and collaboration with patient organizations,
            clinicians, and researchers, Jorden works to elevate patient voices while expanding
            understanding of APOL1-associated kidney disease — both within impacted communities and
            among those who may not yet realize they are at risk.
          </p>
          <p>
            His goal is to ensure that conversations around APOL1 move upstream — increasing awareness,
            strengthening trust, and connecting more individuals to the information and support they need.
          </p>
          <p>
            As the founder of <strong className="text-brand-dark">The Lending Hand Initiative</strong>,
            Jorden bridges the gap between patients and healthcare systems, ensuring that programs and
            initiatives reflect real community priorities — not just clinical assumptions.
          </p>
        </div>

        <div className="md:col-span-2 space-y-6">
          {/* Credential card */}
          <div className="bg-brand-light rounded-2xl p-7 space-y-4">
            <h3 className="font-semibold text-brand-dark text-sm uppercase tracking-widest">Credentials</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-brand-accent flex-shrink-0" />
                <span>APOL1 Community Advisor &amp; Patient Advocate</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-brand-accent flex-shrink-0" />
                <span>NORD Rare Disease Drug Development Certificate (2025)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-brand-accent flex-shrink-0" />
                <span>AKF Kidney Health Coach (2025)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 rounded-full bg-brand-accent flex-shrink-0" />
                <span>Georgia Kidney Champion Award — NKF (2026)</span>
              </div>
            </div>
          </div>

          {/* Senate recognition */}
          <div className="border border-brand-accent/30 rounded-2xl p-6 bg-white">
            <p className="text-sm text-gray-600 italic leading-relaxed">
              "Recognized in the Senate Gallery by Senator Kay Kirkpatrick during the announcement
              of a resolution designating FSGS Awareness Day."
            </p>
            <p className="mt-3 text-xs text-brand-mid font-semibold">Georgia State Capitol · March 2026</p>
          </div>
        </div>
      </section>

      {/* Boards */}
      <section className="bg-brand-muted py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-8">Boards, Advisory Councils &amp; Committees</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {boards.map(({ org, role, years }) => (
              <div key={org} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <p className="font-semibold text-brand-dark text-sm leading-snug mb-2">{org}</p>
                <p className="text-brand-mid text-sm font-medium">{role}</p>
                <p className="text-gray-400 text-xs mt-1">{years}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">
        <div>
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Awards &amp; Recognition</h2>
          <div className="space-y-4">
            {awards.map(({ title, org, date }) => (
              <div key={title} className="flex gap-4 p-5 bg-brand-light rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-brand-dark text-sm">{title}</p>
                  <p className="text-gray-600 text-sm">{org}</p>
                  <p className="text-brand-mid text-xs mt-1 font-medium">{date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Education &amp; Certifications</h2>
          <div className="space-y-4">
            {certifications.map(({ title, date }) => (
              <div key={title} className="flex gap-4 p-5 bg-brand-light rounded-xl">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-mid rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-brand-dark text-sm">{title}</p>
                  <p className="text-brand-mid text-xs mt-1 font-medium">{date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

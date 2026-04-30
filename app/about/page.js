const team = [
  {
    name: 'Jorden Albright',
    title: 'Founder | Patient Advocate & National Speaker',
    photo: '/jorden.jpg',
    bio: `Jorden is an Atlanta-based patient advocate living with APOL1-mediated FSGS. Diagnosed in 2022, he transformed his personal health journey into a mission to advance awareness, early screening, and health equity in rare kidney disease.\n\nIn addition to his advocacy work, Jorden serves as a Director at Rise Property Group, a boutique commercial real estate brokerage based in Atlanta. He has spoken at forums including the Congressional Black Caucus and the International Society of Glomerular Disease, and has contributed to regulatory and policy discussions at the FDA and KHI APOL1 Kidney Disease Roundtable.\n\nJorden is committed to ensuring that lived patient experience informs research, innovation, and the future of kidney care.`,
    quote: null,
  },
  {
    name: 'Jaime Albright, MSW',
    title: 'Patient Parent & Advocate',
    photo: '/jaime.jpg',
    bio: `Jaime is a Georgia-based patient parent and kidney disease advocate. She and her husband, Joshua Henighan, are raising six children. After their sons, Joshua (diagnosed in 2021) and Jorden (diagnosed in 2022) were diagnosed with Focal Segmental Glomerulosclerosis (FSGS), a rare genetic kidney disease, Jaime became a passionate advocate for early screening and genetic testing, recognizing that their stories of early diagnosis were uncommon.\n\nShe now facilitates patient support groups, serves on multiple patient education panels, and was appointed to Governor Brian Kemp's Rare Disease Advisory Council. In addition to her advocacy work, Jaime is a writer and producer at Tenderfoot TV, where she uses storytelling to amplify meaningful voices and impactful narratives.`,
    quote: "It's time to go upstream — focusing on awareness and prevention to make a real impact in the kidney community.",
  },
  {
    name: 'Joshua Albright',
    title: 'Patient Advocate & Teen Coordinator',
    photo: '/joshua.jpg',
    bio: `Joshua is a 21-year-old Communication major at Georgia State University and Teen Coordinator at The Drake House. Diagnosed in 2021 at age 17 with stage 2 kidney disease and FSGS, he participates in a clinical trial for APOL1-mediated FSGS.\n\nJoshua advocates for kidney disease awareness and early screening, serving on multiple patient education panels. He attended the 2024 KDIGO Conference in Ghana and was appointed to Governor Brian Kemp's Rare Disease Advisory Council. He is co-founding a consulting firm with his brother, Jorden, to bridge the gap between patients and the pharmaceutical world.\n\nJoshua coined the phrase "Facing Struggle, Gaining Strength" for FSGS to highlight resilience and empower others, and uses his social media platforms to show that living fully after diagnosis is possible.`,
    quote: null,
  },
];

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
  {
    org: "Governor Brian Kemp's Rare Disease Advisory Council",
    role: 'Member — Jaime Albright',
    years: 'Current',
  },
  {
    org: "Governor Brian Kemp's Rare Disease Advisory Council",
    role: 'Member — Joshua Albright',
    years: 'Current',
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
  description: 'Meet the Albright family — patient advocates, national speakers, and APOL1 community leaders.',
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            A family united by lived experience — turning personal health journeys into national advocacy for APOL1 kidney disease awareness and health equity.
          </p>
        </div>
      </section>

      {/* Team bios */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-brand-dark mb-3">Meet the Team</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            The Lending Hand Initiative is built on family, faith, and a shared commitment to making sure no one faces an APOL1 diagnosis alone.
          </p>
        </div>

        <div className="space-y-12">
          {team.map(({ name, title, photo, bio, quote }, i) => (
            <div
              key={name}
              className={`grid md:grid-cols-5 gap-10 items-start p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow ${
                i % 2 === 0 ? 'bg-white' : 'bg-brand-muted'
              }`}
            >
              {/* Photo */}
              <div className="md:col-span-1 flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-brand-accent/30 mb-3 bg-brand-light">
                  <img
                    src={photo}
                    alt={name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="font-bold text-brand-dark text-sm">{name.split(',')[0]}</p>
                {name.includes(',') && (
                  <p className="text-xs text-brand-mid font-medium">{name.split(', ')[1]}</p>
                )}
              </div>

              {/* Bio content */}
              <div className="md:col-span-4">
                <h3 className="text-xl font-bold text-brand-dark mb-1">{name}</h3>
                <p className="text-brand-mid text-sm font-semibold mb-4">{title}</p>
                <div className="space-y-3">
                  {bio.split('\\n\\n').map((para, j) => (
                    <p key={j} className="text-gray-600 text-sm leading-relaxed">{para}</p>
                  ))}
                </div>
                {quote && (
                  <blockquote className="mt-5 border-l-4 border-brand-accent pl-4 italic text-brand-dark text-sm">
                    "{quote}"
                  </blockquote>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Boards */}
      <section className="bg-brand-muted py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-8">Boards, Advisory Councils &amp; Committees</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {boards.map(({ org, role, years }) => (
              <div key={org + role} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
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

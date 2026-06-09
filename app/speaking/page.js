const engagements = [
  {
    year: '2026',
    items: [
      {
        event: 'Legislative Engagement — Georgia State Capitol',
        detail: 'Travere Therapeutics | World Kidney Day',
        role: 'Advocate & Speaker',
        note: 'Recognized in the Senate Gallery by Senator Kay Kirkpatrick during FSGS Awareness Day resolution announcement.',
      },
      {
        event: 'National Kidney Foundation – Inaugural Southern Santé Event',
        detail: 'Georgia Kidney Champion Award Recipient',
        role: 'Award Recipient',
      },
    ],
  },
  {
    year: '2025',
    items: [
      {
        event: 'International Society of Glomerular Disease: PARASOL',
        detail: 'Current State of Surrogate Outcomes',
        role: 'Panelist',
      },
      {
        event: 'Black Health Matters: What\'s in Them Genes?',
        detail: 'Panel Sponsored by AstraZeneca',
        role: 'Speaker & Panelist',
      },
      {
        event: 'NORD Rare Disease Forum: Living Rare, Living Stronger',
        detail: 'Understanding the Importance of Genetics · Georgia Aquarium',
        role: 'Featured Speaker',
        note: 'June 27, 2025',
      },
      {
        event: 'NephCure\'s Patient Summit',
        detail: '',
        role: 'Speaker',
      },
      {
        event: 'AKF\'s 2025 Kidney Action Week',
        detail: 'Is Genetic Testing Right for You?',
        role: 'Panelist',
      },
      {
        event: 'APOL1 Awareness Day Town Hall',
        detail: '',
        role: 'Speaker & Advocate',
      },
      {
        event: 'Travere Therapeutics: Play It Forward FSGS Awareness Campaign',
        detail: '',
        role: 'Advocate Participant',
      },
      {
        event: 'American Kidney Fund: APOL1 Awareness Day',
        detail: '',
        role: 'Advocate Participant',
      },
    ],
  },
  {
    year: '2024',
    items: [
      {
        event: 'Congressional Black Caucus',
        detail: '',
        role: 'Speaker',
      },
      {
        event: 'Maze Therapeutics – Learn & Grow Educational Session',
        detail: '',
        role: 'Speaker',
      },
      {
        event: 'Soulivity Today (Southern California Broadcast)',
        detail: 'Over 70,000 listeners tuned in',
        role: 'Guest Speaker',
      },
      {
        event: 'NephCure\'s Rare Kidneys Connect: Atlanta',
        detail: '',
        role: 'Panelist',
      },
      {
        event: 'NephCure\'s Community Event at Ebenezer Baptist Church',
        detail: '',
        role: 'Speaker',
      },
    ],
  },
  {
    year: '2023',
    items: [
      {
        event: 'NephCure Health Equity Conference',
        detail: 'Addressing the Unequal Burden of Kidney Disease on Black Americans',
        role: 'Speaker',
        note: 'Thanked by Senator Raphael Warnock for advocacy efforts · September 19, 2023',
      },
      {
        event: 'American Kidney Fund – First Annual APOL1 Awareness Day',
        detail: '',
        role: 'Featured Speaker',
      },
      {
        event: 'American Kidney Fund – Patient Access Initiative',
        detail: '',
        role: 'Keynote Speaker',
      },
      {
        event: 'NephCure\'s First APOL1 Live Webinar',
        detail: 'Celebrating APOL1 Awareness',
        role: 'Speaker',
      },
      {
        event: 'NephCure Annual Countdown to a Cure (NYC)',
        detail: '',
        role: 'Featured Speaker',
      },
      {
        event: 'NephCure Annual Countdown to a Cure Gala',
        detail: '',
        role: 'Speaker',
      },
      {
        event: 'NephCure Webinar – Mental Health & Rare Kidney Disease: The Hope That Lies Ahead',
        detail: 'May 30, 2023',
        role: 'Speaker',
      },
      {
        event: 'Congressional Black Caucus',
        detail: '',
        role: 'Speaker',
      },
      {
        event: 'NephCure Patient Summit',
        detail: '',
        role: 'Speaker',
      },
    ],
  },
  {
    year: '2022',
    items: [
      {
        event: 'NephCure Patient Summit',
        detail: '',
        role: 'Speaker',
      },
    ],
  },
];

export const metadata = {
  title: 'Speaking | The Lending Hand Initiative',
  description: 'International speaking engagements, panel appearances, and keynote addresses by Jorden Albright.',
};

export default function Speaking() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block bg-brand-mid/30 text-green-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Speaking
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Speaking Engagements</h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            An international voice in kidney health equity, APOL1 awareness, and patient advocacy.
          </p>
        </div>
      </section>

      {/* Highlight stats */}
      <section className="bg-brand-light py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '20+', label: 'Engagements' },
            { value: '70K+', label: 'Radio Listeners' },
            { value: '5+', label: 'Years of Advocacy' },
            { value: 'International', label: 'Reach' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-bold text-brand-dark">{value}</div>
              <div className="text-sm text-brand-mid mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagements timeline */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="space-y-14">
          {engagements.map(({ year, items }) => (
            <div key={year}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-dark text-white font-bold text-lg px-5 py-2 rounded-full">
                  {year}
                </div>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <div className="space-y-4 pl-2">
                {items.map(({ event, detail, role, note }) => (
                  <div
                    key={event}
                    className="flex gap-4 p-5 bg-white border border-gray-100 rounded-xl hover:border-brand-accent/30 hover:shadow-sm transition-all"
                  >
                    <div className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-brand-accent" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-brand-dark text-sm leading-snug">{event}</p>
                      {detail && <p className="text-gray-500 text-sm mt-0.5">{detail}</p>}
                      {note && (
                        <p className="text-brand-mid text-xs italic mt-1">{note}</p>
                      )}
                    </div>
                    <span className="flex-shrink-0 bg-brand-light text-brand-dark text-xs font-semibold px-3 py-1 rounded-full self-start whitespace-nowrap">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-brand-dark text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Book Jorden to Speak</h2>
          <p className="text-green-200 mb-8">
            Available for conferences, patient summits, panels, webinars, legislative engagements, and community events focused on APOL1, kidney health equity, and rare disease advocacy.
          </p>
          <a
            href="/contact"
            className="bg-white text-brand-dark font-semibold px-9 py-4 rounded-full hover:bg-green-50 transition-colors inline-block"
          >
            Request a Speaking Engagement
          </a>
        </div>
      </section>
    </>
  );
}

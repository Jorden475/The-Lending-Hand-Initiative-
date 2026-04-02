const services = [
  {
    number: '01',
    title: 'Patient Perspective',
    description:
      'Provides real-world perspectives on the experiences, barriers, and motivations of individuals affected by APOL1-associated kidney disease — informing program direction and decision-making with authentic patient insight.',
    bullets: [
      'Authentic representation of the APOL1 patient journey',
      'Identifying gaps between clinical programs and lived experience',
      'Informing research, communications, and outreach materials',
    ],
  },
  {
    number: '02',
    title: 'Community Strategy',
    description:
      'Advises on approaches to engage APOL1-impacted communities through trusted messengers, relevant channels, and meaningful touchpoints that drive awareness, trust, and action.',
    bullets: [
      'Trusted messenger identification and activation',
      'HBCU and community organization engagement',
      'Health fairs, patient summits, and grassroots outreach',
    ],
  },
  {
    number: '03',
    title: 'Partnership Development',
    description:
      'Identifies and facilitates opportunities to strengthen connections with HBCUs, community organizations, patient advocates, and mission-aligned groups to broaden APOL1 awareness and engagement.',
    bullets: [
      'Strategic introductions to patient leaders and advocacy organizations',
      'Connection to community groups that expand partner reach and trust',
      'Long-term relationship cultivation for sustained engagement',
    ],
  },
  {
    number: '04',
    title: 'Trusted Voices & Community Insight',
    description:
      'Offers perspective on trusted messengers and communication approaches that foster trust within communities affected by APOL1-associated kidney disease, strengthening the reach and relevance of initiatives.',
    bullets: [
      'Culturally relevant, accessible messaging review',
      'Community trust-building strategies',
      'Alignment with patient priorities and communication norms',
    ],
  },
  {
    number: '05',
    title: 'Speaking & Panel Engagements',
    description:
      'Available for keynote addresses, panel discussions, webinars, and community events focused on APOL1 kidney disease, health equity, genetic testing, and rare disease advocacy.',
    bullets: [
      'Conferences, patient summits, and medical meetings',
      'Radio, broadcast, and digital media appearances',
      'Congressional and legislative engagement',
    ],
  },
  {
    number: '06',
    title: 'Patient-Centered Messaging',
    description:
      'Reviews and advises on communications, materials, and initiatives to ensure they are culturally relevant, accessible, and aligned with patient trust-building principles.',
    bullets: [
      'Messaging review and feedback for pharma and nonprofit partners',
      'Campaign alignment with community values',
      'Ensuring equity-centered framing across all materials',
    ],
  },
];

const howWeWork = [
  {
    title: 'Open Communication',
    body: 'Maintain clear communication so ideas, questions, and decisions move forward efficiently.',
  },
  {
    title: 'Progress-Focused',
    body: 'Keep engagement centered on meaningful progress while remaining flexible as priorities evolve.',
  },
  {
    title: 'Collaborative Partnership',
    body: 'Work together to refine messaging, strengthen outreach, and ensure programs reflect the needs and perspectives of the APOL1 community.',
  },
  {
    title: 'Unified Direction',
    body: 'Help maintain clarity and alignment across APOL1 priorities by reinforcing consistent messaging and coordinated efforts.',
  },
];

export const metadata = {
  title: 'Services | The Lending Hand Initiative',
  description: 'Patient advocacy, community strategy, partnership development, and patient-centered messaging services.',
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block bg-brand-mid/30 text-green-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How I Can Help</h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            A range of engagement services designed to advance trust, equity, and community impact in the APOL1 kidney health space.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map(({ number, title, description, bullets }) => (
            <div key={number} className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:border-brand-accent/30 transition-all group">
              <span className="text-4xl font-black text-brand-light group-hover:text-brand-accent/40 transition-colors leading-none">
                {number}
              </span>
              <h3 className="text-xl font-bold text-brand-dark mt-2 mb-3">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
              <ul className="space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* How we work together */}
      <section className="bg-brand-muted py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-3">How We Work Together</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Every engagement is built on clear communication, shared goals, and genuine partnership.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWork.map(({ title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-brand-dark rounded-full flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-brand-accent rounded-full" />
                </div>
                <h4 className="font-semibold text-brand-dark mb-2">{title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-brand-dark mb-4">Ready to Partner?</h2>
        <p className="text-gray-500 mb-8">
          Let's discuss how The Lending Hand Initiative can support your organization's APOL1 engagement, outreach, or advocacy goals.
        </p>
        <a
          href="/contact"
          className="bg-brand-dark text-white font-semibold px-9 py-4 rounded-full hover:bg-brand-mid transition-colors inline-block"
        >
          Start a Conversation
        </a>
      </section>
    </>
  );
}

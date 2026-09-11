import Link from 'next/link';

export const metadata = {
  title: 'NKF Kidney Walk Atlanta 2026 | The Lending Hand Initiative',
  description:
    'Join Team "Facing Struggle, Gaining Strength" at the NKF Kidney Walk Atlanta — September 12, 2026 at The Battery. Walk with us, donate, and help raise awareness for rare kidney disease.',
};

const details = [
  { label: 'Date', value: 'Saturday, September 12, 2026' },
  { label: 'Location', value: 'The Battery Atlanta' },
  { label: 'Check-In', value: '8:00 AM' },
  { label: 'Walk Starts', value: '9:30 AM' },
  { label: 'Distance', value: '2-Mile Walk' },
];

export default function KidneyWalk() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-mid rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
          <span className="inline-block bg-brand-mid/30 text-green-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            NKF Kidney Walk · Atlanta 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Walk With Us Tomorrow
          </h1>
          <p className="text-2xl font-semibold text-brand-accent mb-6">
            Team &ldquo;Facing Struggle, Gaining Strength&rdquo;
          </p>
          <p className="text-green-100 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Every step is a statement. Join the Albright-Henighan family and The Lending Hand Initiative as we walk for the 37 million Americans living with kidney disease — and the millions who don&apos;t yet know it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.kidneywalk.org/atlanta/Team/View/232518/Facing-Struggle-Gaining-Strength"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-dark font-semibold px-8 py-4 rounded-full hover:bg-green-50 transition-colors text-lg"
            >
              Join Our Team
            </a>
            <a
              href="https://www.kidneywalk.org/atlanta/Team/View/232518/Facing-Struggle-Gaining-Strength"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-lg"
            >
              Donate to the Team
            </a>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="bg-brand-light py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {details.map(({ label, value }) => (
              <div key={label} className="bg-white rounded-2xl p-5 border border-brand-accent/20 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-mid mb-1">{label}</p>
                <p className="text-brand-dark font-bold text-sm leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Why This Walk Matters</h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            For the Albright-Henighan family, this isn&apos;t just a walk — it&apos;s personal.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              stat: '37M',
              label: 'Americans with CKD',
              detail: '1 in 7 U.S. adults has chronic kidney disease — most without any symptoms.',
            },
            {
              stat: '4x',
              label: 'Higher Risk',
              detail: 'Black Americans develop kidney failure at nearly 4 times the rate of white Americans.',
            },
            {
              stat: '9 in 10',
              label: "Don't Know They Have It",
              detail: 'The vast majority of people living with CKD are completely unaware of their diagnosis.',
            },
          ].map(({ stat, label, detail }) => (
            <div key={label} className="bg-brand-light rounded-2xl p-7 border border-brand-accent/20 text-center">
              <div className="text-4xl font-black text-brand-dark mb-1">{stat}</div>
              <div className="text-sm font-bold text-brand-mid mb-3">{label}</div>
              <p className="text-gray-600 text-sm leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About the Team */}
      <section className="bg-brand-muted py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">About Our Team</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            &ldquo;Facing Struggle, Gaining Strength&rdquo; is more than a team name — it&apos;s the Albright-Henighan family&apos;s story. After a rare kidney disease diagnosis changed everything, Jaime, Jorden, and Joshua turned their experience into a mission: ensuring no family walks this road alone and that every community has access to the information and support they need.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Through The Lending Hand Initiative, the Albright-Henighan family has reached over 70,000 radio listeners, spoken at the Congressional Black Caucus, the FDA, NephCure, the American Kidney Fund, NORD, and been recognized by U.S. senators for their advocacy work. Tomorrow, we walk.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Walk With Us?</h2>
          <p className="text-green-200 text-lg mb-8">
            Join Team &ldquo;Facing Struggle, Gaining Strength&rdquo; tomorrow at The Battery — or support us with a donation if you can&apos;t make it in person.
          </p>
          <a
            href="https://www.kidneywalk.org/atlanta/Team/View/232518/Facing-Struggle-Gaining-Strength"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-dark font-semibold px-10 py-4 rounded-full hover:bg-green-50 transition-colors inline-block text-lg"
          >
            Join or Donate →
          </a>
          <p className="mt-8 text-green-400 text-sm">
            Questions?{' '}
            <Link href="/contact" className="underline hover:text-white transition-colors">
              Get in touch
            </Link>
            {' · '}
            <a href="https://www.kidneywalk.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">
              Learn more about the NKF Kidney Walk
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

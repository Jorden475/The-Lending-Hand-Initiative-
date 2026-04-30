const videos = [
  {
    id: 'yoJGuLsNSIw',
    title: 'A New Future for Rare Kidney Disease',
    speakers: 'Joshua Albright',
    tag: 'Documentary',
  },
  {
    id: 'PqeArG7ED5I',
    title: 'Patient-Centered Clinical Trials Panel',
    speakers: 'Joshua Albright & Jaime Albright',
    tag: 'Panel',
  },
  {
    id: 'rrcrvMdowgw',
    title: 'Congressional Briefing – Genetic Testing: Is It the Right Choice for You?',
    speakers: 'Jorden Albright',
    tag: 'Congressional Briefing',
  },
  {
    id: 'g5Ripvq9bnM',
    title: '"What\'s in Them Genes?" — Let\'s Learn About AMKD',
    speakers: 'Jorden Albright, Joshua Albright, Dr. Crenshaw & Dr. Kemi Williams (AstraZeneca)',
    tag: 'Panel',
  },
  {
    id: 'ZLzwPqkRN90',
    title: 'APOL1-Mediated FSGS: What Families Need to Know, from Diagnosis to Advocacy',
    speakers: 'The Lending Hand Initiative',
    tag: 'Education',
  },
  {
    id: '8FxkYX1Gj_Y',
    title: 'SOULIVITY TODAY — National APOL1 Awareness Day',
    speakers: 'Jorden Albright',
    tag: 'Broadcast',
  },
];

export const metadata = {
  title: 'Media | The Lending Hand Initiative',
  description: 'Watch videos featuring The Lending Hand Initiative — panels, documentaries, congressional briefings, and community education.',
};

export default function Media() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block bg-brand-mid/30 text-green-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Media
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Watch & Learn</h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Panels, documentaries, congressional briefings, and community education featuring The Lending Hand Initiative.
          </p>
        </div>
      </section>

      {/* Video grid */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          {videos.map(({ id, title, speakers, tag }) => (
            <div key={id} className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
              {/* YouTube embed */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <span className="inline-block bg-brand-light text-brand-dark text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {tag}
                </span>
                <h3 className="font-bold text-brand-dark text-base leading-snug mb-2">{title}</h3>
                <p className="text-sm text-gray-500 flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-brand-mid flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {speakers}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-muted py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">Want to Feature Us?</h2>
          <p className="text-gray-500 text-sm mb-6">
            Interested in having a member of The Lending Hand Initiative speak at your event, panel, or broadcast?
          </p>
          <a
            href="/contact"
            className="bg-brand-dark text-white font-semibold px-8 py-3 rounded-full hover:bg-brand-mid transition-colors inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </>
  );
}

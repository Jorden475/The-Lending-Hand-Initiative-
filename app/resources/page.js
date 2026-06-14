import Link from 'next/link';

export const metadata = {
  title: 'Resources | The Lending Hand Initiative',
  description: 'Trusted resources for rare kidney disease education, APOL1 information, patient support, advocacy, and clinical trials.',
};

const categories = [
  {
    label: 'Understanding Kidney Disease',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    resources: [
      {
        title: 'What Is Chronic Kidney Disease?',
        org: 'CDC',
        description: 'Overview of CKD — causes, risk factors, symptoms, and why early detection matters. Includes the statistic that 1 in 7 U.S. adults has CKD.',
        href: 'https://www.cdc.gov/kidney-disease/about/index.html',
      },
      {
        title: 'Kidney Disease Information & Health Tips',
        org: 'NIDDK / NIH',
        description: 'Comprehensive kidney disease education from the National Institute of Diabetes and Digestive and Kidney Diseases.',
        href: 'https://www.niddk.nih.gov/health-information/kidney-disease',
      },
      {
        title: 'All About Kidneys',
        org: 'American Kidney Fund',
        description: 'Patient-friendly explanations of kidney disease types, stages, symptoms, and treatment options.',
        href: 'https://www.kidneyfund.org/all-about-kidneys',
      },
      {
        title: 'What Is FSGS?',
        org: 'NephCure Kidney International',
        description: 'Focal Segmental Glomerulosclerosis explained — including how APOL1 variants can cause this rare kidney disease.',
        href: 'https://nephcure.org/livingwithkidneydisease/disease-education/fsgs/',
      },
    ],
  },
  {
    label: 'APOL1 & Genetic Testing',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    resources: [
      {
        title: 'APOL1 Kidney Disease',
        org: 'NephCure Kidney International',
        description: 'Explains the APOL1 gene, high-risk variants (G1/G2), what it means to carry two risk alleles, and the connection to FSGS and kidney failure in Black Americans.',
        href: 'https://nephcure.org/apol1-kidney-disease/',
      },
      {
        title: 'APOL1 & Kidney Disease in Black Americans',
        org: 'American Kidney Fund',
        description: 'How APOL1 risk variants contribute to the disproportionate burden of kidney disease in Black Americans — and what you can do.',
        href: 'https://www.kidneyfund.org/resource/kidney-disease-and-black-americans',
      },
      {
        title: 'APOL1 Awareness Day',
        org: 'American Kidney Fund',
        description: 'Resources from the annual APOL1 Awareness Day — including webinar replays, fact sheets, and tools for patients and families.',
        href: 'https://www.kidneyfund.org/apol1-awareness-day',
      },
      {
        title: 'APOL1-Mediated Kidney Disease — For Patients',
        org: 'apol1ckd.com',
        description: 'Patient-facing resource on APOL1 kidney disease — what the genotype means, who is at risk, and current treatment research.',
        href: 'https://www.apol1ckd.com/',
      },
    ],
  },
  {
    label: 'Patient Support & Community',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    resources: [
      {
        title: 'NephCure Kidney International',
        org: 'NephCure',
        description: 'The only organization dedicated to FSGS and APOL1 kidney disease. Offers patient support groups, educational events, and research funding.',
        href: 'https://nephcure.org/',
      },
      {
        title: 'American Kidney Fund',
        org: 'AKF',
        description: 'Patient assistance, health coaching, and educational resources for people living with kidney disease. Home of the Kidney Health Coach Program.',
        href: 'https://www.kidneyfund.org/',
      },
      {
        title: 'National Kidney Foundation',
        org: 'NKF',
        description: 'Patient support, peer mentoring, kidney walks, and resources for every stage of kidney disease — from early CKD to transplant.',
        href: 'https://www.kidney.org/',
      },
      {
        title: 'National Organization for Rare Disorders',
        org: 'NORD',
        description: 'Support for patients and families living with rare diseases — including rare kidney conditions. Offers patient assistance, disease information, and community.',
        href: 'https://rarediseases.org/',
      },
    ],
  },
  {
    label: 'Advocacy & Policy',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
    resources: [
      {
        title: 'Kidney Health Initiative',
        org: 'KHI',
        description: 'A public-private partnership between the FDA and the kidney community to advance therapies for kidney disease — including the APOL1 Advisory Council Jaime serves on.',
        href: 'https://kidneycarepartners.com/KHI/',
      },
      {
        title: 'KDIGO — Kidney Disease: Improving Global Outcomes',
        org: 'KDIGO',
        description: 'International clinical practice guidelines for kidney disease management, including the 2024 APOL1 Controversies Conference recommendations.',
        href: 'https://kdigo.org/',
      },
      {
        title: 'NORD Rare Disease Forum',
        org: 'NORD',
        description: 'Annual patient advocacy forum where Jorden has spoken — bringing together patients, researchers, and policymakers around rare disease priorities.',
        href: 'https://rarediseases.org/rare-disease-forum/',
      },
      {
        title: 'International Society of Glomerular Disease',
        org: 'ISGD',
        description: 'The global society dedicated to glomerular diseases, including FSGS and APOL1 kidney disease. Home of the PARASOL initiative.',
        href: 'https://glomerulopathy.org/',
      },
    ],
  },
  {
    label: 'Clinical Trials & Research',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    resources: [
      {
        title: 'Search Clinical Trials for Kidney Disease',
        org: 'ClinicalTrials.gov',
        description: 'Search for open clinical trials for FSGS, APOL1 kidney disease, and CKD — including trials currently enrolling patients.',
        href: 'https://clinicaltrials.gov/search?cond=FSGS',
      },
      {
        title: 'Inaxaplin (VX-147) — APOL1-Targeted Therapy',
        org: 'Vertex Pharmaceuticals',
        description: 'The first therapy designed specifically for APOL1 kidney disease is in Phase 3 trials. Learn about the AMPLITUDE trial and how it works.',
        href: 'https://www.vrtx.com/research-development/pipeline/',
      },
      {
        title: 'NephCure Research Programs',
        org: 'NephCure Kidney International',
        description: 'Current FSGS and APOL1 research initiatives funded by NephCure — and how to get involved as a patient research partner.',
        href: 'https://nephcure.org/research/',
      },
      {
        title: 'NIDDK Kidney Disease Research',
        org: 'NIH / NIDDK',
        description: 'NIH-funded research on kidney disease, including APOL1 genomics, rare glomerular diseases, and health disparities.',
        href: 'https://www.niddk.nih.gov/research-funding/research-programs/kidney-urologic-hematologic-diseases',
      },
    ],
  },
];

export default function Resources() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block bg-brand-mid/30 text-green-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Know Your Options</h1>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Trusted resources for patients, families, and advocates — from understanding rare kidney disease to finding support, taking action, and staying informed on emerging treatments.
          </p>
        </div>
      </section>

      {/* Intro callout */}
      <section className="bg-brand-light py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-brand-dark text-base md:text-lg leading-relaxed">
            A diagnosis can feel overwhelming. These organizations and resources have been vetted and, in many cases, personally engaged with by the Albright family through years of advocacy. You are not alone.
          </p>
        </div>
      </section>

      {/* Resource categories */}
      <section className="py-20 max-w-6xl mx-auto px-6 space-y-20">
        {categories.map(({ label, icon, resources }) => (
          <div key={label}>
            {/* Category header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-11 h-11 bg-brand-dark text-white rounded-xl flex items-center justify-center flex-shrink-0">
                {icon}
              </div>
              <h2 className="text-2xl font-bold text-brand-dark">{label}</h2>
            </div>

            {/* Resource cards */}
            <div className="grid md:grid-cols-2 gap-5">
              {resources.map(({ title, org, description, href }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-6 bg-white border border-gray-100 rounded-2xl hover:border-brand-accent/40 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="font-semibold text-brand-dark text-sm leading-snug group-hover:text-brand-mid transition-colors">
                        {title}
                      </p>
                      <p className="text-xs text-brand-mid font-semibold mt-0.5">{org}</p>
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-300 group-hover:text-brand-accent transition-colors flex-shrink-0 mt-0.5"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-brand-dark text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Have a Resource to Add?</h2>
          <p className="text-green-200 mb-8">
            Know of a trusted organization, support group, or tool that should be on this page? We&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="bg-white text-brand-dark font-semibold px-9 py-4 rounded-full hover:bg-green-50 transition-colors inline-block"
          >
            Reach Out
          </Link>
        </div>
      </section>
    </>
  );
}

import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Research Opportunity: PODOMOUNT-pFSGS',
  description:
    'The PODOMOUNT-pFSGS study is evaluating whether BI 764198 can help people living with focal segmental glomerulosclerosis (FSGS). Phase 3 · Ages 12+ · 73 US sites.',
};

const EXPIRY = new Date('2027-01-01'); // listing ends December 31, 2026

export default function PodamountPage() {
  if (new Date() >= EXPIRY) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">

      {/* Disclosure */}
      <div className="bg-brand-light border border-brand-accent/30 rounded-2xl px-6 py-5 mb-10 text-sm text-gray-700 leading-relaxed">
        This clinical trial listing was provided by Boehringer Ingelheim and is shared for informational purposes only. The Lending Hand Initiative does not endorse any specific study or treatment and this is not medical advice. Please talk with your healthcare provider about whether a clinical trial may be right for you. The Lending Hand Initiative has not received compensation for sharing this listing. Posted through December 31, 2026.
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
        Research Opportunity: PODOMOUNT-pFSGS
      </h1>

      {/* Status badge + meta */}
      <div className="flex flex-wrap items-center gap-3 mb-10">
        <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
          Recruiting
        </span>
        <span className="text-gray-500 text-sm">
          Phase 3 · Interventional · Est. 286 participants · Ages 12+
        </span>
      </div>

      {/* About This Study */}
      <section className="mb-10" aria-labelledby="about-heading">
        <h2 id="about-heading" className="text-xl font-bold text-brand-dark mb-3">About This Study</h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          The PODOMOUNT-pFSGS study is evaluating whether a new investigational oral medicine called BI 764198 can help people living with focal segmental glomerulosclerosis (FSGS), a serious kidney condition that causes the filtering units of the kidney to become scarred.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This is a Phase 3, randomized, double-blind, placebo-controlled trial sponsored by Boehringer Ingelheim. It is open to adults and adolescents (ages 12+) with a confirmed diagnosis of primary FSGS (pFSGS) or genetic FSGS caused by a TRPC6 gene variant.
        </p>
      </section>

      {/* How the Study Works */}
      <section className="mb-10" aria-labelledby="how-heading">
        <h2 id="how-heading" className="text-xl font-bold text-brand-dark mb-3">How the Study Works</h2>
        <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 leading-relaxed">
          <li>Participants are randomly assigned to one of two groups: BI 764198 tablets or placebo tablets (which look identical but contain no medicine).</li>
          <li>Both groups continue their existing standard-of-care medications for FSGS throughout the study.</li>
          <li>Participants take one tablet once a day for up to 2 years.</li>
          <li>Study visits occur approximately every 3 months and include urine and blood tests to monitor kidney health.</li>
          <li>The total time in the study is up to 2 years.</li>
        </ul>
      </section>

      {/* Study at a Glance */}
      <section className="mb-10" aria-labelledby="glance-heading">
        <h2 id="glance-heading" className="text-xl font-bold text-brand-dark mb-4">Study at a Glance</h2>
        <dl className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden text-sm">
          {[
            ['Study Name', 'PODOMOUNT-pFSGS'],
            ['ClinicalTrials.gov ID', <a key="nct" href="https://clinicaltrials.gov/study/NCT07220083" target="_blank" rel="noopener noreferrer" className="text-brand-mid underline hover:text-brand-dark">NCT07220083</a>],
            ['Condition', 'Primary Focal Segmental Glomerulosclerosis (pFSGS); Genetic FSGS (TRPC6 variant)'],
            ['Investigational Drug', 'BI 764198 (oral tablet, once daily)'],
            ['Comparator', 'Matching placebo tablet'],
            ['Phase', 'Phase 3'],
            ['Study Type', 'Randomized, double-blind, placebo-controlled'],
            ['Ages', '12 years and older'],
            ['Estimated Enrollment', 'Approximately 286 participants'],
            ['Study Duration', 'Up to 2 years per participant'],
            ['Study Start', 'February 2026'],
            ['Estimated Completion', 'December 2028'],
            ['Sponsor', 'Boehringer Ingelheim'],
            ['US Sites', '73 sites across 27 US states'],
          ].map(([label, value]) => (
            <div key={label} className="flex flex-col sm:flex-row">
              <dt className="sm:w-56 flex-shrink-0 px-4 py-3 font-semibold text-gray-800 bg-brand-light">{label}</dt>
              <dd className="px-4 py-3 text-gray-700">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Who May Be Eligible */}
      <section className="mb-10" aria-labelledby="eligible-heading">
        <h2 id="eligible-heading" className="text-xl font-bold text-brand-dark mb-3">Who May Be Eligible</h2>
        <p className="text-gray-700 mb-3">You may qualify to participate if you:</p>
        <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 leading-relaxed mb-4">
          <li>Are 12 years of age or older</li>
          <li>Have a confirmed diagnosis of biopsy-confirmed primary FSGS (pFSGS), OR genetic FSGS from a confirmed gain-of-function TRPC6 gene mutation</li>
          <li>Have a urine protein-creatinine ratio (UPCR) ≥1,500 mg/g</li>
          <li>Have an eGFR ≥25 mL/min/1.73 m²</li>
          <li>Have a body weight ≥40 kg and BMI ≤40 kg/m²</li>
        </ul>
        <p className="text-gray-600 text-sm leading-relaxed">
          Additional eligibility criteria apply. Participants should speak with their healthcare provider and review the full eligibility details at{' '}
          <a href="https://clinicaltrials.gov/study/NCT07220083" target="_blank" rel="noopener noreferrer" className="text-brand-mid underline hover:text-brand-dark">ClinicalTrials.gov</a>
          {' '}or the patient website.
        </p>
      </section>

      {/* Participating Sites */}
      <section className="mb-10" aria-labelledby="sites-heading">
        <h2 id="sites-heading" className="text-xl font-bold text-brand-dark mb-4">Participating Study Sites (Atlanta area)</h2>
        <div className="space-y-4">
          <div className="bg-brand-light rounded-2xl px-5 py-4 border border-brand-accent/20">
            <p className="font-semibold text-brand-dark">Emory University</p>
            <p className="text-gray-600 text-sm mt-0.5">Atlanta, GA 30322</p>
            <div className="flex flex-wrap gap-4 mt-2 text-sm">
              <a href="tel:+14047270851" className="text-brand-mid hover:text-brand-dark underline">404-727-0851</a>
              <a href="mailto:awilke3@emory.edu" className="text-brand-mid hover:text-brand-dark underline">awilke3@emory.edu</a>
            </div>
          </div>
          <div className="bg-brand-light rounded-2xl px-5 py-4 border border-brand-accent/20">
            <p className="font-semibold text-brand-dark">Southeast Kidney Associates</p>
            <p className="text-gray-600 text-sm mt-0.5">East Point, GA 30344</p>
            <div className="flex flex-wrap gap-4 mt-2 text-sm">
              <a href="tel:+18336022368" className="text-brand-mid hover:text-brand-dark underline">833-602-2368</a>
              <a href="mailto:unitedstates@bitrialsupport.com" className="text-brand-mid hover:text-brand-dark underline">unitedstates@bitrialsupport.com</a>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mt-4">
          For a complete list of all US locations, visit ClinicalTrials.gov:{' '}
          <a href="https://clinicaltrials.gov/study/NCT07220083" target="_blank" rel="noopener noreferrer" className="text-brand-mid underline hover:text-brand-dark">NCT07220083</a>
        </p>
      </section>

      {/* Interested in Learning More */}
      <section className="mb-10 bg-brand-dark text-white rounded-2xl px-6 py-8" aria-labelledby="learn-heading">
        <h2 id="learn-heading" className="text-xl font-bold mb-3">Interested in Learning More?</h2>
        <p className="text-green-100 leading-relaxed mb-5">
          Talk to your healthcare provider about whether this study may be right for you, then visit the patient website to find a study site near you:
        </p>
        <ul className="space-y-3">
          <li>
            <a
              href="https://patient.boehringer-ingelheim.com/podomount-trial/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand-dark font-semibold px-5 py-3 rounded-full hover:bg-green-50 transition-colors text-sm"
            >
              Visit Patient Website →
            </a>
            <p className="text-green-200 text-xs mt-1 ml-1">patient.boehringer-ingelheim.com/podomount-trial/</p>
          </li>
          <li className="text-green-100 text-sm">
            ClinicalTrials.gov ID:{' '}
            <a href="https://clinicaltrials.gov/study/NCT07220083" target="_blank" rel="noopener noreferrer" className="text-green-300 underline hover:text-white">
              NCT07220083
            </a>
          </li>
        </ul>
      </section>

      {/* About Boehringer Ingelheim */}
      <section aria-labelledby="sponsor-heading">
        <h2 id="sponsor-heading" className="text-xl font-bold text-brand-dark mb-3">About Boehringer Ingelheim</h2>
        <p className="text-gray-700 leading-relaxed">
          Boehringer Ingelheim is a global biopharmaceutical company committed to breakthrough therapies that transform lives. The PODOMOUNT-pFSGS study is part of Boehringer Ingelheim&apos;s broad commitment to developing meaningful treatments for people living with kidney disease.
        </p>
      </section>

    </div>
  );
}

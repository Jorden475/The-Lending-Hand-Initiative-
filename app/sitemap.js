export default function sitemap() {
  const base = 'https://www.thelendinghandinitiative.org';
  const now = new Date().toISOString();

  const pages = [
    { url: base, priority: 1.0 },
    { url: `${base}/about`, priority: 0.9 },
    { url: `${base}/services`, priority: 0.9 },
    { url: `${base}/speaking`, priority: 0.8 },
    { url: `${base}/media`, priority: 0.8 },
    { url: `${base}/resources`, priority: 0.9 },
    { url: `${base}/contact`, priority: 0.7 },
    { url: `${base}/kidney-walk`, priority: 0.7 },
  ];

  // Research page is date-gated — only include it while it's live
  if (new Date() < new Date('2027-01-01')) {
    pages.push({ url: `${base}/research/podomount-pfsgs`, priority: 0.8 });
  }

  return pages.map(({ url, priority }) => ({
    url,
    lastModified: now,
    changeFrequency: 'monthly',
    priority,
  }));
}

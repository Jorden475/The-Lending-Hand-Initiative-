'use client';
import { useState } from 'react';

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'JordenDarnellAlbright@gmail.com',
    href: 'mailto:JordenDarnellAlbright@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '404-285-4529',
    href: 'tel:4042854529',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
    ),
    label: 'Social',
    value: '@JordenAlbright',
    href: 'https://twitter.com/JordenAlbright',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
    ),
    label: 'Social',
    value: '@FaceStruggleGainStrength',
    href: 'https://twitter.com/FaceStruggleGainStrength',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    type: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, wire this to a form backend (e.g. Formspree, Resend, or a server action)
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block bg-brand-mid/30 text-green-200 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h1>
          <p className="text-green-200 text-lg max-w-xl mx-auto">
            Reach out for speaking engagements, strategic partnerships, community consulting, or media inquiries.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-14">
        {/* Contact info */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-2">Get In Touch</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Whether you're a pharmaceutical company, patient organization, advocacy group, media outlet, or event organizer — I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-4">
            {contactItems.map(({ icon, label, value, href }) => (
              <a
                key={value}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 bg-brand-light rounded-xl hover:bg-brand-accent/10 transition-colors group"
              >
                <div className="w-10 h-10 bg-brand-dark text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-brand-mid transition-colors">
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-brand-mid font-semibold uppercase tracking-wide">{label}</p>
                  <p className="text-brand-dark text-sm font-medium break-all">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="font-semibold text-brand-dark text-sm mb-3">I'm available for:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                'Keynotes & panel discussions',
                'Patient advocacy consulting',
                'Strategic partnership development',
                'Community outreach strategy',
                'Media & broadcast appearances',
                'Legislative & policy engagement',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-3">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-2">Message Sent!</h3>
              <p className="text-gray-500 max-w-sm">
                Thank you for reaching out. Jorden will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                    placeholder="jane@organization.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Organization</label>
                <input
                  type="text"
                  value={form.organization}
                  onChange={(e) => setForm({ ...form, organization: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                  placeholder="Your organization name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Inquiry Type</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent bg-white"
                >
                  <option value="">Select an option</option>
                  <option value="speaking">Speaking / Keynote</option>
                  <option value="partnership">Strategic Partnership</option>
                  <option value="consulting">Community Consulting</option>
                  <option value="media">Media / Press</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent resize-none"
                  placeholder="Tell me about your project, event, or how you'd like to collaborate..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-dark text-white font-semibold py-3.5 rounded-xl hover:bg-brand-mid transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

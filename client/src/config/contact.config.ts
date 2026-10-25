import { FounderContact } from '../types';

export const contactConfig = {
  headline: "Let's Engineer Something Exceptional Together",
  subheadline:
    'Have a visionary product idea or need to scale your existing systems? Connect directly with our core engineering leadership or submit a project brief.',
  founders: [
    {
      name: 'Sahil Prasad',
      role: 'Co-Founder & Chief Solutions Architect',
      phone: '6354729042',
      location: 'Vadodara, Gujarat, India',
      callUrl: 'tel:6354729042',
      whatsappUrl: 'https://wa.me/916354729042?text=Hi%20Sahil,%20I%20would%20like%20to%20discuss%20a%20project%20with%20CoreCodeX',
      focus: ['Next.js Architecture', '3D Visual Systems', 'Full-Stack MERN Engines', 'Fintech Platforms'],
    },
    {
      name: 'Shubham Singh',
      role: 'Operations & Engineering Director',
      phone: '9559506650',
      email: 'shubham.singh7985@gmail.com',
      location: 'Haridwar, Uttarakhand, India',
      callUrl: 'tel:9559506650',
      emailUrl: 'mailto:shubham.singh7985@gmail.com?subject=CoreCodeX%20Project%20Inquiry',
      whatsappUrl: 'https://wa.me/919559506650?text=Hi%20Shubham,%20I%20have%20an%20engineering%20inquiry%20for%20CoreCodeX',
      focus: ['Enterprise AI & LLM Systems', 'Mobile App Development', 'Chatbot Workflows', 'Client Delivery SLA'],
    },
  ] as FounderContact[],
  consultationSteps: [
    { step: '01', title: 'Connect & Discovery', desc: 'Call our founders directly or send a brief query detailing your goals.' },
    { step: '02', title: 'Architecture & Scope', desc: 'We formulate a technical blueprint, UX wireframe, and milestone roadmap.' },
    { step: '03', title: 'Rapid Agile Sprints', desc: 'Transparent weekly demos, CI/CD staging builds, and continuous feedback.' },
    { step: '04', title: 'Production Launch', desc: 'Stress-tested deployment, SEO optimization, and 24/7 post-launch guarantee.' },
  ],
};

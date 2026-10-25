import express from 'express';
import { config } from '../config/env.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    company: 'CoreCodeX',
    tagline: 'Architecting Future-Proof Digital Products & Enterprise AI',
    founders: [
      {
        name: 'Sahil Prasad',
        role: 'Co-Founder & Chief Solutions Architect',
        phone: '6354729042',
        location: 'Vadodara, Gujarat, India',
        callUrl: 'tel:6354729042',
        whatsappUrl: 'https://wa.me/916354729042?text=Hello%20CoreCodeX%20Team,%20I%20would%20like%20to%20discuss%20a%20project',
        focus: ['Full-Stack Cloud Systems', 'Scalable Microservices', 'Next.js 3D Web Apps']
      },
      {
        name: 'Shubham Singh',
        role: 'Operations & Engineering Director',
        phone: '9559506650',
        email: 'shubham.singh7985@gmail.com',
        location: 'Haridwar, Uttarakhand, India',
        callUrl: 'tel:9559506650',
        emailUrl: 'mailto:shubham.singh7985@gmail.com?subject=CoreCodeX%20Project%20Inquiry',
        whatsappUrl: 'https://wa.me/919559506650?text=Hello%20CoreCodeX%20Team,%20I%20have%20an%20inquiry%20regarding%20tech%20services',
        focus: ['AI/ML Pipeline Integration', 'Mobile Applications', 'Enterprise AI Chatbots']
      }
    ],
    services: [
      'Web Development',
      'Mobile App Development',
      'AI Integration',
      'AI Chatbots',
      'AI / Machine Learning Engineering'
    ]
  });
});

export default router;

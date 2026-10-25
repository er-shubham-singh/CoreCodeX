import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/corecodex',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
  adminEmail: process.env.ADMIN_EMAIL || 'shubham.singh7985@gmail.com',
  leads: {
    sahil: {
      name: 'Sahil Prasad',
      phone: '6354729042',
      role: 'Co-Founder & Lead Solutions Architect',
      location: 'Vadodara, Gujarat'
    },
    shubham: {
      name: 'Shubham Singh',
      phone: '9559506650',
      email: 'shubham.singh7985@gmail.com',
      role: 'Operations & Engineering Director',
      location: 'Haridwar, Uttarakhand'
    }
  }
};

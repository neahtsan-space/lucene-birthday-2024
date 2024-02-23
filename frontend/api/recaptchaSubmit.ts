'use server';
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return 
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const { gRecaptchaResponse } = req.body;

  const formData = `secret=${secretKey}&response=${gRecaptchaResponse}`;

  try {
    const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (response.data?.success && response.data?.score > 0.5) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log(error)
  }
}

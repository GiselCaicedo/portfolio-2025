'use server';

import type { ContactFormData } from '@/types';

interface ContactResponse {
  success: boolean;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<ContactResponse> {
  try {
    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      return {
        success: false,
        message: 'Please fill in all required fields.',
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: 'Please provide a valid email address.',
      };
    }

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // TODO: Implement actual email sending logic
    // Options: SendGrid, Resend, Nodemailer, etc.
    console.log('Contact form submission:', data);

    return {
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
    };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    };
  }
}

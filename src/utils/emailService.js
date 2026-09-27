/**
 * Email Service Utility for Portfolio Contact Form
 * Supports Web3Forms, EmailJS, and Formspree with graceful fallback to mailto:
 */

export async function sendEmail({ name, email, subject, message }) {
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const formspreeFormId = import.meta.env.VITE_FORMSPREE_FORM_ID;

  // 1. Try Web3Forms if key exists
  if (web3FormsKey) {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: name,
          email: email,
          subject: subject || `Portfolio Contact from ${name}`,
          message: message,
          from_name: `${name} (Portfolio Contact)`,
        }),
      });

      const data = await response.json();
      if (data.success) {
        return { success: true, message: 'Your message was sent successfully!' };
      } else {
        throw new Error(data.message || 'Failed to send message via Web3Forms');
      }
    } catch (err) {
      console.error('Web3Forms Error:', err);
      return { success: false, error: err.message || 'Web3Forms dispatch failed' };
    }
  }

  // 2. Try EmailJS API if keys exist
  if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: emailjsServiceId,
          template_id: emailjsTemplateId,
          user_id: emailjsPublicKey,
          template_params: {
            from_name: name,
            from_email: email,
            reply_to: email,
            subject: subject || `Portfolio Contact from ${name}`,
            message: message,
          },
        }),
      });

      if (response.ok) {
        return { success: true, message: 'Your message was sent successfully via EmailJS!' };
      } else {
        const errorText = await response.text();
        throw new Error(errorText || 'EmailJS submission failed');
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      return { success: false, error: err.message || 'EmailJS dispatch failed' };
    }
  }

  // 3. Try Formspree if ID exists
  if (formspreeFormId) {
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: message,
        }),
      });

      if (response.ok) {
        return { success: true, message: 'Your message was sent successfully via Formspree!' };
      } else {
        throw new Error('Formspree submission failed');
      }
    } catch (err) {
      console.error('Formspree Error:', err);
      return { success: false, error: err.message || 'Formspree dispatch failed' };
    }
  }

  // 4. Fallback if no API key configured: mailto link
  return { 
    success: false, 
    isFallback: true, 
    error: 'No email API key configured. Opening mail client instead...' 
  };
}

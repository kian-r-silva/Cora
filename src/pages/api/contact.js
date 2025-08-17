// Next.js API route for handling contact form submissions
// This is a placeholder - you'll need to integrate with an email service

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get form data from request body
    const { name, email, phone, inquiryType, guestCount, eventType, message } = req.body;

    // Basic validation
    if (!name || !email || !phone || !inquiryType || !message) {
      return res.status(400).json({ error: 'Name, email, phone, inquiry type and message are required' });
    }

    // In a real implementation, you would use an email service like SendGrid, Mailgun, or AWS SES
    // Example with SendGrid (you would need to install @sendgrid/mail):
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: 'info@coracolvin.com', // Replace with your email
      from: 'website@coracolvin.com', // Replace with your verified sender
      subject: `New ${inquiryType} inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Inquiry Type: ${inquiryType}
        Guest Count: ${guestCount || 'Not provided'}
        Event Type: ${eventType || 'Not provided'}
        
        Message:
        ${message}
      `,
      html: `
        <strong>Name:</strong> ${name}<br />
        <strong>Email:</strong> ${email}<br />
        <strong>Phone:</strong> ${phone}<br />
        <strong>Inquiry Type:</strong> ${inquiryType}<br />
        <strong>Guest Count:</strong> ${guestCount || 'Not provided'}<br />
        <strong>Event Type:</strong> ${eventType || 'Not provided'}<br />
        <br />
        <strong>Message:</strong><br />
        ${message.replace(/\n/g, '<br />')}
      `,
    };
    
    await sgMail.send(msg);
    */

    // For now, just log the submission and return success
    console.log('Form submission:', { name, email, phone, inquiryType, guestCount, eventType, message });

    // Return success response
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Error processing your request' });
  }
}

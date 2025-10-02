# Contact Form Setup Guide for Static Site

## 🚨 **Current Status**
The contact form currently uses `mailto:` as a fallback, which has limitations. Here are better professional solutions:

## ✅ **Recommended Solutions**

### Option 1: Formspree (Easiest - Recommended)

**Setup Steps:**
1. Go to [Formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Get your form endpoint (e.g., `https://formspree.io/f/abc123def`)
5. Replace `your-form-id` in `Contact.jsx` with your actual form ID

**Benefits:**
- ✅ Free tier (50 submissions/month)
- ✅ Works with static sites
- ✅ Spam protection
- ✅ Email notifications
- ✅ No server required

**Code change needed:**
```javascript
// In Contact.jsx, line ~75, replace:
const response = await fetch('https://formspree.io/f/your-form-id', {
//                                                    ^^^^^^^^^^^^
//                                            Replace with your form ID
```

### Option 2: Netlify Forms (If hosting on Netlify)

**Setup Steps:**
1. Add `netlify` attribute to the form tag
2. Deploy to Netlify
3. Forms automatically work

**Benefits:**
- ✅ Free with Netlify hosting
- ✅ Built-in spam protection
- ✅ Form management dashboard

### Option 3: Getform.io

**Setup Steps:**
1. Sign up at [Getform.io](https://getform.io)
2. Create a form endpoint
3. Replace the fetch URL with your Getform endpoint

**Benefits:**
- ✅ Free tier (50 submissions/month)
- ✅ File uploads support
- ✅ Integrations with email services

### Option 4: EmailJS

**Setup Steps:**
1. Sign up at [EmailJS.com](https://emailjs.com)
2. Set up email service (Gmail, Outlook, etc.)
3. Install EmailJS library: `npm install emailjs-com`
4. Use EmailJS to send emails directly from frontend

**Benefits:**
- ✅ Free tier (200 emails/month)
- ✅ Sends directly from your email
- ✅ No backend required

## 🔧 **Quick Setup - Formspree (5 minutes)**

1. **Sign up**: Go to [formspree.io](https://formspree.io) and create account
2. **Create form**: Click "New Form" 
3. **Get endpoint**: Copy your form URL (like `https://formspree.io/f/abc123def`)
4. **Update code**: In `Contact.jsx`, replace `your-form-id` with your ID
5. **Rebuild**: Run `npm run build`
6. **Deploy**: Upload the new `out/` folder

## 📧 **Current Fallback**
If no service is configured, the form falls back to `mailto:cora@coracolvin.com` which:
- Opens user's email client
- Pre-fills the message
- Requires user to manually send

## 🎯 **Recommendation**
**Use Formspree** - it's the easiest and most reliable solution for static sites. Setup takes 5 minutes and provides a professional contact form experience.

## 🚀 **After Setup**
1. Test the form on your live site
2. Check that you receive emails
3. Optionally set up autoresponders in your chosen service

The contact form will work much better with any of these services compared to the current mailto fallback!

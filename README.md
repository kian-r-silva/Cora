# Cora Colvin - Private Chef Portfolio

This is a Next.js portfolio site for Cora Colvin, private chef, featuring a Sanity-powered image galler and recipe updater. Built for FTP formatted deployment.


```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Sanity Studio

This project uses Sanity as a headless CMS for managing gallery images.

### Accessing Sanity Studio

1. Start the development server
2. Navigate to [http://localhost:3000/studio](http://localhost:3000/studio)
3. Log in with your Sanity credentials

### Adding Gallery Images

1. Go to Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio)
2. Click on "Gallery Items" 
3. Click "Create new document"
4. Upload an image and add alt text
5. Publish the document

### Automated Gallery Setup

You can add sample gallery items from existing images in the public folder:

1. First create a Sanity token at [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Add the token to your `.env.local` file:
```
SANITY_API_TOKEN=your_token_here
```
3. Run the sample data script:
```bash
node add-sample-gallery-items.js
```

## Troubleshooting Gallery

If the gallery isn't displaying correctly:

1. Check the browser console for errors
2. Test the API endpoint at [http://localhost:3000/api/gallery-items](http://localhost:3000/api/gallery-items)
3. Verify your Sanity credentials in `.env.local` file
4. Make sure you've published gallery items in Sanity Studio

## Contact Form Setup

The contact form is ready to be connected to an email service:

1. Install an email service package (example with SendGrid):
```bash
npm install @sendgrid/mail
```

2. Add your API key to `.env.local`:
```
SENDGRID_API_KEY=your_api_key_here
```

3. Uncomment and configure the email sending code in `/src/pages/api/contact.js`

Other supported email services:
- Mailgun: `npm install mailgun.js`
- AWS SES: `npm install @aws-sdk/client-ses`
- Nodemailer (for SMTP): `npm install nodemailer`

## Project Structure

- `/src/components` - React components
- `/src/pages` - Next.js pages
- `/src/styles` - CSS modules
- `/src/sanity` - Sanity configuration 
- `/public` - Static assets

## License

This project is licensed under the MIT License.

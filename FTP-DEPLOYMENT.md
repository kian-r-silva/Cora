# Cora Portfolio - FTP Deployment Guide

## ✅ **Ready for FTP Deployment!**

Your site has been successfully converted to a static export that can be deployed to any FTP server or static hosting.

## Quick Deploy

Run the build command:
```bash
npm run build
```

This generates a static site in the `out/` directory that you can upload via FTP.

## Files to Upload

Upload everything in the `out/` directory to your web server's public folder (usually `public_html` or `www`):

```
out/
├── index.html          # Main homepage
├── 404.html           # 404 error page
├── recipes/           # Recipes page
├── _next/             # Next.js assets (CSS, JS)
├── About/             # Static image assets
├── Hero/              # Static image assets
└── Services/          # Static image assets
```

## FTP Upload Instructions

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Connect to your FTP server** using:
   - FileZilla
   - WinSCP (Windows)
   - Cyberduck (Mac)
   - Command line FTP
   - Your hosting provider's file manager

3. **Upload the contents** of the `out/` folder to your web server's public directory

4. **Set permissions** (if needed):
   - Files: 644
   - Directories: 755

## Content Management

- **Frontend**: Now runs as static files (perfect for FTP)
- **Content Management**: Use the standalone Sanity Studio at `cora-studio/`
- **Data Updates**: Content changes in Sanity will be reflected when you rebuild and redeploy

## Deployment Workflow

1. Update content in Sanity Studio (`cd cora-studio && npm run dev`)
2. Rebuild the frontend (`npm run build`)  
3. Upload the new `out/` folder contents via FTP
4. Your site is updated!

## Environment Variables

Make sure your `.env.local` file contains:
```
NEXT_PUBLIC_SANITY_PROJECT_ID="z1n7jxts"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2023-05-03"
```

## Contact Form

The contact form now uses `mailto:` links, so when users submit the form, it will open their email client with the message pre-filled to send to `cora@coracolvin.com`.

## Hosting Recommendations

This static site will work on any web host:
- Traditional shared hosting with FTP
- Netlify (drag & drop the `out/` folder)
- Vercel
- GitHub Pages
- Any CDN or static hosting service

## Support

The site is now fully static and independent of server-side functions, making it perfect for FTP deployment!

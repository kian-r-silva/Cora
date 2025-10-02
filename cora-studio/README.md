# Cora Portfolio - Sanity Studio

This is the standalone Sanity Studio for managing content for Cora Colvin's portfolio website.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with your Sanity project details:
```bash
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
```

3. Start the development server:
```bash
npm run dev
```

The studio will be available at `http://localhost:3333`

## Deployment

To deploy the studio to Sanity's hosting:

```bash
npm run deploy
```

## Content Types

- **Gallery Items**: Images for the gallery section
- **Recipes**: Recipe cards with PDFs and metadata

## Environment Variables

- `SANITY_STUDIO_PROJECT_ID`: Your Sanity project ID
- `SANITY_STUDIO_DATASET`: The dataset name (usually 'production')

## Development

- `npm run dev`: Start development server
- `npm run build`: Build the studio for production
- `npm run deploy`: Deploy to Sanity hosting

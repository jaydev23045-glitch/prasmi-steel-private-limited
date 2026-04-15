<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/4b7665a8-1168-4f1f-af10-409800ce1d9a

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deployment

### Vercel (Recommended)

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Import your repository into Vercel.
3. Vercel will automatically detect Vite and deploy your site.

### Netlify

1. Push your code to a Git provider.
2. Connect your repository to [Netlify](https://app.netlify.com/start).
3. Set the build command to `npm run build` and the publish directory to `dist`.

### Manual Build

To build the project manually:

```bash
npm run build
```

The output will be in the `dist/` directory, which you can then host on any static hosting service.


# Deployment Guide

This guide explains how to deploy your Storybook to GitHub Pages and other platforms.

## GitHub Pages (Automatic)

Your Storybook is automatically deployed to GitHub Pages via GitHub Actions.

### Setup

1. **Enable GitHub Pages** in your repository:
   - Go to repository Settings
   - Navigate to "Pages" section
   - Under "Build and deployment"
   - Select "GitHub Actions" as the source

2. **Push to main branch**:
   ```bash
   git push origin main
   ```

3. **Access your Storybook**:
   - URL: `https://YOUR_USERNAME.github.io/airaa-design-system/`
   - The deployment takes 2-3 minutes

### Workflow Details

The deployment workflow (`.github/workflows/deploy-storybook.yml`) automatically:
- Triggers on every push to `main` branch
- Installs dependencies
- Builds Storybook
- Deploys to GitHub Pages

### Manual Trigger

You can also manually trigger the deployment:
1. Go to the "Actions" tab in your GitHub repository
2. Select "Deploy Storybook to GitHub Pages"
3. Click "Run workflow"

## Other Deployment Options

### Netlify

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build Storybook**:
   ```bash
   npm run build-storybook
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod --dir=storybook-static
   ```

Or connect your GitHub repository to Netlify:
- Build command: `npm run build-storybook`
- Publish directory: `storybook-static`

### Vercel

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

Configure in `vercel.json`:
```json
{
  "buildCommand": "npm run build-storybook",
  "outputDirectory": "storybook-static"
}
```

### Chromatic

Chromatic provides visual regression testing and hosting:

1. **Install Chromatic**:
   ```bash
   npm install --save-dev chromatic
   ```

2. **Add script** to `package.json`:
   ```json
   {
     "scripts": {
       "chromatic": "chromatic --project-token=YOUR_TOKEN"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run chromatic
   ```

### AWS S3 + CloudFront

1. **Build Storybook**:
   ```bash
   npm run build-storybook
   ```

2. **Upload to S3**:
   ```bash
   aws s3 sync storybook-static/ s3://your-bucket-name
   ```

3. **Configure CloudFront** for HTTPS and custom domain

## Custom Domain

### GitHub Pages with Custom Domain

1. **Add CNAME file**:
   ```bash
   echo "storybook.yourdomain.com" > storybook-static/CNAME
   ```

2. **Configure DNS**:
   - Add CNAME record: `storybook` → `YOUR_USERNAME.github.io`

3. **Update GitHub Pages settings**:
   - Add custom domain in repository settings
   - Enable "Enforce HTTPS"

### Build Command with Base Path

If deploying to a subdirectory, update build command:

```json
{
  "scripts": {
    "build-storybook": "storybook build --output-dir=storybook-static"
  }
}
```

## Troubleshooting

### Deployment Fails

**Check workflow logs**:
1. Go to "Actions" tab
2. Click on failed workflow
3. Review error messages

**Common issues**:
- Node version mismatch: Update `.github/workflows/deploy-storybook.yml`
- Missing dependencies: Run `npm install` locally to verify
- Build errors: Run `npm run build-storybook` locally first

### 404 Errors on Deployed Site

**Ensure GitHub Pages is enabled**:
- Settings → Pages → Source: "GitHub Actions"

**Check base path**: If using subdirectory, verify paths in stories

### Assets Not Loading

**Check paths**: All asset paths should be relative
**Verify build output**: Inspect `storybook-static/` directory

## Environment Variables

For private repositories or external APIs:

1. **Add secrets** in GitHub:
   - Settings → Secrets and variables → Actions
   - Add repository secrets

2. **Use in workflow**:
   ```yaml
   env:
     API_KEY: ${{ secrets.API_KEY }}
   ```

## Monitoring

### GitHub Actions Status

Monitor deployments:
- Repository → Actions tab
- Email notifications for failures
- Status badges in README

### Analytics

Add analytics to track Storybook usage:

Update `.storybook/preview.ts`:
```typescript
// Google Analytics
if (typeof window !== 'undefined') {
  // Add your analytics code
}
```

## Best Practices

1. **Test locally** before pushing:
   ```bash
   npm run build-storybook
   npx http-server storybook-static
   ```

2. **Preview deployments**: Use branch protection and preview environments

3. **Version control**: Tag releases for Storybook versions

4. **Documentation**: Keep deployment docs updated

## Resources

- [Storybook Deployment Guide](https://storybook.js.org/docs/react/sharing/publish-storybook)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

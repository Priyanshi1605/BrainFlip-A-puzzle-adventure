# 🚀 BrainFlip Deployment Guide

This guide will help you deploy BrainFlip to the web for **FREE** so others can play your game!

---

## 🎯 **Quick Deploy Options**

### ⚡ Option 1: Netlify (Easiest - Recommended!)

**Steps:**

1. **Go to [Netlify](https://www.netlify.com/)**
2. **Sign up/Login** with your GitHub account
3. **Click "Add new site" → "Import an existing project"**
4. **Select your GitHub repository:** `Brainflipgamelandingpage`
5. **Configure build settings:**
   ```
   Build command: npm run build
   Publish directory: dist
   ```
6. **Click "Deploy site"**
7. **Done!** Your game will be live in ~2 minutes at: `https://your-site-name.netlify.app`

**Custom Domain (Optional):**
- Click "Domain settings" → "Add custom domain"
- Follow instructions to connect your domain

**Continuous Deployment:**
- ✅ Every time you push to GitHub, Netlify automatically redeploys!

---

### ⚡ Option 2: Vercel (Also Very Easy!)

**Steps:**

1. **Go to [Vercel](https://vercel.com/)**
2. **Sign up/Login** with your GitHub account
3. **Click "Add New" → "Project"**
4. **Import your repository:** `Brainflipgamelandingpage`
5. **Configure:**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   ```
6. **Click "Deploy"**
7. **Done!** Live at: `https://your-project.vercel.app`

---

### ⚡ Option 3: GitHub Pages (100% Free!)

**Steps:**

1. **Install gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `package.json`:**
   Add these lines:
   ```json
   {
     "homepage": "https://priyanshishah1608.github.io/Brainflipgamelandingpage",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update `vite.config.ts`:**
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/Brainflipgamelandingpage/', // Add this line!
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` → `/root`
   - Save

6. **Done!** Live at: `https://priyanshishah1608.github.io/Brainflipgamelandingpage`

---

## 🔧 **Pre-Deployment Checklist**

Before deploying, make sure:

- ✅ `npm run build` works without errors
- ✅ Game works correctly in development (`npm run dev`)
- ✅ All images load properly
- ✅ Sound effects work
- ✅ localStorage saves/loads progress correctly
- ✅ README.md is updated with live demo link

---

## 📝 **Update README After Deployment**

After deploying, update the "Live Demo" section in README.md:

```markdown
## 🎮 **Live Demo**

🚀 **[Play BrainFlip Now!](https://your-actual-url.netlify.app)**
```

Commit and push the change:
```bash
git add README.md
git commit -m "Added live demo link"
git push
```

---

## 🌐 **Custom Domain (Optional)**

### For Netlify:
1. Buy a domain from Namecheap, GoDaddy, etc.
2. In Netlify: Domain settings → Add custom domain
3. Update your domain's DNS records (Netlify provides instructions)
4. Wait for DNS propagation (~24 hours max)
5. Enable HTTPS (automatic in Netlify)

### For Vercel:
1. Buy a domain
2. In Vercel: Project Settings → Domains
3. Add your domain and follow DNS instructions
4. HTTPS is automatic

---

## 🔄 **Continuous Deployment**

Once connected to GitHub:

### Netlify & Vercel:
- ✅ Push to `main` branch → Automatic deployment
- ✅ Preview deployments for pull requests
- ✅ Rollback to previous versions anytime

### GitHub Pages:
- Run `npm run deploy` after each change

---

## 🐛 **Troubleshooting**

### Build Fails:
```bash
# Test build locally first
npm run build

# If successful, commit and push
git add .
git commit -m "Fix build issues"
git push
```

### 404 Errors on Refresh:
**For Netlify:** Create `public/_redirects` file:
```
/*    /index.html   200
```

**For Vercel:** Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Images Not Loading:
- Check that all image imports use correct paths
- Verify images are in the `public/` folder or properly imported

---

## 📊 **Monitoring & Analytics (Optional)**

Add analytics to see how many people play:

### Google Analytics:
```bash
npm install react-ga4
```

Add to `App.tsx`:
```typescript
import ReactGA from 'react-ga4';

ReactGA.initialize('YOUR-GA4-ID');
```

### Plausible (Privacy-Friendly):
Add to `index.html`:
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## 🎉 **You're Done!**

Your BrainFlip game is now live and accessible to anyone in the world!

### Share Your Game:
- 📱 Share the URL on social media
- 🎓 Send to teachers and language learners
- 💼 Add to your portfolio
- 🌟 Get feedback and improve!

---

## 🆘 **Need Help?**

- **Netlify Docs:** https://docs.netlify.com/
- **Vercel Docs:** https://vercel.com/docs
- **GitHub Pages:** https://pages.github.com/

---

**Happy Deploying! 🚀**

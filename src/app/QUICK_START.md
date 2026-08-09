# ⚡ BrainFlip Quick Start Guide

**Get your game running in 5 minutes!**

---

## 🎯 **For You (The Creator)**

### Step 1: Download ZIP from GitHub
1. **Go to:** https://github.com/PriyanshiShah1608/Brainflipgamelandingpage
2. **Click** the green **"Code"** button (top right)
3. **Click "Download ZIP"**
4. **Extract** the zip file to your Desktop or Documents folder

### Step 2: Install & Run
```bash
# Open Terminal (Mac/Linux) or Command Prompt (Windows)
# Navigate to the extracted folder
cd path/to/Brainflipgamelandingpage-main

# Install dependencies
npm install

# Run the game
npm run dev
```

**✅ Game running at:** http://localhost:5173

### Step 3: Deploy to Web (Choose One)

#### Option A: Netlify (Recommended - 2 minutes)
1. Go to https://www.netlify.com/
2. Sign up with GitHub
3. "Add new site" → "Import from GitHub"
4. Select `Brainflipgamelandingpage`
5. Click "Deploy" (that's it!)
6. **Live URL:** `https://yoursite.netlify.app`

#### Option B: GitHub Pages (Free Forever)
```bash
# Install deployment package
npm install --save-dev gh-pages

# Add to package.json "scripts":
"deploy": "gh-pages -d dist"

# Deploy!
npm run deploy
```
**Live URL:** `https://priyanshishah1608.github.io/Brainflipgamelandingpage`

---

## 🎮 **For Others (Players & Developers)**

### To Play the Game:
**Option 1:** Play online (after you deploy)
- Visit the live URL you create

**Option 2:** Run locally
```bash
# Clone the repository
git clone https://github.com/PriyanshiShah1608/Brainflipgamelandingpage.git
cd Brainflipgamelandingpage

# Install and run
npm install
npm run dev
```

---

## 📦 **What's Inside the ZIP**

```
Brainflipgamelandingpage-main/
├── 📄 README.md                   ← Start here!
├── 📄 DEPLOYMENT_GUIDE.md         ← How to deploy
├── 📄 GIT_COMMIT_GUIDE.md         ← How to commit
├── 📄 QUICK_START.md              ← This file
├── 📄 CHANGELOG.md                ← What changed
├── 📄 package.json                ← Dependencies
├── 📄 index.html                  ← Entry point
├── 📄 App.tsx                     ← Main app
├── 📁 components/                 ← Game components
│   ├── LandingPage.tsx
│   ├── LevelsScreen.tsx
│   ├── GameScreen.tsx
│   └── ...
├── 📁 data/                       ← Vocabulary data
├── 📁 styles/                     ← CSS styles
├── 📁 utils/                      ← Helper functions
└── 📁 imports/                    ← Figma assets
```

---

## 🚀 **Common Commands**

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages (after setup)
npm run deploy
```

---

## 🐛 **Troubleshooting**

### "npm not found"
Install Node.js from: https://nodejs.org/

### "Permission denied"
```bash
# Mac/Linux: Add sudo
sudo npm install

# Windows: Run Command Prompt as Administrator
```

### Port already in use
```bash
# Vite will automatically use a different port
# Or kill the process using port 5173
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## ✅ **Success Checklist**

After following this guide, you should have:
- ✅ Downloaded the code
- ✅ Installed dependencies
- ✅ Run the game locally
- ✅ Deployed to the web
- ✅ Updated README with live URL

---

## 📚 **Next Steps**

1. **Play the game!** Make sure everything works
2. **Customize:** Change colors, add levels, modify vocabulary
3. **Share:** Send the live URL to friends and language learners
4. **Contribute:** Add features and improve the game
5. **Learn:** Explore the code to understand React & TypeScript

---

## 🆘 **Need Help?**

- **Full Documentation:** See README.md
- **Deployment Help:** See DEPLOYMENT_GUIDE.md
- **Git Help:** See GIT_COMMIT_GUIDE.md
- **Changelog:** See CHANGELOG.md

---

## 🎉 **You're All Set!**

**Your BrainFlip vocabulary game is ready to share with the world!**

Made with ❤️ for language learners everywhere.

---

## 📊 **Project Stats**

- **Language:** TypeScript + React
- **Lines of Code:** ~2000+
- **Components:** 8 major components
- **Vocabulary Pairs:** 90+ British/American pairs
- **Levels:** 15 progressive levels
- **Stars:** ⭐⭐⭐ rating system
- **Dependencies:** ~20 packages
- **Build Time:** ~30 seconds
- **Bundle Size:** ~200KB (optimized)

---

**Now go build something amazing! 🚀**

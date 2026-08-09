# 🧠 BrainFlip - British vs American English Vocabulary Game

![BrainFlip Game](https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=1200&h=400&fit=crop)

> **A fun and educational card-matching game to learn British and American English vocabulary differences!**

Match pairs of cards showing the same concept in British English and American English (e.g., "lift" 🇬🇧 matches "elevator" 🇺🇸). Perfect for language learners, educators, and word game enthusiasts!

---

## 📚 **Quick Links**

- 📦 **[How to Download ZIP](HOW_TO_GET_YOUR_CODE.md)** - Get your code in 3 easy ways
- ⚡ **[Quick Start Guide](QUICK_START.md)** - Run the game in 5 minutes
- 🚀 **[Deployment Guide](DEPLOYMENT_GUIDE.md)** - Deploy to Netlify, Vercel, or GitHub Pages
- 📝 **[Git Commit Guide](GIT_COMMIT_GUIDE.md)** - Make your own commits
- 📋 **[Changelog](CHANGELOG.md)** - See what changed

---

## 🎮 **Live Demo**

🚀 **[Play BrainFlip Now!](#)** _(Coming Soon)_

---

## ✨ **Features**

### 🎯 **Core Gameplay**
- **15 Progressive Levels** - Start easy and work your way up to challenging vocabulary sets
- **Card Matching Mechanics** - Flip cards to find British/American English pairs
- **3D Flip Animations** - Smooth, satisfying card flip effects
- **Real Vocabulary** - Learn genuine British vs American English differences

### 🏆 **Progress System**
- **Star Ratings** - Earn 1-3 stars based on your performance
- **Level Unlocking** - Complete levels to unlock the next challenge
- **Local Progress Tracking** - Your progress is saved in your browser
- **No Account Required** - Start playing immediately!

### 🔊 **Audio Settings**
- **Sound Effects** - Toggle game sounds on/off
- **Volume Control** - Adjust volume from 0-100%
- **Settings Persistence** - Your preferences are remembered

### 🎨 **User Experience**
- **Desktop-Optimized** - Fixed 16:10 aspect ratio (max 1440px width)
- **Responsive Design** - Centered container adapts to screen size
- **Clean Interface** - Figma-designed UI for a polished look
- **Privacy-Friendly** - No data collection, works completely offline

---

## 🎓 **Educational Value**

Learn vocabulary differences between British 🇬🇧 and American 🇺🇸 English:

| British English | American English |
|-----------------|------------------|
| Lift | Elevator |
| Lorry | Truck |
| Flat | Apartment |
| Biscuit | Cookie |
| Boot (car) | Trunk |
| Bonnet (car) | Hood |
| And many more! | |

---

## 🚀 **Getting Started**

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/PriyanshiShah1608/Brainflipgamelandingpage.git
cd Brainflipgamelandingpage

# Install dependencies
npm install

# Start development server
npm run dev
```

The game will open at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 **Project Structure**

```
Brainflipgamelandingpage/
├── components/
│   ├── LandingPage.tsx          # Welcome screen
│   ├── LevelsScreen.tsx         # Level selection
│   ├── GameScreen.tsx           # Main gameplay
│   ├── LevelCompleteModal.tsx   # Completion screen
│   ├── SettingsModal.tsx        # Audio settings
│   └── HowToPlayModal.tsx       # Game instructions
├── data/
│   └── vocabulary.ts            # British/American word pairs
├── utils/
│   ├── levelConfig.ts           # Level difficulty settings
│   └── sounds.ts                # Sound effect utilities
├── styles/
│   └── globals.css              # Global styles + Tailwind
├── App.tsx                      # Main app component
└── index.html                   # Entry point
```

---

## 🎮 **How to Play**

1. **Choose a Level** - Start with Level 1 or continue your progress
2. **Flip Cards** - Click cards to reveal British or American English words
3. **Find Matches** - Match British words with their American equivalents
4. **Earn Stars** - Complete levels quickly with fewer attempts for more stars
5. **Unlock Levels** - Progress through all 15 levels!

### Difficulty Levels

| Level Range | Pairs | Max Moves | Grid Size |
|-------------|-------|-----------|-----------|
| 1-5 | 6-8 pairs | 20 moves | 4x4 |
| 6-10 | 8-10 pairs | 25 moves | 4x5 |
| 11-15 | 10-12 pairs | 30 moves | 4x6 |

---

## 🛠️ **Tech Stack**

- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS v4
- **Build Tool:** Vite
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Storage:** Browser localStorage
- **Backend:** Supabase (optional, not used in simplified version)

---

## 📊 **Progress Tracking**

All progress is stored **locally in your browser** using `localStorage`:

- ✅ Completed levels
- ✅ Star ratings per level
- ✅ Highest unlocked level
- ✅ Sound settings
- ✅ Volume preferences

**Note:** Clearing browser data will reset your progress.

---

## 🎨 **Design Philosophy**

BrainFlip was designed with simplicity and learning in mind:

- **No Distractions** - Pure vocabulary learning focus
- **No Accounts** - Play immediately without signup
- **No Ads** - Clean, educational experience
- **Offline-First** - Works without internet connection
- **Privacy-Focused** - No data collection or tracking

---

## 🤝 **Contributing**

Contributions are welcome! Here's how you can help:

1. 🐛 **Report bugs** - Open an issue
2. 💡 **Suggest features** - Share your ideas
3. 🌍 **Add vocabulary** - Contribute new word pairs
4. 🎨 **Improve design** - Submit UI enhancements

### To Contribute:

```bash
# Fork the repository
# Create a feature branch
git checkout -b feature/amazing-feature

# Commit your changes
git commit -m "Add amazing feature"

# Push to your branch
git push origin feature/amazing-feature

# Open a Pull Request
```

---

## 📝 **License**

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 **Acknowledgments**

- Built with [Figma Make](https://www.figma.com/)
- Sound effects from open source libraries
- Vocabulary sourced from educational references
- Icons from [Lucide](https://lucide.dev/)

---

## 📧 **Contact**

**Priyanshi Shah**
- GitHub: [@PriyanshiShah1608](https://github.com/PriyanshiShah1608)
- Repository: [BrainFlip Game](https://github.com/PriyanshiShah1608/Brainflipgamelandingpage)

---

## 🔄 **Changelog**

See [CHANGELOG.md](CHANGELOG.md) for a detailed history of changes.

### Latest Update - Simplified Version
- ❌ Removed leaderboard system
- ❌ Removed user profiles and usernames
- ❌ Removed backend integration for scores
- ✅ Kept core vocabulary learning gameplay
- ✅ Kept local progress tracking
- ✅ Kept audio settings

---

## 🌟 **Star This Repo**

If you found BrainFlip helpful for learning English vocabulary, please give it a ⭐️!

---

**Made with ❤️ for language learners everywhere**
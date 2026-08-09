# BrainFlip - Changelog

## Removed Features (Latest Update)

### What Was Removed:
1. **Leaderboard System**
   - Removed leaderboard screen and navigation
   - Removed score submission to backend
   - Removed leaderboard button from landing page
   
2. **User Profile Features**
   - Removed username input
   - Removed profile picture selection (100 emoji avatars)
   - Removed profile section from settings

3. **Backend Integration for Leaderboard**
   - Removed API calls to save scores
   - Removed leaderboard data fetching
   - Backend routes still exist but are unused

### What Remains:
✅ **Core Gameplay**
- 15 levels with increasing difficulty
- Card matching mechanics
- 3D flip animations
- British vs American English vocabulary

✅ **Progress Tracking (Local Only)**
- Level completion tracking
- Star ratings (1-3 stars based on performance)
- Level unlocking system
- Progress saved to browser localStorage

✅ **Audio Settings**
- Sound effects toggle (on/off)
- Volume control (0-100%)
- Settings saved to localStorage

✅ **Game Screens**
- Landing page
- Level selection screen
- Game screen
- How to Play modal
- Settings modal (simplified)

### Files Modified:
- `/App.tsx` - Removed username, profilePic, leaderboard screen
- `/components/LandingPage.tsx` - Removed leaderboard button
- `/components/SettingsModal.tsx` - Removed profile section, kept audio only
- `/components/LevelCompleteModal.tsx` - Removed leaderboard score submission

### Files Unchanged (Still Exist):
- `/components/LeaderboardScreen.tsx` - Not used, can be deleted
- `/supabase/functions/server/index.tsx` - Leaderboard routes exist but unused
- `/utils/api.ts` - Leaderboard API functions exist but unused

### Data Storage:
**localStorage (Browser Only):**
- `soundEnabled` - Boolean for sound on/off
- `volume` - Number from 0-1
- `completedLevels` - Object with level numbers and star counts
- `unlockedLevel` - Number of highest unlocked level

**Removed from localStorage:**
- `username` - Cleaned up on app load
- `profilePic` - Cleaned up on app load
- `accessToken` - Cleaned up on app load
- `userId` - Cleaned up on app load

### Benefits:
- ✅ Simpler, more focused game experience
- ✅ No account/profile management needed
- ✅ Reduced code complexity
- ✅ Faster loading (no API calls)
- ✅ Privacy-friendly (no personal data collected)
- ✅ Works completely offline

---

## Previous Features (Historical)

### Bug Fix - Level Completion Logic
**Issue:** Players who ran out of moves had levels marked as "completed"
**Fix:** Levels only complete when all pairs are successfully matched
**Date:** Before this update

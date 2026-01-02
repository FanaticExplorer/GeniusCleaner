# Genius Lyrics Cleaner

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
![Firefox](https://img.shields.io/badge/Firefox-FF7139?logo=Firefox-Browser&logoColor=white)

**Instantly removes all annotations, pop-ups, highlights, and the "Sign Up to Start Annotating" tooltip from Genius.com — leaving you with perfectly clean, readable, copy-pasteable lyrics.**

No more yellow boxes. No more accidental pop-ups. Just lyrics.

### Before → After
<div style="display: flex; align-items: center; justify-content: center;">
  <img src="genius_before.png" alt="Genius with extension off" style="width: 45%; max-width: 300px;">
  <span style="font-size: 2em; margin: 0 10px;">→</span>
  <img src="genius_after.png" alt="Genius with extension on" style="width: 45%; max-width: 300px;">
</div>

## Features
- Survives scrolling and lazy-loading
- Removes the "Sign Up to Start Annotating" tooltip when selecting text
- No data collection · No external requests · Only runs on genius.com

## Installation
Get it on Firefox Add-ons:  
https://addons.mozilla.org/firefox/addon/genius-lyrics-cleaner/

(Chrome/Edge version coming soon if there’s demand)

## How to Use
1. Click the extension icon in your toolbar
2. Toggle **Clean Lyrics** on or off
3. Enjoy distraction-free lyrics instantly

When turned off → page reloads to restore original Genius look.

## Development & local testing

Want to test or modify the extension locally?

1. Clone the repository: 
   ```bash
   git clone https://github.com/FanaticExplorer/GeniusCleaner.git
   cd GeniusCleaner
   ```
2. Open Firefox and go to `about:debugging#/runtime/this-firefox`

3. Click "Load Temporary Add-on"

4. Navigate to the cloned folder and select `manifest.json`

5. Done!


### License
This project is licensed under the **Mozilla Public License 2.0** — see [LICENSE](LICENSE) for details.

Contributions welcome! Pull requests and issues are encouraged.

---
Made because Genius forgot that some people just want to read the damn lyrics.
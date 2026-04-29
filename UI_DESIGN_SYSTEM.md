# UI Design System Documentation

## Overview
This project features a **Brutalist Hackathon Dashboard** with a dual-theme system (Dark/Light) built using CSS custom properties, Tailwind CSS, and React. The design emphasizes bold typography, sharp borders, neon accents, and a retro-futuristic aesthetic.

---

## 🎨 Color Palette

### Dark Theme (Default - "brutalist")
**Background Colors:**
- `--bg-app`: #000000 (Pure black app background)
- `--bg-surface`: #0a0a0a (Slightly lighter surface)
- `--bg-card`: #000000 (Card backgrounds)
- `--bg-card-hover`: #111111 (Card hover state)
- `--bg-inset`: #000000 (Inset/input backgrounds)

**Text Colors:**
- `--text-primary`: #ffffff (Primary white text)
- `--text-secondary`: #aaaaaa (Secondary gray text)
- `--text-muted`: #666666 (Muted/disabled text)

**Accent Colors:**
- `--accent-green`: #00ff66 (Neon green - primary accent)
- `--accent-purple`: #ff00ff (Magenta/purple)
- `--accent-blue`: #00ccff (Cyan blue)
- `--accent-orange`: #ff6600 (Bright orange)
- `--accent-cyan`: #00ffff (Pure cyan)
- `--accent-pink`: #ff0066 (Hot pink)

**Borders:**
- `--border-main`: #333333 (Standard borders)
- `--border-glow`: #555555 (Glowing/hover borders)

**Special Effects:**
- Neon glow shadows (0 0 30px with accent colors at 25% opacity)
- Scanline overlay effect (repeating linear gradient)
- No border radius (sharp corners)

### Light Theme ("default")
**Background Colors:**
- `--bg-app`: #f4f4f0 (Off-white cream)
- `--bg-surface`: #ffffff (Pure white)
- `--bg-card`: #ffffff (White cards)
- `--bg-card-hover`: #eeeeee (Light gray hover)
- `--bg-inset`: #ffffff (White insets)

**Text Colors:**
- `--text-primary`: #000000 (Black text)
- `--text-secondary`: #333333 (Dark gray)
- `--text-muted`: #555555 (Medium gray)

**Accent Colors:**
- `--accent-green`: #00a844 (Darker green)
- `--accent-purple`: #aa00ff (Darker purple)
- `--accent-blue`: #0055ff (Darker blue)
- `--accent-orange`: #f55000 (Darker orange)
- `--accent-cyan`: #0088cc (Darker cyan)
- `--accent-pink`: #d50066 (Darker pink)

**Borders:**
- `--border-main`: #000000 (Black borders)
- Hard drop shadows (6px 6px 0px with solid colors)

---

## 🔤 Typography

### Font Families
- **Primary Font**: 'JetBrains Mono' (monospace) - Used for all text
- **Fallback**: monospace system fonts

### Font Weights
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extra Bold: 800

### Text Styling
- **Uppercase transformation** for headings (h1, h2, h3)
- **Letter spacing**: 0.08em for headings
- **Tracking**: 0.1em - 0.2em for labels and badges

---

## 🎯 Component Styles

### Cards (.t-card)
```css
- Background: var(--bg-card)
- Border: 3px solid var(--border-main)
- Border radius: 0px (sharp corners)
- Box shadow: var(--shadow-card)
- Hover: Border color changes to --border-glow
- Hover shadow: Neon glow effect
```

### Buttons
**Primary (Green):**
- Background: var(--accent-green)
- Text: Black (#000)
- Font weight: 900 (Black)
- Uppercase with letter spacing

**Secondary/Outlined:**
- Border: 2px solid accent color
- Background: Transparent or dim accent
- Hover: Filled with accent color

### Input Fields (.t-input)
```css
- Background: var(--input-bg)
- Border: 1px solid var(--input-border)
- Border radius: 12px
- Focus: Border color changes to --accent-green
- Focus shadow: 0 0 0 3px accent-green-dim
```

### Icon Circles (.icon-circle)
```css
- Size: 44px × 44px (default)
- Border radius: 0px (square in brutalist theme)
- Border: 2px solid currentColor
- Background: Dim version of accent color
- Variants: green, purple, blue, orange, cyan, pink
```

### Stat Cards
```css
- Border-left: 6px solid accent color
- Padding: 20px
- Accent variants: green, purple, blue, orange, cyan
```

---

## ✨ Animations & Effects

### Keyframe Animations
1. **livePulse** - Pulsing dot for live indicators
2. **activityEnter** - Fade in with slide up
3. **projectorFade** - Fade in with slight slide
4. **toastPopup** - Scale and slide popup
5. **fadeIn** - Simple fade in with slide
6. **shimmer** - Gradient shimmer effect
7. **spin** - Rotation for loading spinners
8. **tileFadeOut/In** - Tile removal/addition animations

### Transitions
- Standard: 0.3s ease
- Quick: 0.2s ease
- Smooth: 0.4s cubic-bezier(0.4, 0, 0.2, 1)

### Special Effects
- **Scanline overlay**: Repeating 2px/4px gradient for retro CRT effect
- **Glow shadows**: 0 0 30px with accent colors
- **Backdrop blur**: Used in modals (rgba(0,0,0,0.85))

---

## 📐 Layout System

### Tile Grid System
```css
- Base: 12-column grid
- Gap: 16px
- Responsive breakpoints:
  - Desktop (>1280px): 12 columns
  - Tablet (900-1280px): 6 columns
  - Mobile (560-900px): 2 columns
  - Small mobile (<560px): 1 column
```

### Tile Sizes
- `.tile-sm`: 3 columns (25%)
- `.tile-md`: 6 columns (50%)
- `.tile-xl`: 9 columns (75%)
- `.tile-lg`: 12 columns (100%)

### Spacing
- Standard padding: 20px - 32px
- Card padding: 24px - 32px
- Gap between elements: 16px - 24px

---

## 🎭 Theme-Specific Features

### Dark Theme (Brutalist)
- Pure black backgrounds (#000000)
- Neon accent colors (#00ff66, #ff00ff, etc.)
- Glow effects on hover
- Sharp corners (0px border radius)
- Scanline overlay for retro effect
- 3px thick borders

### Light Theme (Default)
- Off-white cream background (#f4f4f0)
- Darker, more saturated accents
- Hard drop shadows (6px 6px 0px)
- Black borders (#000000)
- Sharp corners maintained
- Brutalist aesthetic with high contrast

---

## 🔧 Utility Classes

### Theme-Aware Classes
- `.t-card` - Themed card container
- `.t-surface` - Themed surface
- `.t-inset` - Themed inset/input background
- `.t-input` - Themed input field

### Icon Circle Variants
- `.icon-circle-green`
- `.icon-circle-purple`
- `.icon-circle-blue`
- `.icon-circle-orange`
- `.icon-circle-cyan`
- `.icon-circle-pink`

### Stat Accent Variants
- `.stat-accent-green`
- `.stat-accent-purple`
- `.stat-accent-blue`
- `.stat-accent-orange`
- `.stat-accent-cyan`

---

## 🎨 Color Usage Guidelines

### Primary Actions
- Use **green** (#00ff66) for success, primary CTAs, active states

### Information & Navigation
- Use **cyan** (#00ffff) for info, navigation, team portal elements

### Warnings & Alerts
- Use **orange** (#ff6600) for warnings, help requests, urgent items

### Data & Analytics
- Use **purple** (#ff00ff) for data visualization, problem statements
- Use **blue** (#00ccff) for secondary data, resources

### Errors & Deletion
- Use **red** (#ef4444 / #ff4444) for errors, delete actions

### Special Highlights
- Use **pink** (#ff0066) for voting, special features

---

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1280px+
- **Tablet**: 900px - 1280px
- **Mobile**: 560px - 900px
- **Small Mobile**: <560px

### Mobile Adaptations
- Font sizes reduce (e.g., 28px → 22px for headings)
- Grid columns collapse (12 → 6 → 2 → 1)
- Padding reduces (32px → 20px)
- Navigation becomes scrollable
- Buttons become full-width

---

## 🎯 Design Principles

1. **Brutalism First**: Sharp corners, thick borders, bold typography
2. **High Contrast**: Pure black/white with neon accents
3. **Monospace Everything**: JetBrains Mono for consistency
4. **Uppercase Headers**: All major headings are uppercase
5. **Neon Glow Effects**: Subtle glows on hover for depth
6. **Retro-Futuristic**: CRT scanlines, terminal aesthetics
7. **Accessibility**: High contrast ratios, clear focus states
8. **Performance**: CSS custom properties for instant theme switching

---

## 🔄 Theme Switching

Themes are controlled via the `data-theme` attribute on the root element:
- `data-theme="brutalist"` - Dark neon theme (default)
- `data-theme="default"` - Light brutalist theme

All colors automatically update via CSS custom properties, ensuring instant theme switching without JavaScript recalculation.

---

## 📦 Component Color Mapping

### Dashboard Components
- **Stats Cards**: Green accent with green-dim background
- **Team Cards**: Purple accent with purple-dim background
- **Schedule**: Blue accent with blue-dim background
- **Announcements**: Orange accent (info) / Red (urgent)
- **Gallery**: Rotating accents (green, purple, blue, orange)
- **Activity Feed**: Cyan accent with cyan-dim background

### Team Portal
- **Login Screen**: Cyan accent (#00ffff)
- **Header**: Cyan accent for branding
- **Room Info**: Green accent
- **WiFi Info**: Cyan accent
- **Problem Statement**: Purple accent
- **Members**: Green accent for leader, cyan for participants

---

## 🎨 Tailwind Integration

The project uses Tailwind CSS alongside custom CSS:

### Custom Tailwind Colors
```javascript
colors: {
  night: "#0b0f14",
  panel: "#121922",
  panelSoft: "#16212c",
  textMain: "#ecf4ff",
  textMuted: "#88a0ba",
  accent: "#2de08f",
  accentDeep: "#1cbf74",
}
```

### Custom Shadows
- `shadow-neon`: 0 0 0 1px rgba(45,224,143,0.2), 0 20px 45px rgba(3,10,20,0.55)

### Custom Backgrounds
- `bg-radialGlow`: Radial gradient with green and blue accents

---

## 🚀 Best Practices

1. **Always use CSS custom properties** for colors (var(--accent-green))
2. **Use theme-aware utility classes** (.t-card, .t-input)
3. **Maintain sharp corners** (border-radius: 0px) for brutalist aesthetic
4. **Use uppercase + letter-spacing** for important labels
5. **Apply neon glow effects** on interactive elements
6. **Keep borders thick** (2-3px) for visual weight
7. **Use monospace font** for all text
8. **Implement scanline effects** for retro feel
9. **Ensure high contrast** for accessibility
10. **Test both themes** when adding new components

---

## 📝 Notes

- The design system is fully responsive and mobile-friendly
- All animations are performance-optimized using CSS transforms
- Theme switching is instant via CSS custom properties
- The brutalist aesthetic is maintained across both light and dark themes
- Accessibility is prioritized with high contrast ratios and clear focus states

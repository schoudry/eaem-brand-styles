# Multi-Brand AEM Styling System

A streamlined multi-brand theming system for Adobe Experience Manager (AEM) with design tokens and automated builds.

## 🎨 Brand System

This theme supports three distinct brand identities:

| Brand | Body Background | Title Background | Font |
|-------|----------------|------------------|------|
| 🟢 **Green** | Very light green (#e8f5e9) | Light green | Source Serif Pro |
| 🔴 **Red** | Very light red (#ffebee) | Light coral | Source Sans Pro Bold |
| 🟡 **Yellow** | Very light yellow (#fffde7) | Light yellow | Source Sans Pro Regular |

## 📁 Structure

```
src/
├── theme.ts                    # Entry point
├── theme.scss                  # Main stylesheet
├── site/
│   ├── _variables.scss         # Design tokens (brand colors)
│   ├── _fonts.scss             # Web font definitions
│   ├── _brand-green.scss       # Green brand theme
│   ├── _brand-red.scss         # Red brand theme
│   └── _brand-yellow.scss      # Yellow brand theme
├── blocks/
│   ├── brand-green/title/      # Green title component
│   ├── brand-red/title/        # Red title component
│   └── brand-yellow/title/     # Yellow title component
└── resources/
    └── fonts/                  # Font files (woff2)
```

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Development

```bash
# Watch mode for development
npm run watch

# Live preview with AEM proxy
npm run live
```

### 3. Build

```bash
# Development build (outputs to dist/)
npm run build

# Production build (outputs to release/)
npm run release
```

## 🎯 Using Brands

Add the brand class to the `<body>` element or a parent container:

```html
<!-- Green Brand -->
<body class="brand-green">
  <div class="cmp-title">
    <h1 class="title">Green Themed Title</h1>
  </div>
</body>

<!-- Red Brand -->
<body class="brand-red">
  <div class="cmp-title">
    <h1 class="title">Red Themed Title</h1>
  </div>
</body>

<!-- Yellow Brand -->
<body class="brand-yellow">
  <div class="cmp-title">
    <h1 class="title">Yellow Themed Title</h1>
  </div>
</body>
```

## 🎨 Design Tokens

All brand colors are centralized in `src/site/_variables.scss`:

```scss
// Brand Green
$brand-green-bg: lightgreen;
$brand-green-body-bg: #e8f5e9;

// Brand Red
$brand-red-bg: lightcoral;
$brand-red-body-bg: #ffebee;

// Brand Yellow
$brand-yellow-bg: lightyellow;
$brand-yellow-body-bg: #fffde7;
```

## 🔧 CSS Specificity

Brand-specific styles use increased specificity to override base styles:

```scss
// Specificity: 0,0,2,1
body.brand-green .title {
  background-color: $brand-green-bg;
}
```

## 🪝 Git Hooks

The project uses Husky for automated builds:

- **Pre-push hook**: Automatically runs `npm run release` before every push
- **Ensures**: Fresh build artifacts in `release/` folder on every push

## 📦 Release Output

The `release/` folder contains production-ready files:

```
release/
├── theme.css (1.17 KB)
├── theme.js (35 B)
└── resources/
    └── fonts/
        ├── SourceSansPro-Bold.woff2 (12.92 KB)
        ├── SourceSansPro-Regular.woff2 (13.04 KB)
        └── SourceSerifPro-Regular.woff2 (19.96 KB)
```

## 🧪 Preview

Open `preview-all-brands.html` in a browser to see all brand styles in action.

## 🔗 Deployment

Deploy this theme to AEM using the [Front-End Pipeline](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/developing/developing-with-front-end-pipelines.html) in Cloud Manager.

## 📝 License

MIT License, Copyright 2020 Adobe Systems Incorporated

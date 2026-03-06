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
# Generates both theme.css (all brands) and brand-specific CSS files
npm run release
```

## 🎯 Using Brands

Add the brand class to the `<body>` element or a parent container:

```html
<!-- Green Brand -->
<body class="brand-green">
  <h1 class="title">Green Themed Title</h1>
</body>

<!-- Red Brand -->
<body class="brand-red">
  <h1 class="title">Red Themed Title</h1>
</body>

<!-- Yellow Brand -->
<body class="brand-yellow">
  <h1 class="title">Yellow Themed Title</h1>
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
├── theme.css (1.13 KB)                      # All brands combined
├── brand-green.css (902 B)                  # Green brand theme
├── brand-red.css (927 B)                    # Red brand theme
├── brand-yellow.css (927 B)                 # Yellow brand theme
├── brand-green/
│   └── blocks/
│       └── title/
│           └── title.css (69 B)             # Green brand title block
├── brand-red/
│   └── blocks/
│       └── title/
│           └── title.css (65 B)             # Red brand title block
├── brand-yellow/
│   └── blocks/
│       └── title/
│           └── title.css (71 B)             # Yellow brand title block
└── resources/
    └── fonts/
        ├── SourceSansPro-Bold.woff2 (12.92 KB)
        ├── SourceSansPro-Regular.woff2 (13.04 KB)
        └── SourceSerifPro-Regular.woff2 (19.96 KB)
```

**Usage Options:**
- Use `theme.css` to include all brands and blocks (recommended for multi-brand sites)
- Use individual brand CSS files for modular loading:
  - `brand-green.css` for site-level branding
  - `brand-green/blocks/title/title.css` for title block styling
  - Load only what you need to minimize file size

## 🧪 Preview

Open `preview-all-brands.html` in a browser to see all brand styles in action.

## 🚀 GitHub Actions

The project includes an automated deployment workflow that syncs the release folder to the `eaem-dev-eds` repository.

### Workflow: Deploy to EDS

**Trigger:** Pushes to `master` or `main` branch

**What it does:**
1. Builds the release folder
2. Clones the `eaem-dev-eds` repository
3. Copies release contents to `eaem-dev-eds/styles/`
4. Commits and pushes changes automatically

### Setup Instructions

To enable the workflow, add a `DEPLOY_TOKEN` secret to this repository:

1. Go to GitHub → Your Profile → Settings → Developer settings → Personal access tokens
2. Generate a new token with `repo` scope
3. Go to this repository → Settings → Secrets and variables → Actions
4. Add a new secret named `DEPLOY_TOKEN` with the token value

The workflow will run automatically on every push to master/main.

## 🔗 Deployment

Deploy this theme to AEM using the [Front-End Pipeline](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/developing/developing-with-front-end-pipelines.html) in Cloud Manager.

## 📝 License

MIT License, Copyright 2020 Adobe Systems Incorporated

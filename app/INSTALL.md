# Installation Guide (Windows)

This guide provides instructions for setting up the development environment on Windows.

## 1. Prerequisites

You need **Node.js** and **Git** installed. We recommend using `nvm-windows` for managing Node.js versions and `winget` for installation.

Open **PowerShell** or **Command Prompt** as Administrator and run:

```powershell
# 1. Install nvm (Node Version Manager) for Windows
winget install CoreyButler.nvm-windows

# 2. Install Git
winget install Git.Git
```

### Setup Node.js via nvm

After installing `nvm`, restart your terminal and run:

```powershell
# Install the latest LTS version of Node.js
nvm install lts

# Set the active Node.js version
nvm use lts
```

> **Note:** You may need to restart your terminal for the `node`, `npm`, and `git` commands to be fully recognized after these steps.

## 2. Setup Project

1. **Navigate to the project directory:**

    ```powershell
    cd path\to\test-ht-website\app
    ```

2. **Install Dependencies:**

    ```powershell
    npm install
    ```

## 3. Development

To start the local development server:

```powershell
npm run dev
```

* The site will be available at: `http://localhost:4321`
* Changes to files will automatically reload the page.

## 4. Code Quality

To run linting and formatting checks (Biome for JS/TS and Markdownlint for Markdown):

```powershell
npm run lint
```

## 5. Production Build

To build the site for deployment (static files generation):

```powershell
npm run build
```

The output will be in the `dist/` folder. You can preview the production build locally with:

```powershell
npm run preview
```

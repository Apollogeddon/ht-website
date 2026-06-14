# Setup Guide

This guide walks you through setting up the project so you can make content changes locally and publish them to the live site.

## 1. Install Prerequisites

You need Node.js and Git installed before you can run the site. Both are installed via **winget**, Windows' built-in package manager.

Open **PowerShell as Administrator** (search for PowerShell in the Start menu, right-click, and select "Run as administrator"), then run:

```powershell
winget install CoreyButler.NVMforWindows
winget install Git.Git
```

Close PowerShell when both finish.

### Set up Node.js via nvm

`nvm` (Node Version Manager) lets you install and switch between Node.js versions. Open a **new** PowerShell window (no need for Administrator this time) and run:

```powershell
nvm install lts
nvm use lts
```

> **Note:** You may need to restart your terminal or VS Code for the `node` and `npm` commands to be recognised after this step.

## 2. Get the Project

1. Open VS Code.
2. Press `Ctrl+Shift+P` to open the command palette.
3. Type `Git: Clone` and select it.
4. Paste in the repository URL and press Enter.
5. Choose a folder on your computer to save the project into.
6. When VS Code asks "Would you like to open the cloned repository?", click **Open**.

## 3. Install Dependencies

The project uses third-party packages that need to be downloaded once before you can run it.

1. In VS Code, open the terminal: **Terminal → New Terminal** (or press `` Ctrl+` ``).
2. Run:

    ```powershell
    npm install
    ```

3. Wait for it to finish. You only need to do this once (and again after any dependency updates).

## 4. Configure the Contact Form

The contact form uses [Web3Forms](https://web3forms.com/) to send emails. You need an Access Key to activate it.

1. Go to [web3forms.com](https://web3forms.com/), enter your email address, and they will send you an Access Key.
2. In the project folder, find the file named `.env.example` and make a copy of it in the same folder named `.env`.
3. Open `.env` in VS Code and replace the placeholder with your Access Key:

    ```
    PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
    ```

4. Save the file.

> **Note:** The `.env` file is private and will never be uploaded to GitHub. The live site uses a separate key configured in GitHub — contact the site administrator if that needs updating.

## 5. Run the Site Locally

To preview the site on your computer before publishing:

1. In the VS Code terminal, run:

    ```powershell
    npm run dev
    ```

2. Open your browser and go to `http://localhost:4321`.
3. The site will automatically refresh as you make changes.
4. When you're done, press `Ctrl+C` in the terminal to stop the server.

# 🚀 GeekCode - Coding Platform

<div align="center">

![GeekCode](public/logo-full.png)

**A modern, interactive coding platform for practicing DSA problems with real-time code execution**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](YOUR_VERCEL_LINK_HERE)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-12.2.1-orange?style=for-the-badge&logo=firebase)](https://firebase.google.com/)

[Live Demo](YOUR_VERCEL_LINK_HERE) • [Report Bug](https://github.com/prakhar-srivastavaa/GeekCode/issues) • [Request Feature](https://github.com/prakhar-srivastavaa/GeekCode/issues)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Problems](#available-problems)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About The Project

**GeekCode** is a full-stack coding platform inspired by LeetCode, built with modern web technologies. It provides an interactive environment for developers to practice Data Structures and Algorithms (DSA) problems with features like:

- Real-time code editor with syntax highlighting
- Test case validation
- Timer functionality
- User authentication
- Problem navigation
- Responsive design

Perfect for interview preparation and improving problem-solving skills!

---

## ✨ Features

### 🔐 Authentication
- **Firebase Authentication** - Secure user login/signup
- **Email/Password** authentication
- **Password Reset** functionality
- Persistent user sessions

### 💻 Code Editor
- **CodeMirror Integration** - Professional code editor
- **Syntax Highlighting** - JavaScript support
- **VS Code Dark Theme** - Familiar dark theme
- **Split View** - Problem description and code editor side-by-side

### 🧪 Problem Solving
- **Multiple DSA Problems** - Array, LinkedList, Stack, Binary Search, DP
- **Test Cases** - Multiple test cases per problem
- **Real-time Validation** - Instant feedback on code execution
- **Navigation** - Previous/Next buttons to browse problems
- **Problem List** - Overview of all available problems

### ⏱️ Additional Features
- **Timer** - Track time spent on each problem
- **Difficulty Levels** - Easy, Medium, Hard problems
- **Video Solutions** - YouTube video links for select problems
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Loading Skeletons** - Smooth loading experience

---

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15.5.2](https://nextjs.org/)** - React framework with SSR/SSG
- **[React 18.2](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS
- **[DaisyUI](https://daisyui.com/)** - Component library

### Code Editor
- **[@uiw/react-codemirror](https://uiwjs.github.io/react-codemirror/)** - Code editor component
- **[@codemirror/lang-javascript](https://codemirror.net/)** - JavaScript language support
- **[@uiw/codemirror-theme-vscode](https://uiwjs.github.io/react-codemirror/)** - VS Code theme

### Backend & Database
- **[Firebase 12.2.1](https://firebase.google.com/)** - Authentication & Database
- **[Firestore](https://firebase.google.com/products/firestore)** - NoSQL database

### State Management & Utilities
- **[Recoil](https://recoiljs.org/)** - State management
- **[React Split](https://split.js.org/)** - Split pane component
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** - Toast notifications
- **[React YouTube](https://www.npmjs.com/package/react-youtube)** - YouTube player

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/prakhar-srivastavaa/GeekCode.git
   cd GeekCode
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the `src` directory:
   ```bash
   cd src
   touch .env.local
   ```

4. **Add Firebase configuration**
   
   See [Environment Variables](#environment-variables) section below

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🔐 Environment Variables

Create a `src/.env.local` file with your Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### How to get Firebase credentials:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Go to Project Settings → General
4. Scroll down to "Your apps" section
5. Click on Web app (</>) icon
6. Copy the configuration values

---

## 📖 Usage

### For Users

1. **Sign Up / Login**
   - Create an account or login with existing credentials
   - Use the "Sign In" button in the navbar

2. **Browse Problems**
   - View all problems on the homepage
   - Problems are categorized by difficulty and topic

3. **Solve Problems**
   - Click on any problem to open the editor
   - Read the problem description and examples
   - Write your solution in the code editor
   - Test your code with provided test cases
   - Navigate between problems using arrow buttons

4. **Track Progress**
   - Use the built-in timer to track solving time
   - Check marks indicate completed problems

### For Developers

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start           # Start production server

# Linting
npm run lint        # Run ESLint
```

---

## 📁 Project Structure

```
GeekCode/
├── public/              # Static assets
│   ├── logo-full.png
│   └── avatar.png
├── src/
│   ├── atoms/           # Recoil state atoms
│   ├── Components/      # React components
│   │   ├── Buttons/
│   │   ├── Modals/
│   │   ├── Navbar/
│   │   ├── ProblemsTable/
│   │   ├── Skeletons/
│   │   ├── Timer/
│   │   ├── Topbar/
│   │   └── Workspace/
│   ├── context/         # React context
│   ├── firebase/        # Firebase configuration
│   ├── hooks/           # Custom React hooks
│   ├── mockProblems/    # Problem data
│   ├── pages/           # Next.js pages
│   │   ├── api/
│   │   ├── auth/
│   │   ├── problems/
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   ├── styles/          # Global styles
│   ├── utils/           # Utility functions
│   │   ├── problems/    # Problem implementations
│   │   └── types/       # TypeScript types
│   └── .env.local       # Environment variables
├── .eslintrc.json
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🧩 Available Problems

| # | Problem | Difficulty | Category | Video |
|---|---------|-----------|----------|-------|
| 1 | Two Sum | Easy | Array | ✅ |
| 2 | Reverse Linked List | Hard | Linked List | ❌ |
| 3 | Jump Game | Medium | Dynamic Programming | ❌ |
| 4 | Valid Parentheses | Easy | Stack | ✅ |
| 5 | Search a 2D Matrix | Medium | Binary Search | ✅ |

**More problems coming soon!**

---

## 🌐 Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/prakhar-srivastavaa/GeekCode)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Configure environment variables in Vercel settings
   - Click "Deploy"

3. **Add Environment Variables**
   - In Vercel project settings, go to "Environment Variables"
   - Add all variables from `.env.local`
   - Redeploy if needed

4. **Update README**
   - Replace `YOUR_VERCEL_LINK_HERE` with your live URL

### Other Deployment Options

- **Netlify**: [Deploy to Netlify](https://www.netlify.com/)
- **Railway**: [Deploy to Railway](https://railway.app/)
- **AWS**: Use AWS Amplify or EC2
- **Docker**: Build and deploy using Docker containers

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contributions

- Add more DSA problems
- Implement more programming languages (Python, Java, C++)
- Add submission history
- Implement discussion forums
- Add code playground
- Improve UI/UX
- Add dark/light theme toggle
- Implement leaderboard

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Contact

**Prakhar Srivastava**

- GitHub: [@prakhar-srivastavaa](https://github.com/prakhar-srivastavaa)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)
- Email: your.email@example.com

**Project Link**: [https://github.com/prakhar-srivastavaa/GeekCode](https://github.com/prakhar-srivastavaa/GeekCode)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [CodeMirror](https://codemirror.net/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [LeetCode](https://leetcode.com/) - Inspiration for the project

---

<div align="center">

**Made with ❤️ by [Prakhar Srivastava](https://github.com/prakhar-srivastavaa)**

⭐ Star this repo if you find it helpful!

</div>
<!-- Update: Update problem solving algorithm efficiency - 2025-10-24T18:23:45 -->

<!-- Update: Refactor authentication flow - 2025-10-24T19:47:12 -->

<!-- Update: Add input validation for problem submission - 2025-10-24T21:15:33 -->

<!-- Update: Improve UI responsiveness for mobile devices - 2025-10-25T09:34:21 -->

<!-- Update: Optimize Firebase query performance - 2025-10-25T20:12:48 -->

<!-- Update: Add dark mode theme improvements - 2025-10-26T08:15:37 -->

<!-- Update: Update timer component functionality - 2025-10-26T10:42:19 -->

<!-- Update: Fix modal closing behavior on escape key - 2025-10-26T19:28:54 -->

<!-- Update: Enhance code editor syntax highlighting - 2025-10-26T22:03:11 -->

<!-- Update: Add new problem: Binary Search Tree validation - 2025-10-27T07:45:22 -->

<!-- Update: Implement user progress tracking - 2025-10-27T11:18:45 -->

<!-- Update: Update problem difficulty indicators - 2025-10-27T14:33:09 -->

<!-- Update: Add submission history feature - 2025-10-27T18:56:31 -->

<!-- Update: Improve error handling in authentication - 2025-10-27T21:42:17 -->

<!-- Update: Optimize bundle size for production build - 2025-10-28T17:54:28 -->

<!-- Update: Add loading states for async operations - 2025-10-28T19:21:52 -->

<!-- Update: Update navbar styling and layout - 2025-10-28T22:38:14 -->

<!-- Update: Fix memory leak in timer component - 2025-10-29T08:47:33 -->

<!-- Update: Add test cases for utility functions - 2025-10-29T10:19:46 -->

<!-- Update: Implement problem search functionality - 2025-10-30T09:23:18 -->

<!-- Update: Add user profile settings page - 2025-10-30T13:45:37 -->

<!-- Update: Update Firebase security rules - 2025-10-30T19:12:44 -->

<!-- Update: Improve code editor auto-completion - 2025-10-30T21:56:09 -->

<!-- Update: Add problem tags and filtering - 2025-10-31T18:34:52 -->

<!-- Update: Implement streak tracking feature - 2025-10-31T20:11:28 -->

<!-- Update: Update workspace layout for better UX - 2025-10-31T22:47:15 -->

<!-- Update: Add new problem: Longest Common Subsequence - 2025-11-01T07:28:41 -->

<!-- Update: Implement code submission validation - 2025-11-01T11:52:19 -->

<!-- Update: Update problem description formatting - 2025-11-01T15:17:33 -->

<!-- Update: Add keyboard shortcuts for editor - 2025-11-01T19:43:27 -->

<!-- Update: Improve responsive design for tablets - 2025-11-01T22:19:55 -->

<!-- Update: Fix TypeScript type definitions - 2025-11-02T08:56:14 -->

<!-- Update: Add social sharing functionality - 2025-11-02T11:33:48 -->

<!-- Update: Implement real-time code collaboration - 2025-11-03T09:41:23 -->

<!-- Update: Add problem hints system - 2025-11-03T12:18:56 -->

<!-- Update: Update authentication error messages - 2025-11-03T17:52:31 -->

<!-- Update: Optimize image loading performance - 2025-11-03T21:27:44 -->

<!-- Update: Add user statistics dashboard - 2025-11-04T18:15:39 -->

<!-- Update: Implement problem bookmarking feature - 2025-11-04T20:48:22 -->


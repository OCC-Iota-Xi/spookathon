# Spookathon

Welcome to the official website repository for **Hack Iota Xi 2025**, a hackathon organized by our Computer Science Honor Society (Iota Xi) for Fall 2025.

## About the Project

This repository contains the source code for the Hack Iota Xi 2025 website, which serves as the central hub for hackathon participants, sponsors, and organizers. The website provides information about the event, registration, schedules, prizes, and more.

### What is Hack Iota Xi?

Hack Iota Xi is an annual hackathon event organized by the Iota Xi Computer Science Honor Society. The event brings together students, professionals, and tech enthusiasts to collaborate, innovate, and build amazing projects over a weekend of coding, learning, and networking.

## Technology Stack

This project is built with modern web technologies:

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Linting**: [ESLint](https://eslint.org/)
- **Package Manager**: npm

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 20 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/OCC-Iota-Xi/ix-hackathon.git
   cd ix-hackathon
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the website in development mode.

The page will automatically reload when you make changes to the code.

## Available Scripts

- `npm run dev` - Starts the development server (you'll usually be using this one)
- `npm run build` - Creates an optimized production build
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check for code issues

## How to Contribute

We welcome contributions from all members of the Iota Xi community and beyond! Here's how you can get involved:

### 1. Fork and Clone

- Fork this repository to your GitHub account
- Clone your fork locally
- Create a new branch for your feature: `git checkout -b feature/your-feature-name`

### 2. Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Test your changes thoroughly before submitting
- Ensure your code passes ESLint checks: `npm run lint`

### 3. Submit a Pull Request

- Push your changes to your fork
- Create a pull request with a clear description of your changes
- Link any relevant issues
- Wait for code review and address any feedback

### Areas Where We Need Help

- 🎨 **UI/UX Design**: Improving the visual design and user experience
- 📱 **Responsive Design**: Ensuring the site works well on all devices
- ⚡ **Performance**: Optimizing load times and user interactions
- 🧪 **Testing**: Adding unit and integration tests
- 🔧 **Features**: Adding new functionality (registration, schedule, etc.)
- 📝 **Content**: Writing and updating hackathon information
- 🐛 **Bug Fixes**: Identifying and fixing issues

## Project Structure

```
ix-hackathon/
├── public/          # Static assets (images, icons, etc.)
├── src/
│   └── app/         # Next.js App Router pages and layouts
│       ├── globals.css    # Global styles
│       ├── layout.tsx     # Root layout component
│       └── page.tsx       # Home page
├── package.json     # Project dependencies and scripts
├── tsconfig.json    # TypeScript configuration
├── eslint.config.mjs # ESLint configuration
└── README.md        # This file
```

## Contact Information

### Project Maintainers

- **Technical Lead**: Kevin Doan, VP of Scholarly Activities

### Getting Help

- 🐛 **Issues**: Report bugs or request features via [GitHub Issues](https://github.com/OCC-Iota-Xi/ix-hackathon/issues)
- 📧 **Questions and Comments**: Send them directly to Kevin

## Deployment

The website is automatically deployed to production when changes are merged to the `main` branch. We recommend using [Vercel](https://vercel.com/) for seamless Next.js deployment.

### Manual Deployment

```bash
npm run build
npm run start
```

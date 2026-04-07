# Event Manager

A modern, responsive event tracking application built with React and TypeScript that helps users organize and manage their upcoming events with dates, times, and locations.

## ✨ Features

- **Create Events**: Add new events with title, date, time, and location
- **Event List Display**: View all upcoming events in a clean, organized layout
- **Modern UI**: Beautiful gradient backgrounds, glassmorphism effects, and smooth animations
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **TypeScript**: Full type safety for robust development
- **Tailwind CSS**: Modern styling with utility-first CSS framework

## 🚀 Technology Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **State Management**: React Hooks (useState, useEffect)
- **Development Tools**: ESLint, TypeScript Compiler

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd event-manager
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview the production build locally

## 🏗️ Project Structure

```
event-manager/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   └── EventForm.tsx   # Event creation form
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts        # Event and form data types
│   ├── App.tsx             # Main application component
│   ├── App.css             # Additional styles
│   ├── index.css           # Global styles with Tailwind imports
│   └── main.tsx            # Application entry point
├── package.json            # Project dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful blue-to-indigo gradients
- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Hover Effects**: Smooth transitions and transforms on interaction
- **Modern Typography**: Gradient text effects for headings
- **Card-based Layout**: Clean, organized event display
- **Responsive Grid**: Adapts to different screen sizes

## 📝 Usage

1. **Adding Events**: Fill out the form on the left with event details
2. **Viewing Events**: See all upcoming events displayed on the right
3. **Event Information**: Each event shows title, date, time, and location

## 🔧 Development

### Code Style

- Uses ESLint for code linting
- TypeScript for type checking
- Prettier for code formatting (if configured)

### Adding New Features

1. Create components in `src/components/`
2. Define types in `src/types/index.ts`
3. Update state management in `App.tsx`
4. Style with Tailwind CSS classes

## 🤝 Contributing

This is a group project with the following team members:

- **Catigan, Andrei William** - Event Status Management
- **Concoles, Cyril Jade** - Edit Event Details & Delete Events
- **Moreno, Radz Ponce** - Event List Display
- **Mosquera, Gabriel** - Event Creation
- **Oreiro, Genesis Ar** - Event Details and Filtering

## 📄 License

This project is private and intended for educational purposes.

## 🙋 Support

For questions or issues, please contact the development team or create an issue in the repository.

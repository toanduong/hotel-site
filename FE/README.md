# Hotel Site Frontend

A modern hotel booking website built with Next.js, TypeScript, and Zustand.

## Project Structure

```
FE/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── common-logic/           # Business logic layer
│   │   ├── services/           # API services
│   │   │   ├── api.service.ts
│   │   │   ├── hotel.service.ts
│   │   │   ├── booking.service.ts
│   │   │   ├── auth.service.ts
│   │   │   └── user.service.ts
│   │   ├── store/              # Zustand state management
│   │   │   ├── useAuthStore.ts
│   │   │   ├── useSearchStore.ts
│   │   │   ├── useBookingStore.ts
│   │   │   ├── useUIStore.ts
│   │   │   └── index.ts
│   │   ├── types/              # TypeScript interfaces
│   │   │   ├── common.types.ts
│   │   │   ├── hotel.types.ts
│   │   │   ├── booking.types.ts
│   │   │   ├── user.types.ts
│   │   │   └── index.ts
│   │   ├── models/             # Data models (to be added)
│   │   └── utils/              # Utility functions
│   │       ├── date.utils.ts
│   │       ├── price.utils.ts
│   │       ├── validation.utils.ts
│   │       ├── storage.utils.ts
│   │       └── constants.ts
│   └── components/             # UI components
│       └── common/
│           ├── Button.tsx
│           ├── Input.tsx
│           ├── Card.tsx
│           └── Loading.tsx
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form
- **Date Utilities**: date-fns

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Architecture

### Separation of Concerns

The project follows a clean architecture with clear separation between logic and UI:

- **common-logic/**: Contains all business logic, API calls, and state management
  - **services/**: API service layer for backend communication
  - **store/**: Zustand stores for state management
  - **types/**: TypeScript interfaces and types
  - **utils/**: Utility functions and constants
  - **models/**: Data models with business logic

- **components/**: Reusable UI components
  - **common/**: Basic UI components (Button, Input, Card, etc.)
  - **search/**: Search-related components
  - **hotel/**: Hotel display components
  - **booking/**: Booking flow components
  - **auth/**: Authentication components

- **app/**: Next.js pages using App Router

### State Management with Zustand

The application uses Zustand for lightweight and efficient state management:

- `useAuthStore`: Authentication state and user session
- `useSearchStore`: Search filters and results
- `useBookingStore`: Booking flow and reservation data
- `useUIStore`: UI state (modals, loading, notifications)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features

- 🏨 Hotel search and filtering
- 📅 Date range selection
- 💳 Booking management
- 👤 User authentication
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast performance with Next.js

## Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

Private project

# AI Chat Bot

A lightweight chat bot application built with React, Tailwind CSS, and Vite. This project uses a neat gradient background and provides a simple chat interface powered by an external API.

## Features

- **Chat Interface:** Users can send prompts and receive formatted responses.
- **Dynamic Background:** Uses a gradient animation from the @firecms/neat package.
- **Real-Time Feedback:** Displays loading states and error notifications using react-hot-toast.
- **Mobile-Friendly:** The chat responses are formatted for optimal mobile viewing.

## Project Structure

```
ai-chat-bot/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
└── src/
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── components/
        │   ├── Background.jsx
        │   ├── ChatContainer.jsx
        │   ├── Header.jsx
        │   ├── Main.jsx
        │   ├── UserInput.jsx
        │   └── Design/
        │         └── Neat.jsx
        └── contexts/
                  ├── ChatProvider.jsx
                  └── Context.js
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository.
2. Navigate into the project folder.
3. Install the dependencies:
      ```bash
      npm install
      ```
      or
      ```bash
      yarn install
      ```

### Environment Variables

The project requires two environment variables configured in a `.env` file at the project root:

- `VITE_BASE_URL` – The base URL for the API requests.
- `VITE_API_KEY` – Your API key for making requests.

Example `.env` file:

```env
VITE_BASE_URL=https://your-api.url
VITE_API_KEY=your_api_key_here
```

### Running the Application

To start the development server:

```bash
npm run dev
```

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Linting

The project uses ESLint with configurations for React and React Hooks. To run the linter:

```bash
npm run lint
```

## Author

Ahmad Latif

Enjoy coding and chatting!

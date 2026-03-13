# AI Code Explainer

AI Code Explainer is a full-stack web application that explains programming code step-by-step using AI.
Users can paste any code snippet and receive a clear explanation in plain English.

This project helps beginners understand algorithms, logic, and code flow quickly without manually reading complex code.

---

## Features

* Paste any code snippet
* AI explains the code step-by-step
* Beginner-friendly explanation
* Clean and simple UI
* Supports multiple programming languages
* Fast AI responses using Groq API

---

## Tech Stack

### Frontend

* React
* Vite
* CSS

### Backend

* Node.js
* Express.js

### AI Integration

* Groq API (LLM)

---

## Project Structure

```
AICodeExplainer
│
├── client
│   ├── src
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── controllers
│   │   └── aiController.js
│   │
│   ├── routes
│   │   └── aiRoutes.js
│   │
│   ├── services
│   │   └── aiService.js
│   │
│   ├── index.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## Installation

Clone the repository:

```
git clone https://github.com/shiva2005-maker/AICodeExplainer.git
```

Go into the project folder:

```
cd AICodeExplainer
```

---

## Backend Setup

Navigate to server folder:

```
cd server
```

Install dependencies:

```
npm install
```

Create `.env` file inside server:

```
GROQ_API_KEY=your_api_key_here
```

Start backend server:

```
npm start
```

---

## Frontend Setup

Navigate to client folder:

```
cd client
```

Install dependencies:

```
npm install
```

Run the frontend:

```
npm run dev
```

---

## How It Works

1. User enters code in the frontend interface.
2. React sends the code to the backend API.
3. Backend sends the code to Groq AI model.
4. AI analyzes the code and generates explanation.
5. Response is sent back to frontend and displayed to user.

---

## Example

Input code:

```
for(int i = 0; i < 5; i++){
    printf("%d", i);
}
```

AI Output:

* The loop starts with i = 0
* It runs until i < 5
* Each iteration prints the value of i
* Output will be: 0 1 2 3 4

---

## Future Improvements

* Syntax highlighting
* Support more programming languages
* Add authentication system
* Save explanation history
* Dark mode UI

---

## Author

Shiva
GitHub: https://github.com/shiva2005-maker

---

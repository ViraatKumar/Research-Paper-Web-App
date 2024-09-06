# Research Paper Web App

A full-stack web application that allows users to search for research papers, filter them by title, author, and year, and save papers to view later. The app is built using **React** for the frontend and **Node.js** for the backend, featuring a sleek dark theme.

## Features

- **Search and Filter**: Users can search for research papers and filter them by title, author, or year.
- **Save Papers**: Users can save papers for future reference.
- **Responsive Design**: The application is mobile-responsive and adapts to different screen sizes.
- **Dark Theme**: The entire application uses a sleek, modern dark theme for a visually pleasing user experience.

## Technologies Used

### Frontend:

- **React**: For building the UI components.
- **React Router**: For handling page navigation.
- **CSS**: Custom styling for dark theme and responsive design.
- **Axios**: For handling HTTP requests (e.g., saving papers).

### Backend:

- **Node.js**: Server-side runtime environment.
- **Express**: For building the backend API.
- **JavaScript**: For handling server logic.

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/research-paper-app.git
cd research-paper-app
```

## Install Backend Dependencies

```
cd backend
npm install

```

## Install Frontend Dependencies

```
cd ../frontend
npm install

```

## Start the backend

```
cd backend
npm start

```

## Start the frontend

```
cd ../frontend
npm start

```

# File Structure

Backend follows the MVC Pattern and the front end follows the Component-Based Architecture

```
/research-paper-app
|-- /backend                # Node.js backend
|   |-- /routes             # Backend routes
|   |-- server.js           # Main server file
|   |-- package.json        # Backend dependencies
|   |-- .gitignore          # Gitignore for backend
|
|-- /frontend               # React frontend
|   |-- /src                # React source files
|   |   |-- /components     # Reusable React components
|   |   |-- /pages          # Pages like SearchPage and SavedPapersPage
|   |   |-- App.js          # Main app component
|   |   |-- index.js        # React entry point
|   |-- public              # Public folder for the frontend
|   |-- package.json        # Frontend dependencies
|   |-- .gitignore          # Gitignore for frontend
|
|-- .gitignore              # Root gitignore

```

You can Follow the steps to understand and run this project.

### Thank you for this opportunity :)

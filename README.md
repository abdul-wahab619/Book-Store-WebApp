# MERN Book Store Project

Welcome to the MERN Book Store project! This project is aimed at creating a full-stack web application for managing a book store, including performing CRUD operations.

## Technologies Used

- **MongoDB**: NoSQL database for storing book data.
- **Express.js**: Node.js web application framework for building the backend API.
- **React.js**: JavaScript library for building the user interface.
- **Node.js**: JavaScript runtime environment for running the backend server.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **React Router**: Routing library for React applications.
- **Axios**: Promise-based HTTP client for making requests from the frontend to the backend.
- **React Icons**: It is used for specific icons which is attractive our UI
- **TailwindCSS**: Frontend framework for styling the UI.

## Getting Started

Follow these steps to get the project up and running on your local machine:

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed locally or a MongoDB Atlas account set up.

### Installation

1. Clone the repository to your local machine:

```bash
   git clone https://github.com/abdul-wahab619/Book-Store-WebApp.git
```

2. Navigate to the project directory:

```bash
   cd mern-book-store
```

3. Install dependencies for both the frontend and backend:

```bash
   cd frontend
   npm install

   cd backend
   npm install
```

### Configuration

1. Backend Configuration:

   - Create a `.env` file in the `server` directory.
   - Add the following environment variables:

   ```
   PORT=5000
   MONGODB_URI=<your-mongodb-uri>
   ```

2. Frontend Configuration:

   - Create a `.env` file in the `client` directory.
   - Add the following environment variables:

   ```
    REACT_APP_API_URL=http://localhost:5000/api
   ```

### Running the Application

1. Start the backend server:

```bash
   cd backend
   npm start or nodemon
```

2. Start the frontend development server:

```bash
   cd frontend
   npm run dev
```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

4. Interface In Table

![Image1](/interface/image2.png)

5. Interface In Card

![Image1](/interface/image.png)

## Youtube

[![Image1](/interface/image.png)](https://www.youtube.com/channel/UCb_PNse1bCwSUQ1egNymlPA)

## Collaborating

If you want to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request. Make sure to follow the contribution guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

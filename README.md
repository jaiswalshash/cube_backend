
# Catalyst Cube

## Introduction

Welcome to [Catalyst](https://cube-frontend-three.vercel.app/), a full-stack todo application designed to streamline your task management experience. Catalyst is built on the MERN (MongoDB, Express.js, React, Node.js) stack, providing a robust and scalable solution for managing your todos efficiently.

## Tech Stack

### MERN Stack

-   **MongoDB**: A NoSQL database for storing and managing todo data.
-   **Express.js**: A web application framework for building robust APIs.
-   **React**: A JavaScript library for building user interfaces.
-   **Node.js**: A runtime environment for executing server-side JavaScript code.

### Libraries Used

-   **Ant Design (antd)**: A React UI library that provides a set of high-quality components and layouts for building a modern user interface.
-   **React Icons**: A library providing popular icon packs as React components.
-   **JSON Web Token (JWT)**: Used for secure authentication.

## Why MERN?

The MERN stack was chosen for Catalyst due to its seamless integration of technologies, allowing for efficient development and maintenance. MongoDB's flexibility, Express.js's simplicity, React's component-based architecture, and Node.js's event-driven nature combine to create a powerful and scalable application.

## How to Use

Catalyst is split into two repositories: one for the [frontend](https://github.com/jaiswalshash/cube_frontend) and another for the [backend](https://github.com/jaiswalshash/cube_backend). This separation is adopted to address hosting issues and ensure a smooth development and deployment process.

### Backend Setup

1.  Clone the backend repository:
    

    
    `git clone https://github.com/jaiswalshash/cube_backend` 
    
2.  Navigate to the backend folder:

    
    `cd backend` 
    
3.  Install dependencies:
    
    
    `npm install` 
    
4.  Install nodemon globally:
        
    `npm i -g nodemon` 
    
5.  Create a `.env` file in the backend folder and add the following environment variable:
    
    envCopy code
    
    `MONGO_URI= 'mongodb+srv://admin:IXHZfglw3oyBJzTl@mycluster.w7djj.mongodb.net/todos?retryWrites=true&w=majority'
PASSWORD=abc
SECRET=123
TOKEN_KEY=todo@cube` 
    
6.  Start the backend server:
   
    
    `npm start` 
    

### Frontend Setup

1.  Clone the frontend repository:
   
    
    `git clone https://github.com/jaiswalshash/cube_frontend` 
    
2.  Navigate to the frontend folder:

    
    `cd frontend` 
    
3.  Install dependencies:

    
    `npm install` 
    
4.  Start the frontend server:
    

    
    `npm start` 
    

Now you have Catalyst up and running locally! Visit `http://localhost:3000` in your web browser to start using the application.
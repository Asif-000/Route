📦 Project Summary 
User Management Backend – Express.js API
This is a simple User Management backend built with Node.js and Express.js. It demonstrates how to set up RESTful routes to handle user-related operations such as creating, retrieving, and deleting users.

🔧 Features
Express Server Setup: A lightweight server created using Express.

Basic API Routes:

GET /users – Retrieve a list of users

GET /users/:id – Retrieve a specific user by ID

POST /users – Create a new user

DELETE /users/:id – Delete a user by ID

In-Memory Data Storage: Users are stored in an in-memory array (no database connected yet).

Modular Routing: User routes are separated into their own file for better organization (routes/user.js).

JSON Body Parsing: Uses express.json() middleware to handle JSON request bodies.

🛠 Technologies Used
Node.js
Express.js

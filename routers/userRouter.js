const express = require("express"); // Import Express framework
const { getAllUsersHandler, getUserByIdHandler, updateUserHandler, deleteUserHandler, loginUserHandler, registerUserHandler } = require("../handlers/userHandler"); // Import user handlers
const authenticateToken = require("../middleware/jwt"); // Import middleware for token authentication

const router = express.Router(); // Create a new router

router.post("/login", loginUserHandler); // POST /users/login - Login user
router.post("/register", registerUserHandler); // POST /users/register - Register a new user

// Protected routes
router.get("/", authenticateToken, getAllUsersHandler); // GET /users - Get all users with authentication
router.get("/:id", authenticateToken, getUserByIdHandler); // GET /users/:id - Get user by ID with authentication
router.put("/:id", authenticateToken, updateUserHandler); // PUT /users/:id - Update user by ID with authentication
router.delete("/:id", authenticateToken, deleteUserHandler); // DELETE /users/:id - Delete user by ID with authentication

module.exports = router; // Export the router

const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "secret"; // Verifying token

// For authenticating token
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Extract token from header

  if (token == null) return res.status(401).json({ message: "Need Token" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Not Valid" });

    req.user = user; // Set user to request object
    next();
  });
};

module.exports = authenticateToken;

// List of allowed paths
const allowedPaths = ['/', '/contact', '/publications', '/resume'];

// Get current path
const path = window.location.pathname.toLowerCase();

// Check if the path is allowed
if (!allowedPaths.includes(path)) {
  // Redirect to homepage
  window.location.href = '/';
}
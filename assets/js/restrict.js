// assets/js/restrict.js

// List of allowed paths
const allowedPaths = ['/', '/about', '/publications', '/resume'];

// Get current path in lowercase
let path = window.location.pathname.toLowerCase();

// Redirect /cv to /resume
if (path === '/cv' || path === '/cv/') {
  window.location.href = '/resume';
}

// If path is not allowed, redirect to homepage
else if (!allowedPaths.includes(path)) {
  window.location.href = '/';
}
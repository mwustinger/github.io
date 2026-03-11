// assets/js/restrict.js

// List of allowed paths
const allowedPaths = ['/', '/about', '/publications', '/cv'];

// If path is not allowed, redirect to homepage
if (!allowedPaths.includes(path)) {
  window.location.href = '/';
}
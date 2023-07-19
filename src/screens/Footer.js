import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>&copy; {new Date().getFullYear()} Foodio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

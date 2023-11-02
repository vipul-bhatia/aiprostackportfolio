'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  const scrollToNewsletter = () => {
    const newsletterSection = document.getElementById('newsletter');

    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="absolute w-full z-30">
      {/* Other header content */}
      
      {/* Add a button that scrolls to the newsletter section */}
      <div className="text-right p-6">
        <button className="btn text-white bg-purple-600 hover:bg-purple-700" onClick={scrollToNewsletter}>
          Contact Us!
        </button>
      </div>
    </header>
  );
}

"use client";
import img_logo from "../../public/logo.jpg";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div
        className="
          mx-auto max-w-6xl
          bg-white/70 dark:bg-white/10 backdrop-blur-sm shadow-md
          rounded-b-3xl
          px-6 py-4
          flex items-center justify-between">

        <a href="https://instagram.com/lucashotedits" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center space-x-3">
            <img src={img_logo.src} alt="Logo" className="h-10 w-10 object-contain rounded-3xl" />
            <p className="text-xl font-bold text-gray-800 dark:text-white hover:underline transition-all">@lucashotedits</p>
          </div>
        </a>

        {/* Navigation */}
        <div className="flex items-center space-x-3">
          <nav className="space-x-6 text-gray-700 dark:text-gray-200 font-medium">
            <a href="/" className="hover:text-black dark:hover:text-white hover:underline transition">Home</a>
            <a href="/gallery" className="hover:text-black dark:hover:text-white hover:underline transition">Showcase</a>
            <a href="/about" className="hover:text-black dark:hover:text-white hover:underline transition">About</a>
            <a href="/contact" className="hover:text-black dark:hover:text-white hover:underline transition">Contact</a>
          </nav>

          <div className="px-2 text-gray-800 dark:text-white text-lg">
            |
          </div>

          <ThemeToggle /></div>
      </div>
    </header>
  );
}

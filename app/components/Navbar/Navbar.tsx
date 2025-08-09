import { Sun } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="w-full    px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Logo */}
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 via-blue-500 to-black" />
        <span className="font-bold text-lg">skiper/ui</span>

        {/* Beta tag */}
        <span className="ml-1 text-xs text-red-500 border border-red-500 rounded-md px-2 py-0.5">
          Beta
        </span>

        {/* Navigation Links */}
        <nav className="ml-6 space-x-5 text-sm text-gray-600 dark:text-gray-400">
          <a href="#">Components</a>
          <a href="#">Pricing</a>
          <a href="#">Newsletter</a>
        </nav>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search documentation..."
            className="pl-4 pr-10 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm outline-none"
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-white dark:bg-black px-1 rounded border">
            ⌘ K
          </span>
        </div>

        {/* Icons */}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl text-gray-700 dark:text-white" />
        </a>
        <button className="text-xl font-light text-gray-700 dark:text-white">✕</button>
        <button>
          <Sun className="w-5 h-5 text-gray-700 dark:text-white" />
        </button>
      </div>
    </header>
  );
}

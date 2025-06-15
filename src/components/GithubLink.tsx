'use client'

import { FaGithub } from 'react-icons/fa'

export default function GithubLink() {
  return (
    <a
      href="https://github.com/yourusername/youtube-title-analysis"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-200"
      aria-label="View on GitHub"
    >
      <FaGithub size={24} />
    </a>
  )
} 
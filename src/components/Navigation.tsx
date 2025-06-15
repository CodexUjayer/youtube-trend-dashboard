'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Analysis', path: '/analysis' },
  { name: 'Trends', path: '/trends' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-gray-800 p-4 rounded-lg mb-4">
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>
              <motion.div
                className={`px-4 py-2 rounded-lg cursor-pointer ${
                  pathname === item.path
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
} 
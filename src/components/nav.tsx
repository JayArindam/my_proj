// components/nav.js
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-center items-center p-4">
      <div className="flex space-x-6">
        <Link href="/" className="text-gray-900 dark:text-gray-100 hover:text-orange-500 dark:hover:text-orange-400">
          Home
        </Link>
        <Link href="/docs" className="text-gray-900 dark:text-gray-100 hover:text-orange-500 dark:hover:text-orange-400">
          Docs
        </Link>
        <Link href="/contribute" className="text-gray-900 dark:text-gray-100 hover:text-orange-500 dark:hover:text-orange-400">
          Contribute
        </Link>
        <Link href="/donate" className="text-gray-900 dark:text-gray-100 hover:text-orange-500 dark:hover:text-orange-400">
          Donate
        </Link>
      </div>
    </nav>
  );
}

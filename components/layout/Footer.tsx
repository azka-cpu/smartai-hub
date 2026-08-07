import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <h3 className="mb-3 font-bold">SmartAI Hub</h3>
          <p className="text-sm text-gray-500">AI tools that save time and boost productivity.</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Company</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Connect</h4>
          <div className="flex gap-4">
            <a href="https://github.com/azka-cpu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm">
                GitHub <ExternalLink size={14} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm">
                LinkedIn <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} SmartAI Hub. All rights reserved.
      </div>
    </footer>
  );
}
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="relative w-32 h-16">
              <Image
                src="/images/logo.png"
                alt="Little Roses Foundation"
                fill
                className="object-contain"
              />
            </Link>
            
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/about" className="text-gray-700 font-bold hover:text-[#257341] transition">
              Về chúng tôi
            </Link>
            <Link href="/project" className="text-gray-700 font-bold hover:text-[#257341] transition">
              Dự án
            </Link>
            <Link href="#" className="text-gray-700 font-bold hover:text-[#257341] transition flex items-center gap-1">
              Minh bạch
              <ShieldCheck className="w-4 h-4 text-[#257341]" />
            </Link>
            <Link href="#" className="text-gray-700 font-bold hover:text-[#257341] transition">
              Tin tức
            </Link>
            <div className="relative group">
              <button className="text-gray-700 font-bold hover:text-[#257341] transition flex items-center gap-1">
                Hướng dẫn
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <Link href="/guide" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-[#257341]">
                    Hướng dẫn tra cứu
                  </Link>
                  <Link href="/donate" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-[#257341]">
                    Hướng dẫn quyên góp
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <Link
            href="/donate"
            className="bg-[linear-gradient(to_right,#05e652_0%,#05e652_100%)] text-black px-8 py-3 rounded-full font-bold hover:bg-none hover:bg-[#1a522e] hover:text-white transition shadow-md"
          >
            Quyên góp ngay
          </Link>
        </div>
      </div>
    </header>
  );
}
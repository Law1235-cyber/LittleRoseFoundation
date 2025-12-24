'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative w-32 h-16">
              <Image
                src="/images/logo.png"
                alt="Little Roses Foundation"
                fill
                className="object-contain"
              />
            </div>
            
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/about" className="text-gray-700 font-bold hover:text-[#257341] transition">
              Về chúng tôi
            </Link>
            <Link href="#" className="text-gray-700 font-bold hover:text-[#257341] transition">
              Dự án
            </Link>
            <Link href="#" className="text-gray-700 font-bold hover:text-[#257341] transition flex items-center gap-1">
              Minh bạch
              <ShieldCheck className="w-4 h-4 text-[#257341]" />
            </Link>
            <Link href="#" className="text-gray-700 font-bold hover:text-[#257341] transition">
              Tin tức
            </Link>
            <Link href="#" className="text-gray-700 font-bold hover:text-[#257341] transition">
              Hướng dẫn
            </Link>
          </nav>

          <Link
            href="#"
            className="bg-[linear-gradient(to_right,#05e652_0%,#05e652_100%)] text-black px-8 py-3 rounded-full font-bold hover:bg-none hover:bg-[#1a522e] hover:text-white transition shadow-md"
          >
            Quyên góp ngay
          </Link>
        </div>
      </div>
    </header>
  );
}
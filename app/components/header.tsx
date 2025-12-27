'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 1. Tạo hàm đóng menu để dùng lại cho gọn
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Logo cũng nên đóng menu nếu người dùng bấm về trang chủ khi đang mở menu */}
            <Link href="/" className="relative w-24 h-12 sm:w-32 sm:h-16" onClick={closeMenu}>
              <Image
                src="/images/logo.png"
                alt="Little Roses Foundation"
                fill
                className="object-contain"
              />
            </Link>
          </div>

          {/* Menu Desktop (Không cần thay đổi gì ở đây vì nó hover) */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
             {/* ... (Code phần desktop giữ nguyên như cũ) ... */}
             {/* Tôi xin phép lược bớt phần Desktop để tập trung vào phần bạn cần sửa */}
             <div className="relative group">
              <button className="text-gray-700 font-bold hover:text-[#257341] transition flex items-center gap-1">
                Về chúng tôi <ChevronDown className="w-4 h-4" />
              </button>
              {/* ...Dropdown content... */}
            </div>
             {/* ...Các mục khác... */}
             <Link href="#" className="text-gray-700 font-bold hover:text-[#257341] transition flex items-center gap-1">
              Minh bạch <ShieldCheck className="w-4 h-4 text-[#257341]" />
            </Link>
             {/* ... */}
          </nav>

          <div className="flex items-center">
            <Link
              href="/donate"
              className="hidden sm:block bg-[linear-gradient(to_right,#05e652_0%,#05e652_100%)] text-black px-4 py-2 sm:px-8 sm:py-3 rounded-full font-bold hover:bg-none hover:bg-[#1a522e] hover:text-white transition shadow-md text-sm sm:text-base whitespace-nowrap"
            >
              Quyên góp ngay
            </Link>
            
            <button
              className="lg:hidden ml-4 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 2. SỬA PHẦN NÀY:
         Thêm prop `onClick={closeMenu}` vào TẤT CẢ các thẻ Link bên dưới 
      */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 border-t border-gray-100">
          <nav className="flex flex-col space-y-4 px-4 py-6 bg-white max-h-[80vh] overflow-y-auto">
            
            <Link 
              href="/about" 
              onClick={closeMenu} // <-- Thêm vào đây
              className="text-gray-700 font-bold hover:text-[#257341] transition text-lg"
            >
              Về chúng tôi
            </Link>

            <Link 
              href="/project" 
              onClick={closeMenu} // <-- Thêm vào đây
              className="text-gray-700 font-bold hover:text-[#257341] transition text-lg"
            >
              Dự án
            </Link>

            <Link 
              href="#" 
              onClick={closeMenu} // <-- Thêm vào đây
              className="text-gray-700 font-bold hover:text-[#257341] transition flex items-center gap-1 text-lg"
            >
              Minh bạch <ShieldCheck className="w-4 h-4 text-[#257341]" />
            </Link>

            <Link 
              href="/news" 
              onClick={closeMenu} // <-- Thêm vào đây
              className="text-gray-700 font-bold hover:text-[#257341] transition text-lg"
            >
              Tin tức & Tài liệu
            </Link>

            <Link 
              href="/guide" 
              onClick={closeMenu} // <-- Thêm vào đây
              className="text-gray-700 font-bold hover:text-[#257341] transition text-lg"
            >
              Hướng dẫn
            </Link>
            
            <Link
              href="/donate"
              onClick={closeMenu} // <-- Thêm vào đây (quan trọng)
              className="sm:hidden bg-[linear-gradient(to_right,#05e652_0%,#05e652_100%)] text-black text-center px-8 py-3 rounded-full font-bold hover:bg-none hover:bg-[#1a522e] hover:text-white transition shadow-md mt-4"
            >
              Quyên góp ngay
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
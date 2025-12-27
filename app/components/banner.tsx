'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

// (Giữ nguyên phần mảng slides của bạn ở đây)
const slides = [
  {
    id: 1,
    src: '/images/banner1.jpg',
    alt: 'Bàn tay nắm chặt - biểu tượng của sự hỗ trợ và yêu thương',
  },
  {
    id: 2,
    src: '/images/banner2.jpg',
    alt: 'Hành trình nhân ái cùng trẻ em khó khăn',
  },
  {
    id: 3,
    src: '/images/banner3.jpg',
    alt: 'Gieo mầm yêu thương cho tương lai',
  },
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    /* THAY ĐỔI CHÍNH Ở ĐÂY: 
      - Giảm min-h trên mobile xuống 650px (thay vì 850px)
      - Giảm height trên PC lớn xuống 700px (thay vì 800px)
    */
    <section className="relative w-full min-h-[650px] md:min-h-[600px] lg:h-[700px] flex flex-col justify-center">
      
      {/* --- 1. SLIDER BACKGROUND (Giữ nguyên) --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay tối hơn một chút để chữ dễ đọc hơn khi ảnh thấp đi */}
            <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
          </div>
        ))}
      </div>

      {/* --- 2. MAIN CONTENT OVERLAY --- */}
      {/* THAY ĐỔI: Giảm padding top/bottom (pt-16 pb-20) để nội dung gọn hơn
      */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 md:px-6 w-full h-full pt-16 pb-20 md:py-0">
        
        {/* Badges - Giảm margin bottom (mb-4) */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 md:mb-6 animate-fade-in-up">
          <span className="bg-white/90 backdrop-blur-sm text-green-700 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold flex items-center justify-center gap-2 shadow-lg">
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
            Hành Trình Nhân Ái
          </span>
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold shadow-lg">
            Tổ chức uy tín 100%
          </span>
        </div>

        {/* Tiêu đề chính - Giảm margin bottom (mb-3) */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-3 md:mb-5 leading-tight tracking-tight drop-shadow-lg">
          Gieo mầm <span className="text-green-400">yêu</span>
          <br className="hidden sm:block" />{' '}
          <span className="sm:hidden"> </span>
          <span className="text-green-400">thương</span>,
          <br />
          gặt hái nụ <span className="text-green-400">cười</span>
        </h1>

        {/* Mô tả - Giảm margin bottom (mb-6) và giới hạn độ rộng chặt hơn */}
        <p className="text-gray-100 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-2xl mb-6 md:mb-8 leading-relaxed drop-shadow-md">
          Chung tay cùng Quỹ Bông Hồng Nhỏ mang lại tương lai tươi sáng hơn cho
          trẻ em khó khăn thông qua giáo dục và y tế.
        </p>

        {/* Nút Quyên góp - Điều chỉnh lại padding nút cho gọn */}
        <a
          href="/quyen-gop"
          className="
            bg-gradient-to-r from-green-500 to-green-600 
            hover:from-green-600 hover:to-green-700 
            text-white font-bold 
            px-8 py-3 md:px-10 md:py-4
            rounded-full 
            text-base md:text-lg font-bold
            shadow-[0_0_20px_rgba(34,197,94,0.5)] 
            transition-all duration-300 transform hover:scale-105 active:scale-95
            mb-4 md:mb-0
          "
        >
          Quyên góp ngay
        </a>
      </div>

      {/* --- 3. STATS BLOCK --- */}
      <div className="
          absolute 
          left-1/2 -translate-x-1/2 
          /* THAY ĐỔI: Đẩy lên cao hơn một chút trên mobile (-bottom-14 thay vì -bottom-[4.5rem]) */
          -bottom-14 md:-bottom-16 
          
          /* Chiều rộng gọn gàng */
          w-[92%] sm:w-auto sm:min-w-[500px] md:min-w-[700px] lg:min-w-[900px]
          
          bg-white/95 backdrop-blur-xl border border-white/20
          rounded-2xl md:rounded-3xl 
          
          /* Giảm padding bên trong hộp thống kê trên mobile */
          px-4 py-4 md:px-10 md:py-8 
          shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] z-30
      ">
        <div className="
          flex flex-row /* Luôn là hàng ngang để tiết kiệm chiều dọc */
          gap-2 md:gap-10 lg:gap-16 
          text-center justify-around items-center 
          divide-x divide-gray-200
        ">
          {/* Các items thống kê - giảm cỡ chữ trên mobile đi 1 chút */}
          <div className="flex-1 px-2">
            <p className="text-xl sm:text-2xl md:text-4xl font-extrabold text-gray-900">10 Tỷ+</p>
            <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm mt-1 font-medium truncate">Quyên góp minh bạch</p>
          </div>

          <div className="flex-1 px-2">
            <p className="text-xl sm:text-2xl md:text-4xl font-extrabold text-gray-900">50+</p>
            <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm mt-1 font-medium truncate">Dự án hoàn thành</p>
          </div>

          <div className="flex-1 px-2">
            <p className="text-xl sm:text-2xl md:text-4xl font-extrabold text-gray-900">10k+</p>
            <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm mt-1 font-medium truncate">Cuộc đời thay đổi</p>
          </div>
        </div>
      </div>

    </section>
  );
}
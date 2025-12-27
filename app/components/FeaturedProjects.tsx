'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Share2 } from 'lucide-react';
import Link from 'next/link';
import projects from '@/app/data/projects.json';

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isMounted, setIsMounted] = useState(false);
  
  // 1. Thêm state để kiểm soát việc tạm dừng khi người dùng xem chi tiết
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      const width = window.innerWidth;
      let newCount = 4;

      if (width < 1024) newCount = 1;
      else if (width < 1280) newCount = 3;
      else newCount = 4;

      setVisibleCount(newCount);

      setCurrentIndex((prev) => {
        const max = Math.max(projects.length - newCount, 0);
        return prev > max ? max : prev;
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(projects.length - visibleCount, 0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // 2. Thêm useEffect xử lý Auto-slide
  useEffect(() => {
    // Nếu chưa mount hoặc đang pause (người dùng đang xem) thì không chạy
    if (!isMounted || isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3000ms = 3 giây

    // Dọn dẹp interval khi component unmount hoặc dependencies thay đổi
    return () => clearInterval(interval);
  }, [nextSlide, isMounted, isPaused]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const progressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100);
  };

  if (!isMounted) return <div className="h-[500px] bg-gray-50"></div>;

  return (
    <section className="pt-16 pb-12 md:pt-24 md:pb-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-14 px-2">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">
            Các dự án trọng điểm
          </h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Mỗi đồng góp dù nhỏ nhất đều tạo nên sự thay đổi to lớn.
          </p>
        </div>

        {/* 3. Thêm sự kiện chuột vào Container chính 
            - onMouseEnter: Khi chuột vào -> setPaused(true) -> Dừng chạy
            - onMouseLeave: Khi chuột ra -> setPaused(false) -> Tiếp tục chạy
        */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsPaused(true)} 
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* NÚT ĐIỀU HƯỚNG PC */}
          {projects.length > visibleCount && (
            <>
              <button
                onClick={prevSlide}
                className="hidden lg:flex absolute -left-4 xl:-left-12 top-1/2 -translate-y-1/2 z-30 
                bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-4 shadow-lg border border-gray-100 
                text-gray-800 hover:text-green-600 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="hidden lg:flex absolute -right-4 xl:-right-12 top-1/2 -translate-y-1/2 z-30 
                bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-4 shadow-lg border border-gray-100 
                text-gray-800 hover:text-green-600 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Wrapper Carousel */}
          <div className="overflow-hidden py-8 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div
              className="flex transition-transform duration-1000 ease-in-out-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 px-2 md:px-3 lg:px-4"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl 
                    transition-all duration-300 h-full flex flex-col overflow-hidden border border-gray-100 group/card
                    mx-auto w-full max-w-[340px] sm:max-w-[500px] lg:max-w-none">
                    
                    {/* Hình ảnh */}
                    <div className="relative h-44 sm:h-64 md:h-auto md:aspect-[18/10] w-full overflow-hidden bg-gray-100">
                      <Image
                        src={project.imageSrc}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 600px, 25vw"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md 
                        text-[10px] md:text-xs font-bold px-2.5 py-1 md:px-3 md:py-1.5 rounded-full shadow-sm text-green-700 uppercase">
                        Đang vận động
                      </div>
                    </div>

                    {/* Nội dung Card */}
                    <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-1">
                      
                      <Link href={`/du-an/${project.id}`} className="group-hover/card:text-green-600 transition-colors">
                        <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem] sm:min-h-[3.5rem] leading-snug">
                          {project.title}
                        </h3>
                      </Link>
                      
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                        {project.description}
                      </p>

                      <div className="mt-auto">
                        <div className="pt-3 sm:pt-4 border-t border-gray-50">
                          {/* Stats */}
                          <div className="mb-3 sm:mb-4 space-y-2">
                            <div className="flex justify-between text-xs sm:text-sm font-semibold">
                              <span className="text-green-600">{formatCurrency(project.raised)}</span>
                              <span className="text-gray-400 font-normal pt-0.5">MT: {formatCurrency(project.goal)}</span>
                            </div>

                            <div className="w-full bg-gray-100 rounded-full h-1.5 sm:h-2 overflow-hidden">
                              <div
                                className="bg-gradient-to-r from-green-500 to-green-400 h-full rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${progressPercentage(project.raised, project.goal)}%` }}
                              />
                            </div>
                            
                            <div className="flex justify-between items-center text-[10px] sm:text-xs text-gray-400">
                               <span>{Math.round(progressPercentage(project.raised, project.goal))}%</span>
                               <span className="flex items-center gap-1">
                                 {project.donors} lượt
                               </span>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-2 md:gap-3">
                            <Link
                              href={`/du-an/${project.id}`}
                              className="flex-1 bg-gray-900 hover:bg-green-600 text-white py-2.5 sm:py-3 px-3 
                              font-semibold text-xs sm:text-sm rounded-lg transition-all duration-300 
                              flex items-center justify-center gap-2 active:scale-95 shadow-sm hover:shadow-md"
                            >
                              Quyên góp
                            </Link>

                            <button
                              className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center 
                              border border-gray-200 rounded-lg hover:border-gray-900 hover:bg-gray-50 
                              text-gray-500 hover:text-gray-900 transition-all active:scale-90"
                            >
                              <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- THANH ĐIỀU KHIỂN DƯỚI CÙNG --- */}
          <div className="flex lg:hidden justify-center items-center mt-2 gap-4 sm:gap-6">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-gray-200 
              bg-white shadow-sm active:scale-90 transition-all text-gray-700 hover:bg-gray-50 active:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-1.5 sm:gap-2">
              {Array.from({ length: Math.ceil(projects.length / visibleCount) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx * visibleCount)}
                  className={`transition-all duration-300 rounded-full h-1.5 sm:h-2 ${
                    Math.floor(currentIndex / visibleCount) === idx 
                      ? 'w-6 sm:w-8 bg-green-600' 
                      : 'w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-gray-200 
              bg-white shadow-sm active:scale-90 transition-all text-gray-700 hover:bg-gray-50 active:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
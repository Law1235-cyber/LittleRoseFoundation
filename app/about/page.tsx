'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // npm i lucide-react

const AboutPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      name: 'Hoàng Nguyễn Thu Thảo',
      position: 'TGĐ Tập đoàn GD Nguyễn Hoàng - Chủ tịch, kiêm Giám đốc Quỹ',
      image: '/images/HoangNguyenThuThao.png', // Thay bằng ảnh thực tế
    },
    {
      name: 'Đỗ Mạnh Cường',
      position: 'Phó TGĐ Tập đoàn GD Nguyễn Hoàng - Phó Chủ tịch Quỹ',
      image: '/images/DoManhCuong.png',
    },
    {
      name: 'Nguyễn Đức Thạch Diễm',
      position: 'TGĐ Ngân hàng TMCP Sài Gòn Thương Tín (Sacombank) - Phó Chủ tịch Quỹ',
      image: '/images/NguyenDucThanhDiem.png',
    },
    {
      name: 'Hoàng Quốc Anh Vũ',
      position: 'Cổ đông sáng lập - Thành viên Quỹ',
      image: '/images/HoangQuocAnhVu.png',
    },
    {
      name: 'Đặng Thế Đức',
      position: 'TGĐ Công ty Luật Indochine Counsel - Thành viên Quỹ',
      image: '/images/DangTheDuc.png',
    },
    
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const visibleMembers = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      visible.push(teamMembers[index]);
    }
    return visible;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <Image
          src="/images/banner4.jpg"
          alt="Về chúng tôi - Quỹ từ thiện Bông hồng nhỏ"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Về chúng tôi</h1>
          <p className="text-lg">
            <Link href="/" className="hover:text-green-300 transition-colors">
              Trang chủ
            </Link> / <span className="text-green-300">Về chúng tôi</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-8 text-gray-800">
        {/* Giới thiệu quỹ */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg leading-relaxed mb-8">
            Quỹ từ thiện Bông hồng nhỏ (Little Roses Foundation) là quỹ từ thiện không vì mục tiêu lợi nhuận, hướng đến các hoạt động thiện nguyện đa dạng phục vụ cộng đồng. Được thúc đẩy bởi truyền thống gia đình và tấm lòng người Mẹ, NHG là thành viên sáng lập chủ chốt của Quỹ.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            Quỹ chính thức được thành lập vào ngày 01/11/2021 theo quyết định số 1151/QĐ-BNV và được cấp phép hoạt động ngày 22/04/2022 theo quyết định số 316/QĐ-BNV.
          </p>

          <p className="text-lg leading-relaxed mb-12">
            Quỹ phục vụ chủ yếu trên các lĩnh vực sức khỏe – giáo dục, được cấp phép bởi Bộ Nội Vụ để hoạt động trên phạm vi toàn quốc và đón nhận sự trợ giúp của quốc tế.
          </p>
        </div>

        {/* Tầm nhìn, Sứ mệnh, Giá trị cốt lõi (grid đơn giản) */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tầm nhìn */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Tầm nhìn</h2>
              <p className="text-lg leading-relaxed">
                Quỹ từ thiện Bông hồng nhỏ là quỹ từ thiện của nền văn minh tình thương và các giá trị nhân bản toàn diện dành cho tất cả những ai đang trong hoàn cảnh nghèo khó cả về vật chất cũng như tinh thần.
              </p>
            </div>

            {/* Sứ mệnh */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Sứ mệnh</h2>
              <p className="text-lg leading-relaxed">
                Quỹ từ thiện Bông hồng nhỏ giúp những người đang lâm cảnh ngặt nghèo do hoàn cảnh khách quan vượt qua nghịch cảnh, cải thiện đời sống vật chất và tinh thần các nhóm xã hội; tạo cơ hội để mọi người không phân biệt thu nhập hay số lượng tài sản sở hữu đều có thể chia sẻ giá trị bản thân cho sự phát triển cộng đồng.
              </p>
            </div>

            {/* Giá trị cốt lõi */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Giá trị cốt lõi</h2>
              <p className="text-lg leading-relaxed">
                Quỹ từ thiện Bông hồng nhỏ chọn và trung thành trong hoạt động theo các giá trị: <strong>Yêu thương – Chính trực – Tôn trọng – Tận tâm</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Đội ngũ sáng lập - Carousel */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Đội ngũ sáng lập</h2>

          <div className="relative">
            {/* Nút trái (desktop) */}
            <button
              onClick={prevSlide}
              className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition hidden md:flex items-center justify-center"
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8 text-gray-800" />
            </button>

            {/* Nút phải (desktop) */}
            <button
              onClick={nextSlide}
              className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition hidden md:flex items-center justify-center"
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8 text-gray-800" />
            </button>

            {/* Grid hiển thị thành viên */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 md:px-0">
              {visibleMembers().map((member, idx) => (
                <div key={idx} className="text-center flex flex-col items-center">
                  <div className="relative w-64 h-64 mb-6 overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600 mt-2 text-center max-w-xs">{member.position}</p>
                  
                </div>
              ))}
            </div>

            {/* Nút điều hướng trên mobile */}
            <div className="md:hidden flex justify-center mt-10 space-x-8">
              <button onClick={prevSlide} className="bg-gray-200 rounded-full p-3">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="bg-gray-200 rounded-full p-3">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            
          </div>
        </div>
           <div className="bg-gray-200 py-16 px-8 mt-10">
              <div className="max-w-4xl mx-auto text-center">
               <h2 className="text-4xl font-bold text-gray-800 mb-8">Hợp tác với Little Rose Foundation</h2>
    
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Little Rose Foundation cung cấp nền tảng cho các tổ chức có chức năng vận động và tiếp nhận tài trợ thực hiện việc khởi tạo các dự án gây quỹ và kết nối các Doanh nghiệp thực hiện các chương trình Trách nhiệm xã hội (CSR).
                 </p>
    
                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                   Nếu bạn đại diện một tổ chức được cấp phép hoạt động, như: Quỹ từ thiện; Quỹ xã hội; Tổ chức xã hội nghề nghiệp;... hay các Doanh nghiệp có mong muốn hợp tác triển khai CSR, ESG, vui lòng liên hệ với GiveNow để được hỗ trợ.
                 </p>
    
                <a
                href="https://littlerosesfoundation.org/" // Thay bằng link liên hệ hoặc form thực tế nếu có
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white font-semibold py-4 px-10  hover:bg-green-700 transition duration-300 shadow-lg text-lg uppercase tracking-wider"
                >
                 Liên hệ Little Rose Foundation
               </a>
              </div>
           </div>

      </div>
    </div>
  );
};

export default AboutPage;
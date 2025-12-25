'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, HelpCircle, ChevronRight, Phone, Mail, Globe, ChevronDown } from 'lucide-react';

export default function FinancialInfoLookupGuide() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Header Navigation */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-green-600">Trang chủ</Link>
              <span className="mx-2">/</span>
             
              <span className="text-gray-900">Chứng kiến nguồn tiền</span>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>HỖ TRỢ TRA CỨU</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Hướng dẫn Tra cứu
            <br />
            Thông tin Tài chính
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-700 max-w-4xl mb-12 leading-relaxed">
            Chúng tôi cung cấp công cụ minh bạch để bạn có thể dễ dàng theo dõi khoản đóng góp của mình
            và xem chi tiết cách nguồn tiền được sử dụng cho cộng đồng.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mb-16">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Nhập Từ khóa Mã dự án, Tên dự án..."
                className="w-full pl-12 pr-6 py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            </div>

            <button className="px-8 py-4 bg-green-600 text-white font-medium text-lg rounded-full hover:bg-green-700 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              Tìm kiếm dự án
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Steps Guide */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Truy cập trang Sao Kê</h3>
                  <p className="text-gray-700 mb-3">
                    Vào website chính thức{' '}
                    <a href="#" className="text-green-600 font-medium hover:underline">
                      https://saoke.example.com
                    </a>
                  </p>
                  <p className="text-gray-600 text-sm">
                    • Truy cập nhanh từ menu Sao kê trên trang chủ
                    <br />• Hoặc click vào banner Xem sao kê minh bạch trên trang chủ
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sử dụng bộ lọc tìm kiếm</h3>
                  <p className="text-gray-700 mb-3">
                    Tại giao diện Sao Kê, bạn có thể lọc theo nhiều tiêu chí:
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Mã dự án hoặc Tên dự án (tìm nhanh)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Theo thời gian (từ ngày - đến ngày)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Loại giao dịch (thu/chi, chuyển khoản, tiền mặt...)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Xác thực & tải chứng từ</h3>
                  <p className="text-gray-700 mb-3">
                    Khi tìm thấy giao dịch bạn cần xem chi tiết, hệ thống sẽ hiển thị:
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Thông tin chuyển khoản đầy đủ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Chứng từ gốc (ảnh chụp, biên lai, ủy nhiệm chi...)</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    <a href="#" className="text-green-600 font-medium hover:underline flex items-center gap-1">
                      Xem ví dụ về chứng từ hợp lệ
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Screenshot Illustration */}
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full">
                <div className="bg-gray-100 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-500 text-sm">saoke.example.com</span>
                  </div>
                  <div className="bg-white rounded-lg shadow p-4 space-y-3">
                    <input
                      type="text"
                      placeholder="Tìm kiếm theo mã dự án, tên dự án..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    />
                    <div className="flex gap-3">
                      <input
                        type="date"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg"
                      />
                      <input
                        type="date"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium">
                      Tìm kiếm
                    </button>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500">
                  Giao diện trang Sao Kê thực tế
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Info Boxes */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Left Box */}
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Lưu ý quan trọng</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span>
                    Tất cả giao dịch đều được cập nhật trong vòng 24h sau khi nhận được tiền
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span>
                    Mọi giao dịch trên 5 triệu đồng đều có chứng từ gốc kèm theo
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span>
                    Chúng tôi cam kết minh bạch 100% và chịu trách nhiệm trước pháp luật
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Box */}
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Bạn cần hỗ trợ tra cứu?</h3>
              <p className="text-gray-700 mb-6">
                Nếu bạn gặp khó khăn trong quá trình tra cứu hoặc cần hỗ trợ xác minh thông tin,
                vui lòng liên hệ với chúng tôi:
              </p>
              <div className="space-y-4">
                <a href="tel:19001234" className="flex items-center gap-3 text-green-700 font-medium">
                  <Phone className="w-5 h-5" />
                  Hotline: 1900 1234
                </a>
                <a href="mailto:hotro@congty.org.vn" className="flex items-center gap-3 text-green-700 font-medium">
                  <Mail className="w-5 h-5" />
                  Email: hotro@congty.org.vn
                </a>
                <a href="#" className="flex items-center gap-3 text-green-700 font-medium">
                  <Globe className="w-5 h-5" />
                  Website: www.congty.org.vn
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="border-t pt-12">
            <h2 className="text-2xl font-bold text-center mb-8">Câu hỏi thường gặp</h2>
            <p className='text-center mb-8'>Giải đáp các thắc mắc về quy trình minh bạch của chúng tôi</p>
            <div className="space-y-4 max-w-4xl mx-auto">
              {[
                {
                  question: 'Quý vị có phải trả phí vận hành nào 100% tiền quyên góp đi đâu đến đấy?',
                  answer: 'Quỹ Bông Hồng Nhỏ cam kết 100% số tiền quyên góp từ cộng đồng sẽ được chuyển trực tiếp đến các hoàn cảnh khó khăn hoặc dự án. Mọi chi phí vận hành (nhân sự, quản lý, marketing...) đều được tài trợ riêng bởi các thành viên sáng lập, không trích từ tiền quyên góp của bạn.'
                },
                {
                  question: 'Làm sao tôi biết tiền của mình đã đến đúng người?',
                  answer: 'Chúng tôi thực hiện quy trình minh bạch 3 bước: 1. Công khai danh sách đóng góp. 2. Cập nhật tiến độ và hình ảnh trao tặng thực tế. 3. Cung cấp báo cáo tài chính và chứng từ chi tiêu cho từng dự án. Bạn có thể tra cứu mọi thông tin này trên trang Minh bạch.'
                },
                {
                  question: 'Ai là người kiểm toán cho quỹ?',
                  answer: 'Quỹ Bông Hồng Nhỏ được kiểm toán định kỳ hàng năm bởi các đơn vị kiểm toán uy tín được cấp phép tại Việt Nam. Báo cáo kiểm toán được công khai trên website để mọi nhà hảo tâm đều có thể theo dõi.'
                }
              ].map((item, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl shadow-md cursor-pointer group"
                >
                  <summary className="px-6 py-5 flex items-center justify-between font-bold text-gray-800 list-none [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-5 text-gray-600">
                    <p>
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
'use client';

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Cột trái: Tiêu đề + mô tả */}
          <div>
            {/* Tag nhỏ */}
            <span className="inline-block bg-green-100 text-green-700 px-6 py-2 rounded-full text-sm font-medium mb-6">
              VỀ CHÚNG TÔI
            </span>

            {/* Tiêu đề chính */}
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Sứ mệnh <span className="text-green-600">kết nối</span>,
              <br />
              Lan tỏa <span className="text-green-600">yêu thương</span>
            </h2>

            {/* Mô tả */}
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Quỹ Bông Hồng Nhỏ cam kết kiến tạo những thay đổi bền vững cho cộng đồng. Với giá trị cốt lõi là sự minh bạch và tận tâm, chúng tôi không ngừng nỗ lực để mang lại tương lai tươi sáng hơn cho trẻ em khó khăn trên khắp Việt Nam.
            </p>

            {/* Nút Tìm hiểu thêm */}
            <a
              href="/ve-chung-toi"
              className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition shadow-lg"
            >
              Tìm hiểu thêm
              <ChevronRight className="w-6 h-6 ml-2" />
            </a>
          </div>

          {/* Cột phải: 4 card giá trị */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1: Minh bạch 100% */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="w-16 h-16 mb-4">
                <Image
                  src="https://uxwing.com/wp-content/themes/uxwing/download/health-sickness-organs/eye-icon.svg" // Eye icon minh bạch
                  alt="Minh bạch"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Minh bạch 100%</h3>
              <p className="text-gray-600 text-sm">
                Mọi khoản đóng góp và chi tiêu đều được công khai minh bạch, kiểm toán định kỳ.
              </p>
            </div>

            {/* Card 2: Tận tâm phục vụ */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="w-16 h-16 mb-4">
                <Image
                  src="https://static.vecteezy.com/system/resources/thumbnails/056/780/669/small_2x/hand-holding-people-support-and-care-symbol-vector.jpg" // Hands caring icon
                  alt="Tận tâm"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tận tâm phục vụ</h3>
              <p className="text-gray-600 text-sm">
                Đội ngũ tình nguyện viên nhiệt huyết, làm việc với tất cả trái tim vì cộng đồng.
              </p>
            </div>

            {/* Card 3: Giải pháp thông minh */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="w-16 h-16 mb-4">
                <Image
                  src="https://www.shutterstock.com/image-vector/smart-solution-inspiration-knowledge-light-600nw-2368850617.jpg" // Brain lightbulb icon
                  alt="Giải pháp thông minh"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Giải pháp thông minh</h3>
              <p className="text-gray-600 text-sm">
                Áp dụng công nghệ để tối ưu hóa nguồn lực và gia tăng hiệu quả dự án.
              </p>
            </div>

            {/* Card 4: Hợp tác mở rộng */}
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="w-16 h-16 mb-4">
                <Image
                  src="https://www.vhv.rs/dpng/d/437-4376880_icon-hand-shake-transparent-background-partnership-icon-hd.png" // Handshake icon
                  alt="Hợp tác"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hợp tác mở rộng</h3>
              <p className="text-gray-600 text-sm">
                Kết nối các tổ chức, doanh nghiệp để cùng tạo ra tác động lớn hơn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
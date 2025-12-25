'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import projectsData from '@/app/data/projects.json'; // Đường dẫn đến file JSON của bạn

interface Project {
  id: number;
  title: string;
  description: string;
  raised: number;
  goal: number;
  donors: number;
  likes: number;
  imageSrc: string;
  category: string;
  province: string;
  status: string;
  keywords: string;
}

const projects: Project[] = projectsData;

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

const calculateProgress = (raised: number, goal: number): number => {
  return Math.round((raised / goal) * 100);
};

export default function ProjectDetailPage() {
  const params = useParams();
  const id = parseInt(params.id as string);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-2xl text-gray-700">Không tìm thấy dự án</p>
      </div>
    );
  }

  const progress = calculateProgress(project.raised, project.goal);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header - Giả lập GiveNow header */}
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-blue-600">GiveNow</h1>
            <nav className="hidden md:flex gap-6 text-gray-700">
              <Link href="/" className="hover:text-blue-600">Trang chủ</Link>
              <Link href="/du-an" className="hover:text-blue-600">Dự án</Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-4 py-12">
          {/* Category & Title */}
          <div className="mb-8">
            <Link href={`/danh-muc/${project.category.toLowerCase().replace(/\s/g, '-')}`} className="text-blue-600 hover:underline">
              [{project.category}]
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-700">{project.donors} lượt ủng hộ</p>
          </div>

          {/* Progress Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 text-center">
            <p className="text-lg text-gray-600 mb-2">Mục tiêu dự án {formatCurrency(project.goal)}</p>
            <p className="text-3xl font-bold text-green-600 mb-6">Đã đạt được {formatCurrency(project.raised)}</p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-8 mb-4 overflow-hidden">
              <div
                className="bg-green-500 h-full rounded-full transition-all duration-1000"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-4xl font-bold text-green-700">{progress}%</p>

            {/* Donation Form */}
            <div className="mt-10 max-w-md mx-auto">
              <input
                type="number"
                placeholder="Số tiền tối thiểu là đ"
                className="w-full px-6 py-4 text-xl border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
              />
              <input
                type="number"
                placeholder="Số tiền tối đa là đ"
                className="w-full px-6 py-4 text-xl border border-gray-300 rounded-lg mb-6 focus:outline-none focus:border-blue-500"
              />
              <button className="w-full bg-blue-600 text-white font-bold text-2xl py-5 rounded-lg hover:bg-blue-700 transition-all">
                Ủng hộ ngay
              </button>
            </div>
          </div>

          {/* Project Description */}
          <section className="bg-white rounded-2xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Về dự án này</h2>
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>

            {/* Thông tin chuyển khoản (mẫu chung) */}
            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <p className="text-gray-800">
                <strong>Thông tin chuyển khoản:</strong> Toàn bộ số tiền quyên góp sẽ tự động chuyển thẳng tới tổ chức thực hiện (không qua GiveNow). Thông tin cập nhật sẽ được đăng tải tại mục Báo cáo của dự án.
              </p>
            </div>
          </section>

          {/* Organizer Info */}
          <section className="bg-white rounded-2xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Thông tin tổ chức gây quỹ</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Tổ chức hoạt động theo Nghị định 93/2019/NĐ-CP, hỗ trợ các hoàn cảnh khó khăn, trẻ em, giáo dục và phát triển cộng đồng.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li><strong>Khu vực:</strong> {project.province}</li>
              <li><strong>Trạng thái:</strong> {project.status}</li>
            </ul>
          </section>

          {/* Donor List (mock data) */}
          <section className="bg-white rounded-2xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Người ủng hộ ({project.donors})</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b">
                  <tr>
                    <th className="py-3">Người ủng hộ</th>
                    <th className="py-3">Số tiền</th>
                    <th className="py-3">Thời gian</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4">Nhà hảo tâm ẩn danh</td>
                    <td className="py-4">100.000 đ</td>
                    <td className="py-4 text-gray-500">25/12/2025</td>
                  </tr>
                  {/* Thêm vài dòng mock */}
                  <tr className="border-b">
                    <td className="py-4">Nguyễn Văn A</td>
                    <td className="py-4">500.000 đ</td>
                    <td className="py-4 text-gray-500">24/12/2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Pagination mock */}
            <div className="mt-6 flex justify-center gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded">1</button>
              <button className="px-4 py-2 hover:bg-gray-100 rounded">2</button>
              <button className="px-4 py-2 hover:bg-gray-100 rounded">3</button>
              <span className="px-4 py-2">...</span>
              <button className="px-4 py-2 hover:bg-gray-100 rounded flex items-center">
                Tiếp theo →
              </button>
            </div>
          </section>

          {/* Related Projects */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">Các dự án khác</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.filter(p => p.id !== project.id).slice(0, 3).map((related) => (
                <Link href={`/du-an/${related.id}`} key={related.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{related.title}</h3>
                    <p className="text-green-600 font-semibold">{calculateProgress(related.raised, related.goal)}%</p>
                    <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: `${calculateProgress(related.raised, related.goal)}%` }} />
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {formatCurrency(related.raised)} / {formatCurrency(related.goal)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-lg mb-4">Nền tảng gây quỹ cộng đồng trực tuyến tiện lợi, tin cậy và minh bạch.</p>
            <p>Email: support@givenow.vn</p>
            <p>Địa chỉ: Số 09, ngõ 04, phố Duy Tân, Cầu Giấy, Hà Nội.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
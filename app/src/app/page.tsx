import Image from "next/image";
// Membuat website portfolio sederhana dengan Next.js 14 dan Tailwind CSS
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Halo, Saya Adalah Seorang Frontend Developer
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Saya memiliki pengalaman dalam mengembangkan aplikasi web menggunakan Next.js dan Tailwind CSS.
      </p>
      <div className="flex space-x-4">
        <a
          href="#"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Lihat Proyek Saya
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          Hubungi Saya
        </a>
      </div>
    </div>
  );
}

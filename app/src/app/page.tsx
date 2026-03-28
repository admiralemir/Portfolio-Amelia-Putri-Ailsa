import Image from "next/image";
// Membuat website portfolio sederhana dengan Next.js 14 dan Tailwind CSS
// Buatkan dengan konsep wanita dengan menggabungkan warna pink dan coklat muda, serta menggunakan font yang elegan dan feminin. Sertakan juga gambar profil yang menarik dan beberapa proyek yang pernah dikerjakan.
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full border-4 border-pink-300"
        />
        <h1 className="text-4xl font-bold text-pink-500">Jane Doe</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Web Developer & Designer
        </p>
      </div>
      <div className="w-full max-w-4xl p-8">
        <h2 className="text-2xl font-semibold text-pink-500 mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-pink-500 mb-2">Project One</h3>
            <p className="text-gray-700 dark:text-gray-300">
              A responsive e-commerce website built with Next.js and Tailwind CSS.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-pink-500 mb-2">Project Two</h3>
            <p className="text-gray-700 dark:text-gray-300">
              A personal blog platform with a clean and elegant design.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-pink-500 mb-2">Project Three</h3>
            <p className="text-gray-700 dark:text-gray-300">
              A portfolio website showcasing various design and development projects.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-pink-500 mb-2">Project Four</h3>
            <p className="text-gray-700 dark:text-gray-300">
              A mobile app for managing personal finances with an intuitive interface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

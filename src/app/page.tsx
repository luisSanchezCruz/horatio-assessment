import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/horatio-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">
            <p className="mb-5">
              <i className="fa fa-cube" style={{fontSize: 60}}  aria-hidden="true"></i>
            </p>
            Horatio Assessment
          </h1>
          <p className="text-xl mb-8">Luis Sanchez</p>
          <Link
            href="/what-is-stopping-you"
            className="px-8 py-4 bg-blue-500 hover:bg-blue-700 transition-colors duration-300 font-semibold rounded-full"
          >
            What is stopping you?
          </Link>
        </div>
      </div>
    </>
  );
}

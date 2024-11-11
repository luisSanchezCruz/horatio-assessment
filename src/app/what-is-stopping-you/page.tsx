import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "What is stopping you? | London 2024 | Elevate CX",
  description:
    "Uncover insights from 'What is Stopping You?' – an inspiring Elevate CX 2024 session featuring a short film and strategies to achieve your goals.",
};

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-100">
        <section className="w-full max-w-4xl px-5 py-10 text-center bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
            What is stopping you?
          </h1>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">Angel Funes</p>
          <h2 className="mt-8 text-2xl font-semibold text-gray-700">
            Elevate CX | London 2024
          </h2>
          <div className="mt-4 w-full h-[500px] aspect-w-16 aspect-h-9 bg-gray-300 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/PC_1t7lNU9c?si=W-2dy5D0IEMWM1FG"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </section>
        <section className="w-full max-w-4xl px-5 py-10 mt-10 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800">
                Behind “Truffle Pig”
              </h3>
              <p className="mt-4 mb-4 text-gray-600">
                Read the story behind Truffle Pig, and how a $50 budget + iPhone
                made it possible to produce from idea to distribution in ~1
                week.
              </p>
              <a
                href="#"
                className="mt-6 text-blue-600 hover:underline font-semibold"
              >
                Read More
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                width={350}
                height={350}
                src="/images/right-side.png"
                alt="right image"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
        <section className="w-full max-w-4xl px-5 py-10 mt-10 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/2 flex justify-center">
              <Image
                width={350}
                height={350}
                src="/images/left-side.png"
                alt="left side image"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800">
                Presentation
              </h3>
              <p className="mt-4 mb-4 text-gray-600">
                Get the slides to my presentation - yes, the one you saw in the
                Elevate CX London 2024 edition.
              </p>
              <a
                href="#"
                className="mt-6 text-blue-600 hover:underline font-semibold"
              >
                Download Now
              </a>
            </div>
          </div>
        </section>
        <section className="w-full max-w-4xl px-5 py-10 mt-10 bg-white rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-gray-800">
            Sponsored by Horatio
          </h3>

          <p className="mt-2 text-lg text-gray-600">
            Claim your code now for two free months of access to Mentors CX!
          </p>

          <div className="mt-6 p-4 bg-gray-100 rounded-lg text-gray-800 text-xl font-semibold tracking-widest">
            HORATIOXELEVATE100 //dif styling
          </div>
          <a
            href="#"
            className="mt-6 inline-block text-blue-600 hover:underline font-semibold text-lg"
          >
            Redeem Now
          </a>
        </section>
        <section className="mt-6">
          <div className="mt-6 flex justify-center">
            <Image
              width={500}
              height={250}
              src="/images/horatio-img.png"
              alt="horatio image"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>
      </div>
    </>
  );
}

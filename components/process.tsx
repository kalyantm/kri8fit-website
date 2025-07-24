import Image from "next/image"
import MockupImage02 from "@/public/images/aviva-1.png"
import MockupImage03 from "@/public/images/aviva-2.png"
import MockupImage04 from "@/public/images/aviva-3.png"
import IphoneMockup from "@/public/images/iphone-mockup.png"
import ModalVideoIphone from "./modal-video-iphone"

export default function Process() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4">
              Meet Aviva, your AI fitness twin
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Built like ChatGPT. Trained for your gains. Ask anything, from
              progress insights to what you should train next. Aviva uses your
              data to give you clear, personalized answers.
            </p>
          </div>

          {/* Glow illustration */}
          <svg
            className="absolute left-1/2 transform -translate-x-1/2 mt-20 lg:mt-40 pointer-events-none -z-1 dark:opacity-20 hidden md:block"
            aria-hidden="true"
            width={854}
            height="509"
            viewBox="0 0 854 509"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient
                cx="50%"
                cy="50%"
                fx="50%"
                fy="50%"
                r="39.386%"
                id="iphonesill__a"
              >
                <stop stopColor="#667EEA" offset="0%" />
                <stop stopColor="#667EEA" stopOpacity="0" offset="100%" />
              </radialGradient>
              <radialGradient
                cx="50%"
                cy="50%"
                fx="50%"
                fy="50%"
                r="39.386%"
                id="iphonesill__b"
              >
                <stop stopColor="#9F7AEA" offset="0%" />
                <stop stopColor="#9F7AEA" stopOpacity="0" offset="100%" />
              </radialGradient>
            </defs>
            <g transform="translate(-64 -64)" fill="none" fillRule="evenodd">
              <circle
                fillOpacity=".64"
                fill="url(#iphonesill__a)"
                cx="300"
                cy="300"
                r="300"
              />
              <circle
                fillOpacity=".72"
                fill="url(#iphonesill__b)"
                cx="729"
                cy="384"
                r="240"
              />
            </g>
          </svg>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-12 md:gap-x-6 lg:gap-x-12 md:grid-cols-3 items-start md:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center">
              {/* Line connecting (1) and (2) */}
              <div
                aria-hidden="true"
                className="absolute h-px opacity-50 bg-linear-to-r from-white via-[#5E5EE7] to-white dark:from-gray-900 dark:via-[#5E5EE7] dark:to-gray-900 hidden md:block"
                style={{
                  width: "calc(100% - 48px)",
                  left: "calc(50% + 48px)",
                  top: "24px",
                }}
              >
                <div className="absolute inset-0 border-t border-dashed border-white dark:border-gray-900"></div>
              </div>
              {/* Number */}
              <div className="w-12 h-12 rounded-full bg-[#5E5EE7] dark:bg-[#5E5EE7] flex justify-center items-center text-white font-medium mb-8 lg:mb-12">
                1
              </div>
              {/* Mobile mockup */}
              <div
                className="md:col-span-5 lg:col-span-5 text-center md:text-right"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <ModalVideoIphone
                  thumb={MockupImage02}
                  imgSrc={MockupImage02}
                  thumbWidth={290}
                  thumbHeight={624}
                  thumbAlt="Modal video thumbnail"
                  video="/videos/video.mp4"
                  videoWidth={1920}
                  videoHeight={1080}
                />
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center">
              {/* Line connecting (2) and (3) */}
              <div
                aria-hidden="true"
                className="absolute h-px opacity-50 bg-linear-to-r from-white via-[#5E5EE7] to-white dark:from-gray-900 dark:via-[#5E5EE7] dark:to-gray-900 hidden md:block"
                style={{
                  width: "calc(100% - 48px)",
                  left: "calc(50% + 48px)",
                  top: "24px",
                }}
              >
                <div className="absolute inset-0 border-t border-dashed border-white dark:border-gray-900"></div>
              </div>
              {/* Number */}
              <div className="w-12 h-12 rounded-full bg-[#5E5EE7] dark:bg-[#5E5EE7] flex justify-center items-center text-white font-medium mb-8 lg:mb-12">
                2
              </div>
              {/* Mobile mockup */}
              <div
                className="md:col-span-5 lg:col-span-5 text-center md:text-right"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <ModalVideoIphone
                  thumb={MockupImage03}
                  imgSrc={MockupImage03}
                  thumbWidth={290}
                  thumbHeight={624}
                  thumbAlt="Modal video thumbnail"
                  video="/videos/video.mp4"
                  videoWidth={1920}
                  videoHeight={1080}
                />
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#5E5EE7] dark:bg-[#5E5EE7] flex justify-center items-center text-white font-medium mb-8 lg:mb-12">
                3
              </div>
              <div
                className="md:col-span-5 lg:col-span-5 text-center md:text-right"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <ModalVideoIphone
                  thumb={MockupImage04}
                  imgSrc={MockupImage04}
                  thumbWidth={290}
                  thumbHeight={624}
                  thumbAlt="Modal video thumbnail"
                  video="/videos/video.mp4"
                  videoWidth={1920}
                  videoHeight={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

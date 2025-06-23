"use client"
import { useState } from "react"
import VideoThumb from "@/public/images/video-thumb.jpg"
import ModalVideoIphone from "./modal-video-iphone"

export default function Tabs() {
  const [category, setCategory] = useState<string>("1")
  const VIDEO_MAP = {
    "1": "/videos/save-exercise.mp4",
    "2": "/videos/save-workout.mp4",
    "3": "/videos/trends.mp4",
    "4": "/videos/exercise-trends.mp4",
  }
  const IMAGE_MAP = {
    "1": "/images/save-exercises-image.png",
    "2": "/images/save-workout-image.png",
    "3": "/images/view-muscle-group-trends-image.png",
    "4": "/images/view-exercise-trends-image.png",
  }

  return (
    <section className="relative border-t border-transparent dark:border-gray-800">
      {/* Background gradient */}
      <div
        className="absolute inset-0 h-128 dark:opacity-25 bg-linear-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      {/* End background gradient */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-red-hat-display mb-4">
              Turn your dream physique into reality
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Progress doesn’t happen by chance — it happens when you show up,
              track it, and learn from it. kri8.fit gives you the tools,
              insights, and AI insights to keep moving forward towards that
              dream physique.
            </p>
          </div>

          {/* Section content */}
          <div>
            <div className="flex flex-col items-center gap-16">
              {/* Category buttons */}
              <div className="flex gap-4 flex-wrap justify-center">
                <button
                  className={`font-medium px-4 py-3 shadow-sm transition duration-150 ease-in-out rounded-2xl flex items-center justify-center w-48 ${
                    category === "1"
                      ? "bg-[#85f193] hover:bg-[#85f193] dark:bg-[#85f193] dark:hover:bg-[#85f193]"
                      : "bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setCategory("1")}
                >
                  <span
                    className={
                      category === "1"
                        ? "text-gray-600 dark:text-teal-400"
                        : "text-gray-600 dark:text-gray-300"
                    }
                  >
                    Save exercises
                  </span>
                </button>
                <button
                  className={`font-medium px-4 py-3 shadow-sm transition duration-150 ease-in-out rounded-2xl flex items-center justify-center w-48 ${
                    category === "2"
                      ? "bg-[#85f193] hover:bg-[#85f193] dark:bg-[#85f193] dark:hover:bg-[#85f193]"
                      : "bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setCategory("2")}
                >
                  <span
                    className={
                      category === "2"
                        ? "text-gray-600 dark:text-teal-400"
                        : "text-gray-600 dark:text-gray-300"
                    }
                  >
                    Save workouts
                  </span>
                </button>
                <button
                  className={`font-medium px-4 py-3 shadow-sm transition duration-150 ease-in-out rounded-2xl flex items-center justify-center w-48 ${
                    category === "3"
                      ? "bg-[#85f193] hover:bg-[#85f193] dark:bg-[#85f193] dark:hover:bg-[#85f193]"
                      : "bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setCategory("3")}
                >
                  <span
                    className={
                      category === "3"
                        ? "text-gray-600 dark:text-teal-400"
                        : "text-gray-600 dark:text-gray-300"
                    }
                  >
                    Muscle group trends
                  </span>
                </button>
                <button
                  className={`font-medium px-4 py-3 shadow-sm transition duration-150 ease-in-out rounded-2xl flex items-center justify-center w-48 ${
                    category === "4"
                      ? "bg-[#85f193] hover:bg-[#85f193] dark:bg-[#85f193] dark:hover:bg-[#85f193]"
                      : "bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setCategory("4")}
                >
                  <span
                    className={
                      category === "4"
                        ? "text-gray-600 dark:text-teal-400"
                        : "text-gray-600 dark:text-gray-300"
                    }
                  >
                    Exercise trends
                  </span>
                </button>
              </div>

              {/* Videos */}
              <div className="flex items-center justify-center">
                <ModalVideoIphone
                  imgSrc={IMAGE_MAP[category as keyof typeof IMAGE_MAP] as any}
                  thumb={VideoThumb}
                  thumbWidth={290}
                  thumbHeight={624}
                  thumbAlt="Modal video thumbnail"
                  video={VIDEO_MAP[category as keyof typeof VIDEO_MAP]}
                  videoWidth={393}
                  videoHeight={852}
                  showPlayButton={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800 -mt-px">
          {/* Footer illustration */}
          <div className="pointer-events-none -z-1" aria-hidden="true">
            <svg
              className="absolute bottom-0 left-0 transform -translate-x-1/2 ml-24 dark:opacity-40"
              width="800"
              height="264"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="400"
                cy="400"
                r="400"
                fill="url(#footerglow_paint0_radial)"
                fillOpacity=".4"
              />
              <defs>
                <radialGradient
                  id="footerglow_paint0_radial"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="rotate(90 0 400) scale(315.089)"
                >
                  <stop stopColor="#3ABAB4" />
                  <stop offset="1" stopColor="#3ABAB4" stopOpacity=".01" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Top area: Blocks */}
          {/* <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12"> */}
          {/* 1st block */}
          {/* <div className="md:col-span-2 lg:col-span-3"> */}
          {/* Logo */}
          {/* <Link className="inline-block" href="/" aria-label="Cruip">
                <Image
                  src="/images/kri8fit-logo.png"
                  alt="fit.ly"
                  width={200}
                  height={100}
                />
              </Link> */}
          {/* </div> */}

          {/* 2nd, 3rd, 4th and 5th blocks */}
          {/* <div className="md:col-span-10 lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8"> */}
          {/* 2nd block */}
          {/* <div className="text-sm"> */}
          {/* <h6 className="font-medium uppercase mb-2">Products</h6>
                <ul>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Drag And Drop
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Visual Studio X
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Easy Content
                    </a>
                  </li>
                </ul> */}
          {/* </div> */}

          {/* 3rd block */}
          {/* <div className="text-sm">
                <h6 className="font-medium uppercase mb-2">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Industries and tools
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Use cases
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Online events
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Nostrud exercitation
                    </a>
                  </li>
                </ul>
              </div> */}

          {/* 4th block */}
          {/* <div className="text-sm">
                <h6 className="font-medium uppercase mb-2">Company</h6>
                <ul>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Diversity & inclusion
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="#0"
                    >
                      About us
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Press
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Customer stories
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Online communities
                    </a>
                  </li>
                </ul>
              </div> */}

          {/* 5th block */}
          {/* <div className="text-sm">
                <h6 className="font-medium uppercase mb-2">Support</h6>
                <ul>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Documentation
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Tutorials & guides
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Webinars
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Open-source
                    </a>
                  </li>
                </ul>
              </div> */}
          {/* </div> */}
          {/* </div> */}

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-2 md:ml-4 md:mb-0">
              <li>
                <a
                  className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                  href="#0"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </a>
              </li>
              <li className="ml-4">
                <a
                  className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                  href="#0"
                  aria-label="Github"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </a>
              </li>
              <li className="ml-4">
                <a
                  className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                  href="#0"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </a>
              </li>
              <li className="ml-4">
                <a
                  className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                  href="#0"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </a>
              </li>
              <li className="ml-4">
                <a
                  className="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out"
                  href="#0"
                  aria-label="Linkedin"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </a>
              </li>
            </ul>

            {/* Middle links */}
            <div className="text-sm md:order-1 text-gray-700 mb-2 md:mb-0">
              <a
                className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                href="#0"
              >
                Terms
              </a>{" "}
              ·{" "}
              <a
                className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"
                href="#0"
              >
                Privacy Policy
              </a>
            </div>

            {/* Copyrights note */}
            <div className="text-gray-600 dark:text-gray-400 text-sm mr-4">
              &copy; kri8.fit All rights reserved.
            </div>
          </div>
          <div className="flex flex-col justify-center md:flex-row lg:flex-row md:justify-end lg:justify-end gap-4 mt-4">
            <button
              type="button"
              className="px-4 py-1 cursor-pointer inline-flex items-center rounded-lg text-white text-xl border-none outline-none bg-black hover:bg-[#222] active:bg-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                fill="#fff"
                className="inline mr-2"
                viewBox="0 0 22.773 22.773"
              >
                <path
                  d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                  data-original="#000000"
                />
              </svg>
              <div>
                <p className="text-[10px] text-white leading-none text-left font-medium">
                  Download on the
                </p>
                App Store
              </div>
            </button>
            <button
              type="button"
              className="px-4 py-1 cursor-pointer inline-flex items-center rounded-lg text-white text-xl border-none outline-none bg-black hover:bg-[#222] active:bg-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                fill="#fff"
                className="inline mr-2"
                viewBox="0 0 64 64"
              >
                <path
                  fill="#57cef3"
                  d="M7 3v58l33-29z"
                  data-original="#57cef3"
                />
                <path
                  fill="#fff200"
                  d="m36 32 8-10 15 10-15 10z"
                  data-original="#fff200"
                />
                <path
                  fill="#48ff48"
                  d="M36 32 7 3h4l34 20z"
                  data-original="#48ff48"
                />
                <path
                  fill="#ff6c58"
                  d="M36 32 7 61h4l34-20z"
                  data-original="#ff6c58"
                />
                <path
                  fill="#f33"
                  d="M9.1 64c-1.9 0-3.6-1-4.5-2.6L8 58.2v.7c0 .3.1.6.3.8L24 44c7.4 0 14.1-1.2 18.3-3.1l5.8-3.4v4.6L11.7 63.3c-.7.5-1.6.7-2.6.7z"
                  data-original="#ff3333"
                />
                <path
                  fill="#0779e4"
                  d="M9.1 4C8.5 4 8 4.5 8 5.1V36c0 4.4 7.2 8 16 8L5.5 62.5c-.9-.9-1.5-2.2-1.5-3.6V5.1C4 2.3 6.3 0 9.1 0z"
                  data-original="#0779e4"
                />
                <path
                  fill="#314a52"
                  d="M8.3 4.3c.2-.2.5-.3.8-.3.2 0 .4.1.6.2l45.5 26.6c.5.2.8.7.8 1.2s-.3 1-.7 1.3l-11.4 6.6 2.9 2.9 10.4-6.1c1.7-1 2.7-2.8 2.7-4.7s-1-3.8-2.7-4.7L11.7.7C11 .2 10.1 0 9.1 0 7.7 0 6.4.6 5.5 1.5z"
                  data-original="#314a52"
                />
              </svg>
              <div>
                <p className="text-[10px] text-white leading-none text-left font-medium">
                  Get it on
                </p>
                Google Play
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

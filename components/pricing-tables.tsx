export default function PricingTables() {
  return (
    <section className="relative bg-gray-900 border-t border-transparent dark:border-gray-800">
      {/* Background gradient (dark version only) */}
      <div
        className="absolute inset-0 opacity-25 bg-linear-to-b from-gray-800 to-gray-900 pointer-events-none hidden dark:block"
        aria-hidden="true"
      ></div>
      {/* End background gradient (dark version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-red-hat-display mb-4 text-gray-100">
              Flexible options, full access. Train on your terms.
            </h2>
            <p className="text-xl text-gray-400">
              Choose a plan that best suits you! Our pro plan includes unlimited
              access to fit.ly, tracking, progress insights, and more -
              everything you need to train smarter.
            </p>
          </div>

          {/* Pricing tables */}
          <div className="max-w-xs mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-2 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">
            {/* Pricing table 1 */}
            <div
              className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 shadow-sm border-2 border-transparent dark:border-teal-500"
              data-aos="fade-down"
            >
              <div className="grow mb-4 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xl font-bold font-red-hat-display">
                    Starter
                  </div>
                  {/* <div className="inline-flex px-3 py-1 text-xs font-medium text-teal-600 dark:text-teal-400 bg-teal-200 dark:bg-teal-600/25 rounded-full">
                    $0
                  </div> */}
                </div>
                <div className="font-red-hat-display inline-flex items-baseline mb-2">
                  <span className="h4 text-gray-600 dark:text-gray-400">$</span>
                  <span className="h3">0</span>
                  {/* <span className="font-medium text-gray-500 dark:text-gray-400">
                    /billed yearly
                  </span> */}
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  - Create workouts <br />- Save exercises <br />- View trends
                  from the last 4 weeks by muscle group <br />- Per exercise
                  trends for last 4 sessions
                </div>
              </div>
              <div className="mt-24">
                <a
                  className="btn-sm text-white bg-[#85f193] hover:bg-[#85f193] dark:bg-[#85f193] dark:hover:bg-[#85f193] w-full"
                  href="#0"
                >
                  Get started
                </a>
              </div>
            </div>
            {/* Pricing table 2 */}
            <div
              className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 shadow-sm"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              <div className="grow mb-4 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xl font-bold font-red-hat-display">
                    Pro
                  </div>
                </div>
                <div className="line-through font-red-hat-display inline-flex items-baseline mb-2">
                  <span className="h4 text-gray-600 dark:text-gray-400">$</span>
                  <span className="h3">29.99</span>
                  <span className="font-medium text-gray-500 dark:text-gray-400">
                    /billed yearly
                  </span>
                </div>
                <div className="font-red-hat-display items-baseline mb-2">
                  <span className="h4">$0 for now!</span>
                  {/* <span className="font-medium text-gray-500 dark:text-gray-400">
                    /billed yearly
                  </span> */}
                </div>
                <div>🟢 Free during MVP launch</div>
                <div>
                  🎉 Early users get lifetime 50% off when pricing goes live
                </div>
                <div className="mt-2 text-gray-500 dark:text-gray-400">
                  - Everything in Starter <br />- Unlimited access to fit.ly{" "}
                  <br />- Weekly summaries <br />- Unlimited trend history
                </div>
              </div>
              <div className="mt-24">
                <a
                  className="btn-sm text-white bg-[#85f193] hover:bg-[#85f193] dark:bg-[#85f193] dark:hover:bg-[#85f193] w-full"
                  href="#0"
                >
                  Get started
                </a>
              </div>
            </div>
            {/* Pricing table 3
            <div
              className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 shadow-sm"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <div className="grow mb-4 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xl font-bold font-red-hat-display">
                    Lifetime
                  </div>
                </div>
                <div className="font-red-hat-display inline-flex items-baseline mb-2">
                  <span className="h4 text-gray-600 dark:text-gray-400">$</span>
                  <span className="h3">127</span>
                  <span className="font-medium text-gray-500 dark:text-gray-400">
                    /one-time
                  </span>
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  — Lorem ipsum dolor amet sit consect adipiscing.
                </div>
              </div>
              <div className="mt-24">
                <a
                  className="btn-sm text-white bg-purple-500 hover:bg-purple-400 dark:text-teal-400 dark:bg-gray-700 dark:hover:bg-gray-600 w-full"
                  href="#0"
                >
                  Go Premium
                </a>
              </div>
            </div> */}
            {/* Pricing features */}
          </div>
        </div>
      </div>
    </section>
  )
}

import PageIllustration from "@/components/page-illustration"

export const metadata = {
  title: 'Delete Account - kri8.fit',
  description: 'Delete Account for kri8.fit',
}

export default function Delete() {
  return (
    <>
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <h2 className="h1 font-red-hat-display mb-4">Delete Account</h2>
            <p className="text-lg space-y-2 text-gray-700 dark:text-gray-400 mb-8">
              We're sorry to see you go. If you're sure you want to delete your account, please click the button below.
              We'll delete your account and all your data within 7 days. Hope you hit your fitness goals!
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/MvLW4VdFXPy6v8wu9">
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">Delete my account and data</button>
            </a>
          </div>
        </div>
      </section>
    </>

  )
}
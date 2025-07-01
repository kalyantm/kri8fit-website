export const metadata = {
  title: 'Privacy Policy - kri8.fit',
  description: 'Privacy Policy for kri8.fit',
}

import PageIllustration from '@/components/page-illustration'

export default function Privacy() {
  return (
    <>
      {/*  Page illustration */}
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>

      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            <h2 className="h1 font-red-hat-display mb-4">Privacy Policy</h2>
Effective Date: 27 June 2025


<div className="space-y-10">
<p className="text-lg space-y-2 text-gray-700 dark:text-gray-400 mb-8">
  At <span className="font-semibold">kri8.fit</span>, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you use our app.
</p>
  {/* 1. Information We Collect */}
  <div>
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">1. Information We Collect</h3>
    <p className="mb-2 text-gray-700 dark:text-gray-400">We may collect the following information when you use kri8.fit:</p>
    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-400 pl-4">
      <li>
        <span className="font-medium">Account Information:</span> Email address and profile data when you sign up.
      </li>
      <li>
        <span className="font-medium">Workout Data:</span> Exercises, sets, reps, weights, and other fitness inputs you log.
      </li>
      <li>
        <span className="font-medium">Chat History:</span> Your messages to the in-app AI assistant, for the purpose of improving recommendations and providing context-aware answers.
      </li>
      <li>
        <span className="font-medium">Device Information:</span> Basic device identifiers for analytics and crash reporting.
      </li>
    </ul>
  </div>

  {/* 2. How We Use Your Information */}
  <div>
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">2. How We Use Your Information</h3>
    <p className="mb-2 text-gray-700 dark:text-gray-400">Your information is used to:</p>
    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-400 pl-4">
      <li>Provide and improve our app features.</li>
      <li>Generate personalized fitness insights.</li>
      <li>Offer AI-driven workout guidance.</li>
      <li>Monitor app performance and debug issues.</li>
      <li>Communicate important updates or support responses.</li>
    </ul>
    <p className="mt-2 text-gray-700 dark:text-gray-400">
      <span className="font-semibold">We do not sell or share your personal data with third-party advertisers.</span>
    </p>
  </div>

  {/* 3. Third-Party Services */}
  <div>
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">3. Third-Party Services</h3>
    <p className="mb-2 text-gray-700 dark:text-gray-400">We use the following services that may collect anonymized data:</p>
    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-400 pl-4">
      <li>Supabase (backend/database)</li>
      <li>OpenAI (AI chatbot processing)</li>
    </ul>
    <p className="mt-2 text-gray-700 dark:text-gray-400">Each third party has its own privacy policy.</p>
  </div>

  {/* 4. Data Retention */}
  <div>
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">4. Data Retention</h3>
    <p className="text-gray-700 dark:text-gray-400">
      We retain your workout and chat history for as long as your account is active or as required to provide you services. You can request deletion at any time.
    </p>
  </div>

  {/* 5. Your Rights */}
  <div>
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">5. Your Rights</h3>
    <p className="mb-2 text-gray-700 dark:text-gray-400">You have the right to:</p>
    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-400 pl-4">
      <li>Access your data.</li>
      <li>Correct or delete your data.</li>
      <li>
        Contact us at <a href="mailto:support@kri8.fit" className="text-teal-600 dark:text-[#85f193] underline">support@kri8.fit</a> with any questions.
      </li>
    </ul>
  </div>

  {/* 6. Security */}
  <div>
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">6. Security</h3>
    <p className="text-gray-700 dark:text-gray-400">
      We take reasonable measures to protect your data using encrypted storage and secure APIs.
    </p>
  </div>
<div>
  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">7. Changes to This Policy</h3>
  <p className="text-gray-700 dark:text-gray-400">
    We may update this Privacy Policy from time to time. We will notify you via app updates or a notice within the app with a new effective date.
  </p>
</div>
</div>

            
          </div>
        </div>
      </section>
    </>
  )
}

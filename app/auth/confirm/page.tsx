'use client'

import PageIllustration from '@/components/page-illustration'
import { supabase } from '@/supabase';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react'

function ConfirmScreen() {
  const [confirmationText, setConfirmationText] = useState('')
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const token_hash = searchParams.get('token_hash');

  useEffect(() => {
    if (!token_hash) 
        setConfirmationText('Verification failed. Please reach out to support@kri8.fit.');

    const confirm = async () => {
      const { error } = await supabase.auth.exchangeCodeForSession(token_hash as string);
      if (error) {
        setConfirmationText('Verification failed. Please reach out to support@kri8.fit.');
      } else {
        setConfirmationText('Email confirmed successfully');
      }
    };

    confirm().finally(() => setLoading(false));
  }, [token_hash]);

  return (
    <>
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <h2 className="h1 font-red-hat-display mb-4">Email confirmation</h2>
            {loading ? (
              <p className="text-lg space-y-2 text-gray-700 dark:text-gray-400 mb-8">
                Loading...
              </p>
            ) : (
            <p className="text-lg space-y-2 text-gray-700 dark:text-gray-400 mb-8">
              {confirmationText}
            </p>
            )}
          {confirmationText.includes('Confirmed') && (
            <a href="kri8.fit://kri8.fit/login" className="btn-sm text-white dark:text-black bg-[#85f193] hover:bg-[#85f193] dark:bg-[#85f193] dark:hover:bg-[#85f193]">
              Go to kri8.fit app
            </a>
          )}
          </div>
        </div>
      </section>
    </>
  )
}

export default function Confirm() {
  return (
    <Suspense>
      <ConfirmScreen />
    </Suspense>
  )
}
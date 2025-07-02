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
  const type = searchParams.get('type');

  useEffect(() => {
    const confirm = async () => {
    if (!token_hash || !type) {
      setConfirmationText('Email verification failed. Please reach out to support@kri8.fit.');
    } 
    if (token_hash && type) {
      const { error } = await supabase.auth.verifyOtp({
        type: type as any,
        token_hash,
      });
       if (!error) {
        setConfirmationText('Your email has been confirmed successfully!');
        } else {
        setConfirmationText('Email verification failed. Please reach out to support@kri8.fit.');
        }
      }
    }
    confirm().finally(() => {
      setLoading(false)
    })
  }, [token_hash]);

  return (
    <>
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <h2 className="h1 font-red-hat-display mb-4">
              Email confirmation
            </h2>
            {loading ? (
              <p className="text-lg space-y-2 text-gray-700 dark:text-gray-400 mb-8">
                Loading...
              </p>
            ) : (
            <p className="text-lg space-y-2 text-gray-700 dark:text-gray-400 mb-8">
              {confirmationText}
            </p>
            )}
          {confirmationText.includes('confirmed') && (
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
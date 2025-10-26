'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import MobileNumberStep from '@/components/auth/MobileNumberStep';
import VerifyMobileStep from '@/components/auth/VerifyMobileStep';

export default function Home() {
  const [step, setStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const router = useRouter();

  const handleMobileSubmit = (mobile: string, referral: string) => {
    setMobileNumber(mobile);
    setReferralCode(referral);
    setStep(2);
  };

  const handleVerifySuccess = () => {
    router.push('/dashboard');
  };

  const handleEditMobile = () => {
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-[#f7f3f2]">
      {step === 1 && (
        <MobileNumberStep onSubmit={handleMobileSubmit} />
      )}
      {step === 2 && (
        <VerifyMobileStep 
          mobileNumber={mobileNumber}
          onVerifySuccess={handleVerifySuccess}
          onEditMobile={handleEditMobile}
        />
      )}
    </div>
  );
}


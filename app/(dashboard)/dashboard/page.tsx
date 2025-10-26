'use client';

import { User, Copy, Share2, Check } from 'lucide-react';
import { useState } from 'react';
import Faq from '@/components/Faq';
import { FAQ_DATA } from '@/config';

export default function DashboardPage() {
  const [copiedCoupon, setCopiedCoupon] = useState(false);
  const [copiedReferral, setCopiedReferral] = useState(false);

  const investorDetails = {
    name: 'OM BHARAT PATHAK',
    pan: 'GYOPP5541M',
    mobile: '8104799515'
  };

  const coupon = {
    code: 'IXIRP1ZDIFBSSKCV',
    validUntil: '11/04/2026',
    provider: 'ixigo'
  };

  const referralLink = 'https://blinkmoney.in/eligibility-check?refCode=AACT';

  const portfolio = {
    total: 21101,
    eligible: 14091,
    ineligible: 7010
  };

  const copyToClipboard = (text: string, type: 'coupon' | 'referral') => {
    navigator.clipboard.writeText(text);
    if (type === 'coupon') {
      setCopiedCoupon(true);
      setTimeout(() => setCopiedCoupon(false), 2000);
    } else {
      setCopiedReferral(true);
      setTimeout(() => setCopiedReferral(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f3f2]">
      <div className="p-2 sm:p-4 md:p-6">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-white p-4 sm:p-6 md:p-8 shadow-sm">
            <div className="grid grid-cols-1 items-start justify-center gap-4 md:grid-cols-3 md:gap-6">
            <div className="col-span-1 h-full max-h-[28rem] w-full">
              <div className="flex max-h-[28rem] flex-col gap-6">
                <div className="flex h-full w-full flex-col items-center justify-between gap-4 rounded-3xl border border-[#ece3df] bg-[#f2f2f2] p-2 sm:p-4">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-center text-lg font-bold text-[#6D564C] sm:text-xl xl:text-3xl">
                      Thank you for checking!
                    </h1>
                    <h2 className="text-center text-sm font-normal text-[#171717] sm:text-base xl:text-lg">
                      You're eligible for upto
                    </h2>
                  </div>

                  <span className="flex h-fit w-full flex-col items-center justify-center gap-0">
                    <p className="text-nowrap text-center text-3xl font-bold -tracking-[1px] text-[#8B7355] sm:text-4xl xl:text-5xl">
                      ₹6,300
                    </p>
                  </span>

                  <p className="text-center text-sm font-medium text-red-800 sm:text-sm xl:text-base">
                    A minimum credit limit of ₹25,000 is required to apply for a loan
                  </p>

                  <hr className="w-full border-[#CCC4C1]" />

                  <div className="flex w-full flex-col gap-3 p-0 max-md:px-2">
                    <div className="flex items-center justify-between">
                      <h3 className="flex items-center gap-1 text-sm font-semibold text-[#171717] sm:text-sm lg:text-base xl:text-lg">
                        <User className="h-5 w-5 text-[#6D564C]" />
                        Investor Details
                      </h3>
                      <button className="flex items-center justify-center gap-1 rounded-lg text-sm font-semibold underline underline-offset-2 text-[#171717] transition-all hover:text-[#8B7355] sm:text-sm lg:text-base xl:text-lg">
                        Edit
                      </button>
                    </div>

                    <div className="flex w-full flex-col items-center justify-center gap-2">
                      <p className="inline-flex w-full items-center justify-between gap-2">
                        <span className="text-left text-sm font-medium text-[#171717]">Name:</span>
                        <span className="text-right font-mono text-sm font-bold text-[#171717]">
                          {investorDetails.name}
                        </span>
                      </p>
                      <div className="flex w-full items-center justify-between gap-2">
                        <span className="text-left text-sm font-medium text-[#171717]">PAN:</span>
                        <span className="text-right font-mono text-sm font-bold text-[#171717]">
                          {investorDetails.pan}
                        </span>
                      </div>
                      <div className="flex w-full items-center justify-between gap-2">
                        <span className="text-left text-sm font-medium text-[#171717]">Mobile:</span>
                        <span className="text-right font-mono text-sm font-bold text-[#171717]">
                          {investorDetails.mobile}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 flex h-full max-h-[28rem] w-full flex-col gap-4 md:col-span-1 lg:col-span-1">
              <div className="flex flex-col items-start justify-start gap-4">
                <h1 className="w-full text-center text-lg font-bold text-[#171717]">
                  You've got free discount voucher
                </h1>

                <div className="relative m-0 h-fit w-full overflow-hidden rounded-lg bg-white p-0">
                  <div className="absolute left-0 top-1/2 z-[1] aspect-square h-[25%] -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-[#33251e] bg-white"></div>
                  <div className="absolute right-0 top-1/2 z-[1] aspect-square h-[25%] translate-x-1/2 -translate-y-1/2 transform rounded-full border border-[#33251e] bg-white"></div>

                  <div className="grid h-full w-full grid-cols-4 items-center overflow-hidden rounded-lg border border-[#33251e] bg-[#ECE4E1] px-4">
                    <div className="col-span-1 flex h-full w-full flex-col items-center justify-center border-r border-dashed border-[#33251e] p-2">
                      <img
                        alt="rewardsport"
                        className="max-h-16 object-contain"
                        src="/ixigo.png"
                      />
                    </div>

                    <div className="col-span-3 flex h-full w-full flex-col items-start justify-between p-2">
                      <h1 className="text-base font-semibold text-[#171717]">Coupon Code</h1>

                      <span className="flex h-fit w-full items-center justify-between rounded-sm bg-[#f7f3f2] px-2 py-1">
                        <p className="font-mono text-sm text-[#171717]">{coupon.code}</p>
                        <button
                          onClick={() => copyToClipboard(coupon.code, 'coupon')}
                          className="flex items-center gap-1 text-xs text-gray-600 transition-colors hover:text-gray-800"
                        >
                          {copiedCoupon ? (
                            <>
                              Copied
                              <Check className="h-4 w-4 text-green-600" />
                            </>
                          ) : (
                            <>
                              Copy
                              <Copy className="h-4 w-4" />
                            </>
                          )}
                        </button>
                      </span>

                      <span className="flex w-full items-end justify-between">
                        <p className="text-xs font-semibold text-[#171717]">
                          Valid Until: {coupon.validUntil}
                        </p>
                        <button className="cursor-pointer text-[10px] text-[#33251e] underline underline-offset-2">
                          T&C
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex h-fit w-full flex-col gap-1 rounded-3xl bg-[#f2f2f2] p-4">
                <div className="flex w-full flex-col items-center justify-center gap-4">
                  <span className="flex w-full flex-col items-center justify-center">
                    <h1 className="w-full text-center text-lg font-bold text-[#171717] md:text-xl">
                      Refer & Get ₹1,000 Flight Discount!
                    </h1>
                    <p className="w-full gap-1 text-center text-xs text-[#171717]">
                      Your friend checks eligibility and you both will get ₹1,000 Flight
                      Discount Voucher{' '}
                      <span className="cursor-pointer font-semibold underline underline-offset-2">
                        T&C
                      </span>
                    </p>
                  </span>

                  <div className="relative flex w-full items-center justify-between overflow-hidden rounded-lg">
                    <span className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 relative h-full min-w-0 flex-1 overflow-x-auto scroll-smooth bg-white p-3 font-mono text-nowrap text-xs sm:text-sm text-black">
                      {referralLink}
                    </span>
                    <button
                      onClick={() => copyToClipboard(referralLink, 'referral')}
                      className="flex flex-shrink-0 items-center justify-center gap-2 whitespace-nowrap bg-[#33251e] px-2 py-3 text-base text-white transition-colors hover:bg-[#2a1f1a]"
                    >
                      {copiedReferral ? (
                        <>
                          <Check className="h-4 w-4 text-white" />
                        </>
                      ) : (
                        <>
                          Copy
                          <Copy className="h-4 w-4 text-white" />
                        </>
                      )}
                    </button>
                  </div>

                  <span className="flex w-full flex-col gap-2">
                    <div className="flex cursor-pointer flex-col-reverse items-center justify-center gap-6 text-xs hover:cursor-pointer md:text-xs lg:text-sm xl:text-base">
                      <button type="button" className="inline-block w-full cursor-pointer capitalize">
                        <span className="flex h-full w-full cursor-pointer items-center justify-center rounded-2xl border-[0.5px] bg-[#33251e] px-6 py-3 text-nowrap font-medium text-white transition-all duration-200 hover:bg-[#2a1f1a] md:border-2">
                          <span className="inline-flex items-center justify-center gap-2">
                            <Share2 className="h-4 w-4" />
                            Refer Now
                          </span>
                        </span>
                      </button>
                    </div>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-span-1 h-full max-h-[28rem] w-full md:col-span-1">
              <div className="flex h-full w-full flex-col gap-0 overflow-hidden rounded-3xl bg-white shadow-sm border border-[#ece3df]">
                <div className="flex w-full items-center justify-between bg-[#8B7355] p-6 text-white">
                  <span className="text-lg font-bold sm:text-xl">Total Portfolio Value</span>
                  <span className="text-xl font-bold sm:text-2xl">
                    ₹{portfolio.total.toLocaleString()}
                  </span>
                </div>

                <div className="flex w-full items-center justify-between border-b border-[#ece3df] bg-white p-6 transition-all hover:bg-gray-50">
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-semibold text-[#171717] sm:text-lg">
                      Eligible funds
                    </span>
                    <span className="text-xs text-gray-600">Available for loan</span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-lg font-bold text-[#171717] sm:text-xl">
                      ₹{portfolio.eligible.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500">
                      {((portfolio.eligible / portfolio.total) * 100).toFixed(1)}% of total
                    </span>
                  </div>
                </div>

                <div className="flex w-full items-center justify-between bg-white p-6 transition-all hover:bg-gray-50">
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-semibold text-[#171717] sm:text-lg">
                      Ineligible funds
                    </span>
                    <span className="text-xs text-gray-600">Not available for loan</span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-lg font-bold text-[#171717] sm:text-xl">
                      ₹{portfolio.ineligible.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500">
                      {((portfolio.ineligible / portfolio.total) * 100).toFixed(1)}% of total
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="px-2 pb-8 sm:px-4 md:px-6">
        <Faq title="FAQS" items={FAQ_DATA} />
      </div>
    </div>
  );
}

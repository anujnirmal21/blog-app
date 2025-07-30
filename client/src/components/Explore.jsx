import React from "react";

function Explore() {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight min-w-72">
          Explore
        </p>
      </div>
      <div className="px-4 py-3">
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div
              className="text-neutral-500 flex border-none bg-[#ededed] items-center justify-center pl-4 rounded-l-xl border-r-0"
              data-icon="MagnifyingGlass"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </div>
            <input
              placeholder="Search"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border-none bg-[#ededed] focus:border-none h-full placeholder:text-neutral-500 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              defaultValue=""
            />
          </div>
        </label>
      </div>
      <div className="p-4 @container">
        <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtkr7RegpDfFY_QOIlFZQpdPfJ5jOh6OP6wpsHiLe9rSJKAqm_AGRQR_QDO9ybBvQJfVgbiB4Yju5LKZ7cTa_ZG9Cqf7eRarlE5p6cyHHN9mj2IeBoVEysnX_IWFbx4-o9FA2T0GAS_Chl0wg8CgnkM-AQ4bH93IhCfnHRwc-cCbAApq2przDyDN0Xf_lp5dtxJNAfrAYwLFZeyrMt7Sk2Waf3VqZ_uFE8L3Tyv-3koaT7_iyWfuj4lrlpuFpzlmGnrXsu0OrmkQSz")',
            }}
          />
          <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
            <p className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">
              The Future of Work: Embracing Remote Collaboration
            </p>
            <div className="flex items-end gap-3 justify-between">
              <p className="text-neutral-500 text-base font-normal leading-normal">
                Explore the transformative shift towards remote work, its
                benefits, and strategies for effective collaboration in
                distributed teams.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 @container">
        <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAWVTCMnkfUPon4yXWMd9J_OIaQmVcVGljO00aaoZ21y9EKX9tGJgWNEUqeoQ1hak1tMRDBsQ9aYpVDtDLwEgxZbJy4f_XyrPnzBCbyeEX8vTWwIAs0q3-eFxA3Z7p_XaON2Uq99mZ5LEjve3uzN7N0_gCXOsi6DZZm2vVO--c_M4ug91cLVJZKzdq84B9_KZm4izApC0iRxRX_WhZAeuPubgGXBK5IICV9bQQQur1VavvANPTp5-_6xl0Tw0_oVli1m_J4NxyoDE6d")',
            }}
          />
          <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
            <p className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">
              Mastering the Art of Time Management
            </p>
            <div className="flex items-end gap-3 justify-between">
              <p className="text-neutral-500 text-base font-normal leading-normal">
                Unlock the secrets to effective time management, boosting
                productivity and achieving your goals with proven techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 @container">
        <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFM4QbzCI80bARKmkWPsAAPT2xCOgXHHWino9UB-rfrm00q3fJSRk4OG4Tx6S9M0TGvLzKRFFdcDgIzKtdCbbwucnD5f4dq6k1P-MoTQjDoHyzozHs43lZz4MhtoMwhBjuDq92c91lMt_fmVBheUXfo-d5MKqXSoksiyE7KPM7yG-LfUMB-T8B8AS2LwvvCT0EM3IkIfrFwF68luTomDoiT8jlaeylk7zU3N5CAgPmizl6RyG-MnM0iONbX_0qIgSdyPjkey-9qRdS")',
            }}
          />
          <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
            <p className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">
              The Power of Mindfulness in Daily Life
            </p>
            <div className="flex items-end gap-3 justify-between">
              <p className="text-neutral-500 text-base font-normal leading-normal">
                Discover how incorporating mindfulness practices can reduce
                stress, enhance focus, and improve overall well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 @container">
        <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwagnN0rE4kq1WZbj7O1iw9dWxQRA_jJktjPTLCfSd4O_fUmobmt2wEt-q6Q_kmMzwOkLNvCrcCoK0G2H2w_WUDJAzRQzjnvKKia6rT7-3u48bgrWSWw3qz7VI4OZQIa2tnpke-lJDZtJYKUdp7iHV21ZfzeSGW5deZf3zyYzpN1g34iVXVBwEMiKSQMzwdgFtIo4HcydQgGjkvBU14plTlBq4jnKWdtBXXpJXlmUOG8HgK_0iCKCz-y0sJt38obPOJL7AH7wdtLzy")',
            }}
          />
          <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
            <p className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">
              Sustainable Living: Small Changes, Big Impact
            </p>
            <div className="flex items-end gap-3 justify-between">
              <p className="text-neutral-500 text-base font-normal leading-normal">
                Learn how simple lifestyle adjustments can contribute to a more
                sustainable future, from reducing waste to conserving energy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 @container">
        <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMQO0kACg4Pc__M1lVURtCTCaLboe4j1WcqkkBT1Mq_2a-GH_Z3jUk9V3wmnv5DrVqFLOfw_eSYGZ3TE5addvM0JsEbJytTBilXLdGXek7Wff5XVIevEfoXmRQYeihctdb2M6oZw7qbo5ZIF0G7TC13aq7mV3vHhrEcRekKf1VBpvNdqOeHzq0QSlkV5Z986vqKloRFK2nTGT1KiUjYhqu0pvSDk10iLS0lC3DgfPBMb3ek0ghDsLjVEzbTmT6Z427OTaMJTp_hP7h")',
            }}
          />
          <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
            <p className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em]">
              The Rise of Artificial Intelligence: Opportunities and Challenges
            </p>
            <div className="flex items-end gap-3 justify-between">
              <p className="text-neutral-500 text-base font-normal leading-normal">
                Examine the rapid advancements in AI, exploring its potential
                applications and the ethical considerations it presents.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-4">
        <a href="#" className="flex size-10 items-center justify-center">
          <div
            className="text-[#141414]"
            data-icon="CaretLeft"
            data-size="18px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
            </svg>
          </div>
        </a>
        <a
          className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#141414] rounded-full bg-[#ededed]"
          href="#"
        >
          1
        </a>
        <a
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#141414] rounded-full"
          href="#"
        >
          2
        </a>
        <a
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#141414] rounded-full"
          href="#"
        >
          3
        </a>
        <a
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#141414] rounded-full"
          href="#"
        >
          4
        </a>
        <a
          className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#141414] rounded-full"
          href="#"
        >
          5
        </a>
        <a href="#" className="flex size-10 items-center justify-center">
          <div
            className="text-[#141414]"
            data-icon="CaretRight"
            data-size="18px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Explore;

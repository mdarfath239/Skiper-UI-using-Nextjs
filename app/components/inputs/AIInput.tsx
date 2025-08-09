"use client"
import { useState } from 'react';
import { FaPaperclip, FaPaperPlane, FaGlobe } from 'react-icons/fa';


export default function AIInput() {
  const [message, setMessage] = useState('');

  return (
    <section className="mt-12  w-full">
      <div className="mx-auto w-full  max-w-4xl rounded-[24px] border border-black/5 dark:border-white/20 p-2 shadow-sm md:rounded-t-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 dark:border-white/20 bg-neutral-800/5 dark:bg-white/10 p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">
          
          {/* Badge */}
    
          <div className="inline-flex items-center px-2.5 py-0.5 font-medium absolute left-4 top-6 rounded-[14px] border  border-black/10 bg-white  dark:border dark:border-white/10 dark:bg-transparent text-base md:left-6">
            <span className="mr-1">✨</span> Latest component
          </div>


          {/* Title & Subtitle */}
          <div className="flex flex-col justify-center pb-2 pl-4 pt-14 md:items-center">
            <div>
              <h4 className="text-2xl font-bold">AI Input</h4>
              <p className="flex items-center gap-1 text-[10px] text-white/90">Seamless AI Chat Input box</p>
            </div>
          </div>

          {/* Input Section */}
          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <div className="w-full py-4">
                <div className="relative max-w-xl border rounded-[22px] border-black/5 p-1 w-full mx-auto">
                  <div className="relative rounded-2xl border border-black/5 bg-neutral-800/5 flex flex-col">
                    
                    {/* Textarea */}
                    <div className="overflow-y-auto max-h-[164px]">
                      <div className="relative">
                        <textarea
                          className="flex min-h-[80px] text-sm w-full rounded-2xl rounded-b-none px-4 py-3 bg-black/5 dark:bg-white/5 dark:text-white resize-none leading-[1.2] border-none outline-none placeholder:text-white/50"
                          placeholder="Search the web..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Bottom Buttons */}
                    <div className="h-12 bg-black/5 dark:bg-white/5 rounded-b-xl relative flex justify-between items-center px-3">
                      {/* Left buttons */}
                      <div className="flex items-center gap-2">
                        <label className="cursor-pointer p-2 bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/40 rounded-full hover:text-white transition">
                          <input type="file" className="hidden" />
                          <FaPaperclip className="w-4 h-4" />
                        </label>

                        <button
                          type="button"
                          className="flex items-center gap-2 px-2 py-1 border h-8 bg-[#ff3f17]/15 border-[#ff3f17] text-[#ff3f17] rounded-full text-sm"
                        >
                          <FaGlobe className="w-4 h-4" />
                          <span>Search</span>
                        </button>
                      </div>

                      {/* Right send button */}
                      <button className="p-2 bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/40 rounded-full hover:text-white transition">
                        <FaPaperPlane className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

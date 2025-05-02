'use client';

import { useState } from 'react';
import { Copy, CheckCircle, Minus } from 'lucide-react';

export default function PaymentModal({ isOpen, setIsOpen }) {
  const [copiedText, setCopiedText] = useState('');
  
  const handleCopy = (text, section) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(`${text}-${section}`);
      setTimeout(() => {
        setCopiedText('');
      }, 1000);
    });
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-gray-600/65 flex items-center justify-center z-500" onClick={() => setIsOpen(false)}>
      <div className="bg-white rounded-lg p-6 md:max-w-full md:w-[568px] max-w-full shadow-lg" style={{ backgroundColor: '#ffffff', color: '#f97316' }} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src="/cont.png" alt="logo" className="mr-2 w-10 h-10" />
            <h2 className="text-xl font-semibold text-[#f97316]">Monthly Ministry Partner</h2>
          </div>
          <button className="text-gray-500 hover:text-gray-700 text-2xl" onClick={() => setIsOpen(false)}>
            ×
          </button>
        </div>
          
          <div className="px-2 py-4 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-black/45 border-b border-gray-200 pb-2">ZELLE:</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                  <span className="font-medium">202-380-2428</span>
                  <button 
                    onClick={() => handleCopy('202-380-2428', 'zelle')} 
                    className="text-[#f97316] hover:text-orange-700 transition-colors"
                  >
                    {copiedText === '202-380-2428-zelle' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                    <Minus className='text-[#f97316] w-7'/>OR <Minus className='text-[#f97316] w-7'/>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                  <span className="font-medium">gonations247@gmail.com</span>
                  <button 
                    onClick={() => handleCopy('gonations247@gmail.com', 'zelle-email')} 
                    className="text-[#f97316] hover:text-orange-700 transition-colors"
                  >
                    {copiedText === 'gonations247@gmail.com-zelle-email' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-black/45 border-b border-gray-200 pb-2">CASHAPP $:</h3>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                <span className="font-medium">202-380-2428</span>
                <button 
                  onClick={() => handleCopy('202-380-2428', 'cashapp')} 
                  className="text-[#f97316] hover:text-orange-700 transition-colors"
                >
                  {copiedText === '202-380-2428-cashapp' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-black/45 border-b border-gray-200 pb-2">DIRECT DEPOSIT:</h3>
              <div className="space-y-2">
                <p className="font-medium">Bank of America.</p>
                <p className="font-medium">God Of All Nations.</p>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                  <span className="font-medium">Acc. 4460 2797 8371</span>
                  <button 
                    onClick={() => handleCopy('4460 2797 8371', 'direct-deposit')} 
                    className="text-[#f97316] hover:text-orange-700 transition-colors"
                  >
                    {copiedText === '4460 2797 8371-direct-deposit' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
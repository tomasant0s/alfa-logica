'use client'
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/seu-numero-de-telefone', '_blank');
  };

  return (
    <button
      className="fixed bottom-10 right-5 bg-green-500 text-white py-3 px-3 rounded-full shadow-lg 
                 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      onClick={openWhatsApp}
      style={{ borderRadius: '50%' }} 
    >
      <FaWhatsapp size={24} />
    </button>
  );
};

export default WhatsAppButton;

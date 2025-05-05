import React, { useState } from "react";
import PaymentModal from "../../../components/PaymentModal";

function Direct() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="bg-gray-200 rounded-md p-10">
        <p className="text-2xl font-medium">Quick Links</p>

        <div className="py-5 flex flex-col space-y-1">
          <a href="" className="text-xl hover:underline text-orange-600">
            Join our Email List
          </a>
          <a
            href="#"
            className="text-xl hover:underline text-orange-600"
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
          >
            Monthly Partner
          </a>
          <PaymentModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
          <a href="https://wa.me/+12024463004" className="text-xl hover:underline text-orange-600">
            Prayer Requests
          </a>
          <a href="" className="text-xl hover:underline text-orange-600">
            Crusades
          </a>
          <a href="" className="text-xl hover:underline text-orange-600">
            Donate
          </a>
        </div>
      </div>
    </div>
  );
}

export default Direct;

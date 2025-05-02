import React, { useState } from "react";
import PaymentModal from "../../../components/PaymentModal";

function Donate() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="">
        <h1 className="lg:text-5xl md:text-4xl text-xl font-semibold text-orange-500 libre ">
          Make a measurable difference! Make an Online Donation
        </h1>

        <p className="text-gray-600 md:py-5 py-2 md:text-lg text-base">
          In 2025, we are believing for an even greater harvest of souls than we
          have ever seen before and your online donation will make a measurable
          difference in the Kingdom. The open door for worldwide evangelism
          before us is great and we simply cannot do it without your help.
        </p>

        <p className="text-gray-600 md:text-lg text-base">
          If you would like to find out more about becoming a{" "}
          <span className="text-gray-800 font-bold">
            Monthly Ministry Partner
          </span>
          , please <br />
          <a
            href="#"
            className="text-orange-600 font-bold"
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
          >
            Click Here
          </a>
          <PaymentModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </p>
      </div>
    </div>
  );
}

export default Donate;

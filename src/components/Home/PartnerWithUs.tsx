import React,{useState} from 'react'
import ContactUs from '../Contact/ContactUs';
import Modal from './../Modal';

const PartnerWithUs = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="md:py-64 py-32 bg-blue-400 w-full flex justify-center items-center relative px-4 md:px-[2%]">
      <div className="w-fit mx-auto max-w-[930px]">
        <p className="text-white md:text-5xl text-center text-[40px] font-normal leading-[56px] md:leading-[67px]">
          <button className="font-medium inline-flex underline outline-0 outline-none" 
          onClick={handleOpenModal}>
            partner with us,
          </button> 
          let’s help you connect your product to your customers
        </p>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ContactUs />
      </Modal>
    </div>

  )
}

export default PartnerWithUs

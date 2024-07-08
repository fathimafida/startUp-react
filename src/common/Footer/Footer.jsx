
import { AiOutlineCopyright } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { FaTwitter, FaWhatsapp } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="flex  flex-col md:flex-row  items-center bg-[#74C69D] fixed bottom-0 w-full px-8 py-3   justify-between">
      <div className="flex  gap-3 items-center text-white">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaTiktok />
        <FaWhatsapp />
        <FaYoutube />
      </div>
      <div className="flex items-center">
        <AiOutlineCopyright className='text-white mr-2' />
        <p className="text-white">Start,2022. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer

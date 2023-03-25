import instagram from '../assets/instagram.webp';
import twitter from '../assets/twitter.webp';
import facebook from '../assets/facebook.webp';
import pintrest from '../assets/pintrest.webp';
import footer from '../assets/footer.webp';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-white pt-2 px-4 mt-auto w-full z-10 shadow-inner fixed bottom-0 sm:static sm:shadow-none sm:bg-black sm:pt-4 lg:pt-12 md:px-8 lg:px-12'>
      <ul className='flex justify-between items-center text-[10px] font-medium text-gray-medium opacity-75 sm:hidden'>
        <li className=''>
          <Link to='checkout'>
            <div className='flex flex-col items-center gap-[1px]'>
              <span className='material-symbols-outlined'>shopping_bag</span>
              <span>Cart</span>
            </div>
          </Link>
        </li>
        <li className=''>
          <Link to='account'>
            <div className='flex flex-col items-center gap-[1px]'>
              <span className='material-symbols-outlined'>person</span>
              <span>Account</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to='support'>
            <div className='flex flex-col items-center gap-[1px]'>
              <span className='material-symbols-outlined'>contact_support</span>
              <span>Help</span>
            </div>
          </Link>
        </li>
      </ul>
      <div className='mx-0 hidden flex-col sm:flex sm:mx-4 md:mx-8 lg:mx-16'>
        <div className='hidden flex-wrap gap-12 justify-between border-b-[1px] border-white py-4 sm:flex'>
          <div>
            <div className='text-gray'>COMPANY</div>
            <ul className='list-none text-white mt-4'>
              <li>About us</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <div className='text-gray'>CONTACT</div>
            <ul className='list-none text-white mt-4'>
              <li>Help &amp; Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>
          <div>
            <div className='text-gray'>LEGAL</div>
            <ul className='list-none text-white mt-4'>
              <li>Terms &amp; Conditions</li>
              <li>Refund &amp; Cancellation</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className='hidden gap-4 flex-nowrap justify-between text-white py-4 items-center sm:flex lg:flex-row'>
          <div>
            <img
              className='h-8 hover:scale-110'
              src={footer}
              alt='food logo'
              data-testid='logo'
            />
          </div>
          <div className='text-xl'>&copy; {year} Food</div>
          <div className='flex gap-6'>
            <img
              className='w-6 hover:scale-110'
              src={facebook}
              alt='facebook'
            />
            <img
              className='w-6 hover:scale-110'
              src={pintrest}
              alt='pinterest'
            />
            <img
              className='w-6 hover:scale-110'
              src={instagram}
              alt='instagram'
            />
            <img className='w-6 hover:scale-110' src={twitter} alt='twitter' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

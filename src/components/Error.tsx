import { useRouteError } from 'react-router-dom';
import { Footer, Header } from './';

const Error = () => {
  const err: any = useRouteError();
  const { status, statusText } = err;

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='my-20 mx-0 px-4 py-2 sm:mx-4 md:px-8 md:mx-8 lg:px-12 lg:mx-16'>
        <h2 className=''>Some error occured!</h2>
        <h3 className=''>Status: {status}</h3>
        <h4 className=''>Message: {statusText}</h4>
      </div>
      <Footer />
    </div>
  );
};

export default Error;

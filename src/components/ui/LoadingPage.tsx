import LoadingSpinner from './LoadingSpinner';

const LoadingPage = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <LoadingSpinner className='border-r-blue-400 h-40 w-40' />
    </div>
  );
};
export default LoadingPage;

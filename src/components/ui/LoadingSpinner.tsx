const LoadingSpinner = () => {
  return (
    <div className='flex items-center justify-center'>
      <span
        className={`flex h-9 w-9 animate-spin-fast rounded-full
          border-2 border-white/40 border-r-white border-t-white`}
      ></span>
    </div>
  );
};
export default LoadingSpinner;

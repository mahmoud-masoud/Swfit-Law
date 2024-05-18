import Wrapper from '../ui/Wrapper';

const TopRow = () => {
  return (
    <div className='bg-contact bg-cover bg-no-repeat bg-center h-96'>
      <Wrapper>
        <span className='text-5xl font-semibold text-white block pt-32 mb-6 tracking-wide'>
          Contact Us
        </span>
        <p className='text-lg max-w-lg text-white'>
          For more information on services offered by Swift Law you can get in
          touch with us at the following address
        </p>
      </Wrapper>
    </div>
  );
};
export default TopRow;

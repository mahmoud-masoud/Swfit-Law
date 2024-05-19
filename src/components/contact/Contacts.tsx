import Mail from '@/assets/icons/Mail';
import Office from '@/assets/icons/Office';
import Phone from '@/assets/icons/Phone';

const Contacts = () => {
  return (
    <div className='py-10 md:py-16 px-4 md:px-8 bg-light-gold'>
      <div className='flex justify-between flex-wrap gap-y-10 gap-4'>
        <div className='flex items-center gap-4'>
          <Phone className='fill-primary border-primary max-md:h-10' />
          <div className=''>
            <div className='text-bright-gold mb-2'>Call Us On: </div>
            <p className='text-dark'>911-987654321</p>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mail className='fill-primary max-md:h-10' />
          <div className=''>
            <div className='text-bright-gold mb-2'>Email Us: </div>
            <p className='text-dark'>swiftlaw@support.com</p>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Office className='fill-primary max-md:h-10' />
          <div className=''>
            <div className='text-bright-gold mb-2'>Main Office: </div>
            <p className='text-dark'>42 Nile Avenue, Sphinx District, Cairo</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacts;

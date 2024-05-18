import Wrapper from '@/components/ui/Wrapper';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const HomeContact = () => {
  return (
    <section
      className='py-24 pb-28 bg-blue-50 border-t border-slate-300 bg-cover bg-center
   '
    >
      <Wrapper>
        <h2
          className='font-medium text-5xl font-serif w-fit p-4 mb-12
        text-primary
        '
        >
          Do You Have A Case?
        </h2>
        <div className='flex flex-col md:flex-row justify-between bg-white rounded-xl shadow-md overflow-hidden'>
          <div className='w-full md:w-1/2 p-4 md:p-8'>
            <ContactForm />
          </div>
          <ContactInfo />
        </div>
      </Wrapper>
    </section>
  );
};
export default HomeContact;

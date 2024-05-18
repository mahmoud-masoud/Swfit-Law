import ContactForm from '../home/contact/ContactForm';
import Wrapper from '../ui/Wrapper';
import Contacts from './Contacts';
import Location from './Location';
import TopRow from './TopRow';

const ContactWrapper = () => {
  return (
    <section className=''>
      <TopRow />
      <Wrapper className='py-20'>
        <div className='flex flex-col md:flex-row-reverse gap-10 md:gap-20 mb-20'>
          <Location />
          <div className='w-full md:w-1/2 md:border md:shadow-sm rounded-lg md:p-8'>
            <ContactForm />
          </div>
        </div>
        <Contacts />
      </Wrapper>
    </section>
  );
};
export default ContactWrapper;

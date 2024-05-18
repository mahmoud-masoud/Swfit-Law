import Image from 'next/image';
import Wrapper from '../ui/Wrapper';

const Brief = () => {
  return (
    <section className='py-40'>
      <Wrapper>
        <h2 className='font-medium text-4xl font-serif text-primary mb-10'>
          The Simple Choice for Complex Litigation
        </h2>
        <div className='flex flex-col-reverse items-center lg:flex-row justify-between gap-20 pt-10'>
          <p className='leading-9'>
            We offer an overall solution for the full range of clients’ legal
            needs, from entry into the country and establishing legal status, to
            setting up a business, advising on corporate transactions, or
            concluding employment arrangements, right through to assisting
            individuals in their times of need whether it be in their personal
            relationships. Our consultants are legal professionals with
            qualifications obtained from various international jurisdictions.
            Their training and experience enables them to provide a high
            standard of advice and legal expertise in every case.
          </p>

          <Image
            src={'/hammer.jpg'}
            width={600}
            height={600}
            alt='Hammer of law'
            className='rounded-2xl shadow-hammer shadow-secondary h-fit'
          />
        </div>
      </Wrapper>
    </section>
  );
};
export default Brief;

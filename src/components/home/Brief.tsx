import Image from 'next/image';
import Wrapper from '../ui/Wrapper';
import Link from 'next/link';

const Brief = () => {
  return (
    <section className='py-24'>
      <Wrapper>
        <h2 className='font-medium text-4xl font-serif text-primary mb-16 md:mb-10'>
          The Simple Choice for Complex Litigation
        </h2>
        <div
          className='flex flex-col-reverse
         md:flex-row justify-between items-center gap-10 md:gap-20'
        >
          <div>
            <p className='leading-9 text-lg pt-6'>
              We offer an overall solution for the full range of clients’ legal
              needs, from entry into the country and establishing legal status,
              to setting up a business, advising on corporate transactions, or
              concluding employment arrangements, right through to assisting
              individuals in their times of need whether it be in their personal
              relationships.
            </p>
            <Link
              href={'about-us'}
              className='inline-block pt-6 hover:underline
             text-lg text-primary'
            >
              Read more about us
            </Link>
          </div>

          <Image
            src={'/brief.webp'}
            width={450}
            height={400}
            alt='Hammer of law'
            className='shadow-hammer shadow-secondary'
          />
        </div>
      </Wrapper>
    </section>
  );
};
export default Brief;

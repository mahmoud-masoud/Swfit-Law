import Link from 'next/link';
import Wrapper from '../ui/Wrapper';

const Reviews = () => {
  return (
    <section className='py-24'>
      <Wrapper>
        <h2 className='font-medium text-4xl font-serif text-primary mb-10'>
          What Our Clients Say About Us
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        <div className='flex justify-end'>
          <Link
            href={'/reviews'}
            className='inline-block mt-4 underline ml-auto'
          >
            View all
          </Link>
        </div>
      </Wrapper>
    </section>
  );
};
export default Reviews;

const ReviewCard = () => {
  return (
    <div className='border p-8 rounded-3xl shadow'>
      <p className='mb-6'>Mahmoud Masoud</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
        impedit illum molestias rerum totam. Sed in ipsum nihil sapiente saepe
        similique ut iste.
      </p>
    </div>
  );
};

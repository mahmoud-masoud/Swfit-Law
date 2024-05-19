import testimonials from '../../../data/testimonials';
import { ReviewCard } from '../home/Reviews';
import Wrapper from '../ui/Wrapper';

const ReviewsPage = () => {
  return (
    <section className='py-12 md:py-20 bg-gray-100'>
      <Wrapper>
        <div className='mb-8 md:mb-16 max-w-2xl'>
          <h1 className='text-4xl md:text-5xl font-serif mb-6  text-primary'>
            Reviews
          </h1>
          <p className='text-lg'>
            Hear from our satisfied clients about their experiences with our
            firm. Our commitment to exceptional service and successful outcomes
            speaks through their stories.
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center'>
          {testimonials.map(
            (
              item: {
                name: string;
                message: string;
              },
              i: number
            ) => {
              return (
                <ReviewCard
                  key={i}
                  name={item.name}
                  message={item.message}
                  className='w-full'
                />
              );
            }
          )}
        </div>
      </Wrapper>
    </section>
  );
};
export default ReviewsPage;

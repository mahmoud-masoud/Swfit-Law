import Wrapper from '../ui/Wrapper';

const Reviews = () => {
  return (
    <section className='py-24'>
      <Wrapper>
        <div className='flex gap-6 justify-between'>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </Wrapper>
    </section>
  );
};
export default Reviews;

const ReviewCard = () => {
  return (
    <div className='border p-8 rounded-3xl shadow'>
      <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
        impedit illum molestias rerum totam. Sed in ipsum nihil sapiente saepe
        similique ut iste.
      </p>
    </div>
  );
};

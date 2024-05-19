import ReviewsPage from '@/components/reviews/ReviewsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviews',
  description: 'The best law firm on the earth',
};

const page = () => {
  return (
    <div>
      <ReviewsPage />
    </div>
  );
};
export default page;

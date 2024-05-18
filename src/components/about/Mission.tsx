import ChessHorse from '@/assets/icons/ChessHorse';
import MedalIcon from '@/assets/icons/MedalIcon';
import TargetIcon from '@/assets/icons/TargetIcon';
import { ReactNode } from 'react';

const Mission = () => {
  return (
    <div className='py-20'>
      <div className='mb-14'>
        <h2 className='text-4xl text-primary font-serif mb-6'>
          Mission and Values
        </h2>
        <p className='max-w-2xl text-lg'>
          Empowering clients with expert legal solutions and unwavering support
          to achieve their goals and secure their future.
        </p>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-8 '>
        <Card
          title='Our Mission'
          icon={<TargetIcon />}
          description="We demystify legal complexities, making the system understandable and inclusive. With a focus on security, safety, and enthusiastic support, we're dedicated to achieving optimal outcomes together."
        />
        <Card
          title='Strategic Solutions'
          icon={<ChessHorse />}
          description="We provide strategic legal solutions tailored to our clients' specific needs, whether in business transactions, regulatory compliance, or other legal matters. Our approach is proactive and forward-thinking"
        />

        <Card
          title='Client Success'
          icon={<MedalIcon />}
          description="Our mission is to empower our clients to achieve their goals by providing exceptional legal services. We focus on delivering results that support our clients' success, whether they are navigating business challenges or seeking resolution in other legal areas."
        />
      </div>
    </div>
  );
};

export default Mission;

const Card = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div
      className='p-8 rounded-3xl border border-blue-200 shadow flex flex-col
     gap-4 hover:bg-blue-50/50 duration-200'
    >
      <div className='p-2 bg-blue-100 h-14 w-14 rounded-full mb-4'>{icon}</div>
      <span className='text-3xl text-dark font-medium'>{title}</span>
      <p className=''>{description}</p>
    </div>
  );
};

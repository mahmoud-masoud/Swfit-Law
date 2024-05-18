import Image from 'next/image';
import Wrapper from '../ui/Wrapper';
import Mission from './Mission';

const About = () => {
  return (
    <section className='py-24'>
      <Wrapper>
        <Intro />
        <Story />
        <Mission />
        <Team />
      </Wrapper>
    </section>
  );
};
export default About;

const Intro = () => {
  return (
    <div className='mb-32'>
      <p className='text-4xl text-primary font-serif mb-8'>About Swift Law</p>
      <p className='max-w-screen-lg text-lg'>
        At Swift Law, we understand that navigating the legal landscape can be
        daunting. That&apos;s why we&apos;re here to provide you with expert
        guidance, unwavering support, and personalized solutions to your legal
        needs.
      </p>
    </div>
  );
};

const Story = () => {
  return (
    <div className='py-16'>
      <h2 className='text-4xl text-primary font-serif mb-10'>Our Story</h2>
      <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-6 mb-20'>
        <div className='lg:w-1/2'>
          <p className='text-2xl font-serif leading-9 text-dark '>
            Founded with a passion for justice and a commitment to serving our
            community, Swift Law has been a trusted ally for clients since 2010.
            What started as a vision to make a positive impact in the lives of
            individuals and businesses has grown into a reputable firm known for
            its integrity, dedication, and results-driven approach.
          </p>
        </div>
        <div>
          <Image
            src={'/story.jpg'}
            height={500}
            width={550}
            alt='law building'
          />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-6'>
        <div>
          <Image
            src={'/office.jpg'}
            height={500}
            width={550}
            alt='law building'
          />
        </div>
        <div className='lg:w-1/2'>
          <p className='text-2xl font-serif leading-9 text-dark '>
            Founded with a passion for justice and a commitment to serving our
            community, Swift Law has been a trusted ally for clients since 2010.
            What started as a vision to make a positive impact in the lives of
            individuals and businesses has grown into a reputable firm known for
            its integrity, dedication, and results-driven approach.
          </p>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className='py-24'>
      <div className='flex justify-evenly'>
        <h2 className='text-4xl mb-6 text-primary font-serif sticky top-32 h-20'>
          Meet the Team
        </h2>
        <div className='flex flex-col gap-10'>
          <TeamMember img='/man-1.jpg' name='First man' title='Big role' />
          <TeamMember img='/man-2.jpg' name='Second man' title='Medium role' />
          <TeamMember img='/man-3.jpg' name='Third man' title='Small role' />
          <TeamMember img='/man-4.jpg' name='Fourth man' title='Head role' />
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({
  name,
  title,
  img,
}: {
  name: string;
  title: string;
  img: string;
}) => {
  return (
    <div>
      <Image src={img} height={500} width={400} alt={name + 'photo'} />
      <h3 className='text-lg font-medium py-4'>{name}</h3>
      <p>{title}</p>
    </div>
  );
};

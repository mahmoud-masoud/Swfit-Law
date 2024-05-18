import Image from 'next/image';
import Link from 'next/link';

type Props = {
  path: string;
  city: string;
  image: string;
};

const PlaceCard = ({ path, city, image }: Props) => {
  return (
    <div className='flex w-full justify-center items-center flex-col'>
      <div
        className='w-full h-44
       md:h-[250px] md:w-[250px] aspect-square 
        overflow-hidden relative'
      >
        <Image
          src={image}
          width={250}
          height={250}
          loading='lazy'
          priority={false}
          alt={city + 'photo'}
          className='object-cover object-center hover:scale-105 duration-200 w-full h-full'
        />
        <div
          className='absolute right-0 bottom-0 w-full
         bg-gradient-to-t from-blue-400 text-white text-center py-5 pointer-events-none'
        >
          <span className='text-2xl'>{city}</span>
        </div>
      </div>
    </div>
  );
};
export default PlaceCard;

import { ReactNode } from 'react';

type Props = {
  city: string;
  location: string;
  icon: ReactNode;
};

const PlaceCard = ({ city, location, icon }: Props) => {
  return (
    <div
      className='flex flex-col text-center p-10 items-center justify-center
      border-blue-100
      rounded-3xl
      shadow-sm border
    '
    >
      {icon}
      <div className='text-2xl font-medium mb-4 pt-6'>{city}</div>
      <p>{location}</p>
    </div>
  );
};
export default PlaceCard;

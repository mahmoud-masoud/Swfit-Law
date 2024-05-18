import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};
const Office = ({ className }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512.018 512.018'
      className={twMerge('h-8 md:h-10 flex-shrink-0 fill-primary', className)}
    >
      <g>
        <g>
          <path
            d='M504.713,85.906l-256-85.333c-3.264-1.131-6.827-0.555-9.621,1.451c-2.795,2.005-4.416,5.227-4.416,8.661v120.533
			L7.027,213.991c-4.224,1.536-7.019,5.525-7.019,10.027v277.333c0,5.888,4.779,10.667,10.667,10.667h490.667
			c5.888,0,10.667-4.779,10.667-10.667V96.018C512.009,91.431,509.065,87.356,504.713,85.906z M106.676,458.684
			c0,5.888-4.779,10.667-10.667,10.667H53.342c-5.888,0-10.667-4.779-10.667-10.667v-85.333c0-5.888,4.779-10.667,10.667-10.667
			h42.667c5.888,0,10.667,4.779,10.667,10.667V458.684z M106.676,330.684c0,5.888-4.779,10.667-10.667,10.667H53.342
			c-5.888,0-10.667-4.779-10.667-10.667v-85.333c0-5.888,4.779-10.667,10.667-10.667h42.667c5.888,0,10.667,4.779,10.667,10.667
			V330.684z M213.342,458.684c0,5.888-4.779,10.667-10.667,10.667h-42.667c-5.888,0-10.667-4.779-10.667-10.667v-85.333
			c0-5.888,4.779-10.667,10.667-10.667h42.667c5.888,0,10.667,4.779,10.667,10.667V458.684z M213.342,330.684
			c0,5.888-4.779,10.667-10.667,10.667h-42.667c-5.888,0-10.667-4.779-10.667-10.667v-85.333c0-5.888,4.779-10.667,10.667-10.667
			h42.667c5.888,0,10.667,4.779,10.667,10.667V330.684z M362.676,458.684c0,5.888-4.779,10.667-10.667,10.667h-42.667
			c-5.888,0-10.667-4.779-10.667-10.667v-85.333c0-5.888,4.779-10.667,10.667-10.667h42.667c5.888,0,10.667,4.779,10.667,10.667
			V458.684z M362.676,330.684c0,5.888-4.779,10.667-10.667,10.667h-42.667c-5.888,0-10.667-4.779-10.667-10.667v-85.333
			c0-5.888,4.779-10.667,10.667-10.667h42.667c5.888,0,10.667,4.779,10.667,10.667V330.684z M362.676,202.684
			c0,5.888-4.779,10.667-10.667,10.667h-42.667c-5.888,0-10.667-4.779-10.667-10.667v-85.333c0-5.888,4.779-10.667,10.667-10.667
			h42.667c5.888,0,10.667,4.779,10.667,10.667V202.684z M448.009,458.684c0,5.888-4.779,10.667-10.667,10.667h-42.667
			c-5.888,0-10.667-4.779-10.667-10.667v-85.333c0-5.888,4.779-10.667,10.667-10.667h42.667c5.888,0,10.667,4.779,10.667,10.667
			V458.684z M448.009,330.684c0,5.888-4.779,10.667-10.667,10.667h-42.667c-5.888,0-10.667-4.779-10.667-10.667v-85.333
			c0-5.888,4.779-10.667,10.667-10.667h42.667c5.888,0,10.667,4.779,10.667,10.667V330.684z M448.009,202.684
			c0,5.888-4.779,10.667-10.667,10.667h-42.667c-5.888,0-10.667-4.779-10.667-10.667v-85.333c0-5.888,4.779-10.667,10.667-10.667
			h42.667c5.888,0,10.667,4.779,10.667,10.667V202.684z'
          />
        </g>
      </g>
    </svg>
  );
};
export default Office;
import Gravel from '@/assets/icons/Gravel';
import ServiceCard from '../home/services/ServiceCard';
import Wrapper from '../ui/Wrapper';
import Family from '@/assets/icons/Family';
import FilePenIcon from '@/assets/icons/FilePenIcon';
import HandHeartIcon from '@/assets/icons/HandHeartIcon';
import HouseModernIcon from '@/assets/icons/HouseModernIcon';
import PassportIcon from '@/assets/icons/PassportIcon';
import HandshakeIcon from '@/assets/icons/HandshakeIcon';
import WorkIcon from '@/assets/icons/WorkIcon';
import Shield from '@/assets/icons/Shield';
import { twMerge } from 'tailwind-merge';
import Company from '@/assets/icons/Company';

const servicesData = [
  {
    icon: <Gravel />,
    title: 'Criminal Defense',
    path: 'criminal-defense',
    description:
      'Our corporate law services cater to businesses of all sizes, providing legal counsel on corporate governance.',
  },
  {
    icon: <Family />,
    title: 'Family Law',
    path: 'family-law',
    description:
      'Our family law services encompass divorce, child custody, adoption, prenuptial agreements, and estate planning.',
  },
  {
    icon: <HandHeartIcon />,
    title: 'Personal Injury',
    path: 'personal-injury',
    description:
      "If you've been injured due to negligence or misconduct, we're here to help you seek compensation for your losses.",
  },
  {
    icon: <Company />,
    title: 'Company Incorporation',
    path: 'company-incorporation',
    description:
      'Simplify the process of starting your business with our company incorporation services.',
  },
  {
    icon: <Shield />,
    title: 'Legal Compliance',
    path: 'legal-compliance',
    description:
      'Ensure your business adheres to all relevant laws and regulations with our expert legal compliance services.',
  },
  {
    icon: <FilePenIcon />,
    title: 'Copyright Protection',
    path: 'copyright-protection',
    description:
      'Safeguard your creative works with our copyright registration and protection services.',
  },
  {
    icon: <HouseModernIcon />,
    title: 'Real Estate Law',
    path: 'real-estate-law',
    description:
      'From property transactions and leasing agreements to land use and zoning issues, We cover all real estate law services',
  },
  {
    icon: <PassportIcon />,
    title: 'Immigration Law',
    path: 'immigration-law',
    description:
      'Navigate the complexities of immigration law with our dedicated team. We assist individuals, families, and businesses.',
  },
  {
    icon: <HandshakeIcon />,
    title: 'Mergers & Acquisitions',
    path: 'mergers-acquisitions',
    description:
      'Facilitate smooth and successful mergers and acquisitions with our expert legal guidance, from due diligence to finalization.',
  },
  {
    icon: <WorkIcon />,
    title: 'Employment Law',
    path: 'employment-law',
    description:
      'Ensure fair treatment in the workplace with our employment law services. We offer advice on employment contracts.',
  },
];

const Services = () => {
  return (
    <section className='py-20 relative bg-slate-50'>
      <Wrapper>
        <h2 className='text-5xl font-medium font-serif text-primary mb-16'>
          Practice Areas
        </h2>
        <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10'>
          {servicesData.map((item, i) => {
            return (
              <ServiceCard
                key={i}
                icon={item.icon}
                title={item.title}
                path={item.path}
                description={item.description}
              />
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};
export default Services;

type Props = {
  className?: string;
};

const Squares = ({ className }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 200 200'
      className={twMerge('fill-primary absolute  h-32', className)}
    >
      <path
        fill-rule='evenodd'
        d='M100 0H0v100h100v100h100V100H100V0Z'
        clip-rule='evenodd'
      ></path>
    </svg>
  );
};

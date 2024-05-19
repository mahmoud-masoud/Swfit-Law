import Wrapper from '@/components/ui/Wrapper';
import { Metadata } from 'next';

const privacyPolicy = [
  {
    title: 'Introduction',
    content:
      'Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website',
  },
  {
    title: 'Information We Collect',
    content:
      'Personal Information: We may collect personal information that you voluntarily provide to us when you contact us or use our services, such as your name, email address, phone number, and any other information you choose to provide. Non-Personal Information: We may collect non-personal information about your visit to our website, such as your IP address, browser type, operating system, and browsing behavior.',
  },
  {
    title: 'Use of Information',
    content:
      'Personal Information: We use your personal information to respond to your inquiries, provide legal services, and communicate with you about our services. Non-Personal Information: We use non-personal information to improve our website, analyze trends, and administer the site.',
  },
  {
    title: 'Information Sharing and Disclosure',
    content:
      'We do not sell, trade, or otherwise transfer your personal information to outside parties except as required by law or to protect our rights.',
  },
  {
    title: 'Security',
    content:
      'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.',
  },
  {
    title: 'Cookies',
    content:
      'Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.',
  },
  {
    title: 'Third-Party Links',
    content:
      'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites.',
  },
  {
    title: 'Changes to this Privacy Policy',
    content:
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.',
  },
];

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'The best law firm on the earth',
};
const page = () => {
  return (
    <section className='py-20'>
      <Wrapper>
        <h1 className='text-5xl font-serif text-primary mb-10'>
          Privacy Policy
        </h1>
        <ul className='list-disc flex gap-10 flex-col pl-4'>
          {privacyPolicy.map((item, i) => {
            return (
              <li key={i}>
                <div className='mb-4'>{item.title}</div>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      </Wrapper>
    </section>
  );
};
export default page;

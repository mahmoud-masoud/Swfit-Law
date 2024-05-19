import Wrapper from '@/components/ui/Wrapper';
import { Metadata } from 'next';

const termsOfService = [
  {
    title: 'Acceptance of Agreement',
    content:
      "You agree to the terms and conditions outlined in this Terms of Service Agreement ('Agreement') with respect to our website ([yourlawfirmwebsite.com]). This Agreement constitutes the entire and only agreement between us and you, and supersedes all prior or contemporaneous agreements, representations, warranties, and understandings with respect to the website, the content, and services provided by or through the website.",
  },
  {
    title: 'Legal Advice',
    content:
      'The information provided on this website is for general informational purposes only and is not intended to constitute legal advice. No attorney-client relationship is formed by your use of this website.',
  },
  {
    title: 'Use of Website',
    content:
      'You may use the website and its content solely for lawful purposes and in accordance with this Agreement. You agree not to use the website for any illegal or unauthorized purpose.',
  },
  {
    title: 'Intellectual Property Rights',
    content:
      'All content, including text, graphics, logos, and images, is the property of [Your Law Firm Name] and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written consent.',
  },
  {
    title: 'Limitation of Liability',
    content:
      'In no event shall [Your Law Firm Name] be liable for any damages whatsoever arising out of the use of or inability to use the website or any content provided on the website.',
  },
  {
    title: 'Changes to Terms',
    content:
      'We reserve the right to change these terms at any time. Updated versions of the terms will appear on this website and are effective immediately. You are responsible for regularly reviewing the terms.',
  },
  {
    title: 'Governing Law',
    content:
      'These terms and conditions are governed by the laws of [Your Jurisdiction], without regard to its conflict of law principles.',
  },
];

export const metadata: Metadata = {
  title: 'Terms Of Service',
  description: 'The best law firm on the earth',
};
const page = () => {
  return (
    <section className='py-20'>
      <Wrapper>
        <h1 className='text-5xl font-serif text-primary mb-10'>
          Terms Of Service
        </h1>
        <ul className='list-disc flex gap-10 flex-col pl-4'>
          {termsOfService.map((item, i) => {
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

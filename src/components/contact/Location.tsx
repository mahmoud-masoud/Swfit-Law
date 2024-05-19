const Location = () => {
  return (
    <div className='py-8 flex-1 rounded-lg overflow-hidden'>
      <p className='text-4xl text-primary font-serif mb-6'>Location</p>
      <iframe
        className='h-full w-full'
        src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9111.23905283938!2d31.237183044521146!3d30.07945275421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1715749502632!5m2!1sen!2seg'
        loading='lazy'
      ></iframe>
    </div>
  );
};
export default Location;

'use client';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import Toast from '@/components/ui/Toast';

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    shouldUseNativeValidation: true,
  });

  const onSubmit: SubmitHandler<FormValues> = async () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
    }, 2500);
  };

  const onClose = () => {
    setIsSuccess(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsSuccess(false);
    }, 2500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [success]);

  return (
    <div>
      <span className='text-secondary inline-block mb-4'>Contact Us</span>
      <h2 className='text-3xl font-medium mb-8 text-primary'>
        Reach Out To Us
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-6'>
          <div className={`flex flex-col gap-4 border-slate-400 `}>
            <label
              htmlFor='name'
              className={`${errors?.name && 'text-red-500'}`}
            >
              Name
            </label>
            <input
              {...register('name', { required: true, min: 3 })}
              type='text'
              name='name'
              placeholder='name'
              className={`border border-primary/60 py-2 px-4 bg-transparent rounded ${
                errors?.name && 'border-red-500'
              }`}
            />
            {errors?.name && (
              <div className='text-red-500'>name is required</div>
            )}
          </div>
          <div className={`flex flex-col gap-4 border-slate-400`}>
            <label
              htmlFor='email'
              className={`${errors?.email && 'text-red-500'}`}
            >
              Email
            </label>
            <input
              {...register('email', {
                required: true,
                pattern: /^\S+@\S+\.\S{2,}$/i,
              })}
              type='text'
              name='email'
              placeholder='email'
              className={`border border-primary/60 py-2 px-4 bg-transparent rounded ${
                errors?.email && 'border-red-500'
              }`}
            />
            {errors?.email && (
              <div className='text-red-500'>email is required</div>
            )}
          </div>
          <div className={`flex flex-col gap-4 border-green-400`}>
            <label
              htmlFor='name'
              className={`${errors?.message && 'text-red-500'}`}
            >
              Message
            </label>
            <textarea
              {...register('message', { required: true, min: 3 })}
              name='message'
              placeholder='your message'
              className={`border border-primary/60 py-2 px-4 bg-transparent min-h-40 rounded ${
                errors?.message && 'border-red-500'
              }`}
            />
            {errors?.message && (
              <div className='text-red-500'>Message is required</div>
            )}
          </div>

          <button
            className='bg-gradient-to-tr bg-secondary hover:bg-secondary/85 text-white
           py-3 px-6 text-lg rounded-md transition-all duration-300
            hover:bg-gradient-to-br'
          >
            {isSubmitting ? <LoadingSpinner /> : 'Send The Message'}
          </button>
        </div>
      </form>
      <Toast success={success} onClose={onClose} />
    </div>
  );
};

export default ContactForm;

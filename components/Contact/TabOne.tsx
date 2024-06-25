import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';

const TabOne = () => {
  // const formSchema = z.object({
  //   firstName: z
  //     .string({ message: 'First name can not be empty' })
  //     .min(4, { message: 'First name must be at least 4 characters' })
  //     .max(50, { message: 'First name must be less than 50 characters' }),
  //   lastName: z
  //     .string({ message: 'Last name can not be empty' })
  //     .min(4, { message: 'Last name must be at least 4 characters' })
  //     .max(50, { message: 'Last name must be less than 50 characters' }),
  //   email: z
  //     .string({ message: 'Email can not be empty' })
  //     .email({ message: 'Email must be in email format' }),
  //   phoneNumber: z
  //     .string({ message: 'Phone number can not be empty' })
  //     .min(9, { message: 'Phone number must be at least 9 characters' })
  //     .max(13, { message: 'Phone number must be less than 13 characters' }),
  //   subjectMessage: z
  //     .string({ message: 'Subject message can not be empty' })
  //     .min(5, { message: 'Subject message must be at least 5 characters' })
  //     .max(50, { message: 'Subject message must be less than 50 characters' }),
  //   message: z
  //     .string({ message: 'Message can not be empty' })
  //     .min(5, { message: 'Message must be at least 5 characters' }),
  // });

  // const { handleSubmit, formState: { errors } } = useForm({
  //   resolver: zodResolver(formSchema)
  // });

  // const onSubmit = (data) => {
  //   console.log(data);
  //   // Lakukan sesuatu dengan data yang disubmit
  // };

  return (
    <section className='pt-5'>
      <form className='flex flex-col gap-6'>
        <div className='flex w-full gap-4'>
          <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="firstName" className='text-sm font-[500]'>First Name</label>
            <input type="text" name="firstName" className='border border-[#DDE5E9] rounded-lg px-4 py-[11px]' />
          </div>
          <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="lastName" className='text-sm font-[500]'>Last Name</label>
            <input type="text" name="lastName" className='border border-[#DDE5E9] rounded-lg px-4 py-[11px]' />
          </div>
        </div>

        <div className='flex w-full gap-4'>
          <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="email" className='text-sm font-[500]'>Email</label>
            <input type="email" name="email" className='border border-[#DDE5E9] rounded-lg px-4 py-[11px]' />
          </div>
          <div className='flex flex-col gap-2 w-1/2'>
            <label htmlFor="phoneNumber" className='text-sm font-[500]'>Phone Number</label>
            <input type="tel" name="phoneNumber" className='border border-[#DDE5E9] rounded-lg px-4 py-[11px]' />
          </div>
        </div>

        <div className='flex flex-col w-full gap-2'>
          <label htmlFor="subjectMessage" className='text-sm font-[500]'>Subject Message</label>
          <input type="text" name="subjectMessage" className='border border-[#DDE5E9] rounded-lg px-4 py-[11px]' />
        </div>
        <div className='flex flex-col w-full gap-2'>
          <label htmlFor="message" className='text-sm font-[500]'>Message</label>
          <textarea name="message" className='border border-[#DDE5E9] rounded-lg px-4 py-[11px]'></textarea>
        </div>

        <div className='flex w-full gap-5'>
          <input type="text" name="kode" className='w-full border border-[#DDE5E9] rounded-lg px-4 py-[11px]' placeholder='Input Code' />
          <label htmlFor="message" className='w-full text-sm font-[500] py-4 bg-[#D9D9D9] text-center'>Kode</label>
        </div>

        <button type="submit" className='text-sm font-[500] bg-[#480DEC] text-white py-4 rounded-xl'>Send Message</button>
      </form >
    </section >
  );
};

export default TabOne;

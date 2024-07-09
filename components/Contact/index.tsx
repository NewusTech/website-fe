import Image from 'next/image'
import React from 'react'
import TabsContact from './TabsContact'
import Link from 'next/link'
import SocialLink from '../shared/Social/SocialLink'

const ContactUs = () => {
  return (
    <section className="max-w-7xl mx-auto pt-2 md:pt-10 xl:pt-20 md:pb-20">
      <div className='flex flex-col 2xl:gap-[45px] md:flex-row justify-between'>
        <div className="w-[40%] md:justify-start hidden md:flex md:flex-col font-bold px-5">
          <Image src={'/assets/images/contact.svg'} width={485} height={563} alt="Dummy Contact" className='2xl:pb-16 w-full object-cover h-[450px] 2xl:h-[500px]' />
          <h1 className='text-[24px] pb-4'>Bandar Lampung</h1>
          <h2 className='font-normal pb-4'>Jl. Salim Batubara No.118, Kupang Teba, Kec. Tlk. Betung Utara, Kota Bandar Lampung, Lampung 35212</h2>
          <div className='flex items-center justify-start gap-6 '>
            <SocialLink href="https://www.facebook.com/newustechnology/" src="/assets/icons/black/fb.svg" alt="Facebook" />
            <SocialLink href="https://www.twitter.com" src="/assets/icons/black/twitter.svg" alt="Twitter" />
            <SocialLink href="https://id.linkedin.com/company/newustechnology" src="/assets/icons/black/linkedin.svg" alt="LinkedIn" />
            <SocialLink href="https://www.instagram.com/newustechnology/" src="/assets/icons/black/instagram.svg" alt="Instagram" />
            <SocialLink href="https://www.tiktok.com/@newustech" src="/assets/icons/black/tiktok.svg" alt="Tiktok" />
          </div>
        </div>
        <div className='md:w-[60%]'>
          <TabsContact />
        </div>

        <div className='md:hidden p-4 pt-5'>
          <h1 className='font-bold md:text-[24px] pb-4'>Bandar Lampung</h1>
          <h2 className='text-[12px] md:text-sm font-normal pb-4'>Jl. Salim Batubara No.118, Kupang Teba, Kec. Tlk. Betung Utara, Kota Bandar Lampung, Lampung 35212</h2>
          <div className='flex items-center justify-start gap-6 '>
            <SocialLink href="https://www.facebook.com/newustechnology/" src="/assets/icons/black/fb.svg" alt="Facebook" />
            <SocialLink href="https://www.twitter.com" src="/assets/icons/black/twitter.svg" alt="Twitter" />
            <SocialLink href="https://id.linkedin.com/company/newustechnology" src="/assets/icons/black/linkedin.svg" alt="LinkedIn" />
            <SocialLink href="https://www.instagram.com/newustechnology/" src="/assets/icons/black/instagram.svg" alt="Instagram" />
            <SocialLink href="https://www.tiktok.com/@newustech" src="/assets/icons/black/tiktok.svg" alt="Tiktok" />
          </div>
        </div>
      </div>
    </section >
  )
}

export default ContactUs
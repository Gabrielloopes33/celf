'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';

interface links {
    link: string;
}

interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}

const socialLinks: socialLinks[] = [
    {
        imgSrc: '/assets/footer/facebook.svg',
        link: 'www.facebook.com',
        width: 10
    },
    {
        imgSrc: '/assets/footer/instagram.svg',
        link: 'www.instagram.com',
        width: 14
    },
    {
        imgSrc: '/assets/footer/twitter.svg',
        link: 'www.twitter.com',
        width: 14
    },

]

const links: links[] = [
    {
        link: '',
    },
    {
        link: '',
    },
    {
        link: '',
    },

]



const footer = () => {
    return (

        <div className="bg-[#5E5E5E]">

            <div className="mx-auto max-w-2xl pt-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <motion.div 
                    className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >

                    {/* COLUMN-1 */}

                    <motion.div 
                        className='sm:col-span-6 lg:col-span-3'
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="flex flex-shrink-0 items-center border-right">
                            <Image 
                                src="/assets/logo/logo09.png.png" 
                                alt="CELF Logo" 
                                width={150} 
                                height={10}
                            
                                priority
                            />
                        </div>
                    </motion.div>

                    <div className='sm:col-span-6 lg:col-span-5 flex items-center'>
                        <div className='flex gap-4'>
                            {links.map((items, i) => (
                                <motion.div 
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link href="/" className="text-lg font-normal text-white flex items-center justify-center">
                                         {items.link}
                                    </Link>
                                </motion.div>
                            ))}

                        </div>
                    </div>

                    <div className='sm:col-span-6 lg:col-span-4'>
                        <div className='flex gap-4 lg:justify-end'>
                            {socialLinks.map((items, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link href={items.link}>
                                        <div className="socialBg h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-white">
                                            <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={2} className="sepiaa" />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}

                        </div>
                    </div>

                </motion.div>

                {/* All Rights Reserved */}

                <motion.div 
                    className='pt-12 pb-10 lg:flex items-center justify-between border-t border-t-white border-opacity-30'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.h4 
                        className='text-lg text-center md:text-start font-normal text-white opacity-60'
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        @2025.CELF Empreendimentos.Todos os direitos reservados.
                    </motion.h4>
                    <div className="flex gap-5 mt-6 md:mt-0 justify-center md:justify-start">
                        <motion.h4 
                            className='opacity-60 text-lg font-normal text-white'
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link href="/" target="_blank">Política de Privacidade</Link>
                        </motion.h4>
                        <div className="h-5 bg-white opacity-60 w-0.5"></div>
                        <motion.h4 
                            className='opacity-60 text-lg font-normal text-white'
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link href="/" target="_blank"></Link>
                        </motion.h4>
                    </div>
                </motion.div>
            </div>

        </div >
    )
}

export default footer;

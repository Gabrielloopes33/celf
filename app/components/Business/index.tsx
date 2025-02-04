'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Business = () => {
    return (
        <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
            <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
                <motion.div 
                    className='col-span-6 flex flex-col justify-center'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h2 
                        className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        Excelência em Reformas no Vale do Aço
                    </motion.h2>
                    
                    <motion.h3 
                        className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        A CELF Empreendimentos é uma empresa especializada em reformas e serviços de planejamento e execução para condomínios, empresas e espaços comerciais. Com atuação destacada no Vale do Aço, oferecemos soluções personalizadas, garantindo qualidade, pontualidade e eficiência em cada projeto.
                    </motion.h3>
                    
                    <div className="flex flex-col gap-4 pt-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="bg-[#f5f5f5] p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 w-fit mx-auto lg:mx-0"
                        >
                            <Link href={'/'} className="text-midnightblue text-lg font-medium block">
                                Saiba mais sobre nós
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div 
                    className='col-span-6 flex justify-center mt-10 lg:mt-0 overflow-hidden'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Image 
                            src="/assets/business/Icon 07.svg" 
                            alt="business" 
                            width={10000} 
                            height={10000}
                            className="w-full h-auto" 
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Business;

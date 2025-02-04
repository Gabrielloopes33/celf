'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Payment = () => {
    return (
        <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
            <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
                <motion.div 
                    className='col-span-6 flex justify-center'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <Image 
                        src="/assets/payment/Icon 06.svg" 
                        alt="Builder" 
                        width={10000} 
                        height={10000} 
                        className="w-full h-auto"
                    />
                </motion.div>

                <motion.div 
                    className='col-span-6 flex flex-col justify-center mb-32'
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2 
                        className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'
                        whileHover={{ scale: 1.02 }}
                    >
                        Nosso objetivo é transformar espaços, superando expectativas.
                    </motion.h2>
                    <motion.h3 
                        className='text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3'
                        whileHover={{ scale: 1.02 }}
                    >
                        Trabalhamos com uma equipe experiente e comprometida em atender às necessidades dos nossos clientes, seja para pequenas adequações ou grandes reformas.
                    </motion.h3>
                    <br/>
                    <br/>
                    <motion.h2 
                        className='text-midnightblue text-2xl sm:text-2xl font-semibold text-center lg:text-start lh-143'
                        whileHover={{ scale: 1.02 }}
                    >
                        Nossos Diferenciais
                    </motion.h2>
                    
                    <div className="flex flex-col gap-4 pt-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#f5f5f5] p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                        >
                            <Link href={'/'} className="text-midnightblue text-lg font-medium block">
                                Planejamento detalhado para cada projeto
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#f5f5f5] p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                        >
                            <Link href={'/'} className="text-midnightblue text-lg font-medium block">
                                Equipe qualificada e materiais de alta qualidade
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#f5f5f5] p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                        >
                            <Link href={'/'} className="text-midnightblue text-lg font-medium block">
                                Atendimento personalizado e acompanhamento constante
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Payment;

'use client';

import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const Banner = () => {
    const scrollY = useMotionValue(0);
    
    // Update scroll value
    useEffect(() => {
        const handleScroll = () => {
            scrollY.set(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollY]);

    // Convert scroll into scale
    const scale = useTransform(scrollY, [0, 900], [1, 1.2]);

    // Animation variants for h1, h2, and button
    const textVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    const buttonVariants = {
        initial: { scale: 0 },
        animate: { scale: 1 },
    };

    return (
        <div className='relative from-[#ebebeb] via-[#fff] to-[#fff] animate-gradient-slow overflow-hidden'>
            <div className='absolute inset-0 bg-grid-pattern opacity-[0.05] bg-grid-size'></div>
            <div className="relative mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
                <div className='grid grid-cols-1 lg:grid-cols-12'>
                    <div className='col-span-4 flex flex-col justify-evenly relative'>
                        <motion.h1 
                            className='text-dodgerblue text-6xl md:text-85xl text-center lg:text-start font-bold lh-150 pt-5'
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 0.5 }}
                        >
                            Transformando e Realizando Sonhos.
                        </motion.h1>
                        
                        <motion.h2 
                            className='text-dodgerblue opacity-75 text-lg font-normal text-center lg:text-start pt-8'
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 0.5, delay: 0.2 }} // Optional delay
                        >
                            Soluções completas em reformas e planejamento para o Vale do Aço.
                        </motion.h2>

                        <div className='pt-8 mx-auto lg:mx-0'>
                            <motion.a 
                                href="https://wa.me/553183590826" // Substitute with your number
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={buttonVariants}
                                initial="initial"
                                animate="animate"
                                transition={{ duration: 0.5, delay: 0.4 }} // Optional delay
                                className="text-white text-xl font-medium py-6 px-12 rounded-full transition duration-150 ease-in-out bg-[#1a3a8f] hover:opacity-90 inline-block"
                            >
                                Faça seu orçamento
                            </motion.a>
                        </div>
                    </div>

                    <div className='col-span-8 flex justify-center xl:-mb-12 xl:-mr-12 pt-20 lg:pt-10 overflow-hidden'>
                        <motion.div style={{ scale }}>
                            <Image 
                                src="/assets/banner/Layer 0.svg" 
                                alt="Banner ilustrativo" 
                                width={1500} 
                                height={500} 
                                className="w-full h-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
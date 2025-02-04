'use client';

import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const Banner = () => {
    const scrollY = useMotionValue(0);
    
    // Atualiza o valor de scroll
    useEffect(() => {
        const handleScroll = () => {
            scrollY.set(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollY]);

    // Transforma o scroll em escala
    const scale = useTransform(scrollY, [0, 900], [1, 1.2]);

    return (
        <div className='relative bg-gradient-to-br from-[#828282] via-[#fff] to-[#fff] animate-gradient-slow overflow-hidden'>
            <div className='absolute inset-0 bg-grid-pattern opacity-[0.03] bg-grid-size'></div>
            <div className="relative mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12'>


                    <div className='col-span-7 flex flex-col justify-evenly relative'>
                        <Image src="/assets/banner/star.svg" alt="star-image" width={95} height={97} className='absolute top-[-74px] right-[51px]' />
                        <Image src="/assets/banner/lineone.svg" alt="line-image" width={190} height={148} className='absolute top-[-94px] right-[11px]' />
                        <h1 className='text-dodgerblue text-4xl md:text-85xl text-center lg:text-start font-semibold lh-133 pt-5'>Transformando e Realizando Sonhos.</h1>
                        <h2 className='text-dodgerblue opacity-75 text-lg font-normal text-center lg:text-start pt-8'>Soluções completas em reformas e planejamento para o Vale do Aço.</h2>
                        <div className='pt-8 mx-auto lg:mx-0'>
                            <a 
                                href="https://wa.me/5531999999999" // Substitua pelo seu número
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-xl font-medium py-6 px-12 rounded-full transition duration-150 ease-in-out bg-[#1a3a8f] hover:opacity-90 inline-block"
                            >
                                Faça seu orçamento
                            </a>
                        </div>
                    </div>

                    <div className='col-span-5 flex justify-center xl:-mb-24 xl:-mr-12 pt-20 lg:pt-10 overflow-hidden'>
                        <motion.div style={{ scale }}>
                            <Image 
                                src="/assets/banner/banner.svg" 
                                alt="Banner ilustrativo" 
                                width={1000} 
                                height={1000} 
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

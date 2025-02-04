'use client';

import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';

interface datatype {
    imgSrc: string;
    heading: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/features/Icon 01.svg",
        heading: "Reformas de Áreas Comuns",
        paragraph: 'Salões de festas, portarias, áreas de lazer, entre outros.',
    },
    {
        imgSrc: "/assets/features/Icon 02.svg",
        heading: "Revitalização de Fachadas",
        paragraph: 'Transforme a aparência do seu condomínio ou espaço comercial.',

    },
    {
        imgSrc: "/assets/features/Icon 03.svg",
        heading: "Manutenção Predial e Residencial",
        paragraph: 'Serviços de elétrica, hidráulica e acabamento.',

    },
    {
        imgSrc: "/assets/features/Icon 04.svg",
        heading: "Consultoria e Planejamento",
        paragraph: ' Projetos detalhados para reformas otimizadas.',

    },
    {
        imgSrc: "/assets/features/Icon 05.svg",
        heading: "Gestão de Obras",
        paragraph: 'Coordenação completa, do início ao fim, garantindo resultados.',

    }
]

const Features = () => {
    return (
        <div className="bg-babyblue" id="features">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">Nossos Serviços</h3>
                <h4 className="text-black opacity-60 text-lg font-normal text-center">Oferecemos uma ampla gama de serviços para atender a condomínios, empresas <br/>e clientes individuais. Nosso portfólio inclui:</h4>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-10'>
                    {Aboutdata.map((item, i) => (
                        <motion.div 
                            key={i} 
                            className='bg-white rounded-2xl p-8 featureShadow cursor-pointer'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <motion.div
                                whileHover={{ rotate: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Image 
                                    src={item.imgSrc} 
                                    alt={item.imgSrc} 
                                    width={100} 
                                    height={100} 
                                    className="mb-4"
                                />
                            </motion.div>
                            <h3 className="text-2xl font-semibold text-black mt-5">{item.heading}</h3>
                            <h4 className='text-lg font-normal text-black opacity-50 my-2'>{item.paragraph}</h4>
                            <Link href={'/'} className="text-electricblue text-xl font-medium flex gap-2 pt-10 pb-2">
                                 <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features;

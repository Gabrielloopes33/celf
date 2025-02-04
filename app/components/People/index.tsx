import Image from 'next/image';
import Link from 'next/link';

const People = () => {

    return (
        <div id="product">
            <div className="mx-auto max-w-7xl px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 pt-10 lg:pt-0 lg:mt-0'>

                    <div className='col-span-6 flex justify-center'>
                        <Image src="/assets/people/testimony.png" alt="nothing" width={1000} height={815} />
                    </div>

                    <div className='col-span-6 flex flex-col justify-evenly lg:pl-24 mt-10 lg:mt-0'>
                        <h1 className='text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143'> O Que Nossos Clientes Dizem</h1>
                        <h3 className='text-black text-lg font-normal text-center lg:text-start lh-73 opacity-75 pt-2 lg:pt-0'>Trabalhamos com uma equipe experiente e comprometida em atender às necessidades dos nossos clientes, seja para pequenas adequações ou grandes reformas. </h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default People;

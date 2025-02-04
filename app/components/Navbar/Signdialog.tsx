import React from 'react';
import Link from 'next/link';

const Signin = () => {
    return (
        <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:pr-0">
            <div className='hidden lg:block'>
                <Link 
                    href="/servicos" 
                    className='text-lg text-blue font-medium hover:opacity-75 transition duration-150 ease-in-out'
                >
                    Nossos Serviços
                </Link>
            </div>
        </div>
    );
};

export default Signin;

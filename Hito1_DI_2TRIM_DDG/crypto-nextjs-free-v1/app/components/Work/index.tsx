"use client"
import Image from 'next/image';

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
    hiddenpara: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Work/icon-one.svg',
        heading: 'Registrese',
        subheading: 'Cree una cuenta para poder contratar nuestros servicios',
        hiddenpara: 'Acceda a nuestra página y registrese de manera sencilla para poder disfrutar de nuestros servicios',
    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'Ingrese su forma de pago',
        subheading: 'Eliga de que forma quiere pagar nuestros servicios',
        hiddenpara: 'Si usted desea elegir pago con tarjeta, deberá vincularla con su cuenta',
    },
    {
        imgSrc: '/smile.png',
        heading: 'Disfrute de nuestros servicios',
        subheading: 'Cuando haya contratado nuestros servicios, ya puede quedarse tranquilo.',
        hiddenpara: 'Ofrecemos tanto ayuda como seguridad a su empresa, después de contratar nuestros servicios puede quedarse tranquilo.',
    },

]

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>¿Qué servicios ofrecemos?</h3>
                    <p className='text-bluish md:text-lg font-normal leading-8'>Ofrecemos diferentes servicios según la necesidad del cliente, entre estos entran. Copias de seguridad, Consultoría de empresas, Seguridad de los Sistemas.<br /> ¡Confie en nosotros!</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>

                    {workdata.map((items, i) => (
                        <div className='card-b p-8' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal text-bluish text-center mt-2'>{items.subheading}</p>
                            <span className="text-base font-normal m-0 text-bluish text-center hides">{items.hiddenpara}</span>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Work;

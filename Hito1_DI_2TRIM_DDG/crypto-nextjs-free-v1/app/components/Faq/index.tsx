"use client"
import Image from "next/image";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

interface faqdata {
    heading: string;
    subheading: string;
}

const faqdata: faqdata[] = [
    {
        heading: "1. ¿Qué planes tenemos?",
        subheading: 'Disponemos de distintos planes para que cualquiera pueda dar uso a nuestros servicios, desde praticiones de los pagos hasta descuentos u ofertas.'
    },
    {
        heading: "2. ¿Cuántos años lleva la empresa?",
        subheading: 'Somos una empresa que llevamos mas de 20 años en el sector, hemos trabajado con todo tipo de clientes y sabempos adaptarnos a casi cualquier situación debido a nuestra experiencia'
    },
    {
        heading: "3. ¿A quién nos enfocamos?",
        subheading: 'Nos enfocamos en asesorar empresas del sector informático para asi mejorar su eficiencia y conseguir asegurarlas de ataques de ciber-delincuentes.'
    },

]

const Faq = () => {
    return (
        <div className="my-20 px-6" id="faq-section">
            <h3 className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">Preguntas frecuentes</h3>
            <p className="text-center lg:text-lg font-normal text-bluish">Estas son algunas de las preguntas mas frecuentes que <br /> nos suelen hacer los clientes.</p>

            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2">
                    {/* Column-1 */}
                    <div>
                        <div className="w-full px-4 pt-16">

                            {faqdata.map((items, i) => (
                                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5" key={i}>
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                                                    <span>{items.heading}</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-purple-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">{items.subheading}</Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Column-2 */}
                    <div className="mt-32">
                        <Image src={'/images/Faq/faq.svg'} alt="faq-image" width={941} height={379} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Faq;

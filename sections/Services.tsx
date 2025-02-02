'use client';

import { servicesItems } from '@/utils/constants';
import useIsClient from '@/utils/hooks';
import { motion } from 'framer-motion';

const ServiceItems = () => {
    return servicesItems.map(({ id, title, price, description, features }) => (
        <div
            key={id}
            className="m-2 p-2 border-4 border-white rounded-lg basis-1/4"
        >
            <h3 className="text-xl font-bold font-playfair py-2">{title}</h3>
            <p className="font-playfair text-2xl py-2 font-bold">{price}</p>
            <p className="font-lato text-lg py-2 border-b-2 border-white">
                {description}
            </p>
            <button className="font-lato text-lg flex items-center justify-center w-full mx-auto border-b-2 border-white p-2 ">
                <a
                    href="#contact"
                    className="bg-footer py-2 w-3/4 text-text-footer rounded-lg"
                >
                    Contactez-moi
                </a>
            </button>
            <div className="my-4">
                {features.map((feature, index) => (
                    <p key={index} className="flex mt-2 font-lato">
                        <span className="featured-check"></span>
                        {feature}
                    </p>
                ))}
            </div>
        </div>
    ));
};

const Services = () => {
    const isClient = useIsClient();

    return (
        <>
            {isClient ? (
                <div className="bg-alternate p-5" id="services">
                    <div className="max-w-7xl mx-auto flex flex-col justify-center">
                        <h2 className="text-center text-text-secondary text-4xl font-lato font-bold">
                            Services
                        </h2>
                        <div className="flex flex-col lg:flex-row p-5">
                            <ServiceItems />
                        </div>
                    </div>
                </div>
            ) : (
                <motion.div className="bg-alternate p-5" id="services">
                    <div className="max-w-7xl mx-auto flex flex-col justify-center">
                        <h2 className="text-center text-text-secondary text-4xl font-lato font-bold">
                            Services
                        </h2>
                        <div className="flex flex-col lg:flex-row p-5">
                            <ServiceItems />
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Services;

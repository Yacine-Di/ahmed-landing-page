'use client';

import Image from 'next/image';
import { expertiseItems, expertiseSubtitle } from '../utils/constants';
import { motion } from 'framer-motion';
import { fadeInUp, staggered } from '@/utils/animations';
import useIsClient from '@/utils/hooks';

const ExpertiseItems = () => {
    return expertiseItems.map(({ id, icon, alt, title, text }) => (
        <motion.div
            key={id}
            variants={fadeInUp}
            className="p-10 bg-footer m-2 rounded-md text-white basis-1/3"
        >
            <Image
                width={40}
                height={40}
                src={icon}
                className="mb-4 p-2 box-content rounded-lg border-2 bg-alternate"
                alt={alt}
            />
            <h3 className="text-xl font-lato font-bold mb-4">{title}</h3>
            <p className="text-lg">{text}</p>
        </motion.div>
    ));
};

const Expertise = () => {
    const isClient = useIsClient();

    return (
        <section className="bg-default p-5 scroll-mt-20" id="expertise">
            <section className="max-w-7xl mx-auto flex flex-col align-center">
                <h2 className="text-center text-text-secondary font-lato font-bold text-4xl py-2">
                    Mon expertise
                </h2>
                <p className="p-5 text-xl font-lato">{expertiseSubtitle}</p>
                {isClient ? (
                    <motion.div
                        className="flex flex-col lg:flex-row max-w-7xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggered}
                    >
                        <ExpertiseItems />
                    </motion.div>
                ) : (
                    <div className="flex flex-col lg:flex-row max-w-7xl">
                        <ExpertiseItems />
                    </div>
                )}
            </section>
        </section>
    );
};

export default Expertise;

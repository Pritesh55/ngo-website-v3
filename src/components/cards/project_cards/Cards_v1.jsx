import Image from 'next/image';
import React from 'react'

const Cards_v1 = () => {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="xl:w-1/4 md:w-1/2 p-4">
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/river-219972_640.jpg" alt="content" width={724} height={404} />

                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cards_v1
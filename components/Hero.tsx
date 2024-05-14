import React from 'react';
import Image from "next/image";
import {Media} from "@/payload-types";

const Hero:React.FC<{
    heroImage: string | Media,
    heroTitle: string,
    heroSubtitle?: string | null,
    heroBody?: string | null,
}> = ({heroTitle, heroSubtitle, heroBody, heroImage}) => {

    function isMedia(obj: any): obj is Media {
        return 'url' in obj && 'alt' in obj;
    }

    return (
        <div className="h-[500px] overflow-hidden relative">
            <Image
                src={(isMedia(heroImage) && heroImage.url?.length) ? heroImage.url : '/placeholder.jpg'}
                alt={isMedia(heroImage) ? heroImage.alt : heroImage}
                fill={true}
                objectFit="cover"
            />
            <div className="py-5 px-7 rounded-lg text-white w-5xl absolute bg-gray-800 bg-opacity-90 left-1/2 -translate-x-1/2 bottom-10">
                <h2 className="text-3xl">{heroTitle}</h2>
                {heroSubtitle && (<h3 className="text-xl mt-1">{heroSubtitle}</h3>)}
                {heroBody && (<div className="text-sm mt-3">{heroBody}</div>)}
            </div>
        </div>
    );
};

export default Hero;
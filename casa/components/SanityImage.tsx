import { ReactElement } from 'react';
import Image from 'next/image';
import { getImageDimensions } from '@sanity/asset-utils';
import { urlFor } from '../lib/sanity';

export const IdealImage = ({ image }: { image: any }): ReactElement => {
  const alt = image?.alt ?? "An image without an alt, whoops";

  return (
    <div>
      {image?.asset && (
        <Image
          src={urlFor(image).url()}
          alt={alt}
          width={getImageDimensions(image).width}
          height={getImageDimensions(image).height}
          placeholder="blur"
          blurDataURL={urlFor(image).width(24).height(24).blur(10).url()}

          className='min-h-[240px] object-contain mx-auto'
        />
      )}
    </div>
  );
};
'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import mergeTailwind from '@/utils/mergeTailwind';
import Slider from './Slider';
import ContactButton from './ContactButton';
import Loader from './Loader';

type StyleTypes = 'map' | 'directory';

interface Props {
  images: string[]
  name: string
  description: string
  contact: {
    tel?: string
    email?: string
    website?: string
  }
  storeId: string
  type: StyleTypes
  noSlider?: boolean
}

interface StyleTypeClasses {
  container?: string
  image?: string
  figure?: string
  content?: string
  title?: string
  contactItem?: string
  description?: string
}

const mapTypeClasses: StyleTypeClasses = {
  container: 'flex max-h-32 md:max-h-40 w-72 md:w-80 h-full gap-2',
  image: 'md:w-full h-full min-w-24',
  figure: 'flex-[0.5]',
  content: 'max-h-full flex-[1] overflow-y-auto',
  title: 'leading-none',
  contactItem: 'text-left',
};

const directoryTypeClasses: StyleTypeClasses = {
  container: 'flex p-4 flex-col md:gap-8 lg:h-[212px] lg:grid lg:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] items-center text-center overflow-hidden',
  image: 'max-h-[133px] md:max-h-[179px]',
  figure: 'w-full',
  content: 'md:text-left md:w-full overflow-hidden md:flex md:flex-col h-full',
  contactItem: 'text-center lg:text-sm md:text-left md:truncate',
  description: 'overflow-y-auto md:flex-1',
};

const baseStyles: StyleTypeClasses = {
  container: 'gap-2',
  image: 'object-cover rounded-md',
  figure: 'overflow-y-hidden',
  content: 'text-sm',
  title: 'text-lg capitalize mb-1',
  contactItem: 'lg:text-base m-0 truncate',
  description: '',
};

type TypesMap = {
  [key in StyleTypes]: StyleTypeClasses;
};

const typesMap: TypesMap = {
  map: mapTypeClasses,
  directory: directoryTypeClasses,
};

export default function StoreCard({
  images,
  name,
  description,
  contact,
  storeId,
  type,
  noSlider,
}: Props) {
  const [imageLoading, setImageLoading] = useState(true);
  const mappedClasses = typesMap[type];
  const layoutClasses: StyleTypeClasses = {
    container: '',
    content: '',
    figure: '',
    image: '',
    title: '',
    description: '',
  };

  Object.keys(baseStyles).forEach((key) => {
    const element = key as keyof StyleTypeClasses;
    layoutClasses[element] = mergeTailwind(
      `${baseStyles[element]} ${mappedClasses[element] || ''}`,
    );
  });

  const onImageLoad = () => {
    setImageLoading(false);
  }

  return (
    <div className={layoutClasses.container}>
      {
        noSlider || images.length === 1 ? (
          <figure className={layoutClasses.figure}>
            {
              imageLoading && (
                <Loader color='#000' />
              )
            }
            <Image
              src={images[0]}
              alt={`Image of ${name}`}
              width={296}
              height={133}
              className={layoutClasses.image}
              onLoad={onImageLoad}
              priority
            />
          </figure>
        ) : (
          <Slider
            sliderIdentifier={storeId}
            elements={
              images.map((src, i) => (
                <Image
                  src={src}
                  alt={`Image ${i} of ${name}`}
                  width={296}
                  height={133}
                  className={layoutClasses.image}
                />
              ))
            }
          />
        )
      }
      <div className={layoutClasses.content}>
        <h2 className={layoutClasses.title}>{name}</h2>
        <p className={layoutClasses.description}>{description}</p>
        <ul className="mt-2 flex items-center gap-2">
          {
            Object.keys(contact).map((key, i) => {
              const contactValue = contact[key as keyof typeof contact];

              if (contactValue) {
                return (
                  <li
                    key={storeId.concat(i.toString())}
                    className={layoutClasses.contactItem}
                    title={contactValue}
                  >
                    {
                      contactValue && <ContactButton type={key} href={contactValue || ''} />
                    }
                  </li>
                );
              }

              return null;
            })
          }
        </ul>
      </div>
    </div>
  );
}

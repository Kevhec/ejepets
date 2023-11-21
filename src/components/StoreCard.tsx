import React from 'react';
import Image from 'next/image';
import mergeTailwind from '@/utils/mergeTailwind';

type StyleTypes = 'map' | 'directory';

interface Props {
  img: string
  name: string
  description: string
  contact: {
    tel?: string
    email?: string
    website?: string
  }
  storeId: string
  type: StyleTypes
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
  container: 'grid grid-cols-[0.5fr_1fr] md:flex md:flex-col items-center max-h-32 md:max-h-60 w-72 md:w-40',
  image: 'w-28 md:w-full md:max-w-[200px] md:h-32 h-full',
  figure: 'h-full md:w-full md:h-auto',
  content: 'max-h-full overflow-y-auto md:w-full',
  title: 'leading-none',
  contactItem: 'text-left',
};

const directoryTypeClasses: StyleTypeClasses = {
  container: 'flex flex-col md:gap-8 lg:h-[212px] lg:grid lg:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] items-center text-center overflow-hidden',
  image: 'max-h-[133px] md:max-h-[179px]',
  figure: 'w-full',
  content: 'md:text-left md:w-full overflow-hidden md:flex md:flex-col h-full',
  contactItem: 'text-center lg:text-sm md:text-left md:truncate',
  description: 'overflow-y-auto md:flex-1',
};

const baseStyles: StyleTypeClasses = {
  container: 'gap-2 p-4',
  image: 'object-cover rounded-md',
  figure: '',
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
  img,
  name,
  description,
  contact,
  storeId,
  type,
}: Props) {
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

  return (
    <div className={layoutClasses.container}>
      <figure className={layoutClasses.figure}>
        <Image
          src={img}
          alt={`Image of ${name}`}
          width={296}
          height={133}
          className={layoutClasses.image}
        />
      </figure>
      <div className={layoutClasses.content}>
        <h2 className={layoutClasses.title}>{name}</h2>
        <p className={layoutClasses.description}>{description}</p>
        <ul className="mt-2 italic">
          {
            Object.keys(contact).map((key, i) => {
              const contactValue = contact[key as keyof typeof contact];
              return (
                <li
                  key={storeId.concat(i.toString())}
                  className={layoutClasses.contactItem}
                  title={contactValue}
                >
                  {
                    key === 'website' ? (
                      <a
                        href={contactValue}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {contactValue}
                      </a>
                    ) : (
                      <p>
                        {contactValue}
                      </p>
                    )
                  }
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

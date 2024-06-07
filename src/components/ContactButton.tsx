import React from 'react';
import Icon from './icon';
import { IconVariant } from './icon/iconTypes';

type AllowedTypes = 'tel' | 'website' | string;

interface Props {
  type: AllowedTypes
  href: string
}

export default function ContactButton({ type, href }: Props) {
  let formattedHref;

  switch (type) {
    case 'tel':
      formattedHref = `tel:${href}`;
      break;
    default:
      formattedHref = href;
  }

  return (
    <a
      href={formattedHref}
      className="bg-kobicha rounded-full w-fit p-1 !text-white inline-block"
      target={type === 'website' ? '_blank' : ''}
      rel="noreferrer"
    >
      <Icon variant={type as IconVariant} />
      <p className="visually-hidden">{type}</p>
    </a>
  );
}

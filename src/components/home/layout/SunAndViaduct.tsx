import React from 'react';
import Image from 'next/image';

export default function SunAndViaduct() {
  return (
    <>
      <Image priority src='/viaduct.png' alt="" className="absolute z-20 -top-20 md:top-[22rem] xl:top-[32.25rem] pointer-events-none w-[255px] h-[179px] md:w-[500px] md:h-[349px] lg:w-[550px] lg:h-[384px] lg:top-[28rem] xl:w-[792px] xl:h-[553px]" />
      <Image src='/sun-sm.svg' alt="" className="absolute z-0 right-0 top-[calc(-8rem)] pointer-events-none w-[150px] h-[369px] md:w-[909px] md:h-[909px] md:top-[22.25rem] md:-right-32" />
    </>
  );
}

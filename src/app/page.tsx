import React from 'react';
import AboutSection from '@/components/home/layout/AboutSection';
import SunAndViaduct from '@/components/home/layout/SunAndViaduct';
import Header from '@/components/home/layout/Header';
import Main from '@/components/home/layout/Main';

export default function Home() {
  return (
    <>
      <div className="container mx-auto mb-[5.75rem] md:mb-0 md:grid md:grid-cols-2 md:px-16 lg:gap-10 md: lg:pt-16 xl:pt-24 2xl:pt-[8.62rem]">
        <Header />
        <Main />
      </div>
      <div className="relative md:static xl:mt-44">
        <SunAndViaduct />
        <AboutSection />
      </div>
    </>
  );
}

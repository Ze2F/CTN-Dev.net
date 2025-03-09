import PageMarkdown from '@/components/page.markdown';
import { ChangeEvent, useEffect, useState } from 'react';
import style from '@/styles/index.module.css';
import { useRouter } from 'next/navigation';

const Index = () => {
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.panel} id='#1'>
            <h1 className={style.title}>Hi! Welcome to CTN Dev website.</h1>
          <p>Please scroll down. </p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
          </svg>
        </div>
        <div className={style.panel} id='#2'>
            <h1 className={style.title}>This is a personal blog to showcase my work.</h1>
          <p>See more by hover on left menu and click on projects.</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
          </svg>
        </div>
        <div className={style.panel} id='#3'>
            <h1 className={style.title}>You can also find me on other platforms.</h1>
          <p>See more by hover on left menu and click on about (@).</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Index;
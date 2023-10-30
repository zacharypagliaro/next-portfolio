// components/SiteContainer.tsx
import React, { ReactNode } from 'react';
import Head from 'next/head';
import BlogTopBarNav from './BlogTopBarNav';
import styles from './layouts/layout.module.css';
import utilStyles from '../../styles/utils.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SocialContact from "../main/SocialContact";

interface SiteContainerProps {
  title: string;
  description: string;
  children: ReactNode;
}

const name = 'Zachary Pagliaro';
const blurb = '🎸 Blog posts on my experience as a musician and developer';

export const siteTitle = "Blog w/ Zach";
const isHomePage = false;// Assuming this is not the homepage since it's a blog layout

const SiteContainer = ({ title, description, children }: SiteContainerProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <header className="">
        <BlogTopBarNav />
        <div className={styles.container}>
          <div className="flex items-center">
            <div className={styles.header}>
              <>
                <div className="flex items-grow">
                  <div className="min-w-[150px]">

                    <img
                      src="/img/profile.png"
                      className={utilStyles.borderCircle}
                      height={150}
                      width={150}
                      alt={name}
                    />
                  </div>
                  <h2 className={`${utilStyles.headingLg} ml-4 px-2`}>
                    <div className={utilStyles.colorInherit}>
                      {blurb}
                    </div>
                  </h2>
                </div>
              </>

            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          {children}
        </div>
      </main>
      <footer>
        <div className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">

          <SocialContact />
        </div>
        <div className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">

          <div className="grid w-full place-content-left sm:place-content-center">
            <p className="mt-9 text-secondary place-content-left sm:place-content-center">zacharypagliaro.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SiteContainer;

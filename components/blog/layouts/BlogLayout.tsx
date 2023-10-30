import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../../../styles/utils.module.css';
import Link from 'next/link';
import { BlogLayoutProps } from '../types'
import BlogTopBarNav from '../BlogTopBarNav';
import SocialContact from "../../main/SocialContact";


const name = 'Zachary Pagliaro';
export const siteTitle = "Blog w/ Zach";




export default function BlogLayout({ children, frontMatter }: BlogLayoutProps) {
  const { title, description, published, edited } = frontMatter; // Include the 'edited' field
  const isHomePage = false;// Assuming this is not the homepage since it's a blog layout
  const formattedPublishDate = new Date(published).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  let formattedEditedDate = null;
  if (edited) {
    formattedEditedDate = new Date(edited).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className="">
        <BlogTopBarNav />
        <div className={styles.container}>

          <div className="flex items-center">
            <div className={styles.header}>
              <>
                <div className="flex">
                  <Link href="/blog">
                    <div className="min-w-[150px]">
                      <Image
                        priority
                        src="/img/profile.png"
                        className={`${utilStyles.borderCircle}`}
                        height={150}
                        width={150}
                        alt={name}
                      />
                    </div>
                  </Link>
                  <h2 className={`${utilStyles.headingLg} ml-4 px-2`}>
                    <div className={utilStyles.colorInherit}>
                      <div className="flex flex-col items-start w-full">
                        <span className="secondary-title">{title}</span>
                        <p className="section-paragraph hidden sm:block">{description}</p>
                      </div>
                    </div>
                  </h2>
                </div>
              </>
            </div>


          </div>
        </div>
      </header>
      <main className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="flex flex-col items-start w-full">
          <p className="section-paragraph text-lg sm:hidden">{description}</p>
          {!isHomePage && (
            <div className={"text-theme pt-8 pb-8"}>
              <Link href="/blog/" className="hover:underline">← All Posts</Link>
            </div>
          )}
          <div className="flex flex-col items-start md:pr-11 lg:pr-24 xl:pr-40">
            {children}
          </div>

          {(formattedEditedDate && formattedPublishDate) ? (
            <p className="section-paragraph pt-4 text-sm">
              Published on: {formattedPublishDate} <br></br> Edited on: {formattedEditedDate}
            </p>
          ) : (
            <p className="section-paragraph pt-4 text-sm">
              Published on: {formattedPublishDate}
            </p>
          )}
          {!isHomePage && (
            <div className={"text-theme pb-8"}>
              <Link href="/blog/" className="hover:underline">← All Posts</Link>
            </div>
          )}
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
    </>
  );
}

import Head from 'next/head'
import DownloadsTopBarNav from "../components/downloads/DownloadsTopBarNav";
import PurchaseArrangements from "../components/downloads/PurchaseArrangements"
import FooterContent from '../components/downloads/FooterContent'



export default function Downloads() {
  return (
    <>
      <Head>

        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <title>Zachary Pagliaro</title>

      </Head>
      <div className="bg-body text-white font-poppins pb-12">
        <DownloadsTopBarNav />


        <PurchaseArrangements />
        <FooterContent />
      </div>
    </>
  )
}


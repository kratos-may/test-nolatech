import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeSecondPage = dynamic(() => import('../components/home/second-page'))
const DynamicHomeFirstPage = dynamic(() => import('../components/home/first-page'))
const DynamicHomeCarrousel = dynamic(() => import('../components/home/carrousel'))
const DynamicHomeNews = dynamic(() => import('../components/home/news'))
const DynamicHomeMan = dynamic(() => import('../components/home/man'))
const DynamicHomeLatestVideos = dynamic(() => import('../components/home/latest-videos'))
const DynamicHomeJoinUs = dynamic(() => import('../components/home/join-us'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />      
      <DynamicHomeFirstPage />      
      <DynamicHomeSecondPage />
      <DynamicHomeMan />      
      <DynamicHomeLatestVideos />      
      <DynamicHomeJoinUs />    
      <DynamicHomeNews />      
      <DynamicHomeCarrousel />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home

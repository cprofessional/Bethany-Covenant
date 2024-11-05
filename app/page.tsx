"use client";

import ContactUs from "@/components/MainPage/contact-us/ContactUs"
import ExploreGod from "@/components/MainPage/explore-god/ExploreGod"
import Header from "@/components/Global/header/Header"
import HelpOthers from "@/components/MainPage/help-others/HelpOthers"
import JoinUs from "@/components/MainPage/join-us/JoinUs"
import LatestNews from "@/components/MainPage/latest-news/LatestNews"
import Welcome from "@/components/MainPage/welcome/Welcome"
import Footer from "@/components/Global/footer/Footer";

import styles from "./page.module.css"

export default function Page() {
  return (
    <div className={styles.init}>
      <Header /> 
      <Welcome />
      <JoinUs />
      <ExploreGod />
      <LatestNews />
      <HelpOthers />
      <ContactUs />
      <Footer />
    </div>
  ) 
}
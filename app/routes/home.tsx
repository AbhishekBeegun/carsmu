import Navbar from "~/component/Navbar";
import type { Route } from "./+types/home";
import Hero from "~/component/Hero";
import BrandGrid from "~/component/BrandGrid";
import HandpickedGrid from "~/component/HandPickedSection";
import BlogSection from "~/component/BlogSection";
import Footer from "~/component/Footer";
import Newsletter from "~/component/NewsletterSection";
import PremiumCTA from "~/component/PremiumCTA";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>
  <Hero/>
  <BrandGrid />
  <HandpickedGrid/>
  <PremiumCTA />
  <BlogSection/>
  <Newsletter/>
    </>;
}

import Hero from "./components/hero"
import About from "./components/about"
import ChefExpertise from "./components/chef-expertise"
import MenuPreview from "./components/menu-preview"
import Footer from "./components/footer"
import CookieBanner from "./components/cookie-banner"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <ChefExpertise />
      <MenuPreview />
      <Footer />
      <CookieBanner />
    </main>
  )
}

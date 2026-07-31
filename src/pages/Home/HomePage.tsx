import HeroPage from "../../sections/Hero/Hero"
import About from "../../sections/About/About"
import Treatments from "../../sections/Treatments/Treatments"
import Panchakarma from "../../sections/Panchakarma/Panchakarma"
import Therapies from "../../sections/Therapies/Therapies"
import Journey from "../../sections/Journey/Journey"
import Yoga from "../../sections/Yoga/Yoga"
import Doctors from "../../sections/Doctors/Doctors"
import Testimonials from "../../sections/Testimonials/Testimonials"
import Faq from "../../sections/Faq/Faq"
import Cta from "../../sections/Cta/Cta"

export default function HomePage() {
  return (
    <>
      <HeroPage />
      <About />
      <Treatments />
      <Panchakarma />
      <Therapies />
      <Journey />
      <Yoga />
      <Doctors />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  )
}

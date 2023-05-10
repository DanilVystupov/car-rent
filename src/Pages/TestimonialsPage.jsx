import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import BackToMainPage from "../components/UI/BackToMainPage";
import BookBanner from "../components/UI/BookBanner";

function TestimonialsPage() {
  return (
    <>
      <section className="testimonial-page">
        <BackToMainPage />
        <Testimonials />
        <BookBanner />
        <Footer />
      </section>
    </>
  );
}

export default TestimonialsPage;

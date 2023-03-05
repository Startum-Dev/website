import BannerSmall from "../components/pageComponets/shared/BannerSmall";
import AppLayout from "../components/layouts/AppLayout";
import ContactForm from "../components/forms/ContactForm";

const ContactUs = () => {
  return (
    <AppLayout>
      <BannerSmall heading="Contact Us" />
      <ContactForm />
    </AppLayout>
  );
};
export default ContactUs;

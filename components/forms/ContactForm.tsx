import ButtonBlue from "../buttons/ButtonBlue";
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";

const ContactForm = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full p-12">
      <form className="w-full flex-col flex gap-4 max-w-2xl">
        <Input placeholder="Email" />
        <Input placeholder="Phone Number" />
        <TextArea placeholder="message" />
        <div>
          <ButtonBlue text="Submit" onClick={() => {}} />
        </div>
      </form>
    </div>
  );
};
export default ContactForm;

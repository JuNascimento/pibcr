import { useRef } from "react";
import {
  Contact,
  ContactForm,
  FormLabel,
  InputField,
  TextAreaField,
  Button,
  Field,
} from "./index.styles";
import emailjs from "@emailjs/browser";

const ContactUsContainer = () => {
  const form = useRef();
  // useEffect(() => {
  //   emailjs.init("Cw9Dkq3Jt7NT-bHLr");
  // }, []);
  // const [name, setName] = useState("");
  // const [message, setMessage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "pibcrContact",
        "template_bufnnlb",
        form.current,
        "Cw9Dkq3Jt7NT-bHLr"
      )
      .then(
        () => {
          alert("Contato feito! Entraremos em contato!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Contact>
      <h2>Vem conversar com a gente</h2>
      <ContactForm ref={form} onSubmit={handleForm}>
        <Field>
          <FormLabel>Nome</FormLabel>
          <InputField type="text" name="name" />
        </Field>
        <Field>
          <FormLabel>Mensagem</FormLabel>
          <TextAreaField name="message" />
        </Field>

        <Button type="submit" value={"Enviar"} />
      </ContactForm>
    </Contact>
  );
};

export default ContactUsContainer;

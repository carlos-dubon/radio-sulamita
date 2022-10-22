import { FC } from "react";
import { Input, TextArea, Column, Spinner } from "@lib/atoms";
import { Section } from "@lib/molecules";
import { ChatBox, Map } from "@lib/organisms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Timestamp, setDoc, doc } from "firebase/firestore";
import { useFormik } from "formik";
import { getCountry } from "@lib/helpers";
import { db } from "@app/firebase";
import { v4 as uuidv4 } from "uuid";

export interface Message {
  id: string;
  name: string;
  email?: string;
  body: string;
  admin: boolean;
  country?: string;
  date: Timestamp;
}

const Contact: FC = () => {
  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      body: "",
    },
    validate: (values) => {
      const errors: any = {};

      if (!values.name) {
        errors.name = "El campo Nombre es obligatorio.";
      }

      if (!values.body) {
        errors.body = "El campo Mensaje es obligatorio.";
      }

      if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Dirección de correo electrónico no válida";
      }

      return errors;
    },
    onSubmit: async (values) => {
      const id: string = uuidv4();

      const country: string = await getCountry();

      const admin: boolean =
        values.name.trim().toLowerCase() == "radio sulamita" ? true : false;

      await setDoc(doc(db, "chat", id), {
        ...values,
        country,
        admin,
        id,
        date: Timestamp.fromDate(new Date()),
      });
      form.setFieldValue("body", "");
      form.setErrors({});
      form.setTouched({});
    },
    validateOnMount: true,
  });

  return (
    <>
      <Section
        title="Contacto"
        id="contact"
        subtitle="Y todo lo que pidiereis al Padre en mi nombre, lo haré, para que el Padre sea glorificado en el Hijo."
        bibleVerse="Juan 14:13"
        removeBottom
      >
        <div className="w-full bg-rs-gray grid grid-cols-1 md:grid-cols-2 py-6 relative z-20">
          <Column title="Mensajes recientes">
            <ChatBox />
          </Column>
          <Column title="Envíanos un mensaje">
            <form className="flex flex-col" onSubmit={form.handleSubmit}>
              <Input
                placeholder="Nombre"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.name}
                name="name"
                className="mb-1"
                type="text"
                disabled={form.isSubmitting}
              />
              <div className="text-xs mb-2 h-4">
                {form.touched.name ? (
                  <div className="text-stone-600 form-error">
                    {form.errors.name}
                  </div>
                ) : null}
              </div>
              <Input
                placeholder="Correo electrónico (Opcional)"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.email}
                name="email"
                className="mb-1"
                type="email"
                disabled={form.isSubmitting}
              />
              <div className="text-xs mb-2 h-4">
                {form.touched.email ? (
                  <div className="text-stone-600 form-error">
                    {form.errors.email}
                  </div>
                ) : null}
              </div>
              <TextArea
                placeholder="Mensaje"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.body}
                name="body"
                className="mb-1"
                disabled={form.isSubmitting}
              />
              <div className="text-xs mb-2 h-4">
                {form.touched.body ? (
                  <div className="text-stone-600 form-error">
                    {form.errors.body}
                  </div>
                ) : null}
              </div>
              <button
                disabled={!form.isValid || form.isSubmitting}
                type="submit"
                className={`text-sm flex justify-center items-center gap-3 w-36 h-14 transition duration-500 
              ${
                form.isValid && !form.isSubmitting
                  ? "text-white bg-rs-primary hover:bg-black cursor-pointer hover:drop-shadow-[0_0_16px_rgba(255,221,200,0.25)]"
                  : "text-gray-100 bg-gray-300"
              }`}
              >
                {form.isSubmitting ? (
                  <>
                    <p>Enviando...</p>
                    <Spinner width="1rem" borderWidth={1} />
                  </>
                ) : (
                  <>
                    <p>Enviar</p>
                    <FontAwesomeIcon icon={faPaperPlane} className="w-4" />
                  </>
                )}
              </button>
            </form>
          </Column>
        </div>
      </Section>
      <Map />
    </>
  );
};

export { Contact };

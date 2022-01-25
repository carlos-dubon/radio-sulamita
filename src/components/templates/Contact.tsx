import { FC, useEffect } from "react";
import { Input, TextArea, Column } from "@lib/atoms";
import { Section } from "@lib/molecules";
import { ChatBox } from "@lib/organisms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Timestamp } from "firebase/firestore";
import axios from "axios";
import { useFormik } from "formik";

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
      country: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    const getIp = async () => {
      const { data } = await axios.get(
        "https://radio-sulamita.vercel.app/api/ip"
      );
      form.setFieldValue("country", data.ip);
    };

    getIp();
  }, []);

  return (
    <Section
      title="Contacto"
      subtitle="Y todo lo que pidiereis al Padre en mi nombre, lo haré, para que el Padre sea glorificado en el Hijo."
      bibleVerse="Juan 14:13"
    >
      <div className="w-full bg-rs-gray grid grid-cols-2 py-6">
        <Column title="Mensajes recientes">
          <ChatBox />
        </Column>
        <Column title="Envíanos un mensaje">
          <form className="flex flex-col gap-4" onSubmit={form.handleSubmit}>
            <Input
              placeholder="Nombre"
              onChange={form.handleChange}
              value={form.values.name}
              name="name"
            />
            <Input
              placeholder="Correo electrónico (Opcional)"
              onChange={form.handleChange}
              value={form.values.email}
              name="email"
            />
            <TextArea
              placeholder="Mensaje"
              onChange={form.handleChange}
              value={form.values.body}
              name="body"
            />
            <button
              type="submit"
              className="text-sm flex justify-center items-center text-white bg-rs-primary w-36 h-14 transition duration-500 hover:bg-black cursor-pointer hover:drop-shadow-[0_0_16px_rgba(255,221,200,0.25)]"
            >
              Enviar
              <FontAwesomeIcon icon={faPaperPlane} className="w-4 ml-3" />
            </button>
          </form>
        </Column>
      </div>
    </Section>
  );
};

export { Contact };

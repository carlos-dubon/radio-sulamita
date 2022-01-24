import { FC, useState, ChangeEvent } from "react";
import { Input, TextArea, Column } from "@lib/atoms";
import { Section } from "@lib/molecules";
import { ChatBox } from "@lib/organisms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Timestamp } from "firebase/firestore";

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
  const [form, setForm] = useState({ name: "", email: "", body: "" });

  const sendMessage = () => {
    console.log(form);
  };

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
        <Column title="Envíanos un mensaje" className="flex flex-col gap-4">
          <Input
            placeholder="Nombre"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const value: string = e.target.value;
              setForm((prevState) => ({ ...prevState, name: value }));
            }}
          />
          <Input
            placeholder="Correo electrónico (Opcional)"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const value: string = e.target.value;
              setForm((prevState) => ({ ...prevState, email: value }));
            }}
          />
          <TextArea
            placeholder="Mensaje"
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              const value: string = e.target.value;
              setForm((prevState) => ({ ...prevState, body: value }));
            }}
          />
          <button
            onClick={() => {
              sendMessage();
            }}
            className="text-sm flex justify-center items-center text-white bg-rs-primary w-36 h-14 transition duration-500 hover:bg-black cursor-pointer hover:drop-shadow-[0_0_16px_rgba(255,221,200,0.25)]"
          >
            Enviar
            <FontAwesomeIcon icon={faPaperPlane} className="w-4 ml-3" />
          </button>
        </Column>
      </div>
    </Section>
  );
};

export { Contact };

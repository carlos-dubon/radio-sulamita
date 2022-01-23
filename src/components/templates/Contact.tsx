import { FC, ReactNode } from "react";
import { Input, TextArea } from "@lib/atoms";
import { Section } from "@lib/molecules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface ColumnProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

interface Message {
  id: string;
  name: string;
  email?: string;
  body: string;
  admin: boolean;
  country?: string;
  date: string;
}

const Column: FC<ColumnProps> = ({ title, children, className }) => {
  return (
    <div className="flex flex-col p-16">
      <div className="text-lg mb-8">{title}</div>
      <div className={className}>{children}</div>
    </div>
  );
};

const ChatBox: FC = () => {
  const messages: Message[] = [
    {
      id: "1111",
      name: "John Doe",
      email: "john@email.com",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula a tellus eleifend dignissim. Etiam sodales maximus sem quis tincidunt. Proin interdum metus eu rutrum sagittis. Morbi venenatis ne.",
      admin: false,
      country: "US",
      date: "23 de enero del 2021, 02:38 PM",
    },
    {
      id: "1111",
      name: "RADIO SULAMITA",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula a tellus eleifend dignissim.",
      admin: true,
      date: "23 de enero del 2021, 02:38 PM",
    },
    {
      id: "1111",
      name: "John Doe",
      email: "john@email.com",
      body: "Hello world",
      admin: false,
      country: "US",
      date: "23 de enero del 2021, 02:38 PM",
    },
    {
      id: "1111",
      name: "John Doe",
      email: "john@email.com",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula a tellus eleifend dignissim. Etiam sodales maximus sem quis tincidunt. Proin interdum metus eu rutrum sagittis. Morbi venenatis ne.",
      admin: false,
      country: "GT",
      date: "23 de enero del 2021, 02:38 PM",
    },
    {
      id: "1111",
      name: "John Doe",
      email: "john@email.com",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula a tellus eleifend dignissim. ne.",
      admin: false,
      country: "BZ",
      date: "23 de enero del 2021, 02:38 PM",
    },
    {
      id: "1111",
      name: "RADIO SULAMITA",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula a tellus eleifend dignissim.",
      admin: true,
      date: "23 de enero del 2021, 02:38 PM",
    },
  ];

  return (
    <div className="w-full h-full overflow-y-scroll flex flex-col gap-4">
      {messages.map((m: Message) => {
        return (
          <div
            key={m.id}
            className={`flex flex-col ${
              m.admin ? "bg-rs-primary" : "bg-white"
            } p-3 text-xs w-11/12 ${m.admin ? "ml-auto" : null}`}
          >
            <div
              className={`flex justify-between ${
                m.admin ? "text-stone-200" : "text-stone-500"
              } mb-1`}
            >
              <div>{m.name}</div>
              <div>{m.date}</div>
            </div>

            {m.admin ? null : (
              <div className="flex justify-between text-stone-500">
                <div>{m.email}</div>
                <div>
                  <Image
                    src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${m.country}.svg`}
                    alt={`${m.country} flag`}
                    title={`${m.country}`}
                    width={20.37}
                    height={14}
                  />
                </div>
              </div>
            )}

            <div
              className={`leading-[150%] mt-2 ${m.admin ? "text-white" : null}`}
            >
              {m.body}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Contact: FC = () => {
  return (
    <Section
      title="Contacto"
      subtitle="Y todo lo que pidiereis al Padre en mi nombre, lo haré, para que el Padre sea glorificado en el Hijo."
      bibleVerse="Juan 14:13"
    >
      <div className="w-full bg-rs-gray h-[620px] grid grid-cols-2 py-6">
        <Column title="Mensajes recientes">
          <ChatBox />
        </Column>
        <Column title="Envíanos un mensaje" className="flex flex-col gap-4">
          <Input placeholder="Nombre" />
          <Input placeholder="Correo electrónico (Opcional)" />
          <TextArea placeholder="Mensaje" />
          <button
            onClick={() => {
              console.log("Sent");
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

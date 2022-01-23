import { FC, ReactNode } from "react";
import { Input, TextArea } from "@lib/atoms";
import { Section } from "@lib/molecules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

interface ColumnProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

const Column: FC<ColumnProps> = ({ title, children, className }) => {
  return (
    <div className="flex flex-col p-16">
      <div className="text-lg mb-8">{title}</div>
      <div className={className}>{children}</div>
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
        <Column title="Mensajes recientes">hh</Column>
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

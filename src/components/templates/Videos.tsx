import { FC } from "react";
import { Section } from "@lib/molecules";

const Videos: FC = () => {
  return (
    <Section
      title="Videos"
      subtitle="“Cada acontecimiento, grande y pequeño, es una parábola por medio de la cual Dios nos habla y el arte de vivir es recibir el mensaje.”"
      bibleVerse="2 Timoteo 3:16-17"
    >
      <div className="grid grid-cols-2 justify-items-center">
        <div className="w-4/5">
          <div className="mb-1">El diseño de la vida</div>
          <div className="text-rs-primary text-sm">
            ¿Existen pruebas de que la vida tenga un diseñador? Todos los seres
            vivos tienen algo en común que los relaciona entre sí.
          </div>
        </div>
        <div className="w-4/5">
          <div className="mb-1">El diseño de la vida</div>
          <div className="text-rs-primary text-sm">
            ¿Existen pruebas de que la vida tenga un diseñador? Todos los seres
            vivos tienen algo en común que los relaciona entre sí.
          </div>
        </div>
      </div>
    </Section>
  );
};

export { Videos };

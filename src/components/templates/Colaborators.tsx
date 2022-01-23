import { FC } from "react";
import { Section } from "@lib/molecules";
import Image from "next/image";

interface ColaboratorsI {
  photoSrc: string;
  name: string;
  occupation: string;
}

const listOfColaborators: ColaboratorsI[] = [
  {
    photoSrc: "/colaborators/robin-sucup.jpg",
    name: "Robin Sucup",
    occupation: "Locutor",
  },
  {
    photoSrc: "/colaborators/jose-pop.jpg",
    name: "Jose Pop",
    occupation: "Locutor",
  },
  {
    photoSrc: "/colaborators/sindi-pop.jpg",
    name: "Sindi Pop",
    occupation: "Locutora",
  },
  {
    photoSrc: "/colaborators/maria-perez.jpg",
    name: "María del Carmen",
    occupation: "Locutora",
  },
];

const Colaborators: FC = () => {
  return (
    <Section
      title="Colaboradores"
      subtitle="Quien quiera servirme, debe seguirme; y donde yo esté, allí también estará mi siervo. A quien me sirva, mi Padre lo honrará."
      bibleVerse="Juan 12:26"
    >
      <div className="flex justify-center flex-wrap gap-8">
        {listOfColaborators.map((colaborator: ColaboratorsI) => {
          return (
            <div
              className="flex flex-col items-center"
              key={colaborator.photoSrc}
            >
              <div className="w-60 h-60 rs-inner-shadow  flex items-center justify-center rounded-full mb-4">
                <div className="rounded-full border-rs-primary border-2 w-[210px] h-[210px]">
                  <Image
                    className="rounded-full"
                    width={210}
                    height={210}
                    src={colaborator.photoSrc}
                    alt={colaborator.photoSrc}
                  />
                </div>
              </div>
              <div>{colaborator.name}</div>
              <div className="text-rs-primary text-sm">
                {colaborator.occupation}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export { Colaborators };

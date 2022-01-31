import { FC } from "react";
import { Section } from "@lib/molecules";
import Image from "next/image";
import robin_sucup from "public/collaborators/robin-sucup.jpg";
import jose_pop from "public/collaborators/jose-pop.jpg";
import sindi_pop from "public/collaborators/sindi-pop.jpg";
import maria_perez from "public/collaborators/maria-perez.jpg";
import { Fade } from "react-awesome-reveal";

interface CollaboratorsI {
  photoSrc: StaticImageData;
  name: string;
  occupation: string;
}

const listOfCollaborators: CollaboratorsI[] = [
  {
    photoSrc: robin_sucup,
    name: "Robin Sucup",
    occupation: "Locutor",
  },
  {
    photoSrc: jose_pop,
    name: "Jose Pop",
    occupation: "Locutor",
  },
  {
    photoSrc: sindi_pop,
    name: "Sindi Pop",
    occupation: "Locutora",
  },
  {
    photoSrc: maria_perez,
    name: "María del Carmen",
    occupation: "Locutora",
  },
];

const Collaborators: FC = () => {
  return (
    <div className="overflow-hidden">
      <Section
        title="Colaboradores"
        subtitle="Quien quiera servirme, debe seguirme; y donde yo esté, allí también estará mi siervo. A quien me sirva, mi Padre lo honrará."
        bibleVerse="Juan 12:26"
        id="colaboradores"
      >
        <div className="flex justify-center flex-wrap gap-8">
          <Fade duration={400} cascade direction="right">
            {listOfCollaborators.map((collaborator: CollaboratorsI) => {
              return (
                <div
                  className="flex flex-col items-center"
                  key={collaborator.name}
                >
                  <div className="w-60 h-60 rs-inner-shadow flex items-center justify-center rounded-full mb-4 overflow-hidden">
                    <div className="overflow-hidden border-rs-primary border-[3px] rounded-full w-[210px] h-[210px]">
                      <Image
                        src={collaborator.photoSrc}
                        alt={collaborator.name}
                        width={210}
                        height={210}
                        placeholder="blur"
                      />
                    </div>
                  </div>
                  <div>{collaborator.name}</div>
                  <div className="text-rs-primary text-sm">
                    {collaborator.occupation}
                  </div>
                </div>
              );
            })}
          </Fade>
        </div>
      </Section>
    </div>
  );
};

export { Collaborators };

import { FC } from "react";
import { Section } from "@lib/molecules";
import Image from "next/image";
import robinSucup from "public/collaborators/robin-sucup.jpg";
import josePop from "public/collaborators/jose-pop.jpg";
import sindiPop from "public/collaborators/sindi-pop.jpg";
import mariaPerez from "public/collaborators/maria-perez.jpg";
import { Faded } from "baby-i-am-faded";

interface CollaboratorsI {
  photoSrc: StaticImageData;
  name: string;
  occupation: string;
}

const listOfCollaborators: CollaboratorsI[] = [
  // {
  //   photoSrc: robinSucup,
  //   name: "Robin Sucup",
  //   occupation: "Locutor",
  // },
  {
    photoSrc: josePop,
    name: "Jose Pop",
    occupation: "Locutor",
  },
  // {
  //   photoSrc: sindiPop,
  //   name: "Sindi Pop",
  //   occupation: "Locutora",
  // },
  {
    photoSrc: mariaPerez,
    name: "María del Carmen",
    occupation: "Locutora",
  },
];

const Collaborators: FC = () => {
  return (
    <div className="overflow-hidden">
      <Section
        title="Colaboradores"
        id="collaborators"
        subtitle="Quien quiera servirme, debe seguirme; y donde yo esté, allí también estará mi siervo. A quien me sirva, mi Padre lo honrará."
        bibleVerse="Juan 12:26"
      >
        <div>
          <Faded
            duration={400}
            delay={100}
            cascade
            whenInView
            triggerOnce
            animationName="babyFadeInRight"
            className="flex justify-center flex-wrap gap-8"
          >
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
          </Faded>
        </div>
      </Section>
    </div>
  );
};

export { Collaborators };

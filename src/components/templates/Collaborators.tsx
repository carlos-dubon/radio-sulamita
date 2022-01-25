import { FC } from "react";
import { Section } from "@lib/molecules";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface CollaboratorsI {
  photoSrc: string;
  lazyLoad: string;
  name: string;
  occupation: string;
}

const listOfCollaborators: CollaboratorsI[] = [
  {
    photoSrc: "/collaborators/robin-sucup.jpg",
    lazyLoad: "/collaborators/lazy-load/robin-sucup.jpg",
    name: "Robin Sucup",
    occupation: "Locutor",
  },
  {
    photoSrc: "/collaborators/jose-pop.jpg",
    lazyLoad: "/collaborators/lazy-load/jose-pop.jpg",
    name: "Jose Pop",
    occupation: "Locutor",
  },
  {
    photoSrc: "/collaborators/sindi-pop.jpg",
    lazyLoad: "/collaborators/lazy-load/sindi-pop.jpg",
    name: "Sindi Pop",
    occupation: "Locutora",
  },
  {
    photoSrc: "/collaborators/maria-perez.jpg",
    lazyLoad: "/collaborators/lazy-load/maria-perez.jpg",
    name: "María del Carmen",
    occupation: "Locutora",
  },
];

const Collaborators: FC = () => {
  return (
    <Section
      title="Colaboradores"
      subtitle="Quien quiera servirme, debe seguirme; y donde yo esté, allí también estará mi siervo. A quien me sirva, mi Padre lo honrará."
      bibleVerse="Juan 12:26"
    >
      <div className="flex justify-center flex-wrap gap-8">
        {listOfCollaborators.map((collaborator: CollaboratorsI) => {
          return (
            <div
              className="flex flex-col items-center"
              key={collaborator.photoSrc}
            >
              <div className="w-60 h-60 rs-inner-shadow flex items-center justify-center rounded-full mb-4">
                <LazyLoadImage
                  height={210}
                  width={210}
                  placeholderSrc={collaborator.lazyLoad}
                  src={collaborator.photoSrc}
                  alt={collaborator.name}
                  className="rounded-full h-[210px] w-[210px] border-rs-primary border-[3px]"
                />
              </div>
              <div>{collaborator.name}</div>
              <div className="text-rs-primary text-sm">
                {collaborator.occupation}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export { Collaborators };

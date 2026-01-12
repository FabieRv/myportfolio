// On ajoute le mot-clé "type" après "import"
import type { ReactNode } from "react";

export type WithChildren = {
  children: ReactNode;
};

export type LinkType = {
  href: string;
  label: string;
};

export type AboutTypes = {
  src: string;
  alt: string;
  title: string;
  content: string;
};

export type Skill = {
  id: number;
  name: string;
};

// Pour tes composants (ex: Container), tu peux faire ceci :
export type ContainerProps = WithChildren & {
  className?: string;
};
// On ajoute le mot-clé "type" après "import"
import type { ReactNode } from "react"

export type WithChildren = {
  children: ReactNode
}

export type LinkType = {
  href: string
  label: string
}

export type AboutTypes = {
  src: string
  alt: string
  title: string
  content: string
}

export type Skill = {
  id: number
  name: string
}

// Pour tes composants (ex: Container), tu peux faire ceci :
export type ContainerProps = WithChildren & {
  className?: string
}


export interface FoldTextProps {
  text?: string
  splitBy?: "char" | "word" | "line"
  hinge?: "top" | "bottom" | "left" | "right"
  duration?: number
  stagger?: number
  ease?: string
  perspective?: number
  creaseShading?: number
  trigger?: "mount" | "hover" | "scroll" | "loop"
  fontSize?: string | number
  fontWeight?: string | number
  color?: string
  className?: string
  style?: React.CSSProperties
}
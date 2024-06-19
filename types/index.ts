export interface IDraft {
  time: [string, string | null]
  title: string
  description: string
  details: Array<string>
  image: string
  link?: string
}

export interface IDraftTarget {
  target: string
  time: [string, string | null]
  image: string
  link?: string
}

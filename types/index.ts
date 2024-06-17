export interface IDraft {
  time: [string, string | null]
  title: string
  description: string
  details: Array<string>
  image: string
  link?: string
}
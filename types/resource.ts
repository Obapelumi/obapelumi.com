export type Work = {
  title: string
  description: string
  to: string
  target?: '__blank'
  imagePath: string
  year: number
  company: {
    name: string
    website: string
  }
}

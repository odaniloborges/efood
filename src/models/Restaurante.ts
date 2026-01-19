class Restaurante {
  description: string
  image: string
  infos: string[]
  rating: string
  title: string
  id: number

  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    rating: string,
    title: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.rating = rating
    this.title = title
  }
}

export default Restaurante

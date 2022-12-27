export interface IMenuItem {
  title: string
  url: string
}

export interface ICategoryItem {
  id: number
  category: number
  title: string
  price: number
  images: string[]
}

export interface ICategory {
  id?: number
  title: string
}

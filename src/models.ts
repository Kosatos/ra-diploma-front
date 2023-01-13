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
  id: number
  title: string
}

export interface IQuery {
  id?: number
  offset?: number
  q: string
}

export interface ISize {
  size: string
  avalible: boolean
}

export interface IProductInfo {
  id: number
  category: number
  title: string
  images: string[]
  sku: string
  manufacturer: string
  color: string
  material: string
  reason: string
  season: string
  heelSize: string
  price: number
  oldPrice: number
  sizes: ISize[]
}

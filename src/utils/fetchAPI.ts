import axios from 'axios'
import { ICategoryItem, IQuery } from '../models'

export const fetchAPI = async ({
  id,
  offset,
  q,
}: IQuery): Promise<ICategoryItem[]> => {
  const categoryId = id === 11 ? undefined : id
  const { data } = await axios.get('http://localhost:7070/api/items', {
    params: {
      categoryId,
      offset,
      q,
    },
  })
  return data
}

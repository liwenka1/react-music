import http from '@/utils/request'
import { searchHot } from './type'

export const useSearchHot = async () => {
  const { result } = await http.get<{ result: searchHot }>('/search/hot')
  return result
}

import http from '@/utils/request'
import { searchHot } from './type'

// 热搜列表(简略)
export const useSearchHot = async () => {
  const { result } = await http.get<{ result: searchHot }>('/search/hot')
  return result
}

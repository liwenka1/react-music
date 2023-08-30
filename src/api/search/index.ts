import http from '@/utils/request'
import { SearchHot } from './type'

// 热搜列表(简略)
export const useSearchHot = async () => {
  const { result } = await http.get<SearchHot>('/search/hot')
  return result
}

import service from '@/utils/request'
interface SearchHot {
  first: string
}
interface result {
  hots: SearchHot[]
}

export const useSearchHot = async () => {
  return await service.get<result>('/search/hot')
}

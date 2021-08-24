import { api } from './api'

export const getComics = async (characterId) => {
  const response = await api.get(`/characters/${characterId}/comics`)

  const results = response.data.data.results.map(result => ({
    id: result.id,
    title: result.title,
    dates: result.dates[0].date,
    prices: result.prices[0].price,
    pages: result.pageCount,
    description: result.description,
    thumbnail: `${result.thumbnail.path}.${result.thumbnail.extension}`
  }))

  return {
    count: response.data.data.count,
    limit: response.data.data.limit,
    offset: response.data.data.offset,
    total: response.data.data.total,
    results
  }
}


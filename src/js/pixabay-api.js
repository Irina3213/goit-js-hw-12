import axios from 'axios';

const url = 'https://pixabay.com/api/';
const key = '28758072-9e3959ae97493423a95a052ce';

export const getImagesByQuery = async (query, page = 1) => {
  const res = await axios(url, {
    params: {
      key,
      quer: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 10,
    },
  });
  return {
    hits: res.data.hits,
    totalHits: res.data.totalHits,
  };
};

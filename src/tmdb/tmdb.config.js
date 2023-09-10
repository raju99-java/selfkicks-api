const baseUrl = process.env.TMDB_BASE_URL;
const key = process.env.TMDB_KEY;

const getUrl = (endpoint, params) => {
  const qs = new URLSearchParams(params);

  // let end = `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
  // console.log(end);
  return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

export default { getUrl };
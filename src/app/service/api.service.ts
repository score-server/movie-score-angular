export const API_ROOT = 'http://scorewinner.ch:8081/api';

export const API_SESSION = '?sessionId=x';

const Api = {

  MOVIE_LIST: () =>
    `${API_ROOT}/movie${API_SESSION}`,

  MOVIE: (movieId) => `${API_ROOT}/movie/${movieId}${API_SESSION}`,

  USER_CURRENT: () => `${API_ROOT}/user/current/${API_SESSION}`,

};

export default Api;

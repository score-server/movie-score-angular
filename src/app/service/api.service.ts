export const API_ROOT = 'http://scorewinner.ch:8081/api';

export const API_SESSION = '?sessionId=087bdf7a63378722a0b98bdf4679bbb097e1bf3a90a4b553ea9d741b211ec2a1';

const Api = {

  MOVIE_LIST: () =>
    `${API_ROOT}/movie${API_SESSION}`,

  MOVIE: (movieId) => `${API_ROOT}/movie/${movieId}${API_SESSION}`,

  USER_CURRENT: () => `${API_ROOT}/user/current/${API_SESSION}`,

  LOGIN: (username, password) => `${API_ROOT}/login?user=${username}&password=${password}`
};

export default Api;

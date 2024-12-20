'use strict';

import axios from 'axios';

const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';

export default async function getReviews() {
  const response = await axios.get(`${BASE_URL}`);
  console.log(response.data);
  return response.data;
}

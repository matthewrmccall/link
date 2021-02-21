import React from 'react';
import axios from "axios";
// pass API base URL in the axios create method
export default axios.create({
  baseURL: 'https://api.shrtco.de/v2/'
})

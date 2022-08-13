import axios from "axios";

import { FLICKER_BASE_URL } from "../../utils/envConfig.js";

// setup axios instance only for request to flicker REST API
const ax = axios.create({
  baseURL: FLICKER_BASE_URL,
});

/**
 * 
 * @param {*} optionalParamsObject 
 * @returns api flickr response
 */
const getPublicImage = async (optionalParamsObject) => {
  const formatedParam = []
  for (const key in optionalParamsObject) {
    if (Object.hasOwnProperty.call(optionalParamsObject, key)) {
      const el = optionalParamsObject[key];
      formatedParam.push(`${key}=${el}`)
    }
  }

  try {
    const response = await ax.get(
      "/photos_public.gne?format=json&nojsoncallback=1&" + formatedParam.join("&")
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getPublicImage };

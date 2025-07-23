// libs/client.js
import { createClient } from 'microcms-js-sdk';

console.log("API_KEY:", process.env.API_KEY);

export const client = createClient({
  serviceDomain: 'ambassadeur',  
  apiKey: process.env.API_KEY,      // process.env.API_KEY: APIキーの参照
});
// utils/fetchSpotifyData.ts
import axios from 'axios';

const accessToken = 'BQCQgtkv4RwNwkEGeXzfwU0trXpyHf8gjE52GoRagHmTZZhe8jzW5nsvXt8ehl1lMgIqvMFW9bALZUTEoJQ-y_fNY4NYKD2llaPqKXi8oHwsf5ZmEGfarcMubnupbY0H5SNrDdAckOQE0hUINdGHyvpfw1EDnWSyCWvKkREmoNxYkLeIE7DW4SFe6tK9ywJvOdNCeNIvKVatIYVy78sJ2sXRb0TlL-rld7EhGhqts2lx3oDdyENYY9Jh-zrOG_SiFVgEJZ3nFbXFaAsjOPmY0GIz';

export const fetchSpotifyData = async (params: string): Promise<any> => {
    // Manually construct the query string
    const queryString = `accessToken=${encodeURIComponent(accessToken)}`;
    const options = {
       method: 'POST',
       url: `https://spotifystefan-skliarovv1.p.rapidapi.com/${params}`,
       headers: {
         'content-type': 'application/x-www-form-urlencoded',
         'X-RapidAPI-Key': 'fb5458dc5amsh935a82bf692231cp139b57jsne56249dad61d',
         'X-RapidAPI-Host': 'Spotifystefan-skliarovV1.p.rapidapi.com',
       },
       data: queryString, // Use the manually constructed query string
    };
    try {
       const response = await axios.request(options);
       return response.data;
    } catch (error) {
       console.error(error);
       throw error; // Rethrow the error to handle it in the calling function
    }
   };

// DataContext.tsx
import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchSpotifyData} from '../api';
import axios from 'axios';

type ContextProps = {
  children: React.ReactNode;
};

interface SpotifyData {
  artists: any[]; // Define a more specific type based on your data structure
}

const DataContext = createContext<SpotifyData | undefined>(undefined);

export const useSpotifyData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({children}: ContextProps) => {
  const [artists, setArtists] = useState<any[]>([]); // Initialize with an empty array or a loading state

  const [accessToken, setAccessToken] = useState('');
  console.log(accessToken);

  useEffect(() => {
    // Function to retrieve access token from AsyncStorage
    const retrieveAccessToken = async () => {
      try {
        const storedAccessToken = await AsyncStorage.getItem('accessToken');
        if (storedAccessToken !== null) {
          setAccessToken(storedAccessToken);
        }
      } catch (error) {
        console.error('Error retrieving access token:', error);
      }
    };

    retrieveAccessToken();
  }, []);

  useEffect(() => {
    // Function to fetch access token
    const getAccessToken = async () => {
      const clientId = '65d8a76f72c9478ea2ac7482373e6352';
      const clientSecret = '1de7e1ae1186436db12f0c9bf33c5e99';
      const response = await axios.post(
        'https://accounts.spotify.com/api/token',
        'grant_type=client_credentials',
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization:
              'Basic ' +
              Buffer.from(clientId + ':' + clientSecret).toString('base64'),
          },
        },
      );
      setAccessToken(response.data.access_token);

      // Store access token in AsyncStorage
      try {
        await AsyncStorage.setItem('accessToken', response.data.access_token);
      } catch (error) {
        console.error('Error storing access token:', error);
      }
    };

    getAccessToken();
  }, []);

  const getIdOfArtist = async () => {
    const options = {
      method: 'GET',
      url: 'https://spotify-scraper.p.rapidapi.com/v1/artist/search',
      params: {name: 'Ed Sheeran'},
      headers: {
        'X-RapidAPI-Key': 'fb5458dc5amsh935a82bf692231cp139b57jsne56249dad61d',
        'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getIdOfArtist();
    const fetchArtists = async () => {
      if (!accessToken) {
        return console.log('no accesstoken');
      }
      try {
        // const response = await axios.get(
        //   'https://api.spotify.com/v1/search?q=&type=artist',
        //   {
        //     headers: {
        //       Authorization: `Bearer ${accessToken}`,
        //     },
        //   },
        // );
        // setArtists(response.data);
        // console.log(response.data.artists.items);
      } catch (error) {
        console.error('Error fetching artists:', error);
      }
    };

    fetchArtists();
  }, [accessToken]);

  return (
    <DataContext.Provider value={{artists}}>{children}</DataContext.Provider>
  );
};

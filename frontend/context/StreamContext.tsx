// StreamContext.tsx
import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';

interface MeetingContextData {
  createRoom: (token: string) => Promise<void>;
  liveEventData: any;
  setLiveEventData: React.Dispatch<React.SetStateAction<any>>;
  joinroom: (roomId: string) => Promise<void>;
}

const StreamContext = createContext<MeetingContextData | undefined>(undefined);

export const useMeeting = () => {
  const context = useContext(StreamContext);
  if (!context) {
    throw new Error('useMeeting must be used within a StreamProvider');
  }
  return context;
};

export const StreamProvider = ({children}: {children: React.ReactNode}) => {
  const [liveEventData, setLiveEventData] = useState<any>(null); // Initialize with null or appropriate default value
  const api = 'bXyBT4jn3ahSgflply_Blei901u7LbVH';

  const createRoom = async () => {
    try {
      const response = await axios.post(
        'https://api.huddle01.com/api/v1/create-room',
        {
          title: 'Huddle01-Test',
          hostWallets: ['0x29f54719E88332e70550cf8737293436E9d7b10b'],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': api,
          },
        },
      );

      console.log('Room created:', response.data);
      // Here you can fetch live event data if needed
    } catch (error) {
      console.error('Failed to create room:', error);
    }
  };

  const joinroom = async (roomId: string) => {
    try {
      const response = await axios.post(
        'https://api.huddle01.com/api/v1/join-room-token',
        {
          roomId: roomId,
          userType: 'listener',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': api,
          },
        },
      );
      console.log('joined room', response.data);
    } catch (error) {
      console.log('failed to join meeting', error);
    }
  };

  const fetchLiveMeetings = async () => {
    try {
      const response = await axios.get(
        'https://api.huddle01.com/api/v1/live-meeting',
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': api,
          },
        },
      );

      console.log('live meetings', response.data);
      setLiveEventData(response.data);
    } catch (error) {
      console.log('failed to fetch live meetings', error);
    }
  };

  useEffect(() => {
    fetchLiveMeetings();
  }, [liveEventData]);

  return (
    <StreamContext.Provider
      value={{createRoom, liveEventData, setLiveEventData, joinroom}}>
      {children}
    </StreamContext.Provider>
  );
};

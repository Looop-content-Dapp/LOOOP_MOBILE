// DataContext.tsx

import {collection, getDocs} from 'firebase/firestore';
import React, {createContext, useContext, useState, useEffect} from 'react';
import {db} from '../firebase';

type ContextProps = {
  children: React.ReactNode;
};

interface SpotifyData {
  data: any;
  loading: boolean;
  error: any;
}

const DataContext = createContext<SpotifyData | undefined>(undefined);

export const useDataStore = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useFirestore must be used within a FirestoreProvider');
  }
  return context;
};

export const DataProvider = ({children}: ContextProps) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, 'streams'));
        const result = querySnapshot.docs.map(doc => doc.data());
        setData(result);
        setError(null);
      } catch (catchError) {
        setError(catchError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
      }}>
      {children}
    </DataContext.Provider>
  );
};

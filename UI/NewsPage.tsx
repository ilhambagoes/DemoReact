import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';


const NewsPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {data ? (
        <Text>{data}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default NewsPage;
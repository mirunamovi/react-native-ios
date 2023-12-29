import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const StatusDisplayComponent = () => {
  const [centrStatus, setCentrStatus] = useState('');

  const getCentrStatus = async () => {
    try {
      const response = await fetch('http://192.168.0.70/getCentrStatus'); 
      const data = await response.text();
      console.log(data);
      setCentrStatus(data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    const centrStatusInterval = setInterval(() => {
      getCentrStatus();
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(centrStatusInterval);
    };
  }, []);

  return (
    <View>
      <Text>{centrStatus}</Text>
    </View>
  );
};

export default StatusDisplayComponent;
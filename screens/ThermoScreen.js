import React, { useEffect, useState } from 'react';
import { DataTable } from 'react-native-paper'; 
import { StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';
import { Button } from "react-native-paper";

const ThermoScreen = () => {

  const StatusDisplayComponent = () => {
    const [centrStatus, setCentrStatus] = useState('');
    
    const getCentrStatus = async () => {
      try {
        const response = await fetch('http://192.168.0.70/getCentrStatus'); 
        const data = await response.text();
        setCentrStatus(data);
      }
      catch (error) {
        console.error('Error fetching data: ', error);
        setCentrStatus("error fetching data");
      }
    };
    
    useEffect(() => {
      const centrStatusInterval = setInterval(() => {
        getCentrStatus();
      }, 5000);
    
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

  const InteriorTempComponent = () => {
    const [interiorTemp, setInteriorTemp] = useState('');
    
    const getInteriorTemp = async () => {
      try {
        const response = await fetch('http://192.168.0.70/getTempInt'); 
        const data = await response.text();
        setInteriorTemp(data);
      } 
      catch (error) {
        console.error('Error fetching data: ', error);
        setInteriorTemp("error fetching data");
      }
    };
    
    useEffect(() => {
      const interiorTempInterval = setInterval(() => {
        getInteriorTemp();
      }, 5000);
    
    return () => {
      clearInterval(interiorTempInterval);
      };
    }, []);
    
    return (
      <View>
        <Text>{interiorTemp}</Text>
      </View>
    );
  };
    

  const TempSetComponent = () => {
    const [tempSet, setTempSet] = useState('');
    const [isMobile, setIsMobile] = useState(Dimensions.get('window').width <= 350);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(Dimensions.get('window').width <= 350);
      };

      Dimensions.addEventListener('change', handleResize);

      return () => {
        Dimensions.removeEventListener('change', handleResize);
      };
    }, []);
    
    const getTempSet = async () => {
      try {
        const response = await fetch('http://192.168.0.70/getTempSetp'); 
        const data = await response.text();
        setTempSet(data);
      } 
      catch (error) {
        console.error('Error fetching data: ', error);
        setTempSet("error fetching data");
      }
    };
 
    const setTemp = async (tempSet) => {
      try {
        const response = await fetch(`http://192.168.0.70/setTemp?TempSetp=${tempSet}`);
        const data = await response.text();
        setTempSet(data);
      } 
      catch (error) {
        console.error('Error fetching data: ', error);
        setTempSet("not working the button");
      }
    };

    useEffect(() => {
      const tempSetInterval = setInterval(() => {
        getTempSet();
      }, 1000);
    
      return () => {
        clearInterval(tempSetInterval);
        };
   `` }, []);
    
      return (
        <View style={{flex: 1, flexDirection: isMobile ? 'column' : 'row', justifyContent: isMobile ? 'center' : 'space-between', alignItems: 'center'}}>
          <Button mode="contained" onPress={() => setTemp(1)} style={{margin: isMobile ? 4 : 0}}>- 0.5</Button>
          <Text>{tempSet}</Text>
          <Button mode="contained" onPress={() => setTemp(0)} style={{margin: isMobile ? 5 : 0}}>+ 0.5</Button>
        </View>
      );
    };

    const ButtonsComponent = (getUrlSel, setUrl, getUrlCom) => {

      const [regSet, setRegSet] = useState('');
      const [regCom, setRegCom] = useState('');

          const getRegSet = async () => {
            try {
              const response = await fetch(getUrlSel); 
              const data = await response.text();
              setRegSet(data);
            } catch (error) {
              console.error('Error fetching data: ', error);
              setRegSet("error fetching data");
            }
          };

          const getRegCom = async () => {
            try {
              const response = await fetch(getUrlCom); 
              const data = await response.text();
              setRegCom(data);
            } catch (error) {
              console.error('Error fetching data: ', error);
              setRegCom("error fetching data");
            }
          };

          const setReg = async (regSet) => { 
            try {
              const response = await fetch(`${setUrl}${regSet}`);
              const data = await response.text();
              setRegSet(data);
            } catch (error) {
              console.error('Error fetching data: ', error);
              setTempSet("not working the button");
            }
          };

          useEffect(() => {
            const setIntervalId = setInterval(() => {
              getRegSet();
              getRegCom();
            }, 5000);

            return () => {
              clearInterval(setIntervalId);
            };
          }, []);

          return { regSet, regCom, setReg };
   };


      const AutomatComponent = () => {
        const {regSet, regCom, setReg} = ButtonsComponent('http://192.168.0.70/getRegSel', `http://192.168.0.70/setReg?RegSel=`, '');
          return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Button mode="contained" onPress={() => setReg(0)}>Crono</Button>
              <Button mode="contained" onPress={() => setReg(1)}>Senzor</Button>
            </View>
          );
      };

    const ManualComponent = () => {
      const {regSet, regCom, setReg} = ButtonsComponent('http://192.168.0.70/getRegSel', `http://192.168.0.70/setReg?RegSel=`, '');
        return (
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button mode="contained" onPress={() => setReg(2)}>Start</Button>
            <Button mode="contained" onPress={() => setReg(3)}>Stop</Button>
          </View>
        );
    };

    const RegimComponent = () => {
      const {regSet, setRegSet} = ButtonsComponent('http://192.168.0.70/getRegSel', `http://192.168.0.70/setReg?RegSel=`, '');
      const {regCom, setRegCom} = ButtonsComponent('', ``, 'http://192.168.0.70/getRegCom');
      
        return (
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, }}>
            <Text>{regSet}</Text>
            <Text>{regCom}</Text>
          </View>
        );
    };

    const BatteryComponent = () => {
      const [batterySet, setbatterySet] = useState('');

      const getTensStatus = async () => {
        try {
          const response = await fetch('http://192.168.0.70/getTensBat'); 
          const data = await response.text();
          setbatterySet(data);
        } catch (error) {
          console.error('Error fetching data: ', error);
          setbatterySet("error fetching data");
        }
      };
  
    useEffect(() => { 
      const tensStatusInterval = setInterval(() => {
        getTensStatus();
      }, 5000);
  
      return () => {
        clearInterval(tensStatusInterval);
      };
    }, []);
  
    return (
      <View>
        <Text>{batterySet}</Text>
      </View>
    );
  };

    return (
        <SafeAreaView edges={['left']} style={styles.container}>
        <DataTable style={{maxWidth: 1000}}> 

        {/* Comanda centrala */}
        <DataTable.Row> 
          <DataTable.Cell>Comanda centrala:</DataTable.Cell> 
          <DataTable.Cell><StatusDisplayComponent></StatusDisplayComponent></DataTable.Cell>
        </DataTable.Row> 
    
        {/* Temperatura interior */}
        <DataTable.Row> 
          <DataTable.Cell>Temperatura interior:</DataTable.Cell> 
          <DataTable.Cell><InteriorTempComponent></InteriorTempComponent></DataTable.Cell> 
        </DataTable.Row>

        {/* Temperatura setata */}
        <DataTable.Row> 
          <DataTable.Cell>Temperatura setata:</DataTable.Cell> 
          <DataTable.Cell>
              <TempSetComponent></TempSetComponent>
          </DataTable.Cell> 
        </DataTable.Row> 

        {/* Automat */}
        <DataTable.Row> 
          <DataTable.Cell>Automat</DataTable.Cell> 
          <DataTable.Cell>
            <AutomatComponent></AutomatComponent>
          </DataTable.Cell>
        </DataTable.Row> 

        {/* Manual */}
        <DataTable.Row> 
          <DataTable.Cell>Manual</DataTable.Cell> 
          <DataTable.Cell>
          <ManualComponent></ManualComponent>
          </DataTable.Cell>
        </DataTable.Row>

        {/* Regim */}
        <DataTable.Row> 
          <DataTable.Cell>Regim:</DataTable.Cell> 
          <DataTable.Cell><RegimComponent></RegimComponent></DataTable.Cell>
        </DataTable.Row>  

        {/* Tensiunea bateriei */}
        <DataTable.Row> 
          <DataTable.Cell>Tensiunea bateriei</DataTable.Cell> 
          <DataTable.Cell><BatteryComponent></BatteryComponent></DataTable.Cell> 
        </DataTable.Row> 
      </DataTable>
      </SafeAreaView>   

    ); 
};    
const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  button: {
    borderRadius: 4,
    elevation: 3,
    borderColor:'black', 
    borderWidth: 1, 
    marginTop: 1, 
  },
  
});
 export default ThermoScreen;
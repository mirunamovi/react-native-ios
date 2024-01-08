import React, { useEffect, useState } from 'react';
import { DataTable } from 'react-native-paper'; 
import { StyleSheet, Text, View, Pressable} from 'react-native';
import { Button } from "react-native-paper";

const ThermoScreen = ({ navigation }) => {

    const StatusDisplayComponent = () => {
      const [centrStatus, setCentrStatus] = useState('');
    
      const getCentrStatus = async () => {
        try {
          const response = await fetch('http://192.168.0.70/getCentrStatus'); 
          const data = await response.text();
          setCentrStatus(data);
        } catch (error) {
          console.error('Error fetching data: ', error);
          setCentrStatus("error dummy2");
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
        } catch (error) {
          console.error('Error fetching data: ', error);
          setInteriorTemp("error dummy2");
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
    
      const getTempSet = async () => {
        try {
          const response = await fetch('http://192.168.0.70/getTempSetp'); 
          const data = await response.text();
          setTempSet(data);
        } catch (error) {
          console.error('Error fetching data: ', error);
          setTempSet("error dummy2");
        }
      };
 
      const setTemp = async (tempSet) => {
        try {
          const response = await fetch(`http://192.168.0.70/setTemp?TempSetp=${tempSet}`);
          const data = await response.text();
          setTempSet(data);
        } catch (error) {
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
      }, []);
    
      return (
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, }}>
          <Button
          mode="contained"
          style={{marginTop: 10}}
          onPress={() => setTemp(1)}
        >
          - 0.5
        </Button>
          <Text>{tempSet}</Text>
          <Button
          mode="contained"
          style={{marginTop: 10}}
          onPress={() => setTemp(0)}
        >
          + 0.5
        </Button>
        </View>

      );
    };

    const Component = (getUrlSel, setUrl, getUrlCom) => {

      const [regSet, setRegSet] = useState('');
      const [regCom, setRegCom] = useState('');

          const getRegSet = async () => {
            try {
              const response = await fetch(getUrlSel); 
              const data = await response.text();
              setRegSet(data);
            } catch (error) {
              console.error('Error fetching data: ', error);
              setRegSet("error dummy2");
            }
          };

          const getRegCom = async () => {
            try {
              const response = await fetch(getUrlCom); 
              const data = await response.text();
              setRegCom(data);
            } catch (error) {
              console.error('Error fetching data: ', error);
              setRegCom("error dummy2");
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
        const {regSet, regCom, setReg} = Component('http://192.168.0.70/getRegSel', `http://192.168.0.70/setReg?RegSel=`, '');
          return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
              <Button
          mode="contained"
          style={{marginTop: 10}}
          onPress={() => setReg(0)}
          compact     >
          Crono
        </Button>
        <Button
          mode="contained"
          style={{marginTop: 10}}
          onPress={() => setReg(1)}
        >
          Senzor
        </Button>
            </View>
          );
      };

    const ManualComponent = () => {
      const {regSet, regCom, setReg} = Component('http://192.168.0.70/getRegSel', `http://192.168.0.70/setReg?RegSel=`, '');
      
        return (
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, }}>
            <Button
          mode="contained"
          style={{marginTop: 10}}
          onPress={() => setReg(2)}
        ><Text> Start</Text>
         
        </Button>
        <Button
          mode="contained"
          style={{marginTop: 10}}
          onPress={() => setReg(3)}
        >
          Stop
        </Button>
          </View>
        );
    };

    const RegimComponent = () => {
      const {regSet, setRegSet} = Component('http://192.168.0.70/getRegSel', `http://192.168.0.70/setReg?RegSel=`, '');
      const {regCom, setRegCom} = Component('', ``, 'http://192.168.0.70/getRegCom');
      
        return (
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, }}>
            <Text>{regSet}</Text>
            <Text>{regCom}</Text>
          </View>
        );
    };

    return (
        
        <DataTable style={styles.container}> 

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
          <DataTable.Cell style={{flex: 1}}>
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
          <DataTable.Cell>0.05 V</DataTable.Cell> 
        </DataTable.Row> 
      </DataTable> 
    ); 
      

};
  
const styles = StyleSheet.create({ 
  container: { 
    padding: 15, 
    paddingTop: 100,
  }, 
  tableHeader: { 
    backgroundColor: '#DCDCDC', 
  }, 
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    borderColor:'black', 
    borderWidth: 1, 
    marginTop: 1, 
  },
  
});
 export default ThermoScreen;
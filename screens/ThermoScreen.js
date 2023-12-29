import React from 'react'; 
import { DataTable } from 'react-native-paper'; 
import { StyleSheet, Text, View, Pressable, Image, Linking, ScrollView, Button} from 'react-native';
import { StatusDisplayComponent} from "../../components/StatusDisplayComponent";

const ThermoScreen = ({ navigation }) => {

    // function setTemp(tmp) {
    //     var xhttp = new XMLHttpRequest();
    //     xhttp.onreadystatechange = function() {
    //       if (this.readyState == 4 && this.status == 200) {
    //         document.getElementById("TempSetp").innerHTML =
    //         this.responseText;
    //       }
    //     };
    //     xhttp.open("GET", "setTemp?TempSetp="+tmp, true);
    //     xhttp.send();
    //   }
      
    //   function setReg(reg) {
    //     var xhttp = new XMLHttpRequest();
    //     xhttp.onreadystatechange = function() {
    //       if (this.readyState == 4 && this.status == 200) {
    //         document.getElementById("RegSel").innerHTML =
    //         this.responseText;
    //       }
    //     };
    //     xhttp.open("GET", "setReg?RegSel="+reg, true);
    //     xhttp.send();
    //   }
      
    //   setInterval(function() {
    //     // Call a function repetatively with 2 Second interval
    //     getCentrStatus();
    //   }, 5000); //2000mSeconds update rate
      
    //   function getCentrStatus() {
    //     var xhttp = new XMLHttpRequest();
    //     xhttp.onreadystatechange = function() {
    //       if (this.readyState == 4 && this.status == 200) {
    //         document.getElementById("CentrStatus").innerHTML =
    //         this.responseText;
    //       }
    //     };
    //     xhttp.open("GET", "getCentrStatus", true);
    //     xhttp.send();
    //   }
      
    //   setInterval(function() {
    //     // Call a function repetatively with 2 Second interval
    //     getTempInt();
    //   }, 3000); //2000mSeconds update rate
      
    //   function getTempInt() {
    //     var xhttp = new XMLHttpRequest();
    //     xhttp.onreadystatechange = function() {
    //       if (this.readyState == 4 && this.status == 200) {
    //         document.getElementById("TempInt").innerHTML =
    //         this.responseText;
    //       }
    //     };
    //     xhttp.open("GET", "getTempInt", true);  
    //     xhttp.send();
    //   }
      
    //   setInterval(function() {
    //     getRegCom();
    //   }, 2500);
      
    //   function getRegCom() {
    //     var xhttp = new XMLHttpRequest();
    //     xhttp.onreadystatechange = function() {
    //       if (this.readyState == 4 && this.status == 200) {
    //         document.getElementById("RegCom").innerHTML =
    //         this.responseText;
    //       }
    //     };
    //     xhttp.open("GET", "getRegCom", true);  
    //     xhttp.send();
    //   }
      
    //   setInterval(function() {
    //     getTensBat();
    //   }, 3500); 
      
    //   function getTensBat() {
    //     var xhttp = new XMLHttpRequest();
    //     xhttp.onreadystatechange = function() {
    //       if (this.readyState == 4 && this.status == 200) {
    //         document.getElementById("TensBat").innerHTML =
    //         this.responseText;
    //       }
    //     };
    //     xhttp.open("GET", "getTensBat", true);  
    //     xhttp.send();
    //   }
      
    //   setInterval(function() {
    //     getRegSel();
    //   }, 4500); 
      
    //   function getRegSel() {
    //     var xhttp = new XMLHttpRequest();
    //     xhttp.onreadystatechange = function() {
    //       if (this.readyState == 4 && this.status == 200) {
    //         document.getElementById("RegSel").innerHTML =
    //         this.responseText;
    //       }
    //     };
    //     xhttp.open("GET", "getRegSel", true);
    //     xhttp.send();
    //   }
      
    //   setInterval(function() {
    //     getTempSetp();
    //   }, 4000);
      
      
    //   function getTempSetp() {
    //     var xhttp = new XMLHttpRequest();
    //     xhttp.onreadystatechange = function() {
    //       if (this.readyState == 4 && this.status == 200) {
    //         document.getElementById("TempSetp").innerHTML =
    //         this.responseText;
    //       }
    //     };
    //     xhttp.open("GET", "getTempSetp", true);
    //     xhttp.send();
    //   }

    return (
        
        <DataTable style={styles.container}> 
    
        <DataTable.Row> 
          <DataTable.Cell>Comanda centrala:</DataTable.Cell> 
          <DataTable.Cell><StatusDisplayComponent></StatusDisplayComponent></DataTable.Cell>
        </DataTable.Row> 
    
        <DataTable.Row> 
          <DataTable.Cell>Temperatura interior:</DataTable.Cell> 
          <DataTable.Cell>20 grade</DataTable.Cell> 
        </DataTable.Row>

        <DataTable.Row> 
          <DataTable.Cell>Temperatura setata:</DataTable.Cell> 
          <DataTable.Cell>
            <Pressable>
                <Text>- 0.5</Text>
            </Pressable>
            25 grade
            <Pressable>
                <Text>+ 0.5</Text>
            </Pressable>
            </DataTable.Cell> 
        </DataTable.Row> 

        <DataTable.Row> 
          <DataTable.Cell>Automat</DataTable.Cell> 
          <DataTable.Cell><Pressable>
                <Text>Crono</Text>
            </Pressable></DataTable.Cell>
          <DataTable.Cell><Pressable>
                <Text>Senzor</Text>
            </Pressable></DataTable.Cell>
        </DataTable.Row> 

        <DataTable.Row> 
          <DataTable.Cell>Manual</DataTable.Cell> 
          <DataTable.Cell>Pornit</DataTable.Cell>
          <DataTable.Cell>Oprit</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row> 
          <DataTable.Cell>Regim:</DataTable.Cell> 
          <DataTable.Cell>Senzor</DataTable.Cell>
          <DataTable.Cell>Pornit</DataTable.Cell>
        </DataTable.Row>  
 
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
});
 export default ThermoScreen;
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';



export default function LocationsScreen() {
  const navigation = useNavigation();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Location search:', searchText);
    // You can implement location search logic here
  };

  const handleSelectLocation = (coordinate) => {
    setSelectedLocation(coordinate);
    // Reset other selected values when location changes
    // setSelectedDistrict(null);
    // setSelectedPlace(null);
    // setSelectedDate(null);
    // setIsFocus(false);

    // Print selected location to console
    console.log('Selected Location:', coordinate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Location"
          placeholderTextColor="#aaa"
          onChangeText={(text) => setSearchText(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 7.8731, // Sri Lanka latitude
            longitude: 80.7718, // Sri Lanka longitude
            latitudeDelta: 5, // Adjust initial zoom level
            longitudeDelta: 5, // Adjust initial zoom level
          }}
          onPress={(e) => handleSelectLocation(e.nativeEvent.coordinate)}
        >
          {selectedLocation && (
            <Marker coordinate={selectedLocation} title="Selected Location" />
          )}
        </MapView>
      </View>

          

      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('DashBoard')}>
          <Ionicons name="ios-home" size={24} color="#ffffff" />
          <Text style={styles.bottomNavText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Location')}>
          <Ionicons name="ios-pin" size={24} color="#ffffff" />
          <Text style={styles.bottomNavText}>Locations</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="ios-person" size={24} color="#ffffff" />
          <Text style={styles.bottomNavText}>Profile</Text>
        </TouchableOpacity>
      </View>
      
    </View>

    
  );
};

// const renderWeatherCard = ({ item, useStateDate, selectedDistrict, selectedLocation }) => (
//   <View style={styles.weatherCard} >
//     {/* <Ionicons name={item.icon} size={40} color="#333" /> */}
//     {/* <Text style={styles.weatherCardText}>{item.day}</Text> */}
//     <Text style={styles.weatherCardText}>{useStateDate}</Text>
//     {/* <Text style={styles.weatherCardText}>{item.temperature}</Text> */}
//     <Text style={styles.weatherCardText}>{selectedDistrict}</Text>
//     <Text style={styles.weatherCardText}>{selectedLocation}</Text>
//   </View> 
// );

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column'
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 35,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  searchInput: {
    flex: 1,
    padding: 8,
    marginRight: 10,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 5,
  },
  searchButton: {
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
  mapContainer: {
    flex: 1,
    maxHeight: '50%'
  },
  map: {
    flex: 1,
  },

  bottomNavigation: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    height: 50,
    width: '100%',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    bottom: 0,
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavText: {
    color: '#ffffff',
  },
});
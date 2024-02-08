import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function LocationsScreen() {
  const navigation = useNavigation();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [photos, setPhotos] = useState([]); // Array to store photos of the selected location

  const handleSearch = () => {
    console.log('Location search:', searchText);
    // You can implement location search logic here
  };

  const handleSelectLocation = (coordinate) => {
    setSelectedLocation(coordinate);
    // Reset other selected values when location changes
    setPhotos([]); // Clear photos array when a new location is selected
    console.log('Selected Location:', coordinate);
    // You can fetch photos for the selected location here
    // Example: fetchPhotosForLocation(coordinate);
  };

  // Mock function to simulate fetching photos for the selected location
  const fetchPhotosForLocation = async (coordinate) => {
    // Simulate fetching photos from an API
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    const locationPhotos = data.slice(0, 10); // Limiting to the first 10 photos for example
    setPhotos(locationPhotos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
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

        {/* FlatList for displaying photos */}
        <FlatList
          style={styles.photoList}
          data={photos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Image style={styles.photoItem} source={{ uri: item.thumbnailUrl }} />
          )}
          horizontal
        />

        <View style={styles.bottomNavigation}>
          <TouchableOpacity
            style={styles.bottomNavItem}
            onPress={() => navigation.navigate('DashBoard')}
          >
            <Ionicons name="ios-home" size={24} color="#ffffff" />
            <Text style={styles.bottomNavText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomNavItem}
            onPress={() => navigation.navigate('Location')}
          >
            <Ionicons name="ios-pin" size={24} color="#ffffff" />
            <Text style={styles.bottomNavText}>Locations</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomNavItem}
            onPress={() => navigation.navigate('Profile')}
          >
            <Ionicons name="ios-person" size={24} color="#ffffff" />
            <Text style={styles.bottomNavText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white', // Set the background color if necessary
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
    maxHeight: '50%',
  },
  map: {
    flex: 1,
  },
  photoList: {
    height: 100,
    marginTop: 10,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
  },
  photoItem: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
  bottomNavigation: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavText: {
    color: '#ffffff',
  },
});

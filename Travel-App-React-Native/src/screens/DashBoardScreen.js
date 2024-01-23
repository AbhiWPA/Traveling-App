import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import DateSelector from '../components/DateSelector';
import { Dropdown } from 'react-native-element-dropdown';

export default function DashboardScreen() {
  const navigation = useNavigation();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [weatherData, setWeatherData] = useState([
    { day: 'Monday', temperature: '25°C', icon: 'ios-sunny' },
    { day: 'Tuesday', temperature: '24°C', icon: 'ios-cloudy' },
    { day: 'Wednesday', temperature: '23°C', icon: 'ios-rainy' },
    { day: 'Thursday', temperature: '26°C', icon: 'ios-sunny' },
    { day: 'Friday', temperature: '22°C', icon: 'ios-thunderstorm' },
    // Add more data as needed
  ]);

  const handleSelectLocation = (coordinate) => {
    setSelectedLocation(coordinate);
    // Fetch weather forecast for the selected location
    // (You would need to implement the weather API call)
    // For this example, setting a dummy weather forecast
    setWeatherData([
      { day: 'Monday', temperature: '25°C', icon: 'ios-sunny' },
      { day: 'Tuesday', temperature: '24°C', icon: 'ios-cloudy' },
      { day: 'Wednesday', temperature: '23°C', icon: 'ios-rainy' },
      { day: 'Thursday', temperature: '26°C', icon: 'ios-sunny' },
      { day: 'Friday', temperature: '22°C', icon: 'ios-thunderstorm' },
      // Add more data as needed
    ]);

    // Print selected location to console
    console.log('Selected Location:', coordinate);
  };

  const handleSearch = () => {
    // Implement location search logic here
    // For this example, console log the search text
    console.log('Location search logic');
  };

  const handleSetTravelDates = () => {
    // Implement setting travel dates logic here
    // For this example, console log the selected dates
    console.log('Set travel dates logic:', travelDates);
  };

  const handleSelectDistrict = (value) => {
    setSelectedDistrict(value);
    // Reset selected place when district changes
    setSelectedPlace(null);
  };

  const handleSelectPlace = (value) => {
    setSelectedPlace(value);
  };

  // Dummy data for Sri Lankan districts
  const sriLankanDistricts = [
    { label: 'Colombo', value: 'colombo' },
    { label: 'Gampaha', value: 'gampaha' },
    { label: 'Kandy', value: 'kandy' },
    { label: 'Kalutara', value: 'kalutara' },
    { label: 'Matale', value: 'matale' },
    { label: 'Nuwara Eliya', value: 'nuwaraEliya' },
    { label: 'Galle', value: 'galle' },
    { label: 'Matara', value: 'matara' },
    { label: 'Hambantota', value: 'hambantota' },
    { label: 'Jaffna', value: 'jaffna' },
    { label: 'Kilinochchi', value: 'kilinochchi' },
    { label: 'Mannar', value: 'mannar' },
    { label: 'Vavuniya', value: 'vavuniya' },
    { label: 'Mullativu', value: 'mulativu' },
    { label: 'Batticalao', value: 'btticalao' },
    { label: 'Ampara', value: 'ampara' },
    { label: 'Trincomalee', value: 'trincomalee' },
    { label: 'Kurunegala', value: 'kurunegala' },
    { label: 'Puttalam', value: 'puttalam' },
    { label: 'Anuradhapura', value: 'anuradhapura' },
    { label: 'Polonnaruwa', value: 'polonnaruwa' },
    { label: 'Badulla', value: 'badulla' },
    { label: 'Monaragala', value: 'monaragala' },
    { label: 'Ratnapurra', value: 'ratnapura' },
    { label: 'Kegalle', value: 'kegalle' },

  ];

  // Dummy places for each district
  const districtPlaces = {
    colombo: [
      { label: 'Gangaramaya (Vihara) Buddhist Temple(Colombo)', value: 'gangaramaya' },
      { label: 'Kelaniya Raja Maha Vihara', value: 'kalaniTemple' },
      { label: 'Jami Ul-Alfar Mosque', value: 'jamiUi' },
      { label: 'Galle Face Green', value: 'galleFace' },
      { label: 'Viharamahadevi Park', value: 'viharamahadevi' },
      { label: 'Mount Lavinia Beach', value: 'mountLavinia' },
      { label: 'National Museum of Colombo', value: 'nationalMusium' },
      { label: 'Dutch Period Museum', value: 'dutchMusium' },
      { label: 'Planetarium', value: 'planearium' },
      { label: 'Independence Memorial Hall', value: 'memorialHall' },
      { label: 'Beira Lake', value: 'Beira' },
      { label: 'Independence Square', value: 'independenceSquare' },
      { label: 'Colombo Lotus Tower', value: 'lotusTower' },
      { label: 'Nelum Pokuna Theatre', value: 'nelumPokuna' },
      { label: 'Colombo Dutch Hospital', value: 'dutchHospital' },
      { label: 'Dehiwala Zoological Garden', value: 'zoo' },
      // Add more places for Colombo
    ],
    gampaha: [
      { label: 'Gampaha Botanical Garden', value: 'botanicalGarden' },
      { label: 'Lenawara Rajamaha Viharaya', value: 'lenawaraTemple' },
      { label: 'Pilikuththuwa Raja Maha Vihara', value: 'pilikuththuwaTemple' },
      { label: 'Maligatenna Purana Rajamaha Viharaya', value: 'maligathennaTemple' },
      { label: 'Guruge Nature Park', value: 'gurugeNaturePark' },
      { label: 'Dutch Fort', value: 'dutchFort' },
      { label: 'Gangaramaya Temple (Gampaha)', value: 'gangaramaTemple' },
      { label: 'Henarathgoda Botanical Garden', value: 'henarathgodaGarden' },
      { label: 'Attanagalla Raja Maha Viharaya', value: 'attanagallaTemple' },
      { label: 'Sri Lanka Heritance Tours', value: 'heritanceTours' },
      { label: 'Splatter Paintball', value: 'splatterPinball' },
      // Add more places for Gampaha
    ],
    kandy: [
      { label: 'Tooth Temple', value: 'toothTemple' },
      { label: 'Peradeniya Botanical Gardens', value: 'peradeniyaGarden' },
      { label: 'Kandy Lake Views', value: 'lakeViewKandy' },
      { label: 'Malwatta Monastery', value: 'malwattaMonastery' },
      { label: 'Lankatilaka Temple', value: 'lankatilakaTemple' },
      { label: 'Hanthana with Ceylon Tea Museum', value: 'hantanaTeaMusium' },
      { label: 'Three Devales near Tooth Temple', value: 'threeDevales' },
      { label: 'Asgiriya Monatery', value: 'asgiriryaMonatery' },
      { label: 'Nelligala Hill Temple', value: 'nelligalaTemple' },
      { label: 'Gadaladeniya', value: 'gadaladeniya' },
      { label: 'Gangaramaya Temple(Kandy)', value: 'gangaramaTemple' },
      { label: 'World Buddhist Museum', value: 'buddhistMusium' },
      { label: 'Embekke', value: 'embekke' },
      { label: 'Kataragama Devalaya (Kandy)', value: 'kataragamaDewalaya' },
      { label: 'National Museum of Kandy', value: 'nationalMusiumofKandy' },
      { label: 'Degaldoruwa', value: 'degaldoruwa' },
      { label: 'Bahiravakanda', value: 'bahirawakanda' },
      { label: 'Udawattakele', value: 'udawattakele' },
      { label: 'British Garrison Cemetery (Kandy)', value: 'farrisonCemetery' },
      { label: 'Monte Fano Abbey', value: 'monteFano' },
      // Add more places for Kandy
    ],

    kalutara: [
      {label: 'Kodigala Mountain Nehinna', value: 'kodigalaMount'},
      {label: 'Warakagoda Gallena Rajamaha Viharaya', value: 'warakagodaTemple'},
      {label: 'Thotas Ella', value: 'thotasElla'},
      {label: 'Deyyagala Dola', value: 'deyyagalaDola'},
      {label: 'Bandara Ella', value: 'bandaraElla'},
      {label: 'Kabaradola Ella', value: 'kabaradolaElla'},
      {label: 'Barberyn Island', value: 'barberynIsland'},
      {label: 'Beruwala Lighthouse', value: 'beruwalLighthouse'},
      {label: 'Ketchchimalai Mosque', value: 'ketchchimalaiMosque'},
      {label: 'Katukurunda Beach', value: 'katukurundaBeach'},
      {label: 'Puwakdola ella', value: 'puwakdolaElla'},
      {label: 'Kalutara Beach', value: ''},
      {label: 'Bodhinagala Forest Reserve (Dombagaskanda)', value: 'dombagaskanda'},
      {label: 'Wadduwa Beach', value: 'wadduwaBeach'},
      {label: 'Pahanthuda Ella waterfall', value: 'pahanthudaElla'},
      {label: 'Athweltota Pilithuda Ella', value: 'athweltotaElla'},
      {label: 'Lelwala Nikgaha Ella', value: 'nikgahaElla'},
      {label: 'Pahiyangala Ancient Temple - Yatagampitiya', value: 'pahiyangalaTemple'},
      {label: 'Lenawara Rajamaha Viharaya', value: 'lenawaraTemple'},
      {label: 'Rannagala Ella', value: 'rannagalaElla'},
      {label: 'Brief Garden, by Bevis Bawa', value: ''},
      {label: 'Yagirala Rain Forest', value: 'yagiraRainForest'},
      {label: 'Polgampola Waterfall (Thambadola Ella)', value: 'polgampolaWaterfall'},
      {label: 'Ataba ella', value: 'atabaElla'},
      {label: 'Ginigedara Ella', value: 'ginigedaraElla'},
      {label: 'Kande Viharaya Buddha Statue', value: 'kandeViharayaStatue'},
      {label: 'Anda Dola', value: 'andaDola'},
      {label: 'Makeli Ella Waterfall', value: 'makeliElla'},
      {label: 'Thudugala Ella', value: 'thudugalaElla'},
      {label: 'Kalutara Bodhiya', value: 'kalutaraBodhiya'},
      {label: 'Richmond Castle', value: 'richmondCastle'},
    ],

    matale: [
      {label: 'Aluvihare Cave Temple', value: 'aluvihareTemple'},
      {label: 'Sri Muthumariamman Temple', value: 'muthumariammanTemple'},
      {label: 'Aluvihara Rock Cave Temple', value: 'aluvihareRockTemple'},
      {label: 'Nalanda Gedige', value: 'nalandaGedige'},
      {label: 'Pitawala Pathana', value: 'pitawalaPathana'},
      {label: 'Wasgamuwa National Park', value: 'wasgamuwaNationalPark'},
      {label: 'Nalanda Dam', value: 'nalandaDam'},
      {label: 'Matale Royal Palace Ruins', value: 'mataleRoyalPalace'},
      {label: 'Rangiri Dambulla International Stadium', value: 'dambullaTemple'},
      {label: 'Kandalama Reservoir', value: 'kandalamaReservior'},
      {label: 'Knuckles Mountain Range', value: ''},
      {label: 'Sembuwatta Lake', value: ''},
      {label: 'Sera Ella falls', value: ''},
      {label: 'Kiddies Paradise Childrens Park', value: 'childrenPark'},
      {label: 'Riverston', value: 'reverston'},
      {label: 'Hunnasgiriya Water Fall', value: 'hunnasgiriryaWaterfall'},
      {label: 'Seegiriya', value: 'seegiriya'},
      {label: 'Pidurangala', value: 'pidurangala'},
    ],

    nuwaraEliya: [
      {label: 'Victoria Park', value: 'viktoriaPark'},
      {label: 'Bluefield Tea Gardens', value: 'blueFieldTeaGarden'},
      {label: 'Hakgala Botanical Gardens', value: 'hakgalaGarden'},
      {label: 'Seeta Amman Temple', value: 'seetAmmanTemple'},
      {label: 'Gregory Lake', value: 'gregoryLake'},
      {label: 'Moon Plains', value: 'moonPlains'},
      {label: 'Galways Land National Park', value: 'galwaysLand'},
      {label: 'Ramboda Falls', value: 'rambodaFalls'},
      {label: 'Horton Plains National Park', value: 'hortonNationalPark'},
      {label: 'St.Clair’s Falls', value: 'clairsFalls'},
      {label: 'Lovers leap', value: 'loversLeap'},
      {label: 'Ambewela Farm', value: 'ambewelaFarm'},
      {label: 'Shri Bhakta Hanuman Temple', value: 'hanumanTemple'},
      {label: 'Devon Falls', value: 'devonFalls'},
      {label: 'Grand Hotel', value: 'grandHotel'},
      {label: 'Bomburu Ella Falls', value: 'bomburuFalls'},
      {label: 'Train Ride to Ella or Kandy', value: 'traiRide'},
      {label: 'Abeerden Falls', value: 'abeerdenFalls'},
      {label: 'Pidurutalagala', value: 'pidurutalagala'},
      {label: 'Laxapana Falls', value: 'laxapanaFalls'},
      {label: 'Post Office', value: 'postOffice'},
      {label: 'Adam’s Peak', value: 'adamsPeak'},
      {label: 'Kudahagala', value: 'kudahagala'},
      {label: 'Pedro Tea Centre and Factory', value: 'pedroTea'},
      {label: 'Thotupola Kanda', value: 'thotupolaKanda'},
      {label: 'Nanuoya Falls', value: 'nanuoyaFalls'},
      {label: 'Kolapathana Falls', value: 'kolapathanaFalls'},
      {label: 'Kirigalpotta', value: 'kirigalpottaFalls'},
      {label: 'Single Tree Hill', value: 'singleTreeHill'},
      {label: 'World’s End – Horton Plains', value: 'wrldsEnd'},
      {label: 'Baker’s waterfalls', value: 'bakersFalls'},
      {label: 'Haggala Botanic Gardens', value: 'haggalaGarden'},
      {label: 'Chariot path- Ramboda', value: 'chariotPath'},
      {label: 'Pattipola railway station', value: 'pattipolaRailway'},
      {label: 'Kande Ela Educational Forest Reserve', value: 'eduForest'},
      {label: 'New Zealand Farm - Ambewela', value: 'ambewelaFarm'},
    ],

    galle: [
      {label: 'Galle Fort', value: 'galleFort'},
      {label: 'Jungle Beach', value: 'jungleBeach'},
      {label: 'Japanese Peace Pagoda', value: 'japanesePeace'},
      {label: 'Unawatuna Beach', value: 'unawatunaBeach'},
      {label: 'Sea Turtle Hatchery Centre, Mahamodara', value: 'mahamodaraTurtle'},
      {label: 'Dutch Reformed Church', value: 'dutchReformedChurch'},
      {label: 'Lighthouse Beach', value: 'lightHoseBeach'},
      {label: 'National Museum of Galle', value: 'nationalMusium'},
      {label: 'St. Mary’s Cathedral Galle', value: 'cathedral'},
      {label: 'Koggala Turtle Hatchery', value: 'koggalaTurtle'},
      {label: 'Barefoot Store', value: 'barfootStore'},
      {label: 'Galle International Cricket Stadium', value: 'cricketStadium'},
      {label: 'National Maritime Museum Galle', value: 'maritimeMusium'},
      {label: 'Old Dutch Market', value: 'dutchMarket'},
      {label: 'Flag Rock', value: 'flagRock'},
      {label: 'Hikkaduwa Beach', value: 'hikkaduwaBeach'},
      {label: 'Historical Mansion Museum, Galle', value: 'mansionMusium'},
      {label: 'Dalawella Beach', value: 'dalawellaBeach'},
      {label: 'Martin Wickramasinghe House & Folk Museum', value: 'martinWickramasinghe'},
      {label: 'Sinharaja Forest Reserve', value: 'sinharaja'},
      {label: 'Koggala Lake', value: 'koggalaLake'},
      {label: 'Ahungalla Beach', value: 'ahungallaBeach'},
      {label: 'Induruwa Beach', value: 'induruwaBeach'},
      {label: 'Rumassala South Beach', value: 'rumassalaSouthBeach'},
    ],

    matara: [
      {label: 'Devinuwara Gal Ge', value: 'devinuwaraGalGe'},
      {label: 'Hummana Beach Dondra', value: 'hummanaya'},
      {label: 'Uthpalawanna Sri Vishnu Maha Dewalaya', value: 'uthpalawanna'},
      {label: 'Kotikagoda Rajamaha Viharaya', value: 'kotikagodaTemple'},
      {label: 'Sk Town Beach', value: 'skTownBeach'},
      {label: 'Parrot Rock Bridge', value: 'porrotRock'},
      {label: 'Matara Clock Tower', value: 'mataraClockTower'},
      {label: 'Matara Beach', value: 'mataraBeach'},
      {label: 'Madiha Beach', value: 'madihaBeach'},
      {label: 'Polhena Beach', value: 'polhenaBeach'},
      {label: 'Kirala Kele Sanctuary', value: 'kiralaKele'},
      {label: 'Point Dewundara', value: 'pointDewundara'},
      {label: 'Old Dutch Market', value: 'oldDutchMarket'},
      {label: 'Weherahena Poorwarama Rajamaha Viharaya', value: 'weherahenaTemple'},
      {label: 'Parewi Duwa Temple', value: 'parewiDuwa'},
      {label: 'Kurulu Ella Sinharaja', value: 'kuruluElla'},
      {label: 'Bambaragala Estate Waterfall', value: ''},
      {label: 'Patna', value: 'patna'},
      {label: 'Talalla Beach', value: 'talallaBeach'},
      {label: 'Seethagalla Beach', value: 'seethagallaBeach'},
      {label: 'Hiriketiya Beach', value: 'hiriketiyaBeach'},
      {label: 'Nilwella Underwater Gallery', value: 'nilwellaBeach'},
      {label: 'Sri Lanka Snake Farm', value: 'snakeFarm'},
      {label: 'Kushtarajagala Statue', value: 'kushtarajagalaStatue'},
    ],

    hambantota: [
      {label: 'Tissamaharama Raja Maha Vihara', value: 'tissamaharamaTemple'},
      {label: 'BataathaAgro Technology and Tourism Park', value: 'bataathaAgro'},
      {label: 'Dry Zone Botanic Gardens, Hambantota', value: 'dryZoneGarden'},
      {label: 'Birds Park / Birds Research Center Hambantota', value: 'birdsPark'},
      {label: 'Nildiya bubula', value: 'nildiyaBubula'},
      {label: 'Katuwana Fort', value: 'katuwanaFort'},
      {label: 'Sapugahadola Ella Falls', value: 'sapugahadolaElla'},
      {label: 'Ridiyagama Safari Park', value: 'ridiyagamaSafariPark'},
      {label: 'Tissa Wewa - Tissamaharamaya', value: 'tissaWewa'},
      {label: 'Wirawila Tissa Sanctuary', value: 'wirawilaTissaSanctuary'},
      {label: 'Yala National Park Sri Lanka', value: 'yalNationalPark'},
      {label: 'Palatupana Beach', value: 'palatupanaBeach'},
      {label: 'Kirinda Beach', value: 'kirindaBeach'},
      {label: 'Bundala national park', value: 'bundalaNationalPark'},
      {label: 'Hambantota Beach', value: 'hambantotaBeach'},
      {label: 'Kochchama', value: 'kochchama'},
      {label: 'Ussangoda Beach', value: 'ussangodaBeach'},
      {label: 'Kalametiya Bird Sanctuary', value: 'kalametiyaBirdSanctuary'},
      {label: 'Tangalle Beach', value: 'tangalleBeach'},
      {label: 'Hummanaya Blow Hole', value: 'hummanayaBlowHole'},
      {label: 'Kudawella Beach', value: 'kaduwellaBeach'},
      {label: 'Goyambokka Beach', value: 'goyambokkaBeach'},
    ],

    jaffna: [
      {label: 'Nallur Kandasamy Kovil', value: 'nallurKovil'},
      {label: 'Jaffna Fort', value: 'jaffnaFort'},
      {label: 'Nagadeepa Temple', value: 'nagadeepaTemple'},
      {label: 'Chundikulam National Park', value: 'chundikulamNationalPark'},
      {label: 'Jaffna Archaeological Museum', value: 'jaffnaArchaeologicalMuseum'},
      {label: 'Jaffna Kingdom Ruins', value: 'jaffnaKingdomRuins'},
      {label: 'Fort Hammenheil', value: 'fortHammenheil'},
      {label: 'Point Pedro Lighthouse', value: 'pointPedroLighthouse'},
      {label: 'Jaffna Public Library', value: 'jaffnaPublicLibrary'},
      {label: 'Delft Island', value: 'delftIsland'},
      {label: 'Manalkadu Beach', value: 'manalkaduBeach'},
      {label: 'KKS Beach', value: 'KKSBeach'},
      {label: 'Pigeons Nest', value: 'pigeonsNest'},
      {label: 'Dambakola Patuna Sanghamitta Temple', value: 'dambakolaPatunaTemple'},
      {label: 'Nilavarai Bottomless Well', value: 'bottomlessWell'},
      {label: 'Sarasalai Mangrove Ecosystem', value: 'mangroveEcosystem'},
      {label: 'Sparrow Jungle', value: 'sparrowJungle'},
    ],
    
    kilinochchi: [
      {label: 'Elephant Pass War Memorial', value: 'elephantPassWarMemorial'},
      {label: 'Hasalaka Gamini War Memorial', value: 'hasalakaGaminiMemorial'},
      {label: 'Iranamadu Tank', value: 'iranamaduTank'},
      {label: 'Kilinochchi Kulam', value: 'kilinochchiKulam'},
      {label: 'Raiyaru Tank', value: 'raiyaruTank'},
    ],

    mannar: [
      {label: 'Adam’s bridge', value: 'adamsBridge'},
      {label: 'Talaimannar Pier and Lighthouse', value: 'talaimannarLighthouse'},
      {label: 'Mannar Fort', value: ',mannarFort'},
      {label: 'Kudiramalai Point', value: 'kudiramalaiPoint'},
      {label: 'Mannar Bird Sanctuary', value: 'mannarBirdSanctuary'},
      {label: 'Kunchukulam Hanging Bridge', value: 'kunchukulamHangingBridge'},
      {label: 'Doric Bungalow', value: 'doricBungalow'},
    ],

    vavuniya: [
      {label: 'Sri Dalada viharaya - Madukanda', value: 'daladaViharayaMadukanda'},
      {label: 'Sivan Kovil', value: 'sivanKovil'},
      {label: 'Sapumalgaskada Buddhist Monastery', value: 'sapumalgaskadaBuddhistMonastery'},
      {label: 'Nandimithra Village', value: 'nandimithraVillage'},
      {label: 'Vavuniya Kulam', value: 'vavuniyaKulam'},
      {label: 'Samalankulam historical place', value: 'samalankulamHistoricalPlace'},
      {label: 'Vavuniya Archaeological Museum', value: 'vavuniyaArchaeologicalMuseum'},
      {label: 'Marutha Nilam', value: 'maruthaNilam'},
      {label: 'Vaddamana Temple', value: 'vaddamanaTemple'},
      {label: 'Kimbulagala Rock', value: 'kimbulagalaRock'},
      {label: 'Karaiyamullivaikkal Beach', value: 'karaiyamullivaikkalBeach'},
    ],

    mulativu: [
      {label: 'Chundikulam Beach', value: 'chundikulamBeach'},
      {label: 'Submarine Yard', value: 'submarineYard'},
      {label: 'Puthukkudiyiruppu War Museum', value: 'puthukkudiyiruppuWarMuseum'},
      {label: 'Kurundi Temple', value: 'kurundiTemple'},
      {label: 'Nayaru Beach', value: 'nayaruBeach'},
      {label: 'Old chemmalai beach', value: 'oldChemmalaiBeach'},
      {label: 'Mullaitivu Beach', value: 'mullaitivuBeach'},
      {label: 'Monument of Victory', value: 'monumentVictory'},
      {label: 'Kokkilai Sanctuary', value: 'kokkilaiSanctuary'},
      {label: 'Black Sand Beach', value: 'blackSandBeach'},
    ],

    btticalao: [
      {label: 'Puthukkudiyiruppu Beach', value: 'puthukkudiyiruppuBeach'},
      {label: 'Heritage Museum - Kattankudy', value: 'heritageMuseum'},
      {label: 'Kaluwanchikudy Beach', value: 'kaluwanchikudyBeach'},
      {label: 'Kallady Beach', value: 'kalladyBeach'},
      {label: 'Kokkaddicholai Thaanthonreeswarar Temple', value: 'thaanthonreeswararTemple'},
      {label: 'Bone Island', value: 'boneIsland'},
      {label: 'Thoppigala Heritage Center', value: 'thoppigalaHeritageCenter'},
      {label: 'Eco Park', value: 'ecoPark'},
      {label: 'Batticaloa Lighthouse', value: 'batticaloaLighthouse'},
      {label: 'Nelugala Archaeological Site', value: 'nelugalaArchaeologicalSite'},
      {label: 'Batticaloa Fort', value: 'batticaloaFort'},
      {label: 'Pasikuda Beach', value: 'pasikudaBeach'},
      {label: 'Kayankerni Coral Reef', value: 'kayankerniCoralReef'},
    ],

    ampara: [
      {label: 'Nuwaragala Mountain', value: 'nuwaragalaMountain'},
      {label: 'Okanda Beach', value: 'okandaBeach'},
      {label: 'Nintavur Beach', value: 'nintavurBeach'},
      {label: 'Oluvil Beach', value: 'oluvilBeach'},
      {label: 'Neelagiriya Maha Seya', value: 'neelagiriyaMahaSeya'},
      {label: 'Crocodile Rock', value: 'crocodileRock'},
      {label: 'Panama Beach', value: 'panamaBeach'},
      {label: 'Kumana National Park', value: 'kumanaNationalPark'},
      {label: 'Arugam Bay Beach', value: 'arugamBayBeach'},
      {label: 'Buddhangala Temple', value: 'buddhangalaTemple'},
      {label: 'Magul Maha Viharaya', value: 'magulMahaViharaya'},
      {label: 'Veduvar Hill', value: 'veduvarHill'},
      {label: 'Deeghawapi Raja Maha Viharaya', value: 'deeghawapiRajaMahaViharaya'},
      {label: 'Lahugala Kitulana National Park', value: 'lahugalaKitulanaNationalPark'},
      {label: 'Maruthamunai Beach', value: 'maruthamunaiBeach'},
      {label: 'Rajagalathanna Archeological Ruins', value: 'rajagalathannaArcheologicalRuins'},
    ],

    trincomalee: [
      {label: 'Pigeon Island National park', value: 'pigeonIslandNationalPark'},
      {label: 'Thiru Koneswaram Temple', value: 'thiruKoneswaramTemple'},
      {label: 'Sober Island', value: 'soberIsland'},
      {label: 'Uppuveli Beach', value: 'uppuveliBeach'},
      {label: 'Kanniya Hot Water Springs', value: 'kanniyaHotWaterSprings'},
      {label: 'Nilaveli Beach', value: 'nilaveliBeach'},
      {label: 'Fort Frederick', value: 'fortFrederick'},
      {label: 'Girihadu Seya Temple', value: 'girihaduSeyaTemple'},
      {label: 'Kokkilai Brid Sanctuary', value: 'kokkilaiBridSanctuary'},
      {label: 'Maritime Museum', value: 'maritimeMuseum'},
      {label: 'Marble Beach', value: 'marbleBeach'},
      {label: 'Diamond Hill', value: 'diamondHill'},
      {label: 'Snorkelling at Red Rocks', value: 'snorkellingRedRocks'},
      {label: 'Scuba Diving in Trincomalee', value: 'scubaDivingTrincomalee'},
      {label: 'Kuchchaveli Beach', value: 'kuchchaveliBeach'},
      {label: 'Seruwawila Rajamaha Viharaya', value: 'seruwawilaRajamahaViharaya'},
    ],

    kurunegala: [
      {label: 'Maha Oya View Point', value: 'mahaOyaViewPoint'},
      {label: 'Yapahuwa Rock Fortress', value: 'yapahuwaRock'},
      {label: 'Padeniya Purana Rajamaha Viharaya', value: 'padeniyaTemple'},
      {label: 'Arankale Buddhist Monastery', value: 'arankaleBuddhistMonastery'},
      {label: 'Galgiriya Mountain', value: 'galgiriyaMountain'},
      {label: 'Pahangala', value: 'pahangala'},
      {label: 'Sri Nagala Rajamaha Viharaya', value: 'nagalaRajamahaViharaya'},
      {label: 'Dambadeniya Raja Maliga Gala', value: 'dambadeniyaPalace'},
      {label: 'Dalada maligawa - Kurunegala kingdom', value: 'daladaMaligawaKurunegala'},
      {label: 'Badagamuwa Forest', value: 'badagamuwaForest'},
      {label: 'Kiribathkete gala', value: 'kiribathketeGala'},
      {label: 'Panduwasnuwara Kingdom', value: 'panduwasnuwaraKingdom'},
      {label: 'Wewala Waterfall', value: 'wewalaWaterfall'},
      {label: 'Ridi Viharaya', value: 'ridiViharaya'},
      {label: 'Paangala', value: 'paangala'},
    ],

    puttalam : [
      {label: 'Thalawila Beach', value: 'thalawilaBeach'},
      {label: 'Uchchimuni beach', value: 'uchchimuniBeach'},
      {label: 'Baththalangunduwa', value: 'baththalangunduwa'},
      {label: 'Queen Kuweni’s Palace', value: 'queenKuwenisPalace'},
      {label: 'Anawilundawa Bird Sanctuary', value: 'anawilundawaBirdSanctuary'},
      {label: 'Upulwehera Rajama Viharaya (Ancient Temple)', value: 'upulweheraTemple'},
      {label: 'Kalpitiya Dutch Fort', value: 'kalpitiyaDutchFort'},
      {label: 'Neelabemma', value: 'neelabemma'},
      {label: 'Chilaw Beach Park', value: 'chilawBeachPark'},
      {label: 'Muthupanthiya beach', value: 'muthupanthiyaBeach'},
      {label: 'Sri Munneswaram Kovil', value: 'sriMunneswaramKovil'},
    ],

    anuradhapura: [
      {label: 'Dakkhina Stupa', value: 'dakkhinaStupa'},
      {label: 'Vessagiriya', value: 'vessagiriya'},
      {label: 'Nuwara Wewa', value: 'nuwaraWewa'},
      {label: 'Eth Pokuna (Elephant Pond)', value: 'ethPokuna'},
      {label: 'Dalada Maligawa - Anuradhapura', value: 'daladaMaligawaAnuradhapura'},
      {label: 'Pankuliya Ashokaramaya', value: 'pankuliyaAshokaramaya'},
      {label: 'Folk Museum', value: 'folkMuseum'},
      {label: 'Lovamahapaya', value: 'lovamahapaya'},
      {label: 'Jetavanarama Stupa and Museum', value: 'jetavanaramaStupaMuseum'},
      {label: 'Archaeological Museum, Anuradhapura', value: ''},
      {label: 'Mirisavetiya Stupa', value: 'mirisavetiyaStupa'},
      {label: 'Gajaba Zoo', value: 'gajabaZoo'},
      {label: 'Horowpathana National Park', value: 'horowpathanaNationalPark'},
      {label: 'Perimiyankulama Stone Bridge', value: ''},
      {label: 'Sri Maha Bodhi', value: 'sriMahaBodhi'},
      {label: 'Jathika Namal Uyana', value: 'jathikaNamalUyana'},
      {label: 'Manakanda Archaeological Site', value: 'manakandaArchaeologicalSite'},
      {label: 'Thissa Wewa', value: 'thissaWewa'},
      {label: 'Isurumuniya Rajamaha Viharaya', value: 'isurumuniyaRajamahaViharaya'},
      {label: 'Abhayagiri Vihara', value: 'abhayagiriVihara'},
      {label: 'Western Monastery Complex', value: 'westernMonasteryComplex'},
      {label: 'Dighapashana Cave', value: 'dighapashanaCave'},
      {label: 'Rathna Prasadaya', value: 'rathnaPrasadaya'},
      {label: 'Anuradhapura Moonstone', value: 'anuradhapuraMoonstone'},
      {label: 'Kuttam Pokuna (Twin Ponds)', value: 'kuttamPokuna'},
      {label: 'Samadhi Buddha Statue', value: 'samadhiBuddhaStatue'},
      {label: 'Abhayagiri Museum', value: 'abhayagiriMuseum'},
      {label: 'Nakha Vehera', value: 'nakhaVehera'},
      {label: 'Royal Palace of King Vijayabahu the 1st', value: 'kingVijayabahuRoyalPalace'},
      {label: 'Basawakkulama Tank', value: 'basawakkulamaTank'},
      {label: 'Thuparamaya Dagaba', value: 'thuparamayaDagaba'},
      {label: 'Ranmasu Uyana (Royal Pleasure Gardens)', value: 'ranmasuUyana'},
      {label: 'Ruwanweli Maha Seya', value: 'ruwanweliMahaSeya'},
    ],

    polonnaruwa: [
      {label: 'Giritale Wewa', value: 'giritaleWewa'},
      {label: 'Ancient Bhikku Hospital', value: 'ancientBhikkuHospital'},
      {label: 'Menik Vehera', value: 'menikVehera'},
      {label: 'Rankoth Vehera', value: 'rankothVehera'},
      {label: 'Polonnaruwa Nelum pokuna (Lotus Pond)', value: 'lotusPond'},
      {label: 'Parakrama Samudra', value: 'parakramaSamudra'},
      {label: 'Island Park (Deepa Uyana)', value: 'deepaUyana'},
      {label: 'Kumara Pokuna', value: 'kumaraPokuna'},
      {label: 'Archaeological Museum Complex', value: 'archaeologicalMuseum'},
      {label: 'Council Chamber', value: 'councilChamber'},
      {label: 'Atadage', value: 'atadage'},
      {label: 'Sathmahal Prasadaya', value: 'sathmahalPrasadaya'},
      {label: 'Pabalu Vehera (Temple of Marbles)', value: 'pabaluVehera'},
      {label: 'Palace of King Nishshanka Malla', value: 'nishshankaMallaKingPalace'},
      {label: 'Gal Potha stone inscription (Stone Book)', value: 'galpothaStoneBook'},
      {label: 'Hindu Temple God Shiva Devalaya', value: 'shivaDevalaya'},
      {label: 'Alahana Pirivena', value: 'alahanaPirivena'},
      {label: 'Kiri Vehera', value: 'kiriVehera'},
      {label: 'Royal Palace of King Maha Parakramabahu', value: 'mahaParakramabahuKingPalace'},
      {label: 'Pothgul Viharaya', value: 'pothgulViharaya'},
      {label: 'Nissankalata Mandapa', value: 'nissankalataMandapa'},
      {label: 'Hetadage', value: 'hetadage'},
      {label: 'Dalada Maluva - ( Polonnaruwa)', value: 'daladaMaluva'},
      {label: 'Polonnaruwa Gal Viharaya', value: 'polonnaruwaGalViharaya'},
      {label: 'Vatadage', value: 'vatadage'},
      {label: 'Dimbulagala Raja Maha Viharaya', value: 'dimbulagalaTemple'},
      {label: 'Wildlife Museum', value: 'wildlifeMuseum'},
      {label: 'Thivanka Image House', value: 'thivankaImageHouse'},
      {label: 'Medirigiriya Vatadageya', value: 'medirigiriyaVatadageya'},
      {label: 'Kaudulla National Park', value: 'kaudullaNationalPark'},
      {label: 'Minneriya National Park', value: 'minneriyaNationalPark'},
      {label: 'Maduru Oya Reservoir Project', value: 'maduruOyaReservoirProject'},
      {label: 'Somawathiya National Park', value: 'somawathiyaNationalPark'},
      {label: 'Piburettewa Tank', value: 'piburettewaTank'},
      {label: 'Lankatilaka Viharaya', value: 'lankatilakaViharaya'},
      {label: 'Pulasthi Statue', value: 'pulasthiStatue'},
      {label: 'Polonnaruwa Ancient City', value: 'polonnaruwaAncientCity'},
      {label: 'Angammedilla National Park', value: 'angammedillaNationalPark'},
    ],

    badulla: [
      {label: 'Gala Muduna Sri Sambuddhaloka Temple, Kahataruppa', value: 'sambuddhalokaTemple'},
      {label: 'Cave of Madulsima', value: 'madulsima'},
      {label: 'Dimbulana hills Spot', value: 'dimbulanahillsSpot'},
      {label: 'Habaraththaawa Waterfall', value: 'habaraththaawaWaterfall'},
      {label: 'Idalgashinna campsite', value: 'idalgashinnaCampsite'},
      {label: 'Haldummulla Portuguese Fort', value: 'haldummullaPortugueseFort'},
      {label: 'Kalupahana Camping Spot', value: 'kalupahanaCampingSpot'},
      {label: 'Wali Wanguwa (Camping Spot)', value: 'waliWanguwaCampingSpot'},
      {label: 'Wangedigala Camp Site', value: 'wangedigalaCampSite'},
      {label: 'Yahalathenna Waterfall', value: 'yahalathennaWaterfall'},
      {label: 'Uduwara Falls', value: 'uduwaraFalls'},
      {label: 'Nagadowa Falls', value: 'nagadowaFalls'},
      {label: 'Ohiya Devils Stair Case Camping Spot', value: 'ohiyaCampingSpot'},
      {label: 'Prabhawa Mountain Day View Point', value: 'prabhawaViewPoint'},
      {label: 'Thangamale Sanctuary', value: 'thangamaleSanctuary'},
      {label: 'Mahiyangana Raja Maha Vihara', value: 'mahiyanganaRajaMahaVihara'},
      {label: 'Adisham Bungalow (St.Benedict’s Monastery)', value: 'adishamBungalow'},
      {label: 'Dambana Wedi Gammanaya', value: 'dambanaWediGammanaya'},
      {label: 'Geradi Ella Falls', value: 'geradiElla'},
      {label: 'Devil’s Staircase View Point and Waterfall', value: 'devilsStaircase'},
      {label: 'Peessagama Waterfall', value: 'peessagamaWaterfall'},
      {label: 'Narangala Hill', value: 'narangalaHill'},
      {label: 'View point - Weewessa', value: 'WeewessaviewPoint'},
      {label: 'Narangala Mountain', value: 'narangalaMountain'},
      {label: 'Namunukula Mountain', value: 'namunukulaMountain'},
      {label: 'Ella', value: 'ella'},
      {label: 'Weli Oya Bridge', value: 'weliOyaBridge'},
      {label: 'Mini Worlds End (Madulsima)', value: 'miniWorldsEnd'},
      {label: 'Idalgashinna Mountain', value: 'idalgashinnaMountain'},
      {label: 'Diyaluma Waterfall', value: 'diyalumaWaterfall'},
      {label: 'Dunhida Waterfall', value: 'dunhidaWaterfall'},
      {label: 'Badulla Museum', value: 'badullaMuseum'},
      {label: 'Bambarakanda Falls', value: 'bambarakandaFalls'},
      {label: 'Botanical Garden - Badulla', value: 'badullaBotanicalGarden'},
      {label: 'Badulla Dutch Fort', value: 'badullaDutchFort'},
      {label: 'Bambaragala Pathana', value: 'bambaragalaPathana'},
      {label: 'Diyaluma Ella', value: 'diyalumaElla'},
      {label: 'Little Adam’s Peak', value: 'littleAdamsPeak'},
      {label: 'Lipton Seat', value: 'liptonSeat'},
      {label: 'Muthiyangana Raja maha viharaya', value: 'muthiyanganaTemple'},
      {label: 'Demodara Loop with Station', value: 'demodaraLoop'},
      {label: 'Ravana Falls', value: 'ravanaFalls'},
      {label: 'Demodara Nine arch bridge', value: 'demodaraNineArchBridge'},
    ],

    monaragala: [
      {label:'1. Kataragama Museum', value: ''},
      {label:'3. Lakshmi Devalaya', value: ''},
      {label:'4. Kataragama Kiri Vehera', value: ''},
      {label:'6. Govinda Hela (Westminster Abbey)', value: ''},
      {label:'8. Galabedda Archiological Site', value: ''},
      {label:'9. Galabadde Waterfall', value: ''},
      {label:'10. Mayuragiriya Ancient Temple', value: ''},
      {label:'15. Senanayake Samudraya', value: ''},
      {label:'16. Vadda’s Heritage Center', value: ''},
      {label:'18. Rakkiththa Kanda Rajamaha Viharaya', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
      {label:'', value: ''},
    ],

    // Add more districts and places as needed
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../assets/images/dashboardBackground.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.contentContainer}>
        <View style={styles.mapBorder}>
          <Text style={styles.selectorHeader}>Select Place Where You Travel : </Text>
          <View style={styles.selectorsContainer}>
            <View style={styles.selectorContainer}>
              <Text style={styles.selectorHeaderText}>Select District</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={sriLankanDistricts}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select district' : '...'}
                searchPlaceholder="Search..."
                value={selectedDistrict}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  handleSelectDistrict(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
            <View style={styles.selectorContainer}>
              <Text style={styles.selectorHeaderText}>Select Place</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={selectedDistrict ? districtPlaces[selectedDistrict] : []}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select place' : '...'}
                searchPlaceholder="Search..."
                value={selectedPlace}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  handleSelectPlace(item.value);
                  setIsFocus(false);
                }}
                disabled={!selectedDistrict}
              />
            </View>
          </View>
        </View>

        <DateSelector
          contentContainerStyle={styles.datePicker}
        />
      </View>

      <View>
        <FlatList
          data={weatherData}
          renderItem={renderWeatherCard}
          keyExtractor={(item) => item.day}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.weatherList}
        />
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
}

const renderWeatherCard = ({ item }) => (
  <View style={styles.weatherCard}>
    <Ionicons name={item.icon} size={40} color="#333" />
    <Text style={styles.weatherCardText}>{item.day}</Text>
    <Text style={styles.weatherCardText}>{item.temperature}</Text>
  </View> 
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  mapBorder: {
    width: '98%',
    height: '20%',
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 70,
    marginLeft: 3,
    alignItems: 'center',
    backgroundColor: '#cccccc',
  },
  weatherList: {
    height : 150,
    marginBottom : 50,
    marginTop : 20
  },
  weatherCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  weatherCardText: {
    fontSize: 14,
    color: '#333',
  },
  bottomNavigation: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavText: {
    color: '#ffffff',
  },
  selectorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  selectorContainer: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#ebca52',
    borderRadius: 8,
    borderColor: '#000',
    color: '#000000',
  },
  selectorHeader: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  selectorHeaderText: {
    color: '#000',
    fontWeight: 'bold',
  },
  pickerSelectStyles : {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: '#000000',  // Text color for the selected item
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: 'white', // Background color for the dropdown
    placeholderTextColor: '#000000', // Placeholder text color
  }, 
  datePicker: {
    position : 'relative',
    marginTop : -10
  },

  dropdown: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderWidth: 0.5,
    borderRadius: 8,
    color: '#000000',  // Text color for the selected item
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: 'white', // Background color for the dropdown
    placeholderTextColor: '#000000', // Placeholder text color
  },
  placeholderStyle: {
    color: '#000000', // Placeholder text color
  },
  selectedTextStyle: {
    color: '#000000', // Selected text color
  },
  inputSearchStyle: {
    color: '#000000', // Input search text color
  },
  iconStyle: {
    color: '#000000', // Icon color
  },
});

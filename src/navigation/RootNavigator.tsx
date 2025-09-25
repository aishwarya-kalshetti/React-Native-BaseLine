import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CoreListScreen from '../screens/core/CoreListScreen';
import ViewScreen from '../screens/core/ViewScreen';
import TextScreen from '../screens/core/TextScreen';
import ImageScreen from '../screens/core/ImageScreen';
import ScrollViewScreen from '../screens/core/ScrollViewScreen';
import ButtonScreen from '../screens/core/ButtonScreen';
import StatusBarScreen from '../screens/core/StatusBarScreen';
import ModalScreen from '../screens/core/ModalScreen';
import PressableScreen from '../screens/core/PressableScreen';
import ActivityIndicatorScreen from '../screens/core/ActivityIndicatorScreen';
import Table from '../screens/core/Table';
import SearchScreen from '@screens/core/SearchBarScreen';
import ProgressBarScreen from '@screens/core/ProgressBarScreen';
import Avatar from '@screens/core/Avatar';
import ListScreen from '@screens/core/ListScreen';
import FlatListScreen from '@screens/core/FlatListScreen';
import SectionListScreen from '@screens/core/SectionListScreen';

import StylingListScreen from '../screens/styling/StylingListScreen';
import InlineVsStyleSheetScreen from '../screens/styling/InlineVsStyleSheetScreen';
import FlexboxScreen from '../screens/styling/FlexboxScreen';
import ResponsiveScreen from '../screens/styling/ResponsiveScreen';
import PlatformSpecificScreen from '../screens/styling/PlatformSpecificScreen';
import ThemingScreen from '../screens/styling/ThemingScreen';

import NavigationListScreen from '../screens/navigation/NavigationListScreen';
import NavBasicsScreen from '../screens/navigation/NavBasicsScreen';
import StackDemoScreen from '../screens/navigation/StackDemoScreen';
import BottomTabsDemoScreen from '../screens/navigation/BottomTabsDemoScreen';
import DrawerDemoScreen from '../screens/navigation/DrawerDemoScreen';
import PassingDataScreen from '../screens/navigation/PassingDataScreen';

import DimentionsAPI from '@screens/dynamic_user_interface/DimentionsAPI';
import DimensionsList from '@screens/dynamic_user_interface/DimensionsList';
import UseWindowDimension from '@screens/dynamic_user_interface/UseWindowDimension';
import SafeAreaView from '@screens/dynamic_user_interface/SafeAreaView';
import SwitchAPI from '@screens/dynamic_user_interface/SwitchAPI';
import AlertAPI from '@screens/dynamic_user_interface/AlertAPI';
import Axios from '@screens/dynamic_user_interface/Axios';
import JsonAPI from '@screens/dynamic_user_interface/JsonAPI';
import InputFormsList from '@screens/input_and_forms/InputFormsList';

import TextInput from '@screens/input_and_forms/TextInput';
import LoginForm from '@screens/input_and_forms/LoginForm';

import DeviceList from '@screens/device/DeviceList';
import CameraPicker from '@screens/device/CameraPicker';
import LocationMap from '@screens/device/LocationMap';
import Notifications from '@screens/device/Notifications';
import VibrationHaptics from '@screens/device/VibrationHaptics';
import PermissionsHandler from '@screens/device/PermissionsHandler';

import MediaList from '@screens/media/MediaList';
import LocalRemoteImages from '@screens/media/LocalRemoteImages';
import CachedImage from '@screens/media/CachedImage';
import VideoPlayer from '@screens/media/VideoPlayer';
import AnimatedBox from '@screens/media/AnimatedBox';
import ReanimatedDemo from '@screens/media/ReanimatedDemo';
import LottieAnimation from '@screens/media/LottieAnimation';






const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* Core */}
      <Stack.Screen name="CoreList" component={CoreListScreen} options={{ title: 'Core Components' }} />
      <Stack.Screen name="View" component={ViewScreen} />
      <Stack.Screen name="Text" component={TextScreen} />
      <Stack.Screen name="Image" component={ImageScreen} />
      <Stack.Screen name="ScrollView" component={ScrollViewScreen} />
      
      <Stack.Screen name="Button" component={ButtonScreen} />
       <Stack.Screen name="Pressable" component={PressableScreen} />
       <Stack.Screen name="Modal" component={ModalScreen} />
       <Stack.Screen name="StatusBar" component={StatusBarScreen} />
       
      <Stack.Screen name="ActivityIndicator" component={ActivityIndicatorScreen} />
      <Stack.Screen name="Table" component={Table} />
      <Stack.Screen name="SearchBar" component={SearchScreen} />
      <Stack.Screen name="ProgressBar" component={ProgressBarScreen} />
      <Stack.Screen name="Avatar" component={Avatar} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="FlatList" component={FlatListScreen} />
      <Stack.Screen name="SectionList" component={SectionListScreen} />

      

      {/* Styling */}
      <Stack.Screen name="StylingList" component={StylingListScreen} options={{ title: 'Styling' }} />
      <Stack.Screen name="InlineVsStyleSheet" component={InlineVsStyleSheetScreen} />
      <Stack.Screen name="Flexbox" component={FlexboxScreen} />
      <Stack.Screen name="Responsive" component={ResponsiveScreen} />
      <Stack.Screen name="PlatformSpecific" component={PlatformSpecificScreen} />
      <Stack.Screen name="Theming" component={ThemingScreen} />

      {/* Navigation */}
      <Stack.Screen name="NavigationList" component={NavigationListScreen} options={{ title: 'Navigation' }} />
      <Stack.Screen name="NavBasics" component={NavBasicsScreen} />
      <Stack.Screen name="StackDemo" component={StackDemoScreen} />
      <Stack.Screen name="BottomTabsDemo" component={BottomTabsDemoScreen} />
      <Stack.Screen name="DrawerDemo" component={DrawerDemoScreen} />
      <Stack.Screen name="PassingData" component={PassingDataScreen} />
      
      {/*Dimension API */}
      <Stack.Screen name="DimensionsList" component={DimensionsList} options={{ title: 'Dynamic User Interface (API)' }} />
      <Stack.Screen name="DimentionsAPI" component={DimentionsAPI}  />
      <Stack.Screen name="UseWindowDimension" component={UseWindowDimension}  />
      <Stack.Screen name="SafeAreaView" component={SafeAreaView}  />
      <Stack.Screen name="SwitchAPI" component={SwitchAPI}  />
      <Stack.Screen name="AlertAPI" component={AlertAPI}  />
      <Stack.Screen name="Axios" component={Axios}  />
      <Stack.Screen name="JsonAPI" component={JsonAPI}  />
      
      {/* Input and Forms */}
      <Stack.Screen name="InputFormsList" component={InputFormsList} options={{ title: 'Input and Forms' }} />
      <Stack.Screen name="TextInput" component={TextInput}  />
      <Stack.Screen name="LoginForm" component={LoginForm}  />

      {/* Device Components */}
      <Stack.Screen name="DeviceList" component={DeviceList} options={{ title: 'Device Components' }} />
      
      <Stack.Screen name="CameraPicker" component={CameraPicker}  />
      <Stack.Screen name="LocationMap" component={LocationMap}  />
      <Stack.Screen name="Notifications" component={Notifications}  />
      <Stack.Screen name="VibrationHaptics" component={VibrationHaptics}  />
      <Stack.Screen name="PermissionsHandler" component={PermissionsHandler}  />
      
      {/* Media Inputs */}
      <Stack.Screen name="MediaList" component={MediaList} options={{ title: 'Media Inputs' }} />
      <Stack.Screen name="LocalRemoteImages" component={LocalRemoteImages}  />
      <Stack.Screen name="CachedImage" component={CachedImage}  />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer}  />
      <Stack.Screen name="AnimatedBox" component={AnimatedBox}  />
      <Stack.Screen name="ReanimatedDemo" component={ReanimatedDemo}  />
      {/* <Stack.Screen name="LottieAnimation" component={LottieAnimation}  /> */}
      

    </Stack.Navigator>
  );
}

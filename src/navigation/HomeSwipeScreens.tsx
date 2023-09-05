import { Dimensions, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import HomeScreen from '../screens/home/HomeScreen';
import ReelsScreen from '../screens/reels/ReelsScreen';
import { SceneMap, TabView } from 'react-native-tab-view';
import { HomeContext } from '../API/Context';
import PagerView from 'react-native-pager-view';

export default function SwipeScreens() {
  const { index, setIndex } = useContext(HomeContext);

  const [routes] = useState([
    { key: "first", title: "HomeScreen" },
    // { key: "second", title: "ReelsScreen" },
  ]);

  const renderScene = SceneMap({
    first: HomeScreen,
    // second: ReelsScreen,
  });

  return (
    <TabView
      key={JSON.stringify(index)}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={() => <></>}
    />
    // <PagerView style={styles.pagerView} initialPage={0}
    //   onPageScroll={(e) => { }}
    // >
    //   <ReelsScreen />
    //   <HomeScreen />
    // </PagerView>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1
  }
})

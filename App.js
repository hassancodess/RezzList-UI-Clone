import RNFS from 'react-native-fs';
import React, { useEffect, useState } from 'react';
import _ from 'lodash'
import {
  View,
  Dimensions
} from 'react-native';
import Image360Viewer from '@hauvo/react-native-360-image-viewer'
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { Image } from 'react-native';

const { width, height } = Dimensions.get('window')
// const images = _.reverse([
//   require(`./images/iris-1.jpg`),
//   require(`./images/iris-2.jpg`),
//   require(`./images/iris-3.jpg`),
//   require(`./images/iris-4.jpg`),
//   require(`./images/iris-5.jpg`),
//   require(`./images/iris-6.jpg`),
//   require(`./images/iris-7.jpg`),
//   require(`./images/iris-8.jpg`),
//   require(`./images/iris-9.jpg`),
//   require(`./images/iris-10.jpg`),
//   require(`./images/iris-11.jpg`),
//   require(`./images/iris-12.jpg`),
//   require(`./images/iris-13.jpg`),
//   require(`./images/iris-14.jpg`),
//   require(`./images/iris-15.jpg`),
//   require(`./images/iris-16.jpg`),
//   require(`./images/iris-17.jpg`),
//   require(`./images/iris-18.jpg`),
//   require(`./images/iris-19.jpg`),
//   require(`./images/iris-20.jpg`),
//   require(`./images/iris-21.jpg`),
//   require(`./images/iris-22.jpg`),
//   require(`./images/iris-23.jpg`),
//   require(`./images/iris-24.jpg`),
//   require(`./images/iris-25.jpg`),
//   require(`./images/iris-26.jpg`),
//   require(`./images/iris-27.jpg`),
//   require(`./images/iris-28.jpg`),
//   require(`./images/iris-29.jpg`),
//   require(`./images/iris-30.jpg`),
//   require(`./images/iris-31.jpg`),
//   require(`./images/iris-32.jpg`),
//   require(`./images/iris-33.jpg`),
//   require(`./images/iris-34.jpg`),
//   require(`./images/iris-35.jpg`),
//   require(`./images/iris-36.jpg`)
// ])

const folderPath = RNFS.PicturesDirectoryPath + '/ZaytricsPhotos/';
const askForMediaPermission = async () => {
  const result = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
  console.log('read images', result);
}

const getAllPhotos = async () => {
  await askForMediaPermission()
  const response = await RNFS.readDir(folderPath);
  // console.log('respinse', response)
  const arr = response.map((img) => {
    const url = `file://${img.path}`
    return url
  }
  )
  const sortedArr = arr.sort()

  // console.log('respinse', arr)
  const revArr = _.reverse(sortedArr)
  return revArr;
};
const App = () => {
  const [images, setImages] = useState([])
  const init = async () => {
    const res = await getAllPhotos()
    setImages(res)
  }
  useEffect(() => {
    init()
  }, [])
  useEffect(() => {
    console.log('images', images)
  }, [images])
  return (
    <View style={{ height: 300, width: 300 }}>
      {images.length > 0 && (
        <Image360Viewer srcset={images} width={300} height={300} />
      )
      }
    </View>
  );
};

export default App;
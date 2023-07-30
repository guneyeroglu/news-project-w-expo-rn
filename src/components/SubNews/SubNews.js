import { Image, Text, View } from 'react-native';

import IconButton from '../IconButton/IconButton';
import styles from './SubNews.style';

const SubNews = ({ news }) => {
  const shareIcon = require('../../assets/share.png');
  const bookmarkIcon = require('../../assets/bookmark.png');

  return (
    <View style={styles.container}>
      <Image source={{ uri: news.image }} style={styles.container__image} />
      <View style={styles.container__information}>
        <Text style={styles['container__information--title']}>
          {news.title}
        </Text>
        <View style={styles['container__information--bottom']}>
          <Text style={styles.date}>{news.date} dakika önce</Text>
          <IconButton icon={shareIcon} />
          <IconButton icon={bookmarkIcon} />
        </View>
      </View>
    </View>
  );
};

export default SubNews;

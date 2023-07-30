import { Text, View, ScrollView } from 'react-native';

import TitleNews from '../../components/TitleNews/TitleNews';
import SubNews from '../../components/SubNews/SubNews';

import newsList from '../../data/news.json';

import styles from './Home.style';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container__content}>
        <Text style={styles['container__content--title']}>
          Editörün Seçtikleri
        </Text>
        <TitleNews />
        {newsList.map((news) => (
          <SubNews key={news.id} news={news} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

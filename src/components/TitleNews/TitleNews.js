import { View, Text, Image } from 'react-native';

import styles from './TitleNews.style';

const TitleNews = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: 'https://media.istockphoto.com/id/1300072335/tr/foto%C4%9Fraf/kad%C4%B1n-ordu-solider-g%C3%BCnbat%C4%B1m%C4%B1-g%C3%B6ky%C3%BCz%C3%BCne-kar%C5%9F%C4%B1-selamlama.jpg?s=612x612&w=0&k=20&c=zjjnxzZlJ2AX2rOJLHxQelJPqLRLZi2BHazw62X36GA=',
        }}
        style={styles.card__image}
      />
      <Text style={styles.card__title}>
        Barış Harekatı'nda 3 kişi etkisiz hâle getirildi.
      </Text>
      <Text style={styles.card__subtitle}>
        Bu hareket ile 10 kahraman askerimiz 3 kişiyi etkisiz hâle getirdikten
        sonra üsse geri döndü.
      </Text>
    </View>
  );
};

export default TitleNews;

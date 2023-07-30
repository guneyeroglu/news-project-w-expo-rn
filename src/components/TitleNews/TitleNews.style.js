import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderBottomWidth: 9,
    borderBottomColor: '#eb0015',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    height: 348,
    justifyContent: 'flex-end',
    backgroundColor: '#000000',
    marginBottom: 14,
  },
  card__image: {
    width: '100%',
    height: 348,
    resizeMode: 'cover',
    position: 'absolute',
    opacity: 0.5,
  },
  card__title: {
    fontSize: 24,
    lineHeight: 27,
    fontWeight: '500',
    color: '#ffffff',
    paddingHorizontal: 16,
  },
  card__subtitle: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    color: '#ffffff',
    marginTop: 12,
    paddingHorizontal: 16,
  },
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 125,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    flexDirection: 'row',
  },
  image: {
    width: 95,
    height: 95,
    resizeMode: 'cover',
    borderRadius: 8,
    marginRight: 20,
  },
  information: {
    flex: 1,
    justifyContent: 'space-between',
    height: 95 + 10,
  },
  title: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
    color: '#444444',
    letterSpacing: -0.3,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    lineHeight: 22,
    fontWeight: '400',
    color: '#777777',
    letterSpacing: -0.4,
    flex: 1,
  },
});

export default styles;

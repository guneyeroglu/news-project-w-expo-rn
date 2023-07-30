import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  container__content: {
    paddingHorizontal: 16,
  },
  'container__content--title': {
    color: '#605f5f',
    fontSize: 24,
    lineHeight: 27,
    fontWeight: '500',
    fontStyle: 'normal',
    marginVertical: 12,
  },
});

export default styles;

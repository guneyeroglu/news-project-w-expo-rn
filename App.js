import { SafeAreaView } from 'react-native';

import Home from './src/screens/Home/Home';

import styles from './App.style';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
};

export default App;

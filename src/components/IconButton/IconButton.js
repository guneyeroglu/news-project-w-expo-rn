import { TouchableOpacity, Image } from 'react-native';

import styles from './IconButton.style';

const IconButton = ({ icon }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default IconButton;

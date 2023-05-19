import { Text, View } from 'react-native';
import CommonButton from '../components/atoms/buttons/CommonButton/CommonButton';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
      <CommonButton label={'안녕'} handleClick={function (): void {
        throw new Error('Function not implemented.');
      } }/>
    </View>
  );
};

export default ProfileScreen;
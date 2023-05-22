import IconButton from 'components/atoms/buttons/IconButton/IconButton';
import { Text, View } from 'react-native';
import CommonButton from '../components/atoms/buttons/CommonButton/CommonButton';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
      <CommonButton label={'안녕'} handleClick={function (): void {
        throw new Error('Function not implemented.');
      } }/>
      <IconButton color={'red'} iconName={'rocket'} label={'텍스트입니다.'} handleClick={function (): void {
        throw new Error('Function not implemented.');
      } } />
    </View>
  );
};

export default ProfileScreen;
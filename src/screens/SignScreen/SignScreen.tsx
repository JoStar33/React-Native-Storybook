import ColorButton from 'components/atoms/buttons/ColorButton/ColorButton';
import SignDialog from 'components/molecules/dialogs/SignDialog/SignDialog';
import { useState } from 'react';
import { Image, View } from 'react-native';
import { signScreenStyles } from './SignScreen.style';

const SignScreen = () => {
  const [dialogShow, setDialogShow] = useState<boolean>(false);
  const [image, setImage] = useState<string>('');
  const handleDialog = () => {
    setDialogShow(false);
  }
  const openSignDialog = () => {
    setDialogShow(true);
  }
  const handleGetImage = (image: string) => {
    setImage(image);
  }
  return (
    <>
      <View style={signScreenStyles.container}>
        {
          image && <Image style={{width: 300, height: 300}} source={{ uri: image}}></Image>
        }
        <ColorButton label={'서명하기'} color={'skyblue'} handleClick={openSignDialog}/>
      </View>
      <SignDialog dialogShow={dialogShow} dialogText={'사인을 해주세요!'} handleDialog={handleDialog} getImageInfo={handleGetImage}/>
    </>
  );
};

export default SignScreen;
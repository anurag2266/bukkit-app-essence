import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo
} from 'react';
import { Image, ActivityIndicator, View } from 'react-native';
import { RNCamera, TakePictureResponse } from 'react-native-camera';
import Overlay from '../Overlay';
import Container from '../Container';
import Loading from '../Loading';
import Text, { TextVariant } from '../Text';
import { images, localization } from 'constants';
import styles from './styles';

type FaceIDCaptureProps = {
  visible?: boolean;
  loading?: boolean;
  onCapture?: (file: any) => void;
  onClose?: () => void;
};

const FaceIDCapture = ({
  visible = false,
  onCapture,
  onClose,
  loading = false
}: FaceIDCaptureProps) => {
  const [photo, setPhoto] = useState<TakePictureResponse | undefined>();
  const cameraRef = useRef<RNCamera | null>(null);

  useEffect(() => {
    if (!visible) {
      setPhoto(undefined);
    }
  }, [visible]);

  const takePicture = useCallback(
    async (handler?: Function) => {
      if (cameraRef.current) {
        const options = { quality: 0.5, base64: true };
        const photo = await cameraRef.current.takePictureAsync(options);

        if (handler) {
          handler(photo);
        }
        return photo;
      }
    },
    [cameraRef]
  );

  const source = useMemo(
    () =>
      photo ? { uri: `data:image/jpeg;base64,${photo.base64}` } : undefined,
    [photo]
  );

  const onCaptureWrapper = async (handler?: Function) => {
    const nextPhoto = await takePicture(handler);
    setPhoto(nextPhoto);
    return nextPhoto;
  };
  return (
    <Overlay visible={visible} transparent={false} backdropColor="transparent">
      <Loading visible={loading && visible} />

      <Container
        contentContainerStyle={styles.contentContainer}
        title={localization.identification}
        headerRight={{
          icon: 'close',
          onPress: onClose
        }}
        actionImageSource={images.camera}
        onActionButtonPress={() => !photo && onCaptureWrapper(onCapture)}
      >
        <View style={styles.faceOval}>
          {!source ? (
            <RNCamera
              ref={cameraRef}
              type={RNCamera.Constants.Type.front}
              androidCameraPermissionOptions={localization.cameraPermission}
              style={styles.faceOvalContent}
              captureAudio={false}
            />
          ) : (
            <Image style={styles.faceOvalContentInverted} source={source} />
          )}
        </View>

        <Text variant={TextVariant.Heading2GreyRegular}>
          {localization.positionYourFace}
        </Text>
        {photo && <ActivityIndicator size="large" color="#0000ff" />}
      </Container>
    </Overlay>
  );
};

export default FaceIDCapture;

import * as ImagePicker from "expo-image-picker";
import { uploadToFirebase } from "./helpers/upload-to-firebase";
import { Button } from "../button/button";
import { StyleSheet, Text, View } from "react-native";

import { useState } from "react";

type Props = {
  onUpload: React.Dispatch<React.SetStateAction<string>>;
};

export const UploadImage = ({ onUpload }: Props) => {
  const [permission, requestPermission] = ImagePicker.useCameraPermissions();
  const [progress, setProgress] = useState(0);

  const takePhoto = async () => {
    try {
      const cameraResp = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 1,
      });

      if (!cameraResp.canceled) {
        const { uri } = cameraResp.assets[0];
        const fileName = uri.split("/").pop();
        const uploadResponse = await uploadToFirebase(
          uri,
          fileName,
          setProgress
        );

        const { downloadUrl } = uploadResponse as {
          downloadUrl: string;
        };

        onUpload(downloadUrl);
      }
    } catch (e) {
      console.log(e);
    }
  };

  if (permission?.status !== ImagePicker.PermissionStatus.GRANTED) {
    return (
      <View style={styles.container}>
        <Text>Permissão não concedida - {permission?.status}</Text>
        <Button onPress={requestPermission}>Request Permission</Button>
      </View>
    );
  }

  return <Button onPress={takePhoto}>Tirar foto</Button>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { ActivityIndicator } from "react-native";

import { uploadToFirebase } from "./helpers/upload-to-firebase";
import { Container, Title, UploadButton } from "./upload-image-styles";
import { UploadImageIcon } from "../icons";

type Props = {
  onUpload: React.Dispatch<React.SetStateAction<string>>;
  title?: string;
};

export const UploadImage = ({
  onUpload,
  title = "Adicionar Foto de Perfil",
}: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const takePhoto = async () => {
    try {
      setIsLoading(true);
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
          setProgress,
        );

        const { downloadUrl } = uploadResponse as {
          downloadUrl: string;
        };

        onUpload(downloadUrl);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <UploadButton onPress={takePhoto}>
        {(progress > 0 || isLoading) && <ActivityIndicator color="#fff" />}
        {(progress <= 0 || !isLoading) && (
          <UploadImageIcon color="#fff" weight="bold" size={32} />
        )}
      </UploadButton>
    </Container>
  );
};

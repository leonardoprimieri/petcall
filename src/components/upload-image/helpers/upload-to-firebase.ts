import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "~/config/firebase/firebase-config";

export const uploadToFirebase = async (
  uri: string,
  name: string | undefined,
  onProgress: (progress: number) => void
) => {
  const fetchResponse = await fetch(uri);
  const theBlob = await fetchResponse.blob();

  const imageRef = ref(storage, `images/${name}`);

  const uploadTask = uploadBytesResumable(imageRef, theBlob);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgress && onProgress(progress);
      },
      (error) => {
        reject(error);
      },
      async () => {
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        resolve({
          downloadUrl,
          metadata: uploadTask.snapshot.metadata,
        });
      }
    );
  });
};

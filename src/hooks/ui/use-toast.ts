import Toast from "react-native-toast-message";

type ShowToastArgs = {
  message: string;
  title: string;
  type: "success" | "error" | "info";
};

export const useToast = () => {
  const showToast = ({ title, message, type }: ShowToastArgs) => {
    Toast.show({
      type,
      text1: title,
      text2: message,
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 50,
      bottomOffset: 40,
    });
  };

  return {
    showToast,
  };
};

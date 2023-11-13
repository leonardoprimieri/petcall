import LottieView from "lottie-react-native";
import { useEffect, useRef } from "react";
import { View } from "react-native";

import {
  SuccessPaymentContainer,
  SuccessPaymentLabel,
} from "./success-payment-message-styles";

export const SuccessPaymentMessage = () => {
  const animation = useRef<LottieView | null>(null);

  useEffect(() => {
    animation.current?.play();
  }, []);

  return (
    <SuccessPaymentContainer>
      <SuccessPaymentLabel>
        Pagamento confirmado com sucesso!
      </SuccessPaymentLabel>
      <View>
        <LottieView
          autoPlay
          ref={animation}
          source={require("./succeed-payment-animation.json")}
          style={{
            width: 400,
            height: 400,
          }}
        />
      </View>
    </SuccessPaymentContainer>
  );
};

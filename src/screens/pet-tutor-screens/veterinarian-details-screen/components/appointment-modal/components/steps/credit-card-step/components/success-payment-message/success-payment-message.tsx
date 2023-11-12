import LottieView from "lottie-react-native";
import { useRef } from "react";
import { View } from "react-native";

import {
  SuccessPaymentContainer,
  SuccessPaymentLabel,
} from "./success-payment-message-styles";

export const SuccessPaymentMessage = () => {
  const animation = useRef(null);

  return (
    <SuccessPaymentContainer>
      <SuccessPaymentLabel>
        Pagamento confirmado com sucesso!
      </SuccessPaymentLabel>
      <View>
        <LottieView
          ref={animation}
          autoPlay
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

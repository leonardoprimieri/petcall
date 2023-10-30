import {
  SaveAppointmentHistoryParams,
  saveAppointmentHistoryService,
} from "~/domain/services/appointment";
import { useToast } from "~/hooks";
import { mapFirebaseError } from "~/mappers";

export const useSaveAppointmentHistoryMutation = () => {
  const { showToast } = useToast();

  const execute = async (params: SaveAppointmentHistoryParams) => {
    await saveAppointmentHistoryService({
      ...params,
    }).catch((e) => {
      showToast({
        message: mapFirebaseError(e.code),
        type: "error",
        title: "Erro ao salvar histórico de consulta",
      });
    });
  };

  return { saveAppointmentHistory: execute };
};

import { useModalAction } from "@components/common/modal/modal.context";
import { useUI } from "@contexts/ui.context";
import Cookies from "js-cookie";
import { useMutation } from "react-query";

export interface LoginInputType {
  name: string;
  phone: string;
  remember_me: boolean;
}
// eslint-disable-next-line @typescript-eslint/require-await
async function login(input: LoginInputType) {
  return {
    token: `${input.name}.${input?.remember_me?.toString()}`
      .split("")
      .reverse()
      .join(""),
  };
}
export const useLoginMutation = () => {
  const { authorize } = useUI();
  const { closeModal } = useModalAction();

  return useMutation((input: LoginInputType) => login(input), {
    onSuccess: (data) => {
      Cookies.set("auth_token", data.token);
      authorize && authorize();
      closeModal();
    },
    onError: (data) => {
      // eslint-disable-next-line no-console
      console.log(data, "login error response");
    },
  });
};

export const useOtpMutation = () => {
  const { authorize } = useUI();
  const { closeModal } = useModalAction();

  return useMutation((input: LoginInputType) => login(input), {
    onSuccess: (data) => {
      Cookies.set("auth_token", data.token);
      authorize && authorize();
      closeModal();
    },
    onError: (data) => {
      // eslint-disable-next-line no-console
      console.log(data, "login error response");
    },
  });
};

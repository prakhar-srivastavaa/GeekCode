import {atom} from "recoil";

type AuthModalState = {
    isOpen: boolean;
    type: "login" | "register" | "forgotPassword";
};

const initalAuthModalState: AuthModalState = {
    isOpen: false,
    type: "login",
};

export const authModalState = atom<AuthModalState>({
    key: "authModalState_v1",
    default: initalAuthModalState,
});
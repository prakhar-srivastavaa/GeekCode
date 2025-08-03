import {atom} from "recoil";

type AuthModalState = {
    isOpen: boolean;
    type: "login" | "register" | "forgotPassword";
    email: string;
};

const initalAuthModalState: AuthModalState = {
    isOpen: false,
    type: "login",
    email: "",
};

export const authModalState = atom<AuthModalState>({
    key: "authModalState_v2",
    default: initalAuthModalState,
});
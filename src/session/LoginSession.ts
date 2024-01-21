import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

export interface Session {
    accessToken: string,
    refreshToken: string
}

export interface LoginState {
    session: Session,
    loggedIn: boolean
}

const {persistAtom} = recoilPersist({
    key: "reflog-jwt", // 고유한 key 값
    storage: localStorage,
})

export const loginState = atom<LoginState>({
    key: "loginState",
    default: {
        session: {
            accessToken: "",
            refreshToken: ""
        },
        loggedIn: false
    },
    effects_UNSTABLE: [persistAtom]
})
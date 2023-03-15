import { atom } from "recoil";

// export interface countState {
//   id: string,
//   name: string;
//   completed: boolean;
// }

export const countState  = atom({
    key: "countState", // 전역적으로 고유한 값
    default: 0 // 초깃값
});
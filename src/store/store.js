import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';



export const useLoginStore = create()(

    persist(
        (set,get) => ({
            isLogin: false,
            logIn: () => set({isLogin:  true}),
            logOut: () => set({isLogin: false}),
        })
        ,{
            name: 'login-state-storage',
            storage: createJSONStorage(()=>localStorage)
        }
    )
)//end of create

export const useModalStore = create()(

    persist(
        (set,get) => ({
            isOpened: false,
            openModal: () => set({isOpened:  true}),
            closeModal: () => set({isOpened: false}),
        })
        ,{
            name: 'modal-state-storage',
            storage: createJSONStorage(()=>localStorage)
        }
    )
)//end of create
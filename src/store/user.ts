import { createEffect, createEvent, createStore } from "effector";


interface IPost {
    id: number;
    title: string;
    description: string;
    file: string;
    points: number;
    user: IUser;
}

export interface IUser {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: string;
    image: string;
    posts: IPost[];
}

export const $updateUser = createEvent<IUser[]>();

export const $user = createStore<IUser[]>([])
    .on($updateUser, (state, payload) => payload)

export const setPending = createEvent<boolean>();

export const $pending = createStore<boolean>(true)
    .on(setPending, (state, payload) => payload)


$user.watch(state => {
    console.log(state)
})
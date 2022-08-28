import {renderEntireTree} from '../render';


export type DialogsItemType = {
  id: number
  name: string
}
export type MessagesItemType = {
  id: number
  message: string
}

export type PostsType = {
  id: number
  message: string
  likeCount: number
}
export type PostsArrayType = {
  posts: PostsType[]
  newPostText: string
}
export type FriendsNavItemType = {
  id: number
  name: string
}

export type DialogsArraysType = {
  dialogsDate: DialogsItemType[]
  messagesDate: MessagesItemType[]
}
export type FriendsNavType = {
  friends: FriendsNavItemType[]
}

export type StateType = {
  profilePage: PostsArrayType
  dialogsPage: DialogsArraysType
  sideBar: FriendsNavType
}


export let state: StateType = {
  profilePage: {
    posts: [
      {id: 1, message: "How are you?", likeCount: 19},
      {id: 2, message: "It's my first post?", likeCount: 15}
    ],
    newPostText: ''
  },
  dialogsPage: {
    dialogsDate: [
      {id: 1, name: 'Robert'},
      {id: 2, name: 'Andrzej'},
      {id: 3, name: 'Pawel'},
      {id: 4, name: 'Marek'},
      {id: 5, name: 'Barbara'},
      {id: 6, name: 'Jack'}
    ],
    messagesDate: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How are you going?'},
      {id: 3, message: 'I am fine'}
    ]
  },
  sideBar: {
    friends: [
      {id: 1, name: 'Robert'},
      {id: 2, name: 'Barbara'},
      {id: 3, name: 'Lena'}
    ]
  }


}

export let addPost = (postMessage: string) => {
  const newPost: PostsType = {id: new Date().getTime(), message: postMessage, likeCount: 0};

  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText='';
  renderEntireTree(state);
}

export const upDateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText
  renderEntireTree(state);
}
import {observe} from 'web-vitals/dist/modules/lib/observe';

let rerenderEntireTree = () => {
  console.log('state changed')
}


export type PostsType = {
  id: number
  message: string
  likeCount: number
}
export type DialogsDateType = {
  id: number
  name: string
}
export type MessagesDateType = {
  id: number
  message: string
}
export type ProfilePageType = {
  posts: PostsType[]
  newTextPost: string
}
export type DialogsPageType = {
  dialogsDate: DialogsDateType[]
  messagesDate: MessagesDateType[]
  newTextMessage: string

}


export type FriendsDateType = {
  id: number
  name: string
}
export type SidebarType = {
  friends: FriendsDateType[]
}

export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebar: SidebarType
}

let state: RootStateType = {
  profilePage: {
    posts: [
      {id: 1, message: "How are you?", likeCount: 19},
      {id: 2, message: "It's my first post", likeCount: 15}
    ],
    newTextPost: 'type',
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
      {id: 3, message: 'I am fine'},
      {id: 4, message: 'I am Ok'},
      {id: 5, message: 'I am great!'},
    ],
    newTextMessage: 'type',
  },
  sidebar: {
    friends: [
      {id: 1, name: 'Robert'},
      {id: 2, name: 'Andrzej'},
      {id: 3, name: 'Barbara'}
    ]
  }
}

// @ts-ignore
window.state = state;

export const addPost = () => {
  let newPost: PostsType = {
    id: 3,
    message: state.profilePage.newTextPost,
    likeCount: 0
  };
  state.profilePage.posts.push(newPost)
  state.profilePage.newTextPost = '';
  rerenderEntireTree()
}
export const updateNewTextPost = (newText: string) => {
  state.profilePage.newTextPost = newText;
  rerenderEntireTree();
}


export const addMessage = () => {
  let newMessage: MessagesDateType = {id: 3, message: state.dialogsPage.newTextMessage};
  state.dialogsPage.messagesDate.push(newMessage)
  state.dialogsPage.newTextMessage = ''
  rerenderEntireTree()
}
export const updateNewTextMessage = (newMessage: string) => {
  state.dialogsPage.newTextMessage = newMessage;
  rerenderEntireTree()
}

export const subscribe = (observer:()=>void) => {
  rerenderEntireTree = observer;
}


export default state;
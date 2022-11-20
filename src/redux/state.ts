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


// let state: RootStateType = {
//   profilePage: {
//     posts: [
//       {id: 1, message: "How are you?", likeCount: 19},
//       {id: 2, message: "It's my first post", likeCount: 15}
//     ],
//     newTextPost: 'type',
//   },
//   dialogsPage: {
//     dialogsDate: [
//       {id: 1, name: 'Robert'},
//       {id: 2, name: 'Andrzej'},
//       {id: 3, name: 'Pawel'},
//       {id: 4, name: 'Marek'},
//       {id: 5, name: 'Barbara'},
//       {id: 6, name: 'Jack'}
//     ],
//     messagesDate: [
//       {id: 1, message: 'Hi'},
//       {id: 2, message: 'How are you going?'},
//       {id: 3, message: 'I am fine'},
//       {id: 4, message: 'I am Ok'},
//       {id: 5, message: 'I am great!'},
//     ],
//     newTextMessage: 'type',
//   },
//   sidebar: {
//     friends: [
//       {id: 1, name: 'Robert'},
//       {id: 2, name: 'Andrzej'},
//       {id: 3, name: 'Barbara'}
//     ]
//   }
// }

export type StoreType = {
  _state: RootStateType
  updateNewTextPost: (newText: string) => void
  updateNewTextMessage: (newMessage: string) => void
  _callSubscriber: () => void
  addPost: () => void
  addMessage: () => void
  subscribe: (observer: () => void) => void
  getState: () => RootStateType
}
const store:StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "How are you?", likeCount: 19},
        {id: 2, message: "It's my first post", likeCount: 15}
      ],
      newTextPost: '',
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
      newTextMessage: '',
    },
    sidebar: {
      friends: [
        {id: 1, name: 'Robert'},
        {id: 2, name: 'Andrzej'},
        {id: 3, name: 'Barbara'}
      ]
    }
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log('state changed')
  },
  addPost() {
    let newPost: PostsType = {
      id: 3,
      message: this._state.profilePage.newTextPost,
      likeCount: 0
    };
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newTextPost = '';
    this._callSubscriber()
  },
  updateNewTextPost(newText: string) {
    this._state.profilePage.newTextPost = newText;
    this._callSubscriber();
  },
  addMessage() {
    const newMessage: MessagesDateType = {id: new Date().getTime(), message: this._state.dialogsPage.newTextMessage};
    this._state.dialogsPage.messagesDate.push(newMessage);
    this._state.dialogsPage.newTextMessage = '';
    this._callSubscriber();
  },
  updateNewTextMessage(newMessage: string) {
    this._state.dialogsPage.newTextMessage = newMessage;
    this._callSubscriber()
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}


// @ts-ignore
window.store = store;

export default store;

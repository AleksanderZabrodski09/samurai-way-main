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
  newMessageText: string
}
export type FriendsNavType = {
  friends: FriendsNavItemType[]
}

export type StateType = {
  profilePage: PostsArrayType
  dialogsPage: DialogsArraysType
  sideBar: FriendsNavType
}

export type StoreType = {
  _state: StateType
  upDateNewPostText: (newText: string) => void
  upDateNewMessageText:  (newMessage: string)=> void
  _renderEntireTree: () => void
  addPost:()=>void
  addMessage:()=>void
  subscribe: (observer: () => void)=>void
  getState:()=>StateType
}


let store: StoreType = {
  _state: {
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
      ],
      newMessageText: ''
    },
    sideBar: {
      friends: [
        {id: 1, name: 'Robert'},
        {id: 2, name: 'Barbara'},
        {id: 3, name: 'Lena'}
      ]
    }


  },
  getState(){
    return this._state
  },
  upDateNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText
    this._renderEntireTree();
  },
  _renderEntireTree() {
    console.log('State is changed')
  },
  addPost ()  {
    const newPost: PostsType = {id: new Date().getTime(), message: this._state.profilePage.newPostText, likeCount: 0};

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._renderEntireTree();
  },
  upDateNewMessageText  (newMessage: string)  {
    this._state.dialogsPage.newMessageText = newMessage;
    this._renderEntireTree();
  },
  addMessage () {
    const newMessage: MessagesItemType = {id: new Date().getTime(), message: this._state.dialogsPage.newMessageText};
    this._state.dialogsPage.messagesDate.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._renderEntireTree();
  },
  subscribe (observer)  {
    this._renderEntireTree = observer
  },

}

// @ts-ignore
window.store = store;

export default store


// type StateType = {
//    dialogsDate: DialogsDateType[]
//    messagesDate: MessagesDateType[]
//    postsDate: PostType[]
// }
// export type DialogsType =
//   DialogsDateType[]
//   | MessagesDateType[]


export type PostsType={
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
export type ProfilePageType={
   posts:PostsType[]
}
export type DialogsPageType={
   dialogsDate:DialogsDateType[]
   messagesDate:MessagesDateType[]

}


export type FriendsDateType = {
   id: number
   name: string
}
export type SidebarType={
   friends:FriendsDateType[]
}

export type RootStateType={
   profilePage:ProfilePageType
   dialogsPage:DialogsPageType
   sidebar:SidebarType
}

  let state:RootStateType = {
   profilePage: {
      posts: [
         {id: 1, message: "How are you?", likeCount: 19},
         {id: 2, message: "It's my first post", likeCount: 15}
      ]
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
      ]
   },
   sidebar: {
      friends:[
         {id: 1, name: 'Robert'},
         {id: 2, name: 'Andrzej'},
         {id: 3, name: 'Barbara'}
      ]
   }
}



export const addPost =(messagePost:string)=>{
   let newPost:PostsType = {id: 3, message: messagePost, likeCount: 0};
   state.profilePage.posts.push(newPost)
}
export const addMessage =(messagePost:string)=>{
   let newMessage:MessagesDateType = {id: 3, message: messagePost};
   state.dialogsPage.messagesDate.push(newMessage)
}




export default state;
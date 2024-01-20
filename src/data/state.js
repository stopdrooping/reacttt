let state = {
  postsData: [
    { text: "first comment", name: "@rickowens", id: 1, likes: "3" },
    { text: "dafsadjfas", name: "@sdwekns", id: 2, likes: "2" },
    { text: "n", name: "@kmll", id: 3, likes: "4" },
    { text: "nnn", name: "@kml14l", id: 4, likes: "6" },
  ],
  dialogNames: [
    { name: "rickowens", id: 1 },
    { name: "Gibon", id: 2 },
    { name: "Camel", id: 3 },
    { name: "homixide", id: 4 },

  ],
  messageItems: [
    { message: "sup", id: 1 },
    { message: "wsup", id: 2 },
    { message: "gibon", id: 3 },
    { message: "gibon", id: 4 },

  ],
  friends: [
    { ava: "././", name: "kolos" },
    { ava: "././", name: "stew" },
    { ava: "././", name: "og" },
  ]
}
export let addPost = (postText) => {
  let newpostText = {
    text: postText,
    name: "@nr",
    id: 5,
    likes: 0,
  }
  state.postsData.push(newpostText);
  console.log(state.postsData);
}
export let addMessage = (messageText) => {
  let newmessage = {
    message: messageText,
    id: 5,
  }
  state.messageItems.push(newmessage);
  console.log(state.messageItems);
}
export default state
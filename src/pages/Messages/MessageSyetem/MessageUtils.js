const date = new Date();
import { db }  from '../../../firebase.js'

export const createChatRoom = (uid_1, uid_2) => {
  console.log("createCharRoom get call!!!");
  const uid_one = db.ref(`Users/${uid_1}/username`).once('value');
  const uid_two = db.ref(`Users/${uid_2}/username`).once('value');
  Promise.all([uid_one, uid_two])
    .then(([one, two]) => {
      return db.ref(`ChatRooms/`).push(
        {
          user1: {
            userId: uid_1,
            username: one.val().toString()
          },
          user2: {
            userId:uid_2,
            username: two.val().toString()
          }
        }
      )
    })
    .then(({key: ChatRoomId}) => {
      db.ref('Users/'+uid_1)
        .child('currentChats')
        .transaction(
          data => {
            if(data === null){
              return [ChatRoomId]
            }else{
              return [...data, ChatRoomId]
            }
          }
        )
      db.ref('Users/'+uid_2)
        .child('currentChats')
        .transaction(
          data => {
            if(data === null){
              return [ChatRoomId]
            }else{
              return [...data, ChatRoomId]
            }
          }
        )
    })
}

export const createMessage = (senderId, roomId,newMessageText) =>{
  console.log("creteMessage get call")
  const NewMessage = {
    text: newMessageText,
    date: date.toLocaleString(),
    sender: senderId
  }
  db.ref('ChatRooms/'+roomId+'/MessagePool').transaction(currentMessages => {
    if(currentMessages ===  null){
      return [NewMessage]
    }else{
      return [...currentMessages, NewMessage]
    }
  })
  console.log("done creteMessage")
}

export const getCurrentChats = (uid, chatId_lst, allChat) =>{
  var currentChats = []
  for (let i = 0; i < chatId_lst.length; i++) {
    for(let j = 0; j< allChat.length; j++){
      if(chatId_lst[i]['.value'] === allChat[j]['.key']){
        currentChats.push(allChat[i])
        break;
      }
    }
  }
  console.log('about to return')
  console.log(currentChats)
  if(currentChats.length === 0){
    return null
  }
  return currentChats
}
export const getInboxRenderComponent = (uid, currentChat) =>{
  var tmp = []
  var ret = []
  currentChat.forEach(c =>{
    // console.log(c)
    if(c.user1.userId === uid){
      tmp.push({
        name:c.user2.username,
        chatId:c['.key']
      })
    }else if(c.user2.userId === uid){
      tmp.push({
        name:c.user1.username,
        chatId:c['.key']
      })
    }
  })
  for(let i = tmp.length-1; i >= 0; i--){
    ret.push(tmp[i])
  }
  // console.log(ret)
  return ret
}

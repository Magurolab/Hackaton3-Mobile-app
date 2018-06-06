
const date = new Date();
import { db }  from '../../../firebase.js'

export const createChatRoom = (uid_1, uid_2) => {
  console.log("createCharRoom get call!!!")

  const ChatRoomId = db.ref('ChatRooms/').push(
        {
          userid1: uid_1,
          userid2: uid_2
        }
      ).key
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

export const getCurrentChats = (uid, chatId_lst) =>{
  var i;
  for (i = 0; i < chatId_lst.length; i++) {
    console.log("getCurrentChat at" + chatId_lst[i].text)
  }

}

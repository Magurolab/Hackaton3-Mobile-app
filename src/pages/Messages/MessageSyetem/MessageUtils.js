
const date = new Date();
import { db }  from '../../../firebase.js'

export const createChatRoom = (uid_1, uid_2) => {
  console.log("createCharRoom get call!!!")

  const ChatRoomId = db.ref('ChatRooms/').push(
        {
          users: [uid_1,uid_2]
        }
      ).key
  db.ref('Users/'+uid_1)
    .child('currentChat')
    .update({id: ChatRoomId})

  db.ref('Users/'+uid_2)
    .child('currentChat')
    .update({id: ChatRoomId})
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

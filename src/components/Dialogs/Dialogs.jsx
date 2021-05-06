import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
  let dialogs = [
    {id: 1, name: 'Artur'},
    {id: 2, name: 'Lana'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Vera'}
  ]

  let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'}
  ]

  let dialogsElements = dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />)
  let messagesElements = messages.map(message => <Message message={message.message} />)

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs

import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {

  let path = '/dialogs/' + props.id

  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={classes.dialog}>{props.message}</div>
  )
}

const Dialogs = (props) => {

  let dialogs = [
    {id: 1, name: 'Artur'},
    {id: 2, name: 'Lana'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Lera'},
    {id: 5, name: 'Vera'}
  ]

  let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'}
  ]

  let dialogsElements = dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
  let messagesElements = messages.map(message => <Message message={message.message}/>)

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs

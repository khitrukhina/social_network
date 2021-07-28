import React from 'react';

import classes from './Dialogs.module.css';

export const Dialogs = (props) => {
  let dialogsItems = props.dialogsPage.dialogs.map((dialog, index) => {
    return <DialogItem name={dialog.name} id={dialog.id} key={index} />;
  });

  let messagesItems = props.dialogsPage.messages.map((message, index) => {
    return (
      <DialogMessage message={message.message} id={message.id} key={index} />
    );
  });

  let newMessage = React.createRef();

  const changeNewMessageText = () => {
    let newMesageText = newMessage.current.value;
    props.onChangeNewMessageText(newMesageText);
  };

  let sendMessage = () => {
    props.onSendMessage();
  };
  return (
    <div className={classes.dialogsWrapper}>
      <div className={classes.dialogItems}>{dialogsItems}</div>
      <div className={classes.dialogsTextArea}>
        <textarea
          ref={newMessage}
          value={props.dialogsPage.newMessageText}
          onChange={changeNewMessageText}
        ></textarea>
        <button type="button" onClick={sendMessage}>
          Send message
        </button>
      </div>
      <div className={classes.message}>{messagesItems}</div>
    </div>
  );
};

const DialogItem = (props) => {
  return (
    <div>
      <div>{props.name}</div>
    </div>
  );
};

const DialogMessage = (props) => {
  return (
    <div>
      <div>{props.message}</div>
    </div>
  );
};

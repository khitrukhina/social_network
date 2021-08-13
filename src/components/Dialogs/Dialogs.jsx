import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../tools/validators/validators';
import { MessageTextarea } from '../common/Forms/MessageTextarea';

import classes from './Dialogs.module.css';

let maxLength200 = maxLengthCreator(200);

export const Dialogs = (props) => {
  let dialogsItems = props.dialogsPage.dialogs.map((dialog, index) => {
    return <DialogItem name={dialog.name} id={dialog.id} key={index} />;
  });

  let messagesItems = props.dialogsPage.messages.map((message, index) => {
    return (
      <DialogMessage message={message.message} id={message.id} key={index} />
    );
  });

  const addMessage = (values) => {
    props.onSendMessage(values.newMessage);
  };

  if (!props.isAuth) {
    return <Redirect to="/login" />;
  }
  return (
    <div className={classes.dialogsWrapper}>
      <div className={classes.dialogItems}>{dialogsItems}</div>
      <div className={classes.dialogsTextArea}>
        <SendMessageFormRedux onSubmit={addMessage} />
      </div>
      <div className={classes.message}>{messagesItems}</div>
    </div>
  );
};

const sendMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder="Your message..."
        name={'newMessage'}
        component={MessageTextarea}
        validate={[required, maxLength200]}
      ></Field>
      <button>Send message</button>
    </form>
  );
};

const SendMessageFormRedux = reduxForm({ form: 'sendMessageForm' })(
  sendMessageForm
);

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

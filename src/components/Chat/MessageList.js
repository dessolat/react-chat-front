import React from 'react';
import MessageListItem from './MessageListItem';

const MessageList = ({ messages }) => (
  <>
    {messages.map((message, i) => (
      <MessageListItem key={i} message={message} />
    ))}
  </>
);

export default MessageList;

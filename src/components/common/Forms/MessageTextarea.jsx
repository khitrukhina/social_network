import React from 'react';

export const MessageTextarea = ({ input, meta, ...props }) => {
  return (
    <>
      <div>
        <textarea {...input} {...props} />
      </div>
      <div>{meta.touched && meta.error && <span>{meta.error}</span>}</div>
    </>
  );
};

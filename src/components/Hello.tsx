import * as PropTypes from 'prop-types';
import React from 'react';

type Address = {
  line1: string;
  line2: string;
  state: string;
  zipcode: string;
};

type Who = {
  name: string;
  friend: boolean;
  address?: Address;
};

type Props = {
  who: Who;
  message?: string;
  renderMessage?: (message: string) => React.ReactNode;
};

const Hello = ({who, renderMessage, message = "How are you"} : Props) => {
  return (
    <div>
      <p>
      Hello, {who.name}
      {message && (renderMessage ? renderMessage(message) : <p>{message}</p>)}
      </p>
    </div>
  )
};

const Application = () => {
  return (
    <Hello 
    who={{ name: "Bob", friend: true }}
    renderMessage={(m) => <i> {m}</i>}
    />
  )
};
export default Application;
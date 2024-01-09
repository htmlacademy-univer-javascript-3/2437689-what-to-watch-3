type MessageProps = {
    message: string;
}

function Message({message}: MessageProps): JSX.Element {
  return (
    <div className="sign-in__message">
      <p>{message}</p>
    </div>
  );
}

export default Message;

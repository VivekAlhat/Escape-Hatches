import * as React from 'react';
import '../style.css';

const correctPassword = '1738';

const ExampleWithoutEffect = () => {
  const [userInput, setUserInput] = React.useState<string>('');
  const [allowLogin, setAllowLogin] = React.useState<boolean>(false);

  const handleNumberClick = (idx: number) => {
    const updatedPassword = userInput + idx.toString();

    setUserInput(updatedPassword);

    if (updatedPassword.length === 4) {
      if (correctPassword === updatedPassword) {
        setAllowLogin(true);
      } else {
        setAllowLogin(false);
      }
    }
  };

  const reset = () => {
    setUserInput('');
  };

  return (
    <div className="container">
      {userInput.length < 4 && (
        <React.Fragment>
          <p id="header">Enter your 4 digit password to continue</p>
          <div>
            {userInput.split('').map((_, id) => (
              <span id="star" key={id}>
                *
              </span>
            ))}
          </div>
          <div id="numpad">
            {Array.from({ length: 10 }).map((_, idx) => {
              const num = idx === 9 ? 0 : idx + 1;
              return (
                <div
                  key={idx}
                  className="num"
                  onClick={() => handleNumberClick(num)}
                >
                  {num}
                </div>
              );
            })}
          </div>
        </React.Fragment>
      )}
      {userInput.length === 4 ? (
        allowLogin ? (
          <div className="password-info-container">
            <p>Correct password</p>
            <button onClick={reset}>Go back</button>
          </div>
        ) : (
          <div className="password-info-container">
            <p>Incorrect password</p>
            <button onClick={reset}>Try again</button>
          </div>
        )
      ) : null}
    </div>
  );
};

export default ExampleWithoutEffect;

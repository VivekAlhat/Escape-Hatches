import * as React from 'react';
import '../style.css';

const correctPassword = '1738';

const ExampleWithEffect = () => {
  const [userInput, setUserInput] = React.useState<string>('');
  const [allowLogin, setAllowLogin] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (userInput.length === 4) {
      if (correctPassword === userInput) {
        setAllowLogin(true);
      } else {
        setAllowLogin(false);
      }
    }

    // return () => console.warn('Unmounts the component');
  }, [userInput]);

  const handleNumberClick = (idx: number) => {
    if (userInput.length < 4) {
      setUserInput((prev) => (prev += idx.toString()));
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
            {userInput.split('').map(() => (
              <span id="star">*</span>
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
            <p>Correct Password</p>
            <button onClick={reset}>Go back</button>
          </div>
        ) : (
          <div className="password-info-container">
            <p>Incorrect Password</p>
            <button onClick={reset}>Try again</button>
          </div>
        )
      ) : null}
    </div>
  );
};

export default ExampleWithEffect;

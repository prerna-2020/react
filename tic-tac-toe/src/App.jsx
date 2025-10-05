import { useRef, useEffect, useState } from "react";
import Board from "./components/Board";
import { BoardContext } from "./components/context/BoardContext";
import ToastMsg from "./components/ToastMsg";

function App() {
  const optionRef = useRef();

  const [userSelect, setUserSelect] = useState("");
  const [cpuSelect, setCpuSelect] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [winner, setWinner] = useState("");
  const [loading, setLoading] = useState(false);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  const [boardIndex, setBoardIndex] = useState(Array(9).fill(""));

  const [winningIndex] = useState([
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [3, 4, 5],
    [2, 4, 6],
    [2, 5, 8],
    [6, 7, 8],
    [1, 4, 7],
  ]);

  // focused option on screen load
  useEffect(() => {
    if (optionRef.current) optionRef.current.focus();
  }, []);

  //check for winning status at every turn
  useEffect(() => {
    checkBoardStatus();
  }, [boardIndex]);

  //Calling cpu turn function whenever board is changed, current user is cpu
  useEffect(() => {
    const shouldCpuPlay =
      currentUser === "cpu" &&
      winner === "" &&
      boardIndex.includes("") &&
      checkWinStatus(boardIndex) === "";
    if (shouldCpuPlay) {
      setTimeout(() => {
        setLoading(false);
        handleCpuTurn();
      }, 500);
    }
  }, [boardIndex, currentUser, winner]);

  // User select one option from (x,o), then updating cpu option
  const assignUser = (value) => {
    if (value === "X") {
      setUserSelect("X");
      setCpuSelect("O");
    } else {
      setUserSelect("O");
      setCpuSelect("X");
    }

    setCurrentUser("user");
  };

  //User Turn
  const onTileClick = (index, optn) => {
    console.log(index, optn);
    let data = [...boardIndex];
    if (data[index] === "") {
      data[index] = optn;
      if (
        userSelect === "X"
          ? setXScore((prev) => prev + 10)
          : setOScore((prev) => prev + 10)
      );

      setBoardIndex(data);
    } else return;
    setCurrentUser("cpu");
    setLoading(true);
  };

  //CPU turn
  const handleCpuTurn = () => {
    // if winner is set not allow cpu turn
    if (winner !== "") {
      return;
    } else {
      let cpuChances = [];
      const data = [...boardIndex];

      //Get user filled indexes on board
      const userFilledIndex = data.reduce((acc, currenVal, index) => {
        if (currenVal === userSelect) acc.push(index);
        return acc;
      }, []);

      //Get cpu filled indexes on board
      const cpuFilledIndex = data.reduce((acc, currenVal, index) => {
        if (currenVal === cpuSelect) acc.push(index);
        return acc;
      }, []);

      //Get empty indexes on board
      const emptyIndexArr = data.reduce((acc, val, index) => {
        if (val === "") acc.push(index);
        return acc;
      }, []);

      // Block user if close to winning
      if (userFilledIndex.length >= 2) {
        const userWincombo = winningIndex.filter((combo) => {
          let matchCount = 0;
          for (let i = 0; i < combo.length; i++) {
            if (userFilledIndex.includes(combo[i])) {
              matchCount++;
            }
          }
          return matchCount >= 2;
        });

        cpuChances = userWincombo
          .map((combo) => combo.find((v) => !userFilledIndex.includes(v)))
          .filter((i) => i !== undefined && data[i] === "");

        if (cpuChances.length > 0) {
          data[cpuChances[0]] = cpuSelect;
        } else {
          const randomIndex =
            emptyIndexArr[Math.floor(Math.random() * emptyIndexArr.length)];
          data[randomIndex] = cpuSelect;
        }
      } else {
        // for first time without checking if user can win
        const randomIndex =
          emptyIndexArr[Math.floor(Math.random() * emptyIndexArr.length)];
        data[randomIndex] = cpuSelect;
      }

      //Update Score
      if (
        cpuSelect === "X"
          ? setXScore((prev) => prev + 10)
          : setOScore((prev) => prev + 10)
      );

      setBoardIndex(data);
    }

    setCurrentUser("user");
  };

  //Reset Game to initial state
  const resetGame = () => {
    setCurrentUser("");
    setUserSelect("");
    setCpuSelect("");

    setWinner("");
    setBoardIndex(Array(9).fill(""));
    setXScore(0);
    setOScore(0);
  };

  // Added pure function to stop cpu from running exta time
  const checkWinStatus = (board) => {
    for (let combo of winningIndex) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[b] === board[c])
        return board[a];
    }
    return "";
  };

  const checkBoardStatus = () => {
    const winStatus = checkWinStatus(boardIndex);

    if (winStatus) {
      setWinner(winStatus);
      setLoading(false);
      winStatus === "X"
        ? setXScore((prev) => prev + 50)
        : setOScore((prev) => prev + 50);
    } else {
      if (!boardIndex.includes("") && winner === "") {
        setWinner("Draw");
        setLoading(false);
      }
    }
  };

  return (
    <BoardContext.Provider
      value={{
        boardIndex,
        setBoardIndex,
        onTileClick,
        currentUser,
        userSelect,
        cpuSelect,
        loading,
        winner,
      }}
    >
      <div className="m-6 lg:m-10 text-center p-8 text-gray-800 bg-white rounded-2xl">
        <h1 className="text-4xl font-bold mb-12 text-violet-950 playfair-display">
          Tic Tac Toe
        </h1>
        <div className="flex justify-center items-start roboto flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 mb-8 lg:m-2">
            <section className="mb-8 relative">
              <ul className="lg:mx-10 flex justify-between items-center">
                <li
                  ref={optionRef}
                  tabIndex={-1}
                  className="outline-none z-1 flex flex-col lg:flex-row"
                >
                  <div className="flex items-center">
                    {currentUser && (
                      <span className="mr-2">
                        {userSelect === "X"
                          ? "User  "
                          : cpuSelect === "X"
                          ? "CPU  "
                          : ""}
                      </span>
                    )}
                    <button
                      className={`w-10 h-10  bg-violet-200 mx-0.5 mb-2 lg:mb-0 text-md text-[#016630] font-semibold ${
                        currentUser !== ""
                          ? "cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                      onClick={
                        currentUser !== "" ? undefined : () => assignUser("X")
                      }
                      title="Choose Symbol"
                      alt="Choose Symbol"
                      aria-label="Choose Symbol from 'X /'O'"
                    >
                      X
                    </button>
                  </div>
                  <div className="flex items-center">
                    {currentUser && (
                      <span className="lg:ml-2 mr-2">
                        {userSelect === "O"
                          ? "User "
                          : cpuSelect === "O"
                          ? "CPU"
                          : ""}
                      </span>
                    )}
                    <button
                      className={`w-10 h-10 bg-violet-200 mx-0.5 my-0 text-md text-[#f43416] font-semibold ${
                        currentUser !== ""
                          ? "cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                      onClick={
                        currentUser !== "" ? undefined : () => assignUser("O")
                      }
                      title="Choose Symbol"
                      alt="Choose Symbol"
                      aria-label="Choose Symbol from 'X /'O'"
                    >
                      &nbsp;O
                    </button>
                  </div>
                </li>

                <li className="flex items-center justify-center w-12 h-12 z-1">
                  <button
                    className="w-full h-full p-2 bg-violet-200 text-violet-950 flex items-center justify-center leading-none cursor-pointer"
                    onClick={resetGame}
                    title="Reset Game"
                    alt="Reset Game"
                    aria-label="Reset Game"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="block"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4.05 11a9 9 0 0 1 15.9-4" />
                      <polyline points="20 4 20 10 14 10" />
                      <path d="M19.95 13a9 9 0 0 1-15.9 4" />
                      <polyline points="4 20 4 14 10 14" />
                    </svg>
                  </button>
                </li>
              </ul>
              {!winner && (
                <div className="capitalize absolute w-full top-4 lg:top-6 flex justify-center">
                  <ToastMsg>
                    {!currentUser && (
                      <>&#x2190;&nbsp;Choose your symbol to begin</>
                    )}
                    {currentUser && <>{currentUser} turn !!</>}
                  </ToastMsg>
                </div>
              )}
            </section>
            <Board />
            <section>
              <h2 className="my-3 text-2xl text-violet-950">Scores</h2>
              <ul className="flex items-center justify-center roboto">
                <li className="w-20 h-18 border-2 border-dashed border-violet-950 mx-0.5 my-0 cursor-pointer flex flex-col justify-center">
                  <span className=" text-[#016630] text-lg">X</span>
                  <span className="text-violet-950">{xScore}</span>
                </li>
                <li className="w-20 h-18 border-2 border-dashed border-violet-950 mx-0.5 my-0 cursor-pointer flex flex-col justify-center">
                  <span className="text-[#f43416] text-lg">O</span>
                  <span className="text-violet-950">{oScore}</span>
                </li>
              </ul>

              {winner && (
                <p className="mt-6 text-3xl font-semibold text-[#f43416]">
                  {winner === "Draw" ? winner + " !!" : winner + " wins !!"}
                </p>
              )}
            </section>
          </div>
          <div
            className="w-full lg:w-1/2 m-2 p-5 pt-6 bg-violet-100 relative  shadow-[2px_2px_10px_gray]
           
          before:content-[''] before:absolute before:border-l-10 before:border-violet-950 before:border-dotted before:left-[-5px] 
          before:w-full before:h-full before:top-0"
          >
            <h2 className="text-left text-xl/[40px] mb-6 font-semibold">
              &#x1F3AE; &nbsp;How to Play Game
            </h2>
            <ol className="text-left list-none ml-2 roboto">
              <li className="text-md my-3">
                <h4 className="font-semibold">&nbsp;Choose Your Symbol</h4>
                <p className="text-sm my-3 ml-1">
                  Start by selecting your symbol — either X or O.
                </p>
              </li>

              <li className="text-md my-3">
                <h4 className="font-semibold">&nbsp;CPU Takes the Next Turn</h4>
                <p className="text-sm my-3 ml-1">
                  After your move, the CPU will respond with its own.
                </p>
              </li>

              <li className="text-md my-3">
                <h4 className="font-semibold">
                  &nbsp;Alternate Turns Until Someone Wins
                </h4>
                <p className="text-sm my-3 ml-1">
                  The game continues with alternating turns until either player
                  wins or the board is full.
                </p>
              </li>

              <li className="text-md my-3">
                <h4 className="font-semibold">&nbsp;Scoring System</h4>
                <p className="text-sm my-2 ml-1">
                  Each move adds 10 points to your score.
                </p>
                <p className="text-sm my-2 ml-1">
                  Winning a round gives a bonus of 50 points.
                </p>
              </li>

              <li className="text-md my-3">
                <h4 className="font-semibold">&nbsp;Reset Anytime</h4>
                <p className="text-sm my-3 ml-1">
                  You can reset the game at any point to start fresh.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </BoardContext.Provider>
  );
}

export default App;

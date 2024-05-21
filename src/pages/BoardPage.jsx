import React, { useEffect, useState } from "react";
import { getBoardList, postBoard } from "../assets/api/BoardApi";

function MainPage() {
  const [board, setBoard] = useState([]);
  const [boardName, setBoardName] = useState("");
  const [text, setText] = useState("");

  const fetchData = async () => {
    try {
      const res = await getBoardList();
      setBoard(res.data);
    } catch (error) {
      alert("실패");
    }
  };

  const addBoard = async () => {
    try {
      const res = await postBoard({
        boardName,
        text,
      });
      console.log(res);
      // Fetch the updated board list
      fetchData();
    } catch (error) {
      alert("실패");
    }
  };

  const saveClick = () => {
    addBoard();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="name"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
        />
        <input
          type="text"
          placeholder="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <button onClick={saveClick}>Submit</button>
      </div>
      <div>
        {board.map((board, index) => (
          <div key={index}>
            <div>
              {board.boardName}: {board.text}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainPage;

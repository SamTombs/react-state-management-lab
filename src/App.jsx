import { useState } from "react";
import "./App.css";

const App = () => {
  const [mode, setMode] = useState("light");
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);
  console.log(zombieFighters);

  const handleMode = (modeValue) => {
    console.log(modeValue);
    setMode(modeValue);
  };

  const handleAddFighter = (zombieFighter) => {
    if (money >= zombieFighter.price) {
      const selectedZombie = zombieFighters.filter(
        (fighter) => fighter.id !== zombieFighter.id
      );
      console.log(selectedZombie);

      setZombieFighters(selectedZombie);
      setTeam((prevState) => [...prevState, zombieFighter]);
      setMoney((prevState) => prevState - zombieFighter.price);
      console.log(team);
    } else {
      return alert("Not enough money");
    }
  };

  const handleRemoveFighter = (zombieFighter) => {
    const updatedTeam = team.filter(
      (fighter) => fighter.id !== zombieFighter.id
    );

    setTeam(updatedTeam);
    setZombieFighters((prevState) => [...prevState, zombieFighter]);
    setMoney((prevState) => prevState + zombieFighter.price);
  };

  const totalStrength = team.reduce(
    (total, zombie) => total + zombie.strength,
    0
  );
  const totalAgility = team.reduce(
    (total, zombie) => total + zombie.agility,
    0
  );

  console.log(totalStrength);
  console.log(totalAgility);

  return (
    <>
      <div className={mode}>
        <h1>Zombie Game</h1>
        <div>
          <button onClick={() => handleMode("dark")}>Dark Mode</button>
          <button onClick={() => handleMode("light")}>Light Mode</button>
        </div>
        <div>Player Money: {money}</div>
        <div>
          Your Team:
          <ul>
            {team.length === 0 ? (
              <p>Add some team members</p>
            ) : (
              team.map((team) => (
                <li key={team.id}>
                  <img src={team.img} alt="zombie" />
                  <br />
                  <strong>{team.name}</strong>
                  <br />
                  Strength: {team.strength}
                  <br /> 
                  Agility: {team.agility}
                  <br />
                  Price:{" "}
                  {team.price}
                  <br />
                  <button onClick={() => handleRemoveFighter(team)}>
                    Remove Zombie
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
        <div>Total Strength : {totalStrength}</div>
        <br />
        <div>Total Agility : {totalAgility}</div>
        <br />
        Zombie List
        <ul>
          {zombieFighters.map((zombie) => (
            <li key={zombie.id}>
              <img src={zombie.img} alt="zombie" />
              <br />
              <strong>{zombie.name}</strong>
              <br />
              Strength: {zombie.strength}
              <br /> 
              Agility: {zombie.agility}
              <br />
              Price:{" "}
              {zombie.price}
              <br />
              <button onClick={() => handleAddFighter(zombie)}>
                Add Zombie
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default App;

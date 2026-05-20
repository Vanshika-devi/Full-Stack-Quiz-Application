import {
  useEffect
} from "react";

function Timer({
  timeLeft,
  setTimeLeft,
  onTimeUp
}) {

  useEffect(()=>{

    if(timeLeft <= 0){

      onTimeUp();
      return;

    }

    const timer =
      setTimeout(()=>{

        setTimeLeft(
          prev => prev - 1
        );

      },1000);

    return ()=> clearTimeout(timer);

  },[
    timeLeft,
    setTimeLeft,
    onTimeUp
  ]);

  const minutes =
    Math.floor(timeLeft / 60);

  const seconds =
    timeLeft % 60;

  return (

    <div className="timer-box">

      ⏳
      {" "}

      {String(minutes)
        .padStart(2,"0")}

      :

      {String(seconds)
        .padStart(2,"0")}

    </div>

  );

}

export default Timer;
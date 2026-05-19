import API
from "./api";

/* SAVE SCORE */
export const saveScore =
async (
  token,
  scoreData
)=>{

  const response =
    await API.post(

      "/quiz/score",

      scoreData,

      {
        headers:{

          Authorization:
          `Bearer ${token}`

        }
      }

    );

  return response.data;

};

/* GET LEADERBOARD */
export const getLeaderboard =
async ()=>{

  const response =
    await API.get(
      "/quiz/leaderboard"
    );

  return response.data;

};
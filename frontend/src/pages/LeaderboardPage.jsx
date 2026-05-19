import {
  useEffect,
  useState
} from "react";

import {
  getLeaderboard
} from "../services/quizService";

function LeaderboardPage() {

  const [
    leaderboard,
    setLeaderboard
  ] = useState([]);

  useEffect(()=>{

    const fetchLeaderboard =
    async ()=>{

      try{

        const data =
          await getLeaderboard();

        setLeaderboard(data);

      }catch(error){

        console.log(error);

      }

    };

    fetchLeaderboard();

  },[]);

  return (

    <div className="leaderboard-page">

      {/* HEADER */}
      <div className="leaderboard-header">

        <p className="leaderboard-label">
          Rankings
        </p>

        <h1 className="leaderboard-title">
          Leaderboard
        </h1>

        <p className="leaderboard-subtitle">

          Top quiz performances
          from all players.

        </p>

      </div>

      {/* EMPTY STATE */}
      {leaderboard.length===0 && (

        <div className="leaderboard-empty">

          <div className="empty-icon">
            🏆
          </div>

          <h2>
            No Scores Yet
          </h2>

          <p>

            Complete quizzes to
            appear on the leaderboard.

          </p>

        </div>

      )}

      {/* TABLE */}
      {leaderboard.length>0 && (

        <div className="leaderboard-card">

          <table className="leaderboard-table">

            <thead>

              <tr>

                <th>Rank</th>

                <th>Player</th>

                <th>Category</th>

                <th>Score</th>

              </tr>

            </thead>

            <tbody>

              {leaderboard.map(
                (item,index)=>(

                <tr key={item._id}>

                  <td>

                    <span
                      className="
                      rank-badge
                      "
                    >

                      #{index+1}

                    </span>

                  </td>

                  <td className="player-name">

                    {item.user?.name}

                  </td>

                  <td>

                    <span
                      className="
                      category-pill
                      "
                    >

                      {item.category}

                    </span>

                  </td>

                  <td className="score-text">

                    {item.score}%

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>

  );
}

export default LeaderboardPage;
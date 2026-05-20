import { useState } from "react";

function LeaderboardPage() {

  const savedScores =
    JSON.parse(
      localStorage.getItem(
        "leaderboard"
      )
    ) || [];

  /* SORT SCORES */

  savedScores.sort(
    (a,b)=> b.score - a.score
  );

  const [
    leaderboard
  ] = useState(savedScores);

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

      {/* EMPTY */}

      {leaderboard.length === 0 && (

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

      {leaderboard.length > 0 && (

        <div className="leaderboard-card">

          <table className="leaderboard-table">

            <thead>

              <tr>

                <th>Rank</th>

                <th>Player</th>

                <th>Category</th>

                <th>Score</th>

                <th>Date</th>

              </tr>

            </thead>

            <tbody>

              {leaderboard.map(
                (item,index)=>(

                  <tr key={index}>

                    <td>

                      <span className="rank-badge">

                        #{index + 1}

                      </span>

                    </td>

                    <td className="player-name">

                      {item.name}

                    </td>

                    <td>

                      <span className="category-pill">

                        {item.category}

                      </span>

                    </td>

                    <td className="score-text">

                      {item.score}%

                    </td>

                    <td>

                      {item.date}

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>

      )}

    </div>

  );

}

export default LeaderboardPage;
function ProgressBar({
  current,
  total
}) {

  const percentage =
    (current / total) * 100;

  return (

    <div className="progress-wrapper">

      <div
        className="progress-fill-bar"

        style={{
          width:`${percentage}%`
        }}
      />

    </div>

  );

}

export default ProgressBar;
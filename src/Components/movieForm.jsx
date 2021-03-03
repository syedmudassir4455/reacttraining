import React from "react";


const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>MovieForm {match.params.id}</h1>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => history.push("/Movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;

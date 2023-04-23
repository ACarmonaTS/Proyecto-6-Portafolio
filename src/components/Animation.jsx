import Propeller from "./Included/Propeller";

function Animation() {
  return (
    <>
      <div className="mountain"></div>
      <div className="turbineOne">
        <Propeller />
      </div>
      <div className="turbineTwo">
        <Propeller />
      </div>
      <div className="turbineThree">
        <Propeller />
      </div>
    </>
  );
}

export default Animation;

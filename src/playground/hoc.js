//Higher Oredr Component (HOC)

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is : {props.info}</p>
  </div>
);

const withadminworning = Withadmin => {
  return props => (
    <div>
      {props.isadmin && <p>Dont show the diteials </p>}
      <Withadmin {...props} />
    </div>
  );
};

const requeirauthentication = Withauthentic => {
  return props => (
    <div>
      {props.isauthentic ? (
        <Withauthentic {...props} />
      ) : (
        <p>Please log in to veiw thw info</p>
      )}
    </div>
  );
};

const Admininfo = withadminworning(Info);
const Addauthen = requeirauthentication(Info);

// ReactDOM.render(
//   <Admininfo isadmin={true} info="There are some details" />,
//   document.getElementById("something")
// );

ReactDOM.render(
  <Addauthen isauthentic={true} info="There are some details" />,
  document.getElementById("something")
);

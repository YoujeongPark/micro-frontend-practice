import React from "react";

// interface Props {
//   name : string; 
// }

// const Header = ({name} : Props) => {
const Header = () => {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      Header - {name}
    </div>
  );
}

export { Header }

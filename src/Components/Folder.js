import { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <>
        <span onClick={() => setExpand(!expand)}>
          {" "}
          {explorer.name}
          <br />
        </span>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
          {explorer.items.map((exp, index) => {
            // return <span> {exp.name} </span>

            return <Folder key={index} explorer={exp} />;
          })}
        </div>
      </>
    );
  } else {
    return <div> {explorer.name}</div>;
  }
};

export default Folder;

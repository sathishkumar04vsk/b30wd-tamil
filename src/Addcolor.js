import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TextField from "@mui/material/TextField";
export function Addcolor() {
  const [color, setColor] = useState("green");
  const style = {
    background: color,
    height: "40px",
    width: "200px",
    borderRadius: "5px"
  };
  const [colorList, setColorList] = useState(["skyblue", "orange", "crimson", "red"]);
  return (
    <div>

      <div className="inputcontent">
      <TextField id="standard-basic" label="Enter the color" variant="standard" 
            value={color}
            style={style}
            onChange={(event) => setColor(event.target.value)}
            
          />
          <Button variant="contained" onClick={() => setColorList([...colorList, color])}>Add Color<AddCircleOutlineIcon /></Button>
      </div>
      <div className="colorgroup">
        {colorList.map((color, index) => (<ColorBox key={index} color={color} />))}
      </div>
    </div>
  );

}
function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "60px",
    width: "60px",
    marginTop: "10px",
    borderRadius: "4px"
  };
  return (

    <div style={styles}></div>

  );
}

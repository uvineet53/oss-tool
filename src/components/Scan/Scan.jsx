import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import rules from '../../data/rules'
import { saveResultData } from "../../config/firebase";
import "./Scan.css"
import Results from "../Results/Results";
import { MdRule } from 'react-icons/md';
import { GiLevelThreeAdvanced } from 'react-icons/gi';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { LinearProgress } from "@mui/material";

function Scan({ user }) {
  let url = "https://oss-tool-backend.herokuapp.com/scan";
  let sampleRepo = "https://github.com/0c34/govwa";
  const [config, setConfig] = useState("bsa");
  const [repo, setRepo] = useState(sampleRepo);
  const [results, setResults] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  let ruleIcons = [
    <MdRule style={{ marginRight: "10px", color: "green" }} />,
    <GiLevelThreeAdvanced style={{ marginRight: "10px", color: "red" }} />,
    <IoLogoJavascript style={{ marginRight: "10px", color: "orange" }} />,
    <FaReact style={{ marginRight: "10px", color: "blue" }} />
  ]
  const handleConfig = (e) => {
    setConfig(e.target.value);
  };
  const handleRepo = (e) => {
    setRepo(e.target.value);
  };
  const startScan = () => {
    console.log(user.uid)
    console.log(repo, config);
    setShowLoader(true);
    let data = {
      repo: repo,
      rule: config,
    };
    try {
      axios.post(url, data).then(async (e) => {
        console.log(e.data);
        if (e.data !== undefined) {
          await saveResultData(user.uid, e.data);
          setShowLoader(false);
          setResults(e.data.results);
        }
      });
    }
    catch (e) {
      console.log(e);
      setShowLoader(false);
    }
  };


  return (
    <div id="scan__wrapper">
      <div id="main">
        <TextField
          required
          id="outlined-required"
          label="Git Repo"
          defaultValue={sampleRepo}
          value={repo}
          onChange={handleRepo}
        />
        <FormControl>
          <FormLabel style={{ fontSize: "18px", marginBottom: "10px" }}>
            Scanning Rules (Select One):
          </FormLabel>
          <RadioGroup
            defaultValue={config}
            value={config}
            onChange={handleConfig}
          >{
              rules.map((e, index) => {
                return (
                  <div style={{ marginBottom: "10px" }}>
                    <hr style={{ border: "1px dotted grey", marginBottom: "10px" }} />
                    <h4 style={{ color: "black", display: "flex", alignItems: "center" }}>{ruleIcons[index]}{e.label}</h4>
                    {e.rule.map((rule) => <FormControlLabel
                      value={rule.value}
                      control={<Radio />}
                      label={rule.name}
                    />)}
                  </div>
                )
              })
            }
          </RadioGroup>
        </FormControl>
        <Button variant="contained" color="error" onClick={startScan}>
          Scan
        </Button>
        {showLoader === true?<LinearProgress style={{marginTop:"10px"}}/>:""}
      </div>
      <Results results={results} />
    </div>
  );
}

export default Scan;
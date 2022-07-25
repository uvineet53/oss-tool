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

function Scan({ user }) {
  let url = "https://oss-tool-backend.herokuapp.com/scan";
  let sampleRepo = "https://github.com/0c34/govwa";
  const [config, setConfig] = useState("bsa");
  const [repo, setRepo] = useState(sampleRepo);
  const navigate = useNavigate();

  const handleConfig = (e) => {
    setConfig(e.target.value);
  };
  const handleRepo = (e) => {
    setRepo(e.target.value);
  };
  const startScan = () => {
    console.log(user.uid)
    console.log(repo, config);
    let data = {
      repo: repo,
      rule: config,
    };
    axios.post(url, data).then(async (e) => {
      console.log(e.data);
      if (e.data !== undefined) {
        await saveResultData(user.uid, e.data);
        navigate('/results', { state: e.data.results })
      }
    });
  };
  return (
    <>
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
          <FormLabel >
            Scan Config
          </FormLabel>
          <RadioGroup
            defaultValue={config}
            value={config}
            onChange={handleConfig}
          >{
              rules.map(e => {
                return (
                  <FormControlLabel
                    value={e.value}
                    control={<Radio />}
                    label={e.name}
                  />
                );
              })
            }
          </RadioGroup>
        </FormControl>
        <Button variant="contained" color="error" onClick={startScan}>
          Scan
        </Button>
      </div>
    </>
  );
}

export default Scan;
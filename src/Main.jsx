import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Button from "@mui/material/Button";
import "./App.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function Main() {
  let url = "http://127.0.0.1:5000/scan";
  let sampleRepo = "https://github.com/0c34/govwa";
  const navigate = useNavigate();
  const [config, setConfig] = useState("bsa");
  const [repo, setRepo] = useState(sampleRepo);

  const handleConfig = (e) => {
    setConfig(e.target.value);
  };
  const handleRepo = (e) => {
    setRepo(e.target.value);
  };
  const startScan = () => {
    console.log(repo, config);
    let data = {
      repo: repo,
      rule: config,
    };
    axios.post(url, data).then((e) => {
      console.log(e.data);
    });
    navigate('/tipIceBerg');
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src="img/side.gif" alt="githublogo" className="image"/>
        </Grid>
        <Grid item xs={6}>
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
              <FormLabel id="demo-radio-buttons-group-label">
                Scan Config
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={config}
                name="radio-buttons-group"
                value={config}
                onChange={handleConfig}
              >
                <FormControlLabel
                  value="bsa"
                  control={<Radio />}
                  label="Basic Security Audit"
                />
                <FormControlLabel
                  value="secrets"
                  control={<Radio />}
                  label="Exposed Secrets"
                />
                <FormControlLabel
                  value="full"
                  control={<Radio />}
                  label="Full Scan"
                />
              </RadioGroup>
            </FormControl>
            <Button variant="contained" color="error" onClick={startScan}>
              Scan
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Main;

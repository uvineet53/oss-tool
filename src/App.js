import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import Button from '@mui/material/Button';
import './App.css';
import axios from 'axios';

function App() {
  let url = "http://127.0.0.1:8000/scan"
  let sampleRepo = "https://github.com/0c34/govwa"
  const [config, setConfig] = useState("bsa");
  const [repo, setRepo] = useState(sampleRepo);

  const handleConfig = (e) => {
    setConfig(e.target.value);
  }
  const handleRepo = (e) => {
    setRepo(e.target.value);
  }
  const startScan = ()=>{
    console.log(repo,config)
    let data = {
      repo:repo,
      rule:config,
    }
    axios.post(url,data).then(e=>{
      console.log(e.data);
    })
  }
  return (
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
          <FormLabel id="demo-radio-buttons-group-label">Scan Config</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={config}
            name="radio-buttons-group"
            value={config}
            onChange={handleConfig}
          >
            <FormControlLabel value="bsa" control={<Radio />} label="Basic Security Audit" />
            <FormControlLabel value="secrets" control={<Radio />} label="Exposed Secrets" />
            <FormControlLabel value="full" control={<Radio />} label="Full Scan" />
          </RadioGroup>
        </FormControl>
        <Button variant="outlined" onClick={startScan}>Scan</Button>
      </div>
  );
}

export default App;

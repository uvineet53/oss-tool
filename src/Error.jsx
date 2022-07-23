import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Error = () => {
  const [search] = useSearchParams();
  let temp = search.get('id');
  let decoded = JSON.parse(temp);

  function Print(props){
    let temp = props.info.split('⋮┆----------------------------------------\n');
    return (temp.map((doc)=>{
      return <p>{doc}</p>
    }))
  }
  return (
    <div id='box'>
     <strong>{decoded.file}</strong>
     <br/>
     {decoded.issues.map((doc)=>{
      return <p>
          {<Print info={doc.details}/>}
        </p>
     })}
    </div>
  )
}

export default Error
import { useState, useEffect, useRef } from 'react';
import './App.css'
import { uploadFile } from './service/api';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  // to store data to send backend
  const[file, setFile] = useState(''); 
  console.log(file);

   //to take care of re-render part
    useEffect(()=>{
      const getImage = async ()=>{
        const data = new FormData();
        data.append('name',file.name);
        data.append('file',file);
        
       const response = await uploadFile(data);
      };
      getImage();
    }, [file]);

  // add one functionality to others
    const fileInputRef = useRef();
  const onUploadClick = ()=>{
    fileInputRef.current.click();
  };
  return (
    <div className="bg-img">
      <div className="container">
      <div className="row justify-content-center">
      <div className="col-md-8 col-lg-5">
      <div className="center-box bg-light">
          <div className="text-center">
          <h2><b>Algou File Sharing App !</b></h2>
          <h8>Upload and Share the download Link!</h8>
          </div>
          <form>
          <div className="mb-3 mt-5">
          <div className="d-flex justify-content-center mt-4">
          <button type="button" className="btn btn-secondary btn-lg" onClick={()=>onUploadClick()}>Upload</button>
              <input type="file" ref={fileInputRef} style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])}></input>
            </div>                   
                </div>
                </form>    
      </div>
      </div>
      </div>
      </div>
      </div>
  )
}

export default App;

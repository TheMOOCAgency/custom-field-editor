import React, { useEffect } from 'react';
import './CustomFieldUpdater.css';
import CfList from '../components/cf_list';
import Snackbar from '../components/snackbar';
import PublishIcon from '@material-ui/icons/Publish';
import { IconButton } from '@material-ui/core';

function App() {
  if (process.env.NODE_ENV !== "development") {
    // deployed mode
  } else {
    // Dev mode
  }

  const [copyProps, setCopyProps] = React.useState({...window.props});
  const [customFieldModified, setCustomFieldModified] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [snackData, setSnackData] = React.useState({});

  const handleClickUpload = (copyProps) => {
    const newCustomFields = copyProps.user.custom_field
    if (process.env.NODE_ENV === "development") {
      setSnackData({severity:"success", message:"upload success"})
    } else {
      if (newCustomFields && typeof(newCustomFields) === "object") {
        const urlAPI = '/tma_apps/tma_api/v0/CustomFieldEditor/'
        window.props.postCustomFields(urlAPI, newCustomFields)
        setSnackData({severity:"success", message:"upload success"})
      } else {
        console.log("ERROR")
      }
    }
    setCustomFieldModified(false)
  };

  useEffect(() => {
    if (snackData.message) {
      setOpenSnack(true)
    }
  }, [snackData]);
  
  return (
    <div className="App">
      <Snackbar
        snackData={snackData}
        open={openSnack}
        setOpenSnack={setOpenSnack}
      />
      <CfList 
      copyProps = { copyProps }
      setCopyProps = { setCopyProps }
      setCustomFieldModified = { setCustomFieldModified }
      />
      {customFieldModified && 
      <>
        <IconButton aria-label="upload" color="primary" onClick={() => handleClickUpload(copyProps)}>
          Sauvegarder 
          <PublishIcon/>
        </IconButton>
      </>}
    </div>
  );
}

export default App;

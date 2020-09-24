import React from 'react';
import './CustomFieldUpdater.css';
import CfList from '../components/cf_list';
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

  const handleClickUpload = (copyProps) => {
    const newCustomFields = copyProps.user.custom_field
    if (process.env.NODE_ENV === "development") {
      alert("MODE DEVELOPPEMENT ! custom field envoyé")
      console.log(newCustomFields)
    } else {
      if (newCustomFields && typeof(newCustomFields) === "object") {
        const sendcustomFields = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCustomFields)
        };
        fetch('/tma_apps/tma_api/v0/CustomFieldView/', sendcustomFields)
            .then(response => console.log(response))
      } else {
        console.log("ERROR")
      }
    }
  };

  return (
    <div className="App">
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

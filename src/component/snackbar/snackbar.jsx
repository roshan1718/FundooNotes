import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { Button } from "antd";


export default function SimpleSnackbar(props) {

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={props.openStatus}
        autoHideDuration={3000}
        onClose={props.closeStatus}
        message={props.text}
        action={
          <>
            <Button color="secondary" size="small" onClick={props.closeStatus}>
              UNDO
            </Button>
          </>
        }
      />
    </div>
  );
} 
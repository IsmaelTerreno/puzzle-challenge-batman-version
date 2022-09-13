import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import 'animate.css';
import { RootState } from '../redux/reducers';
import { connect } from 'react-redux';
import { restartLevel, setMessageLevel } from '../redux/reducers/level';

const mapStateToProps = (state: RootState) => ({
  message: state.level.message
});

const mapDispatchToProps = { setMessageLevel, restartLevel };

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const MessageGame: React.FC<Props> = ({ message, setMessageLevel, restartLevel }) => {
  const handleClose = () => {
    restartLevel();
    setMessageLevel('');
  };
  return (
    <Dialog open={message !== ''} aria-labelledby="responsive-dialog-title">
      <DialogTitle>{'Labyrinth'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <span className="animate__animated animate__bounceIn">{message}</span>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export const MessageGameContainer = connect(mapStateToProps, mapDispatchToProps)(MessageGame);
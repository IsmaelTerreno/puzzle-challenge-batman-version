import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import 'animate.css';
import { RootState } from '../redux/reducers';
import { connect } from 'react-redux';
import { setMessageLevel } from '../redux/reducers/game';

const mapStateToProps = (state: RootState) => ({
  message: state.game.message
});

const mapDispatchToProps = { setMessageLevel };

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

export const MessageGame: React.FC<Props> = ({ message, setMessageLevel }) => {
  const handleClose = () => {
    setMessageLevel('');
  };
  return (
    <Dialog open={message !== ''} aria-labelledby="responsive-dialog-title">
      <DialogTitle>{'Labyrinth - Batman version'}</DialogTitle>
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

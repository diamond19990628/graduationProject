import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import * as React from 'react';
type Props = {
    AppName:string,
    src:string,
    font_size?:number
}
export default function ScrollDialog({AppName,src,font_size}:Props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen('paper')} sx={{color:"black",fontSize:`${font_size===undefined?"1.5":font_size}vw`,fontWeight:"bolder",fontFamily:"Semibold"}}>{AppName}</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
      >
        <DialogContent dividers={scroll === 'paper'} style={{"backgroundColor":"black"}}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            style={{"display":"flex","alignItems":"center","justifyContent":"center"}}
          >
            {<video src={src} controls style={{"width":"85%","height":"85%"}}/>}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
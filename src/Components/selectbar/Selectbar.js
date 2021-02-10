import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Selectbar = (props) => 
{
  //console.log(props)
  const classes = useStyles();
  const [images, setImage] = React.useState(props.amnt);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setImage(event.target.value);
    props.searchbarCallback(event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">No. of Images</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={images}
          onChange={handleChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={40}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Selectbar;
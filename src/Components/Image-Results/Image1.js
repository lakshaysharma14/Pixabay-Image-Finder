import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import { Dialog } from '@material-ui/core';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 400,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));


const Image1 = (props) => 
{
    console.log("Props:",props)
    let imageList;
    const {images} = props;
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [crrntImg, setcrrntImage] = React.useState('');

    const handleClose = () => {
        setOpen(false);
      };
    
    const handleOpen = (img) => {
        setOpen(true);
        setcrrntImage(img)
    };

    if(images)
    {    
        imageList = (
            <div className={classes.root}>
            <GridList cellHeight={300} >
                
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div"><strong><b>Image Result</b></strong></ListSubheader>
                </GridListTile>
                
                { images.map((tile) => (
                <GridListTile key={tile.img}>
                    <img src= {tile.largeImageURL} alt="" />
                    <GridListTileBar
                    title={tile.tags}
                    subtitle={<span>by: {tile.user}</span>}
                    actionIcon={
                        <IconButton aria-label={`info about ${tile.title}`} onClick = { () => handleOpen(tile.largeImageURL) } >
                            <ZoomInIcon style={{ color: "white" }} />
                        </IconButton>
                    }
                    />
                </GridListTile>
                ))}
            </GridList>
        </div>
      )
    }
    else
    { imageList = null;}
        
    const actions = [
        <Button label="Close" primary={true} onClick={handleClose} />
    ];

    return(
        <div>
            <div> {imageList} </div>
            <Dialog onClick={handleClose}
                actions={actions}
                modal={false}
                open={open}
               // onRequestClose={handleClose}
            >
            <img src={crrntImg} alt="" style={{ width: '100%' }} />
            </Dialog>
        </div>
    )      
}

Image.propTypes = {
    images:PropTypes.array.isRequired
}
export default Image1

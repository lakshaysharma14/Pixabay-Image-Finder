import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
//import { Dialog } from '@material-ui/core';

class Image extends Component 
{
    render() 
    {
        let imageList;
        const {images} = this.props;
       
        // const useStyles = makeStyles((theme) => ({
        //     root: {
        //       display: 'flex',
        //       flexWrap: 'wrap',
        //       justifyContent: 'space-around',
        //       overflow: 'hidden',
        //       backgroundColor: theme.palette.background.paper,
        //     },
        //     gridList: {
        //       width: 500,
        //       height: 450,
        //     },
        //     icon: {
        //       color: 'rgba(255, 255, 255, 0.54)',
        //     },
        //   }));

        if(images)
        {
           // const classes = useStyles();
            imageList = (
                //<div className={classes.root}>
                <div>
                <GridList cellHeight={180} >
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div"><strong><b>Image Result</b></strong></ListSubheader>
                    </GridListTile>
                    
                    {images.map((tile) => (
                    <GridListTile key={tile.id}>
                        <img src= {tile.largeImageURL} alt="" />
                        <GridListTileBar
                        title={tile.tags}
                        subtitle={<span>by: {tile.user}</span>}
                        actionIcon={
                            <IconButton aria-label={`info about ${tile.title}`} >
                            <InfoIcon />
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
    {
        imageList = null;
    }
    
    return (
        <div>
            {imageList}
        </div>
    )
    }
}
Image.propTypes = {
    images:PropTypes.array.isRequired
}
export default Image;
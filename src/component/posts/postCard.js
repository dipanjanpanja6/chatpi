import React, { Component } from "react";
import {
  withStyles,
  TextField,
  Typography,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Collapse,
  Avatar,
  IconButton,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { red } from "@material-ui/core/colors";
import SendIcon from "@material-ui/icons/Send";
import TagFaces from "@material-ui/icons/TagFaces";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import PropType from "prop-types";
import clsx from 'clsx';

class postCard extends Component {
  constructor() {
    super();
    this.state={
      expanded:false
    }
  }
handleExpandClick = () => {
  
    this.setState({...this.state,expanded:!this.state.expanded});
  };
  render() {
    const { classes,userName,postDate,postImgSrc,postText,avatar,isImg } = this.props;
    const {expanded} = this.state
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar src={avatar} className={classes.avatar}></Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={userName}
          subheader={postDate}
        />
        {isImg && 
        <CardMedia
          className={classes.media}
          image={postImgSrc}
          title="#"
        />}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {postText}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={this.handleExpandClick}
            // aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Comment</Typography>
            {React.createElement(InputBase, {
              className: classes.input,
              multiline:true,fullWidth:true,rowsMax:4,
              placeholder: "Type a message...",
              endAdornment: React.createElement(InputAdornment,
                {position: "end",},
                React.createElement(IconButton, {
                   
                    // button: true
                },
                React.createElement(SendIcon,
                    {className: classes.icon,}
                    ))
              ),
            })}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}
const style = (theme) => ({
  card: {
    // padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  cardHolder: {
    padding: "20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    // backgroundColor: red[500],
  },
  icon: {
    color: 'rgb(0, 153, 255)',
    // width: 35,
    // height: 35,
    padding: 6,
    '&:not(:first-child)': {
      marginLeft: 4
    }
  },
  input: {
    flex: 'auto',
    borderRadius: 30,
    paddingLeft: 16,
    backgroundColor: 'rgba(0,0,0,0.04)',
    margin: '0 8px',
    // height: 36,
    fontSize: 13
  }
});
postCard.propType={
  userName:PropType.any.isRequired,
  postDate:PropType.any.isRequired,
  postImgSrc:PropType.any.isRequired,
  postText:PropType.any.isRequired

}
export default withStyles(style)(postCard);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from '../../src/cloud9-5-logo.png';

const styles = {
  // card: {
  //   maxWidth: 345,
  //   margin: 'auto',
  // },
  media: {
    height: 300,
  },
};

function CurrentCard(props) {
  const { classes } = props;
  return (
    <Card className={'card'}>

        <CardMedia
          className={classes.media}
          image={logo}
          // title="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Today's Weather
          </Typography>
          <Typography component="p">
            {/* {this.state.todaySummary.main} */}
          </Typography>

          <Typography component="p">
            They will try to close the door on you, just open it. The key is to drink coconut, fresh coconut, trust me. Wraith talk. Hammock talk come soon. They will try to close the door on you, just open it. Cloth talk. The key to more success is to get a massage once a week, very important, major key, cloth talk. We the best. The first of the month is coming, we have to get money, we have no choice. It cost money to eat and they don’t want you to eat. Lion! Hammock talk come soon.
          </Typography>
        </CardContent>

    </Card>
  );
}

CurrentCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CurrentCard);
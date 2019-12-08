import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div>
      <Title>Bank</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      </div>
      <div>
      <Title>Share Value </Title>
      <Typography component="p" variant="h4">
        $0.90
      </Typography>
      </div>
      <div>
      <Title>Number of Shares</Title>
      <Typography component="p" variant="h4">
        1249 </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      </div>
    
    </React.Fragment>
  );
}
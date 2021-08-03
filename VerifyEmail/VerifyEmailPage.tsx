import { Box, makeStyles, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import Button from '../../components/Common/Button';
import CompletedIcon from '../../assets/svg/Completed/CompletedIcon';
import { useVerifyEmail } from './hooks/useVerifyEmail';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '40px 24px 40px',
    [theme.breakpoints.up('lg')]: {
      padding: '30px 0 80px',
    },
  },
  icon: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 26,
    lineHeight: '35px',
    textAlign: 'center',
  },
  loginBtn: {
    marginTop: 40,
    width: 197,
    height: 45,
    lineHeight: '25px',
    fontSize: 18,
    fontWeight: 600,
    textAlign: 'center'
  },
  mainPageBtn: {
    textAlign: 'center',
    marginTop: 20,
    width: 197,
    height: 45,
    lineHeight: '25px',
    fontSize: 18,
    fontWeight: 600,
    padding: '9px',
    border: '1px solid #2F80ED',
    boxSizing: 'border-box',
    color: '#2F80ED',
    background: 'none',

    '&:hover': {
      color: 'rgba(47, 128, 237, 0.7)',
      background: 'none',
    },
  },
  btnBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const VerifyEmailPage = () => {
  const classes = useStyles();

  const location = useLocation();
  const { mutateAsync } = useVerifyEmail();

  console.log(location);

  useEffect(() => {
    mutateAsync(location.pathname);
  }, []);


  return (
    <Box className={classes.root}>
      <Box className={classes.icon}>
        <CompletedIcon />
      </Box>
      <Typography className={classes.text}>
        The password has been successfully changed!
      </Typography>
      <Box className={classes.btnBox}>
        <Button href='/login' className={classes.loginBtn}>
          Log In
        </Button>
      </Box>
      <Box className={classes.btnBox}>
        <Button href='/' className={classes.mainPageBtn}>
          Go to Main Page
        </Button>
      </Box>
    </Box>
  );
};

export default VerifyEmailPage;

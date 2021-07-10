import { Fragment, useEffect } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// actions
import { homeActions } from '../../store/actions';
// material ui
import { Grid, Typography, Button, Box, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VideoCard from '../../components/VideoCard';
import { isEmpty, get } from 'lodash';

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
}))

const Home = () => {
  const classes = useStyles();
  const matchesMd = useMediaQuery('(max-width:1140px)')
  const matchesSm = useMediaQuery('(max-width:885px)');
  const history = useHistory();
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);
  const accessToken = get(auth, 'accessToken');

  useEffect(() => {
    if (!isEmpty(accessToken)) {
      history.push('/');
    }
  }, [accessToken, history])

  useEffect(() => {
    dispatch(homeActions.getMostPopularVideos());
  }, [dispatch]);

  const handleReloadPage = () => {
    window.location.reload();
  }

  const { videos, loading } = useSelector(state => state.home)
  const { errorGetMostPopularVideo } = useSelector(state => state.error);

  return (
    <Fragment>
      <div className={classes.toolbar} />
      {loading && isEmpty(errorGetMostPopularVideo) ? (
        <h3>Loading...</h3>
      ) : (
          <Grid
            container
            spacing={2}
            justify={matchesSm ? 'center' : 'space-around'}
          >
            {videos.map((item, index) => {
              return (
                <Grid key={index} item lg={3} md={matchesMd ? 4 : 3} sm={matchesSm ? 6 : 4} xs={12}>
                  <VideoCard key={item.id} data={item} />
                </Grid>
              )
            })}
          </Grid>
        )
      }
      {!loading && !isEmpty(errorGetMostPopularVideo) ? (
        <Box display="flex" flexDirection="column" alignItems="center">
          <Button variant="outlined" color="primary" onClick={handleReloadPage}>
            Thử lại
          </Button>
          <Typography color="secondary" variant="subtitle1" component="span">
            {errorGetMostPopularVideo}
          </Typography>
        </Box>
      ) :
        null
      }
    </Fragment>
  )
};

export default Home;
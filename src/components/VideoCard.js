import React, { useEffect, useState } from 'react';
// redux
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// material ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { formatViewers } from '../helpers';
// http
import { channelServices } from '../services'
// moment
import moment from 'moment';
import 'moment/locale/vi';

moment.locales('vi');

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%'
  },
  videoTop: {
    position: 'relative',
    '& .MuiTypography-subtitle2': {
      position: 'absolute',
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      borderRadius: '3px',
      right: '0.3rem',
      bottom: '0.3rem',
      padding: '0.2rem',
      fontWeight: 'bold'
    }
  },
  videoMedia: {
    width: '100%',
    height: '153px',
  },
  videoContent: {
    display: 'flex',
  },
  videoAvatarChannel: {
    '& .MuiAvatar-circle': {
      height: theme.spacing(4.5),
      width: theme.spacing(4.5),
      margin: theme.spacing(0, 1.5, 0, 0)
    }
  },
  videoDetails: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'justify',
    '& .MuiTypography-subtitle2': {
      fontSize: '0.82rem',
      fontWeight: 'bold',
      color: theme.palette.common.black,
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'normal',
      WebkitLineClamp: 2,
    },
    '& .MuiTypography-body2': {
      textDecoration: 'none',
      color: 'inherit'
    },
    '& .MuiTypography-subtitle1': {
      fontSize: '0.8rem',
    },
  },
}));

const VideoCard = ({ data }) => {
  const classes = useStyles();

  const {
    id,
    contentDetails: {
      duration
    },
    snippet: {
      channelId,
      channelTitle,
      publishedAt,
      title,
      thumbnails: {
        medium
      }
    },
    statistics: {
      viewCount
    }
  } = data;

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format('mm:ss');
  const [avatarChannel, setAvatarChannel] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const getChannel = async () => {
      const {
        data: {
          items
        }
      } = await channelServices.getChannelById(dispatch, channelId);
      setAvatarChannel(items[0].snippet.thumbnails.default)
    }
    getChannel();
  }, [channelId])

  const handleVideoPlayer = () => {
    history.push(`/watch/${id}`);
  }

  const handleChannelDetail = () => {
    history.push(`/channel/${channelId}`);
  }

  return (
    <Card className={classes.card} onClick={handleVideoPlayer}>
      <div className={classes.videoTop}>
        <CardMedia
          className={classes.videoMedia}
          image={medium.url}
          title={title}
        />
        <Typography id='show-time' variant='subtitle2' component='span'>
          {_duration}
        </Typography>
      </div>
      <CardContent className={classes.videoContent}>
        <Typography component='a' href=''>
          <div className={classes.videoAvatarChannel} onClick={handleChannelDetail}>
            <Avatar alt='' src={avatarChannel?.url} />
          </div>
        </Typography>
        <div className={classes.videoDetails}>
          <Typography variant='subtitle2' component='span'>
            {title}
          </Typography>
          <Typography id='channel-name' variant="body2" component='a' href='' onClick={handleChannelDetail}>
            {channelTitle}
          </Typography>
          <Typography id='viewers' variant='subtitle1' component='span'>
            {formatViewers(viewCount)} lượt xem • {moment(publishedAt).fromNow()}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
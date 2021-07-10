import HomeIcon from '@material-ui/icons/Home';
import ExploreRoundedIcon from '@material-ui/icons/ExploreRounded';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import WatchLaterRoundedIcon from '@material-ui/icons/WatchLaterRounded';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';

const ListItemFirsts = [
  {
    text: 'Trang chủ',
    icon: <HomeIcon />,
    path: '/'
  },
  {
    text: 'Khám phá',
    icon: <ExploreRoundedIcon />,
    path: '/explore'
  },
  {
    text: 'Kênh đăng ký',
    icon: <SubscriptionsIcon />,
    path: '/subscriptions'
  },
];

const ListItemSeconds = [
  {
    text: 'Thư viện',
    icon: <VideoLibraryIcon />,
    path: '/library'
  },
  {
    text: 'Video đã xem',
    icon: <HistoryIcon />,
    path: '/playlist/histories'
  },
  {
    text: 'Video của bạn',
    icon: <SlideshowIcon />,
    path: '/playlist/libraries'
  },
  {
    text: 'Xem sau',
    icon: <WatchLaterRoundedIcon />,
    path: '/playlist/seeLater'
  },
  {
    text: 'Video đã thích',
    icon: <ThumbUpAltRoundedIcon />,
    path: '/playlist/subscribe'
  }
]

export {
  ListItemFirsts,
  ListItemSeconds
}
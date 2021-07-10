import Home from './views/pages/Home';
import Explore from './views/pages/feed/Explore';
import Subscription from './views/pages/feed/Subscription';
import VideoWatch from './views/pages/watch/VideoWatch';
import ChannelDetail from './views/pages/channel/ChannelDetail';

const PublicRoutes = [
  {
    path: '/',
    exact: true,
    main: Home
  },
  {
    path: '/explore',
    main: Explore
  },
  {
    path: '/subscriptions',
    main: Subscription
  },
  {
    path: '/watch/:id',
    main: VideoWatch
  },
  {
    path: '/channel/:id',
    main: ChannelDetail
  }
];

export {
  PublicRoutes
}
import aixos from 'axios';

const request = aixos.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: 'AIzaSyBgSEkJ45PVS6igBvA7rqZ8E3XT90cJF40'
  }
});

export default request;
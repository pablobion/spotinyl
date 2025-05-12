const express = require('express');
const randomstring = require("randomstring");
const querystring = require('querystring');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express();


app.use(express.json());

app.use(cors({
    origin: ['https://spotinyl-1.onrender.com', 'http://spotinyl-1.onrender.com/', 'https://spotinyl-1.onrender.com/', 'http://localhost:5173', 'http://localhost:3000', 'https://accounts.spotify.com', "*"],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
}));


app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

const client_id = process.env.CLIENT_ID;
const redirect_uri = process.env.REDIRECT_URI || 'http://localhost:3000/spotify/callback';
const client_secret = process.env.CLIENT_SECRET;
const baseUrlSpotify = 'https://accounts.spotify.com'


app.get('/login', (req, res) => {
    const state = randomstring.generate(16);
    const scope = "ugc-image-upload \
    user-read-recently-played \
    user-top-read \
    user-read-playback-position \
    user-read-playback-state \
    user-modify-playback-state \
    user-read-currently-playing \
    app-remote-control \
    streaming \
    playlist-modify-public \
    playlist-modify-private \
    playlist-read-private \
    playlist-read-collaborative \
    user-follow-modify \
    user-follow-read \
    user-library-modify \
    user-library-read \
    user-read-email \
    user-read-private"

    res.redirect(`${baseUrlSpotify}/authorize?` + querystring.stringify({
      response_type: 'code',
      origin: req.headers.host,//'http://localhost:3001',
      client_id,
      scope,
      redirect_uri,
      state
    }));
})

app.get('/spotify/callback', async(req, res) => {
    var code = req.query.code || null;
    var state = req.query.state || null;

    if (!code) {
      res.redirect('/login');
      return;
    }

    try {
      const response = await axios({
        method: 'post',
        mode: 'cors',
        url: `${baseUrlSpotify}/api/token`,
        params: {
          grant_type: 'authorization_code',
          code,
          redirect_uri
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + (Buffer.from(`${client_id}:${client_secret}`).toString('base64'))
        }
      })

      if(response.status === 200) {
        // res.json({
        //   access_token: response.data.access_token,
        //   status: 200
        // })
         res.redirect(`${req.headers.referer}?token=${response.data.access_token}&refresh_token=${response.data.refresh_token}`);
      }

    } catch(error){
      console.log(error);
    }


})

app.post('/play', async (req, res) => {
  const {bearerToken} = req.body;
  const response = await axios({
    method: 'PUT',
    mode: 'cors',
    url: `https://api.spotify.com/v1/me/player/play`,
    headers: {
      "authorization": `Bearer ${bearerToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      uris: ['spotify:track:7zt3bDTgxn03ZfV9xHqOs5'],
    }),
  });
  console.log(response);

  console.log('teste');

})

app.post('/albums', async (req, res) => {
  const {bearerToken, album} = req.body;
  try {

    console.log(bearerToken, album)
    const response = await axios({
      method: 'get',
      mode: 'cors',
      url: `https://api.spotify.com/v1/search?type=album&q=${album}`,
      headers: {
        "authorization": `Bearer ${bearerToken}`,
      }
    });

    const items = response?.data?.albums?.items;

    const albumList = items.map(elem => {
      if(elem.album_type !== 'album') return
      return {
        name: elem.name,
        image: elem.images[1].url,
        artist: elem.artists[0].name,
        id: elem.id,
        uri: elem.uri,
        tracks: elem.tracks,
      }
    })
    res.json(albumList);

  } catch (error) {
    console.log(error);
  }
})





app.listen(3000, () => {
    console.log('Example app listening on port 3000! yayay');
    }
);



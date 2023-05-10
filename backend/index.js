const express = require('express');
const randomstring = require("randomstring");
const querystring = require('querystring');
const cors = require('cors');
const axios = require('axios');
const app = express();


app.use(express.json());

app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000', 'https://accounts.spotify.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
}));


app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

const client_id = 'cad77317d89d400ca93acc4e05199f35';
const redirect_uri = 'http://localhost:3000/spotify/callback';
const client_secret = 'd4297a91bfb84874ad9e4d3d4b62788b';
const baseUrlSpotify = 'https://accounts.spotify.com'


app.get('/login', (req, res) => {
    const state = randomstring.generate(16);
    const scope = 'user-read-private user-read-email';

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
         res.redirect(`${req.headers.referer}?token=${response.data.access_token}`);
      }
      
    } catch(error){
      console.log(error);
    }

  
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
        id: elem.id
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



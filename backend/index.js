const express = require('express');
const randomstring = require("randomstring");
const querystring = require('querystring');
const cors = require('cors');
const axios = require('axios');
const app = express();

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


app.get('/login', (req, res) => {
    const state =randomstring.generate(16);
    const scope = 'user-read-private user-read-email';

    res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      origin: 'http://localhost:3000',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
})

app.get('/spotify/callback', async(req, res) => {
    var code = req.query.code || null;
    var state = req.query.state || null;
    if(code){
        axios({
            method: 'post',
            mode: 'cors',
            url: 'https://accounts.spotify.com/api/token',
            params: {
              grant_type: 'authorization_code',
              code: code,
              redirect_uri: redirect_uri
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
            }
          })
          .then((response) => {
            console.log(response.data);
            res.redirect('http://localhost:5173/?token=' + response.data.access_token);
          })
          .catch((error) => {
            console.log(error);
          });
    }
  
   
    
})





app.listen(3000, () => {
    console.log('Example app listening on port 3000! yayay');
    }
);



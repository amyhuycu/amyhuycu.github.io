app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:3000", "https://elated-jackson-28b73e.netlify.app"] //Swap this with the client url 
    })
  );
  var sess = {
    secret: 'keyboard cat',
    cookie: {}
  }
  
  if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
    sess.cookie.sameSite = 'none'
  }
  
  app.use(session(sess))

  header("Set-Cookie: cross-site-cookie=whatever; SameSite=None; Secure");
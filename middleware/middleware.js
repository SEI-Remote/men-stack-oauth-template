function passDataToView(req, res, next) {
  res.locals.user = req.user ? req.user : null
  res.locals.googleLoginURL = process.env.GOOGLE_LOGIN_URL
  res.locals.googleClientID = process.env.GOOGLE_CLIENT_ID
  next()
}

export {
  passDataToView
}
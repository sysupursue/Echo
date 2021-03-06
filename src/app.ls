require! <[express path serve-favicon cookie-parser body-parser http ../config ./controllers/router]>
require! {morgan:logger}

app=express()
#server
server=http.createServer(app)
server.listen config.server.host, !->
    host = server.address!.address
    port = server.address!.port
    host is '0.0.0.0' && host = 'localhost'
    console.log 'listening at http://%s:%s', host, port

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

#view engine setup
app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))

app.use(cookieParser())

# # ueditor setup
# app.use "/ueditor/ue", ueditor path.join(path.resolve('./'), 'public'), (req, res, next)!->
#   if req.query.action is 'uploadimage'
#     foo = req.ueditor
#     imgname = req.ueditor.filename

#     img_url = '/news-images/'
#     res.ue_up(img_url)

#   else if req.query.action is 'listimage'
#     dir_url = '/news-images/'
#     res.ue_list(dir_url)

#   else
#     res.setHeader('Content-Type', 'application/json')
#     res.redirect('/ueditor/nodejs/config.json')



app.use(express.static(path.join(__dirname, '../public')))
app.use(express.static(path.join(__dirname, 'views')))

# mongoinit!

# app.use express-session {
#     secret: 'mwl-ecch'
#     resave: true
#     saveUninitialized: true
# }

# app.use passport.initialize!
# app.use passport.session!
# app.use flash!

# dest-dir = path.join(__dirname, '../public/temp-uploads')

# app.use multer { dest: dest-dir }

# passportinit passport

#routes
app.use('/',router)

#catch 404 and forward to error handler
app.use (req,res,next)!->
    err=new Error('Not Found')
    err.status=404
    next(err)


#error handlers
#development error handler
#will print stacktrace
# if app.get('env')=='development'
#     app.use (err,req,res,next)!->
#         res.status(err.status||500)
#         res.render './error', do
#             message: err.message
#             error: err

#production error handler
#no stacktraces leaked to user
# app.use (err,req,res,next)!->
#     res.status err.status||500
#     res.render './error',do
#         message: err.message
#         error: err

module.exports=app


const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
.use(express.static(path.join(__dirname, 'public')))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')
.get('/',(req, res) => res.render('index'))
.get('/about',(req, res) => res.render('about'))
.get('/rsvp',(req, res) => res.render('rsvp'))
.get('/ecommerce',(req, res) => res.render('ecommerce'))
.get('/projects',(req, res) => res.render('projects'))
.listen(PORT, () => console.log('listening on ${ PORT } '))
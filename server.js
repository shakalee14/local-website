const express = require('express')
const app = express()
app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  const carouselImages = [
    '/images/index1.jpg',
    '/images/index2.jpg',
    '/images/index3.jpg',
  ]
  const events = [
    {
      imageUrl: "/event1.png",
      title: "IHO WORKTRADE INFO SESSION – Q4!",
    },
    {
      imageUrl: "/event1.png",
      title: "COCAP 2016 – RADICAL REDISTRIBUTION OF WEALTH THROUGH IMPACT INVESTING",
    },
    {
      imageUrl: "/event1.png",
      title: "THE SWEETWATER SESSIONS, VOL. 5 “BLACK IS BLUE”",
    },
    {
      imageUrl: "/event1.png",
      title: "CHRISTEN LIEN CONCERT – ELPIS IS COMING",
    },
  ]
  response.render('index', {
    carouselImages: carouselImages,
    events: events,
  })
})

app.get('/join', (request, response) => {
  response.render('join')
})

app.get('/footer', (request, response) => {
  response.render('footer')
})

app.get('/main', (request, response) => {
  response.render('main')
})

app.get('/gallery', (request, response) => {
  const galleryImages = [
    '/images/gallerypic1.jpg',
    '/images/gallerypic2.jpg',
    '/images/gallerypic3.jpg',
  ]

  const galleryEventPics = [
    '/images/event1.jpg',
    '/images/event2.jpg',
    '/images/event3.jpg',
    '/images/event4.jpg',
    '/images/event5.jpg',
  ]

  const icons = [
    '/images/icons/facebook.png',
    '/images/icons/instagram.png',
    '/images/icons/tumblr.png',
    '/images/icons/twitter.gif',
  ]

  const stories = [
    '/images/story1.jpg',
    '/images/story2.jpg'
  ]

  const exhibits = [
    '/images/exhibit1.png',
    '/images/exhibit2.jpg',
    '/images/exhibit3.jpg',
    '/images/exhibit4.jpg',
    '/images/exhibit5.jpg',
    '/images/exhibit6.jpg',
    '/images/exhibit7.jpg',
    '/images/exhibit8.jpg',
    '/images/exhibit9.jpg',
    '/images/exhibit10.jpg',
    '/images/exhibit11.jpg',
    '/images/exhibit12.jpg',
  ]

  response.render('omi', {
    galleryImages: galleryImages,
    galleryEventPics: galleryEventPics,
    icons: icons,
    stories: stories,
    exhibits: exhibits
  })
})


app.listen(process.env.PORT || 3000)

/**
 * Created by Dennis Dubbert on 27.06.18.
 */
const getObjectID = require('../../helper.js')

const question = [
  {
    user: getObjectID('user1'),
    survey: getObjectID('survey1'),
    _id: getObjectID('question1'),
    creationDate: new Date(),
    lastUpdate: new Date(),
    type: 'CHOICE',
    items: [
      {
        _id: getObjectID('item11A'),
        label: 'Objekt 1',
        image: getObjectID('image6'),
      },
      {
        _id: getObjectID('item11B'),
        label: 'Objekt 2',
        image: getObjectID('image5'),
      },
      {
        _id: getObjectID('item11B'),
        label: 'Objekt 3',
        image: getObjectID('image5'),
      },
    ],
    value: 'Bitte treffen Sie eine Auswahl:',
    description: null,
    choices: [
      {
        _id: getObjectID('choice1A'),
        label: 'Auswahl A',
        image: getObjectID('image3'),
        code: 'A',
      },
      {
        _id: getObjectID('choice1B'),
        label: 'Auswahl B',
        image: getObjectID('image4'),
        code: 'B',
      },
      {
        _id: getObjectID('choice1B'),
        label: 'Auswahl C',
        image: getObjectID('image4'),
        code: 'C',
      },
    ],
  },
  {
    user: getObjectID('user1'),
    survey: getObjectID('survey1'),
    _id: getObjectID('question4'),
    creationDate: new Date(),
    lastUpdate: new Date(),
    type: 'LIKE',
    items: [
      {
        _id: getObjectID('item11A'),
        label: 'Objekt 1',
        image: getObjectID('image6'),
      },
      {
        _id: getObjectID('item11B'),
        label: 'Objekt 2',
        image: getObjectID('image5'),
      },
    ],
    value: 'Gefällt Ihnen dieses Objekt?',
    description: 'Bitte zeigen Sie mit einem "Like", ob Ihnen dieses Objekt gefällt.',
    likeIcon: getObjectID('image1'),
  },
  {
    user: getObjectID('user1'),
    survey: getObjectID('survey1'),
    _id: getObjectID('question5'),
    creationDate: new Date(),
    lastUpdate: new Date(),
    type: 'LIKEDISLIKE',
    items: [
      {
        _id: getObjectID('item11A'),
        label: 'Objekt 1',
        image: getObjectID('image6'),
      },
      {
        _id: getObjectID('item11B'),
        label: 'Objekt 2',
        image: getObjectID('image5'),
      },
      {
        _id: getObjectID('item11A'),
        label: 'Objekt 3',
        image: getObjectID('image6'),
      },
      {
        _id: getObjectID('item11B'),
        label: 'Objekt 4',
        image: getObjectID('image5'),
      },
    ],
    value: 'Gefällt Ihnen dieses Model?',
    description: 'Bitte zeigen Sie mit einem "Like", ob Ihnen dieses Model gefällt.',
    likeIcon: getObjectID('image1.1'),
  },
  {
    user: getObjectID('user1'),
    survey: getObjectID('survey1'),
    _id: getObjectID('question10'),
    creationDate: new Date(),
    lastUpdate: new Date(),
    type: 'REGULATOR',
    items: [
      {
        _id: getObjectID('item11A'),
        label: 'Objekt 1',
        image: getObjectID('image6'),
      },
      {
        _id: getObjectID('item11B'),
        label: 'Objekt 2',
        image: getObjectID('image5'),
      },
    ],
    value: 'Wie sehr sind Sie mit dieser Frage zufrieden?',
    description: null,
    labels: [
      {
        _id: getObjectID('label10A'),
        label: 'Unzufrieden',
        image: null,
        value: 0.0,
      },
      {
        _id: getObjectID('label10B'),
        label: 'Zufrieden',
        image: null,
        value: 10.0,
      },
    ],
    stepSize: 1.0,
    min: 0.0,
    max: 10.0,
    default: 5.0,
  },
  {
    user: getObjectID('user1'),
    survey: getObjectID('survey1'),
    _id: getObjectID('question11'),
    creationDate: new Date(),
    lastUpdate: new Date(),
    type: 'FAVORITE',
    value: 'Bitte favorisieren Sie ein Element aus dieser Liste',
    description: null,
    items: [
      {
        _id: getObjectID('item11A'),
        label: 'Objekt 1',
        image: getObjectID('image6'),
      },
      {
        _id: getObjectID('item11B'),
        label: 'Objekt 2',
        image: getObjectID('image5'),
      },
    ],
  },
  {
    user: getObjectID('user1'),
    survey: getObjectID('survey1'),
    _id: getObjectID('question12'),
    creationDate: new Date(),
    lastUpdate: new Date(),
    type: 'RANKING',
    value: 'Ordnen Sie diese Elemente nach ihrem persönlichen Wert.',
    description: null,
    items: [
      {
        _id: getObjectID('item12A'),
        label: 'Objekt 1',
        image: getObjectID('image5.1'),
      },
      {
        _id: getObjectID('item12B'),
        label: 'Objekt 2',
        image: getObjectID('image6.1'),
      },
    ],
  },
  {
    user: getObjectID('user2'),
    survey: getObjectID('survey2'),
    _id: getObjectID('question2'),
    creationDate: new Date(),
    lastUpdate: new Date(),
    type: 'FAVORITE',
    value: 'Bitte favorisieren Sie ein Element aus dieser Liste',
    description: null,
    items: [
      {
        _id: getObjectID('item2A'),
        label: 'Objekt 1',
        image: getObjectID('image6.2'),
      },
      {
        _id: getObjectID('item2B'),
        label: 'Objekt 2',
        image: getObjectID('image5.2'),
      },
      {
        _id: getObjectID('item12C'),
        label: 'Objekt 3',
        image: getObjectID('image12.1'),
      }
    ],
  },
  {
    user: getObjectID('user2'),
    survey: getObjectID('survey2'),
    _id: getObjectID('question3'),
    creationDate: new Date(),
    lastUpdate: new Date(),
    type: 'LIKE',
    items: [
      {
        _id: getObjectID('item11A'),
        label: 'Objekt 1',
        image: getObjectID('image6'),
      },
      {
        _id: getObjectID('item11B'),
        label: 'Objekt 2',
        image: getObjectID('image5'),
      },
    ],
    value: 'Gefällt Ihnen dieses Bild?',
    description: 'Bitte zeigen Sie mit einem "Like", ob Ihnen dieses Bild gefällt.',
    likeIcon: getObjectID('image1.2'),
  },
  {
    user: getObjectID('user2'),
    survey: getObjectID('survey2'),
    _id: getObjectID('question6'),
    creationDate: new Date(),
    lastUpdate: new Date(),
    type: 'LIKEDISLIKE',
    items: [
      {
        _id: getObjectID('item11A'),
        label: 'Objekt 1',
        image: getObjectID('image6'),
      },
      {
        _id: getObjectID('item11B'),
        label: 'Objekt 2',
        image: getObjectID('image5'),
      },
    ],
    value: 'Gefällt Ihnen dieses Bild?',
    description: 'Bitte zeigen Sie mit einem "Like" oder "Dislike", ob Ihnen dieses Bild gefällt oder nicht.',
    likeIcon: getObjectID('image1.3'),
    dislikeIcon: getObjectID('image2'),
  },
  {
    user: getObjectID('user2'),
    survey: getObjectID('survey2'),
    _id: getObjectID('question7'),
    creationDate: new Date(),
    lastUpdate: new Date(),
    type: 'LIKEDISLIKE',
    items: [
      {
        _id: getObjectID('item11A'),
        label: 'Objekt 1',
        image: getObjectID('image6'),
      },
      {
        _id: getObjectID('item11B'),
        label: 'Objekt 2',
        image: getObjectID('image5'),
      },

      {
        _id: getObjectID('item11C'),
        label: 'Objekt 2',
        image: getObjectID('image12'),
      },
    ],
    value: 'Gefällt Ihnen dieses Objekt?',
    description: 'Bitte zeigen Sie mit einem "Like" oder "Dislike", ob Ihnen dieses Objekt gefällt oder nicht.',
    likeIcon: getObjectID('image1.4'),
    dislikeIcon: getObjectID('image2.1'),
  },
  {
    user: getObjectID('user2'),
    survey: getObjectID('survey2'),
    _id: getObjectID('question8'),
    creationDate: new Date(),
    lastUpdate: new Date(),
    type: 'LIKEDISLIKE',
    items: [
      {
        _id: getObjectID('item11A'),
        label: 'Objekt 1',
        image: getObjectID('image6'),
      },
      {
        _id: getObjectID('item11B'),
        label: 'Objekt 2',
        image: getObjectID('image5'),
      },
    ],
    value: 'Gefällt Ihnen dieses Model?',
    description: 'Bitte zeigen Sie mit einem "Like" oder "Dislike", ob Ihnen dieses Model gefällt oder nicht.',
    likeIcon: getObjectID('image1.5'),
    dislikeIcon: getObjectID('image2.2'),
  },
  {
    user: getObjectID('user2'),
    survey: getObjectID('survey2'),
    _id: getObjectID('question9'),
    creationDate: new Date(),
    lastUpdate: new Date(),
    type: 'RANKING',
    value: 'Ordnen Sie diese Elemente nach ihrem persönlichen Wert.',
    description: null,
    items: [
      {
        _id: getObjectID('item9A'),
        label: 'Objekt 1',
        image: getObjectID('image5.3'),
      },
      {
        _id: getObjectID('item9B'),
        label: 'Objekt 2',
        image: getObjectID('image6.3'),
      },
      {
        _id: getObjectID('item9C'),
        label: 'Objekt 3',
        image: getObjectID('image10'),
      },

      {
        _id: getObjectID('item9D'),
        label: 'Objekt 4',
        image: getObjectID('image11'),
      },
    ],
  },
]

module.exports = question

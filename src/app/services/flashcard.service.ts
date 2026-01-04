import { Injectable } from '@angular/core';
import { Flashcard, FlashcardSet } from '../models';

const PLACEHOLDER_IMAGE_URL = 'https://via.placeholder.com/512x512?text=Flashcard';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private flashcards: Flashcard[] = [
    {
      id: '1',
      caption: 'Tree',
      imageUrl: 'https://img.freepik.com/premium-vector/tree-cute-drawing-school-flash-card_213861-1457.jpg'
    },
    {
      id: '2',
      caption: 'Sun',
      imageUrl: 'https://study.com/cimages/multimages/16/sun-157126_1280.png'
    },
    {
      id: '3',
      caption: 'Cat',
      imageUrl: 'https://bestflashcard.com/images/vocabulary/english/oxford-phonics-world-2-unit-1-a/cat.PNG'
    },
    {
      id: '4',
      caption: 'Dog',
      imageUrl: 'https://yourhomework.net/yhw/f/yhw-voca/2024/03/1/202403130229419046373.jpg'
    },
    {
      id: '5',
      caption: 'House',
      imageUrl: 'https://yourhomework.net/yhw/f/yhw-voca/2023/09/1/202309191315544202107.jpg'
    },
    {
      id: '6',
      caption: 'Car',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThs8Hniu6PyqzsrAKBhSsGPEtiPbjFAGZm4g&s'
    },
    {
      id: '7',
      caption: 'Ball',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ8rq-QLt8FM__yuswJjIc5l7no4KmIRZy8w&s'
    },
    {
      id: '8',
      caption: 'Apple',
      imageUrl: 'https://www.flashcards.com.sg/wp-content/uploads/2017/10/Slide363.jpg'
    },
    {
      id: '9',
      caption: 'Book',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KPb1Gdjwdl9hDx2arKKRcyJbiuNFjt_sXw&s'
    },
    {
      id: '10',
      caption: 'Rain',
      imageUrl: 'https://bestflashcard.com/images/vocabulary/english/weather-flashcards-2/rainy.PNG'
    },
    {
      id: '11',
      caption: 'Truck',
      imageUrl: 'https://bestflashcard.com/images/vocabulary/english/get-ready-for-movers-unit-12-2/lorry.PNG'
    },
    {
      id: '12',
      caption: 'Clock',
      imageUrl: 'https://o.quizlet.com/FwXCaAQmOmJzvBiXBuBTBQ.png'
    },
    {
      id: '13',
      caption: 'Pick',
      imageUrl: 'https://thumbs.dreamstime.com/b/cartoon-girl-sun-hat-picking-flowers-garden-illustration-cheerful-orange-striped-dress-380021630.jpg'
    },
    {
      id: '14',
      caption: 'Quick',
      imageUrl: 'https://thumbs.dreamstime.com/b/comic-fast-running-superhero-25331787.jpg'
    },
    {
      id: '15',
      caption: 'Snack',
      imageUrl: 'https://i.pinimg.com/736x/fd/b5/e9/fdb5e92095e956b781b5046b569a25a0.jpg'
    },
    {
      id: '16',
      caption: 'Duck',
      imageUrl: 'https://i.pinimg.com/564x/71/98/d9/7198d94e74a561dca6576916547b5cec.jpg'
    },
    {
      id: '17',
      caption: 'Lock',
      imageUrl: 'https://img.freepik.com/free-vector/padlock-coloured-outline_78370-548.jpg?semt=ais_hybrid&w=740&q=80'
    },
    {
      id: '18',
      caption: 'Neck',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBxOzAPnbxIGpLeAd9ebitWVCBzgaVaP6xaw&s'
    },
    {
      id: '19',
      caption: 'Jog',
      imageUrl: 'https://bestflashcard.com/images/vocabulary/english/fingerprints-2-unit-1-lesson-4/run.PNG'
    },
    {
      id: '20',
      caption: 'Cop',
      imageUrl: 'https://yourhomework.net/yhw/f/yhw-voca/2024/10/0/202410060935391271841.jpg'
    },
    {
      id: '21',
      caption: 'Hop',
      imageUrl: 'https://yourhomework.net/yhw/f/yhw-voca/2023/09/1/202309130901199337990.jpg'
    },
    {
      id: '22',
      caption: 'Top',
      imageUrl: 'https://bestflashcard.com/images/vocabulary/english/sgk-tieng-anh-2-i-learn-smart-start-unit-5-2/top.PNG'
    },
    {
      id: '23',
      caption: 'Pop',
      imageUrl: 'https://yourhomework.net/yhw/bfc/images/vocabulary/english/oxford-phonics-world-2-unit-6-op/pop.jpg'
    },
    {
      id: '24',
      caption: 'Pot',
      imageUrl: 'https://yourhomework.net/yhw/f/yhw-voca/2024/04/2/202404201426231378483.jpg'
    },
    {
      id: '25',
      caption: 'Stop',
      imageUrl: 'https://yourhomework.net/yhw/f/yhw-voca/2024/07/1/202407120853336547315.jpg'
    },
    {
      id: '26',
      caption: 'Mop',
      imageUrl: 'https://yourhomework.net/yhw/f/yhw-voca/2024/04/2/202404201426373654125.jpg'
    },
    {
      id: '27',
      caption: 'Fog',
      imageUrl: 'https://media.baamboozle.com/uploads/images/22651/1572868650_13691'
    },
    {
      id: '28',
      caption: 'Rod',
      imageUrl: 'https://bestflashcard.com/images/vocabulary/english/oxford-phonics-world-2-unit-6-o/rod.PNG'
    },
    {
      id: '29',
      caption: 'Rob',
      imageUrl: 'https://media.istockphoto.com/id/164315913/vector/thief.jpg?s=612x612&w=0&k=20&c=Qs-dP2z9D-xBy4eGfSwrY6uUS0pllBURN5QyiyJC_aw='
    },
    {
      id: '30',
      caption: 'Sob',
      imageUrl: 'https://img.freepik.com/premium-vector/cute-little-boy-with-crying-tantrum-expression_97632-4413.jpg'
    },
    {
      id: '31',
      caption: 'Computer',
      imageUrl: 'https://img.freepik.com/premium-vector/laptop-vector-mockup-647546_982290-58.jpg?semt=ais_hybrid&w=740&q=80'
    },
    {
      id: '32',
      caption: 'Tablet',
      imageUrl: 'https://www.apple.com/v/ipad-air/ae/images/overview/two-sizes/gallery-toggle/spin_reverse_static__ehmkt90jzu6a_large.png'
    },
    {
      id: '33',
      caption: 'Smart Speaker',
      imageUrl: 'https://i.pinimg.com/736x/6e/9b/6a/6e9b6a49294825a43e6f11a3fdb36ef4.jpg'
    },
    {
      id: '34',
      caption: 'Vacuum Cleaner',
      imageUrl: 'https://cdn.manomano.com/images/images_products/32961599/P/111006397_1.jpg'
    },
    {
      id: '35',
      caption: 'Voice assistant',
      imageUrl: 'https://www.ismartrecruit.com/upload/blog/main_image/recruitment_chatbot_definition_features_and_benefits.webp'
    },
    {
      id: '36',
      caption: 'Google Map',
      imageUrl: 'https://thumbs.dreamstime.com/b/hand-holding-mobile-navigation-city-map-mobile-app-map-gps-navigation-smartphone-mobile-navigator-205618297.jpg'
    },
    {
      id: '37',
      caption: 'Robot',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/HONDA_ASIMO.jpg'
    },
    {
      id: '38',
      caption: 'Smartphone',
      imageUrl: 'https://images-cdn.ubuy.co.in/634d031dba8fe623b47893cc-smart-phone-android-8-1-smartphone-hd.jpg'
    },
    {
      id: '39',
      caption: 'Coding',
      imageUrl: 'https://fsa2-assets.imgix.net/assets/UNIV/USU/cyber/iStock-1332378618.jpg?auto=compress%2Cformat&crop=focalpoint&domain=fsa2-assets.imgix.net&fit=crop&fp-x=0.5&fp-y=0.5&h=800&ixlib=php-3.3.0&w=1200'
    },
    {
      id: '40',
      caption: 'Sensor',
      imageUrl: 'https://servodynamics.com.vn/wp-content/uploads/2024/11/SD_Series_Photoelectric_Smoke_Detectors.jpg'
    },
    {
      id: '41',
      caption: 'Move Forward',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/015/841/071/non_2x/cute-funny-red-arrow-icon-hand-drawn-cartoon-kawaii-character-illustration-icon-isolated-on-white-background-red-arrow-up-direction-vector.jpg'
    },
    {
      id: '42',
      caption: 'Move Backward',
      imageUrl: 'https://media.istockphoto.com/id/1448780430/nl/vector/cute-funny-red-arrow-icon-vector-hand-drawn-cartoon-kawaii-character-illustration-icon.jpg?s=612x612&w=0&k=20&c=SDTcbATxAj0CxgEypE1VYPPi33z29wy1a2qu0l0WQ-o='
    },
    {
      id: '43',
      caption: 'Turn Left',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/015/841/066/non_2x/cute-funny-red-arrow-icon-hand-drawn-cartoon-kawaii-character-illustration-icon-isolated-on-white-background-red-arrow-left-direction-vector.jpg'
    },
    {
      id: '44',
      caption: 'Turn Right',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/015/841/068/non_2x/cute-funny-red-arrow-icon-hand-drawn-cartoon-kawaii-character-illustration-icon-isolated-on-white-background-red-arrow-right-direction-vector.jpg'
    },
    {
      id: '45',
      caption: 'Step',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSXP3FVr-YQNSXMnXo8X2DiI2SE_61t6j8z8WG7EMnWsJ5x2jRG2p6wTtZb1qD2S-_wdg&usqp=CAU'
    },
    {
      id: '46',
      caption: 'Loop',
      imageUrl: 'https://www.publicdomainpictures.net/pictures/200000/nahled/footprints-logo-circle.jpg'
    },
    {
      id: '47',
      caption: 'Sequence',
      imageUrl: 'https://media.istockphoto.com/id/689997052/vector/human-footprint-vector-icon.jpg?s=612x612&w=0&k=20&c=IXT6i7ZVz6Yo82ylJYHz-nMYY8tU8nZmorsliFheNgQ='
    },
    {
      id: '48',
      caption: 'Spring',
      imageUrl: 'https://img.freepik.com/free-vector/flat-spring-illustration_23-2149282337.jpg'
    },
    {
      id: '49',
      caption: 'King',
      imageUrl: 'https://t3.ftcdn.net/jpg/09/38/74/26/360_F_938742621_7VaKGUxoUqFOlSc48O8hXxJoFx6D5Xmu.jpg'
    },
    {
      id: '50',
      caption: 'Bring',
      imageUrl: 'https://img.freepik.com/premium-vector/courier-brings-packages-customer-illustration_338371-67.jpg'
    },
    {
      id: '51',
      caption: 'Song',
      imageUrl: 'https://t3.ftcdn.net/jpg/02/79/95/98/360_F_279959867_EufPXDNyxENxhDxAah2qC6GtPffQ4IV9.jpg'
    },
    {
      id: '56',
      caption: 'Ring',
      imageUrl: 'https://media.istockphoto.com/id/148772039/vector/diamond-ring.jpg?s=612x612&w=0&k=20&c=kcYwxLJIgAp05waeZsfa7eYYua6xfKXBMgDW_Yfv97g='
    },
    {
      id: '57',
      caption: 'Ping Pong',
      imageUrl: 'https://t3.ftcdn.net/jpg/17/14/31/00/360_F_1714310015_fg03gYNdzTiu1oUFsiJrDU3I9NY7PlLp.jpg'
    },
    {
      id: '58',
      caption: 'Wing',
      imageUrl: 'https://img.freepik.com/premium-vector/illustration-wing_757131-683.jpg'
    },
    {
      id: '59',
      caption: 'Building',
      imageUrl: 'https://media.istockphoto.com/id/908578348/vector/business-building-illustration.jpg?s=612x612&w=0&k=20&c=thg6Bom79dCRo8pMV3fo7p-8b7m1p-EdLZZPKYpXYvg='
    },
    {
      id: '52',
      caption: 'Mink',
      imageUrl: 'https://img.freepik.com/premium-vector/cute-mink-vector-cartoon-illustration-white-background_1025757-25149.jpg'
    },
    {
      id: '53',
      caption: 'Bank',
      imageUrl: 'https://img.freepik.com/premium-vector/bank-building-building-landmark-icon-illustration-vector_679085-55.jpg?semt=ais_hybrid&w=740&q=80'
    },
    {
      id: '54',
      caption: 'Blank',
      imageUrl: 'https://freedesignfile.com/upload/2016/12/Cartoon-school-children-with-blank-paper-vector-05.jpg'
    },
    {
      id: '55',
      caption: 'Wink',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_21Ko3jKTRkemD7g-RpLl1k5BSEXuib6FQ&s'
    },
    {
      id: '60',
      caption: 'Sink',
      imageUrl: 'https://img.freepik.com/premium-vector/colorful-cartoon-sink-illustration-white-background_1120554-60648.jpg'
    },
    {
      id: '61',
      caption: 'Pink',
      imageUrl: 'https://www.clker.com/cliparts/H/n/Z/W/5/r/ink-splash-pink.svg.hi.png'
    },
    {
      id: '62',
      caption: 'Drink',
      imageUrl: 'https://thumbs.dreamstime.com/b/drinking-milk-cute-boy-red-shirt-holding-glass-kid-thumbs-up-emotionally-healthy-concepts-growth-child-nutrition-vector-109127904.jpg'
    },
    {
      id: '63',
      caption: 'Think',
      imageUrl: 'https://media.istockphoto.com/id/1355408523/vector/kid-cartoon-character_32.jpg?s=612x612&w=0&k=20&c=YbMpwjbtIZXCKJufk6rrFIf3x89nI8Qc0PVyZpQyH-M='
    },
    {
      id: '64',
      caption: 'Photo',
      imageUrl: 'https://png.pngtree.com/png-vector/20220701/ourmid/pngtree-group-selfie-on-smartphone-png-image_5677466.png'
    },
    {
      id: '65',
      caption: 'Dolphin',
      imageUrl: 'https://media.istockphoto.com/id/968475622/vector/cartoon-dolphin.jpg?s=612x612&w=0&k=20&c=d5u0Xm_jcBh-1aFnWfeavX79u75Z-yECb8vy9iHz5Gk='
    },
    {
      id: '66',
      caption: 'Elephant',
      imageUrl: 'https://www.shutterstock.com/image-vector/cute-baby-elephant-outline-coloring-600nw-2490295647.jpg'
    },
    {
      id: '67',
      caption: 'Bug',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/060/826/787/non_2x/cartoon-green-bug-illustration-cheerful-insect-character-graphics-vector.jpg'
    },
    {
      id: '68',
      caption: 'Tug',
      imageUrl: 'https://media.istockphoto.com/id/831537350/vector/cute-children-playing-tug-of-war.jpg?s=612x612&w=0&k=20&c=ETTLHkCqiN5Vu243CKmVKx2KkkpGl6FqvQR6SeCd9Ac='
    },
    {
      id: '69',
      caption: 'Nut',
      imageUrl: 'https://img.freepik.com/free-vector/acorn-sticker-white-background_1308-70248.jpg?semt=ais_hybrid&w=740&q=80'
    },
    {
      id: '70',
      caption: 'Mud',
      imageUrl: 'https://media.istockphoto.com/id/866875396/vector/little-boy-playing-in-the-mud.jpg?s=612x612&w=0&k=20&c=AZ_6nP987J3lf8z0c3Oyv632fHxHW9bw7F_NZxDR2zg='
    },
    {
      id: '71',
      caption: 'Hut',
      imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/015/014/906/small_2x/hut-icon-cartoon-style-vector.jpg'
    },
    {
      id: '72',
      caption: 'Cut',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/006/096/479/non_2x/scissor-cutting-paper-cartoon-icon-illustration-education-object-icon-concept-isolated-premium-flat-cartoon-style-free-vector.jpg'
    },
    {
      id: '73',
      caption: 'Tub',
      imageUrl: 'https://img.freepik.com/premium-vector/bathtub-clipart-cartoon-illustration-drawing_871209-12277.jpg'
    },
    {
      id: '74',
      caption: 'Fun',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/012/576/575/non_2x/children-laugh-at-the-fun-funny-cartoon-character-illustration-isolated-on-white-background-free-vector.jpg'
    },
    {
      id: '75',
      caption: 'Hug',
      imageUrl: 'https://thumbs.dreamstime.com/b/illustration-cartoon-happy-mother-hugging-her-son-cartoon-happy-mother-hugging-her-son-144238202.jpg'
    },
    {
      id: '76',
      caption: 'Rug',
      imageUrl: 'https://thumbs.dreamstime.com/b/cartoon-rug-isolated-white-background-illustration-cute-style-clean-404296006.jpg'
    },

    // Handicrafts I
    {
      id: '77',
      caption: 'Pottery/Ceramic',
      imageUrl: 'https://shop.vitcas.com/media/amasty/blog/cache/P/o/1000/690/Pottery-craft-ceramics.jpg'
    },
    {
      id: '78',
      caption: 'Bamboo/Rattan',
      imageUrl: 'https://image.vietnamlawmagazine.vn/uploadvietnamlaw/2022/6/13/trang-37-tradition-a1jpg113327806.jpg'
    },
    {
      id: '79',
      caption: 'Paper',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Various_products_made_from_paper.JPG/1200px-Various_products_made_from_paper.JPG'
    },
    {
      id: '80',
      caption: 'Plastic',
      imageUrl: 'https://noithatzear.vn/wp-content/uploads/2024/07/Plastic-la-gi.jpg'
    },
    {
      id: '81',
      caption: 'Fabric',
      imageUrl: 'https://vico.com.hk/be/uploads/blogs/image_pFONUQ1fk.png'
    },
    {
      id: '82',
      caption: 'Yarn/Wool',
      imageUrl: 'https://m.media-amazon.com/images/I/81Ry4Zp9S8L._AC_SL1500_.jpg'
    },
    {
      id: '83',
      caption: 'Glass',
      imageUrl: 'https://hwestequipment.com/wp-content/uploads/2019/02/Things-Made-from-Recycled-Glass.jpg'
    },
    {
      id: '84',
      caption: 'Rubber',
      imageUrl: 'https://zetarmoulding.com/wp-content/webp-express/webp-images/uploads/2022/10/natural-rubber-products.jpg.webp'
    },

    // Handicrafts II
    // {
    //   id: '85',
    //   caption: 'Bowl',
    //   imageUrl: 'https://bestflashcard.com/images/vocabulary/english/oxford-phonics-world-2-unit-1-a/bowl.PNG'
    // },
    // {
    //   id: '86',
    //   caption: 'Case',
    //   imageUrl: 'https://img.freepik.com/premium-vector/suitcase-travel-case-vector-illustration_97632-4413.jpg'
    // },
    // {
    //   id: '87',
    //   caption: 'Chair',
    //   imageUrl: 'https://bestflashcard.com/images/vocabulary/english/oxford-phonics-world-2-unit-1-a/chair.PNG'
    // },
    // {
    //   id: '88',
    //   caption: 'Basket',
    //   imageUrl: 'https://img.freepik.com/premium-vector/basket-wicker-basket-vector-illustration_97632-4413.jpg'
    // },
    // {
    //   id: '89',
    //   caption: 'Picture',
    //   imageUrl: 'https://bestflashcard.com/images/vocabulary/english/oxford-phonics-world-2-unit-1-a/picture.PNG'
    // },
    // {
    //   id: '90',
    //   caption: 'Cup',
    //   imageUrl: 'https://bestflashcard.com/images/vocabulary/english/oxford-phonics-world-2-unit-1-a/cup.PNG'
    // },
    // {
    //   id: '91',
    //   caption: 'Spoon',
    //   imageUrl: 'https://bestflashcard.com/images/vocabulary/english/oxford-phonics-world-2-unit-1-a/spoon.PNG'
    // },
    // {
    //   id: '92',
    //   caption: 'Toy',
    //   imageUrl: 'https://bestflashcard.com/images/vocabulary/english/oxford-phonics-world-2-unit-1-a/toy.PNG'
    // },
    // {
    //   id: '93',
    //   caption: 'Scarf',
    //   imageUrl: 'https://img.freepik.com/premium-vector/scarf-winter-scarf-vector-illustration_97632-4413.jpg'
    // },
    // {
    //   id: '94',
    //   caption: 'Sweater',
    //   imageUrl: 'https://img.freepik.com/premium-vector/sweater-knit-sweater-vector-illustration_97632-4413.jpg'
    // },
    // {
    //   id: '95',
    //   caption: 'T-shirt',
    //   imageUrl: 'https://bestflashcard.com/images/vocabulary/english/oxford-phonics-world-2-unit-1-a/tshirt.PNG'
    // },
    // {
    //   id: '96',
    //   caption: 'Bag',
    //   imageUrl: 'https://bestflashcard.com/images/vocabulary/english/oxford-phonics-world-2-unit-1-a/bag.PNG'
    // },
    // {
    //   id: '97',
    //   caption: 'Bottle',
    //   imageUrl: 'https://bestflashcard.com/images/vocabulary/english/oxford-phonics-world-2-unit-1-a/bottle.PNG'
    // }

    // 1 Consonant pattern: KN - kneel, knot, knead, knee
    {
      id: '98',
      caption: 'Kneel',
      imageUrl: 'https://www.shutterstock.com/image-vector/little-kid-show-praying-pose-600nw-2318772437.jpg'
    },
    {
      id: '99',
      caption: 'Knot',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShHZsJsN1P5sJEaPnyiV5P9ldq5ARB02WjRg&s'
    },
    {
      id: '100',
      caption: 'Knead',
      imageUrl: 'https://media.istockphoto.com/id/525107259/vector/hands-kneading-dough.jpg?s=612x612&w=0&k=20&c=mWKl5mVQ8XbaLxv-wrZs8NoC1sPmbey1LSFZV7PBxmw='
    },
    {
      id: '101',
      caption: 'Knee',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0G-vFf9vw-F6wOplM7zGYFw0jBSky_benJg&s'
    },
    // 2 Consonant pattern: TCH - catch, pitch, crutch, match
    {
      id: '102',
      caption: 'Catch',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5PCi0Tcg10gBn4pEqxj1NzpqZWAOTAxooQ&s'
    },
    {
      id: '103',
      caption: 'Pitch',
      imageUrl: 'https://media.istockphoto.com/id/1445646363/vector/a-baseball-player-now-pitching-a-ball.jpg?s=612x612&w=0&k=20&c=49s2swKltrbEWe7n24TxrbSuYiVT3NWc45QfI9itUVs='
    },
    {
      id: '104',
      caption: 'Crutch',
      imageUrl: 'https://www.shutterstock.com/image-vector/injured-man-walking-crutches-illustration-600nw-2643702771.jpg'
    },
    {
      id: '105',
      caption: 'Match',
      imageUrl: 'https://img.freepik.com/premium-vector/cartoon-isolated-vector-object-matches-fire_311865-9412.jpg'
    },
    // 3 Consonant pattern: MB - lamb, limb, crumb, thumb
    {
      id: '106',
      caption: 'Lamb',
      imageUrl: 'https://t3.ftcdn.net/jpg/05/90/17/26/360_F_590172680_mL0VBYGjt979JSmyNDpa1GKwz6ftViTF.jpg'
    },
    {
      id: '107',
      caption: 'Limb',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Af6gbUozTQOa8U4k2PcmVhZJTleIMLPxig&s'
    },
    {
      id: '108',
      caption: 'Crumb',
      imageUrl: 'https://media.istockphoto.com/id/1292898075/vector/bitten-chocolate-chip-cookie-crunch-homemade-brown-biscuits-broken-with-crumbs-cartoon-baked.jpg?s=612x612&w=0&k=20&c=eSX6FiWDrPfj2qC4Kj9JgHlxUGocMS3pSrFGI_mJu5w='
    },
    {
      id: '109',
      caption: 'Thumb',
      imageUrl: 'https://img.pikbest.com/png-images/qiantu/cartoon-thumb-up-gesture-illustration_2601767.png!sw800'
    },
    // 4 Consonant pattern: WR - wrap, unwrap, write, wreath
    {
      id: '110',
      caption: 'Wrap',
      imageUrl: 'https://i.pinimg.com/736x/dc/2d/84/dc2d84a46859e7b565ea1f630d0f08a8.jpg'
    },
    {
      id: '111',
      caption: 'Unwrap',
      imageUrl: 'https://thumbs.dreamstime.com/b/girl-unwrapping-present-12052067.jpg'
    },
    {
      id: '112',
      caption: 'Write',
      imageUrl: 'https://www.shutterstock.com/image-vector/animated-cute-boy-writing-book-600nw-2615213357.jpg'
    },
    {
      id: '113',
      caption: 'Wreath',
      imageUrl: 'https://t4.ftcdn.net/jpg/00/74/79/29/360_F_74792937_UfhWnXDF7ZCX9C34N6RAFr20Y4ADN6oh.jpg'
    },

    // Long Vowel A (ai / ay)
    {
      id: '114',
      caption: 'Snail',
      imageUrl: 'https://thumbs.dreamstime.com/b/cute-cartoon-snail-heart-funny-insect-hand-drawing-isolated-objects-white-background-vector-illustration-78263165.jpg'
    },
    {
      id: '115',
      caption: 'Paint',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGUcXu8ch7dVcUwToVLNvO5eoQ-GzCuZCYKw&s'
    },
    {
      id: '116',
      caption: 'Tail',
      imageUrl: 'https://media.istockphoto.com/id/1193261146/vector/mermaid-tail.jpg?s=612x612&w=0&k=20&c=lUaB3DveILYflWwICFcWuzrM4R31D1jfaYsUg1I_oM0='
    },
    {
      id: '117',
      caption: 'Rail',
      imageUrl: 'https://www.shutterstock.com/image-vector/cute-toy-train-locomotive-kid-600nw-2362636429.jpg'
    },
    {
      id: '118',
      caption: 'Play',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/026/234/984/non_2x/happy-cute-kids-play-slide-vector.jpg'
    },
    {
      id: '119',
      caption: 'Tray',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/066/318/408/non_2x/illustration-art-cute-mochi-on-the-wooden-tray-sticker-design-free-vector.jpg'
    },
    {
      id: '120',
      caption: 'Hay',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/047/852/834/non_2x/cute-kawaii-haystack-clipart-illustration-free-vector.jpg'
    },
    {
      id: '121',
      caption: 'Clay',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8U8yYbdDlG77vIoRXnkcJw1u72sSEHckzg&s'
    },

    // Long Vowel A (a_e)
    {
      id: '122',
      caption: 'Bake',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVe9305w8Ud0nnDG10BTmZubbkIrn7vDu6ow&s'
    },
    {
      id: '123',
      caption: 'Cake',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/047/852/819/non_2x/cute-kawaii-cake-cartoon-illustration-free-vector.jpg'
    },
    {
      id: '124',
      caption: 'Late',
      imageUrl: 'https://media.istockphoto.com/id/519039810/vector/running-late-to-school.jpg?s=612x612&w=0&k=20&c=pXa3NyhzzgYUj9HaET1UolOSmTIiJt7BHXIMqcx6kuc='
    },
    {
      id: '125',
      caption: 'Take',
      imageUrl: 'https://thumbs.dreamstime.com/b/opposite-give-take-vector-opposite-give-take-vector-illustration-115565007.jpg'
    },
    {
      id: '126',
      caption: 'Lake',
      imageUrl: 'https://vcdn1-english.vnecdn.net/2025/01/04/ho-gu-o-m-5852-1730994042-1735-6840-3701-1735962280.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=MaibxImQb3K0y1GWmorNJw'
    },
    {
      id: '127',
      caption: 'Wave',
      imageUrl: 'https://img.freepik.com/premium-vector/stylized-blue-ocean-wave-illustration_815570-13125.jpg'
    },
    {
      id: '128',
      caption: 'Same',
      imageUrl: 'https://media.istockphoto.com/id/2147666918/vector/cute-little-smiling-boys-twins-in-flat-design-on-white-background.jpg?s=612x612&w=0&k=20&c=uSTuKGOPDb8_x1JfxDVTnUWu6AYAqG203B4ipQzMxZc='
    },
    {
      id: '129',
      caption: 'Name',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/014/448/315/non_2x/plastic-name-badge-with-neck-strap-icon-flat-style-vector.jpg'
    },

    // Letter Dd words
    {
      id: '130',
      caption: 'Dive',
      imageUrl: 'https://thumbs.dreamstime.com/b/cartoon-scuba-diver-exploring-vibrant-underwater-world-surrounded-coral-bubbles-illustration-discovering-colorful-352701380.jpg'
    },
    {
      id: '131',
      caption: 'Dig',
      imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/001/307/915/small/cute-little-boy-digging-hole-cartoon.jpg'
    },
    {
      id: '132',
      caption: 'Dad',
      imageUrl: 'https://www.shutterstock.com/image-vector/dad-my-superhero-fathers-day-600nw-2459864421.jpg'
    },
    {
      id: '133',
      caption: 'Panda',
      imageUrl: 'https://t4.ftcdn.net/jpg/06/62/75/19/360_F_662751973_USPJ5vrdRjgvNZGUUMTY1uLViCcc6SSG.jpg'
    },
    {
      id: '134',
      caption: 'Windy',
      imageUrl: 'https://thumbs.dreamstime.com/b/image-windy-day-trees-cloud-blowing-wind-cartoon-windy-day-trees-cloud-blowing-wind-110475663.jpg'
    },
    {
      id: '135',
      caption: 'Candy',
      imageUrl: 'https://thumbs.dreamstime.com/b/bright-pink-cartoon-candy-wrapped-exaggerated-ends-features-purple-stripes-glossy-sheen-suggesting-shiny-surface-390789149.jpg'
    },
    {
      id: '136',
      caption: 'Lid',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/005/390/257/non_2x/lid-icon-hand-drawn-color-illustration-isolated-on-white-background-kitchen-tool-cover-for-frying-pan-saucepan-pot-dishes-flat-cartoon-clipart-glass-object-with-plastic-handle-vector.jpg'
    },
    {
      id: '137',
      caption: 'Sled',
      imageUrl: 'https://t3.ftcdn.net/jpg/00/75/07/70/360_F_75077016_bESBy1flPXCkew6U7RWzQV9PXr42s0SJ.jpg'
    },
    {
      id: '138',
      caption: 'Bed',
      imageUrl: 'https://img.freepik.com/free-vector/cozy-wooden-single-bed-illustration_1308-169624.jpg?semt=ais_hybrid&w=740&q=80'
    },

    // Letter Gg words
    {
      id: '139',
      caption: 'Garden',
      imageUrl: 'https://img.freepik.com/premium-vector/cartoon-illustration-garden-with-fence-flowers_730620-949943.jpg'
    },
    {
      id: '140',
      caption: 'Grab',
      imageUrl: 'https://st2.depositphotos.com/1221766/5492/v/950/depositphotos_54928237-stock-illustration-grab-hand-elemment.jpg'
    },
    {
      id: '141',
      caption: 'Goat',
      imageUrl: 'https://www.shutterstock.com/image-vector/goat-vector-drawing-cartoon-fourlegged-600nw-2291378547.jpg'
    },
    {
      id: '142',
      caption: 'Sugar',
      imageUrl: 'https://img.freepik.com/premium-vector/jar-sugar-with-spoon_642458-971.jpg'
    },
    {
      id: '143',
      caption: 'Yogurt',
      imageUrl: 'https://thumbs.dreamstime.com/b/yogurt-clip-art-cartoon-illustration-fresh-fruit-spoon-32879220.jpg'
    },
    {
      id: '144',
      caption: 'Dragon',
      imageUrl: 'https://media.istockphoto.com/id/636949046/vector/angry-dragon-cartoon.jpg?s=612x612&w=0&k=20&c=Tk2D3kCK7JSmCZyFm0yz20TZR7U0Oe2pvaJsSI72_7Y='
    },
    {
      id: '145',
      caption: 'Frog',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/034/994/463/non_2x/adorable-cartoon-frog-sitting-on-water-lilly-leaf-vector.jpg'
    },

    // Letter Oo words
    {
      id: '146',
      caption: 'Ostrich',
      imageUrl: 'https://classroomclipart.com/image/static7/preview2/cartoon-ostrich-with-a-pink-neck-and-black-feathers-is-running-55848.jpg'
    },
    {
      id: '147',
      caption: 'Otter',
      imageUrl: 'https://t3.ftcdn.net/jpg/09/66/68/92/360_F_966689259_FUffErSpMFlCpIRwFyyrJ1I4eFgI0XnC.jpg'
    },
    {
      id: '148',
      caption: 'Orange',
      imageUrl: 'https://png.pngtree.com/png-vector/20231123/ourmid/pngtree-single-fruit-orange-cartoon-png-image_10706676.png'
    },
    {
      id: '149',
      caption: 'Sock',
      imageUrl: 'https://media.istockphoto.com/id/1401842987/vector/cute-cotton-and-woolen-socks-vector-illustration-of-stylish-hosiery-collection-cartoon.jpg?s=612x612&w=0&k=20&c=sr1fKl4qdZtggMIVK3Ldfc94hqU1BOrgoxbJjS4uVRg='
    },
    {
      id: '150',
      caption: 'Rock',
      imageUrl: 'https://thumbs.dreamstime.com/b/cartoon-rock-illustration-design-automotive-fans-white-background-cartoon-illustration-featuring-large-rock-322723360.jpg'
    },

    // Consonant pattern: G
    {
      id: '151',
      caption: 'Game',
      imageUrl: 'https://thumbs.dreamstime.com/b/kids-playing-board-game-sitting-floor-vector-illustration-103460442.jpg'
    },
    {
      id: '152',
      caption: 'Glide',
      imageUrl: 'https://img.freepik.com/free-vector/hang-glider_1308-29195.jpg?semt=ais_hybrid&w=740&q=80'
    },
    {
      id: '153',
      caption: 'Gap',
      imageUrl: 'https://www.shutterstock.com/image-vector/ledge-chasm-empty-template-cliff-600nw-1777547960.jpg'
    },
    {
      id: '154',
      caption: 'Goal',
      imageUrl: 'https://thumbs.dreamstime.com/b/cartoon-soccer-football-goalie-keeper-saving-goal-illustration-50840009.jpg'
    },
    {
      id: '155',
      caption: 'Gem',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMvZI3hmuf98NPfPs-gXXGNDsLQKIU7YYYhQ&s'
    },
    {
      id: '156',
      caption: 'Magic',
      imageUrl: 'https://thumbs.dreamstime.com/b/magic-hat-isolated-show-cartoon-concept-illustrations-60822015.jpg'
    },
    {
      id: '157',
      caption: 'Stage',
      imageUrl: 'https://img.freepik.com/free-vector/retro-theater-stage-with-curtains-spotlights_107791-13864.jpg?semt=ais_hybrid&w=740&q=80'
    },
    {
      id: '158',
      caption: 'Huge',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/003/253/121/non_2x/big-and-small-elephants-cartoon-on-white-background-free-vector.jpg'
    },

    // Consonant pattern: C
    {
      id: '159',
      caption: 'Cape',
      imageUrl: 'https://thumbs.dreamstime.com/b/cartoon-superhero-girl-stick-figure-red-cape-cute-94998506.jpg'
    },
    {
      id: '160',
      caption: 'Cane',
      imageUrl: 'https://thumbs.dreamstime.com/b/wooden-walking-stick-cane-wooden-walking-stick-cane-symbol-wooden-walking-stick-cane-sign-114114670.jpg'
    },
    {
      id: '161',
      caption: 'Cab',
      imageUrl: 'https://png.pngtree.com/png-clipart/20230330/ourmid/pngtree-taxi-yellow-taxi-cartoon-png-image_6673884.png'
    },
    {
      id: '162',
      caption: 'Cone',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOoCIkJXjUbzRtV-JBv7c3EKG_gvuWhlXCwA&s'
    },
    {
      id: '163',
      caption: 'Mice',
      imageUrl: 'https://www.publicdomainpictures.net/pictures/620000/nahled/cheeky-cartoon-mouse-with-cheese.png'
    },
    {
      id: '164',
      caption: 'City',
      imageUrl: 'https://img.freepik.com/free-vector/scene-beautiful-cityscape-with-hight-building-shop-street-with-park_1150-48972.jpg?semt=ais_hybrid&w=740&q=80'
    },
    {
      id: '165',
      caption: 'Fancy',
      imageUrl: 'https://thumbs.dreamstime.com/b/beautiful-blonde-cartoon-girl-7128502.jpg'
    },
    {
      id: '166',
      caption: 'Lacy',
      imageUrl: 'https://img.kwcdn.com/product/fancy/8afc25ad-4fdf-41e3-8e71-6891b68d65df.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp'
    },

    // Musical Instruments
    {
      id: '167',
      caption: 'Guitar',
      imageUrl: 'https://img.freepik.com/premium-vector/guitar-clipart-vector-icon-sticker-illustration_761413-9146.jpg?semt=ais_hybrid&w=740&q=80'
    },
    {
      id: '168',
      caption: 'Tambourine',
      imageUrl: 'https://thumbs.dreamstime.com/b/simple-wooden-tambourine-hand-drawing-classic-81124960.jpg'
    },
    {
      id: '169',
      caption: 'Drum',
      imageUrl: 'https://img.freepik.com/free-vector/yellow-drum-illustration_24908-81974.jpg?semt=ais_hybrid&w=740&q=80'
    },
    {
      id: '170',
      caption: 'Piano',
      imageUrl: 'https://freedesignfile.com/image/preview/7100/keyboard-piano-cartoon-drawing-clipart.png'
    },
    {
      id: '171',
      caption: 'Maracas',
      imageUrl: 'https://png.pngtree.com/png-vector/20191028/ourlarge/pngtree-maracas-icon-cartoon-style-png-image_1889975.jpg'
    },
    {
      id: '174',
      caption: 'Violin',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTShd_JoQbY1uDaHt3jNVAg7nRIcxiu-DqzKQ&s'
    },
    {
      id: '175',
      caption: 'Xylophone',
      imageUrl: 'https://thumbs.dreamstime.com/b/xylophone-illustration-colorful-isolated-white-background-50726946.jpg'
    },
    {
      id: '176',
      caption: 'Handbell',
      imageUrl: 'https://media.istockphoto.com/id/502526048/vector/school-bell.jpg?s=612x612&w=0&k=20&c=-ZgcPs5_ITyo7X0p53m-Xi89D0udE3-D_PBXOWz6xdg='
    }
  ];

  private flashcardSets: FlashcardSet[] = [
    {
      id: 'set1',
      name: 'Nature',
      description: 'Nature-related vocabulary',
      flashcardIds: ['1', '2', '10']
    },
    {
      id: 'set2',
      name: 'Animals',
      description: 'Animal vocabulary',
      flashcardIds: ['3', '4', '16', '133', '141', '144', '145', '146', '147', '66']
    },
    {
      id: 'set3',
      name: 'House Items',
      description: 'Items found in and around the house',
      flashcardIds: ['5', '6', '7', '9', '12', '17']
    },
    {
      id: 'set4',
      name: 'Diagraph CK',
      description: 'Words with CK diagraph',
      flashcardIds: ['11', '12', '13', '14', '15', '16', '17', '18']
    },
    {
      id: 'set6',
      name: 'Short vowel O',
      description: 'Words with short vowel O sound',
      flashcardIds: ['19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
    },
    {
      id: 'set7',
      name: 'AI Vocabulary',
      description: 'AI and programming related vocabulary',
      flashcardIds: ['31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
    },
    {
      id: 'set8',
      name: 'Commands',
      description: 'Commands related vocabulary',
      flashcardIds: ['41', '42', '43', '44', '45', '46', '47']
    },
    {
      id: 'set9',
      name: 'Consonant pattern: NG',
      description: 'Words with NG consonant pattern',
      flashcardIds: ['48', '49', '50', '51', '56', '57', '58', '59']
    },
    {
      id: 'set10',
      name: 'Consonant pattern: NK',
      description: 'Words with NK consonant pattern',
      flashcardIds: ['52', '53', '54', '55', '60', '61', '62', '63']
    },
    {
      id: 'set11',
      name: 'Consonant pattern: PH',
      description: 'Words with PH consonant pattern',
      flashcardIds: ['38', '64', '65', '66']
    },
    {
      id: 'set12',
      name: 'Short vowel U',
      description: 'Words with short vowel U sound',
      flashcardIds: ['67', '68', '69', '70', '71', '72', '73', '74', '75', '76']
    },
    {
      id: 'set13',
      name: 'Handicrafts I',
      description: 'Handicraft materials and items',
      flashcardIds: ['77', '78', '79', '80', '81', '82', '83', '84']
    },
    {
      id: 'set14',
      name: 'Consonant pattern: KN',
      description: 'Words with KN consonant pattern',
      flashcardIds: ['98', '99', '100', '101']
    },
    {
      id: 'set15',
      name: 'Consonant pattern: TCH',
      description: 'Words with TCH consonant pattern',
      flashcardIds: ['102', '103', '104', '105']
    },
    {
      id: 'set16',
      name: 'Consonant pattern: MB',
      description: 'Words with MB consonant pattern',
      flashcardIds: ['106', '107', '108', '109']
    },
    {
      id: 'set17',
      name: 'Consonant pattern: WR',
      description: 'Words with WR consonant pattern',
      flashcardIds: ['110', '111', '112', '113']
    },
    {
      id: 'set18',
      name: 'Long Vowel AI / AY',
      description: 'Words with long vowel A sound spelled ai or ay',
      flashcardIds: ['114', '115', '116', '117', '118', '119', '120', '121']
    },
    {
      id: 'set19',
      name: 'Long Vowel A_E',
      description: 'Words with long vowel A sound',
      flashcardIds: ['122', '123', '124', '125', '126', '127', '128', '129']
    },
    {
      id: 'set20',
      name: 'Letter Dd',
      description: 'Words with Dd sound (beginning, middle, and ending)',
      flashcardIds: ['130', '131', '132', '4', '16', '133', '134', '135', '136', '137', '138']
    },
    {
      id: 'set21',
      name: 'Letter Gg',
      description: 'Words with Gg sound (beginning, middle, and ending)',
      flashcardIds: ['139', '140', '141', '142', '143', '144', '145', '68', '4']
    },
    {
      id: 'set22',
      name: 'Letter Oo',
      description: 'Words with Oo sound (beginning and middle)',
      flashcardIds: ['146', '147', '148', '149', '12', '150']
    },
    {
      id: 'set23',
      name: 'Consonant pattern: G',
      description: 'Words with G consonant pattern (hard and soft G)',
      flashcardIds: ['151', '152', '153', '154', '155', '156', '157', '158']
    },
    {
      id: 'set24',
      name: 'Consonant pattern: C',
      description: 'Words with C consonant pattern (hard and soft C)',
      flashcardIds: ['159', '160', '161', '162', '163', '164', '165', '166']
    },
    {
      id: 'set25',
      name: 'Musical Instruments',
      description: 'Musical instruments vocabulary',
      flashcardIds: ['167', '168', '169', '170', '171', '174', '175', '176']
    },
    // {
    //   id: 'set18',
    //   name: 'Handicrafts II',
    //   description: 'Handicraft items and products',
    //   flashcardIds: ['85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97']
    // },
    // always keep this last
    // always add all flashcards to this set
    {
      id: 'set5',
      name: 'All',
      description: 'All flashcards',
      flashcardIds: this.flashcards.map(flashcard => flashcard.id)
    }
  ];

  constructor() { }

  getAllFlashcards(): Flashcard[] {
    return [...this.flashcards];
  }

  getAllSets(): FlashcardSet[] {
    return [...this.flashcardSets];
  }

  getFlashcardsBySetId(setId: string): Flashcard[] {
    const set = this.flashcardSets.find(s => s.id === setId);
    if (!set) {
      return [];
    }
    return this.flashcards.filter(flashcard => set.flashcardIds.includes(flashcard.id));
  }

  getFlashcardsBySetIds(setIds: string[]): Flashcard[] {
    if (!setIds || setIds.length === 0) {
      return [];
    }

    // Use a Map to track unique flashcards by ID (for deduplication)
    const uniqueFlashcards = new Map<string, Flashcard>();

    // Get flashcards from each set
    for (const setId of setIds) {
      const flashcards = this.getFlashcardsBySetId(setId);
      // Add flashcards to map (duplicates will be overwritten, keeping only one instance)
      flashcards.forEach(flashcard => {
        if (!uniqueFlashcards.has(flashcard.id)) {
          uniqueFlashcards.set(flashcard.id, flashcard);
        }
      });
    }

    // Convert map values to array
    return Array.from(uniqueFlashcards.values());
  }
}

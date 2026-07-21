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
      imageUrl: 'images/flashcards/1-tree.jpg'
    },
    {
      id: '2',
      caption: 'Sun',
      imageUrl: 'images/flashcards/2-sun.png'
    },
    {
      id: '3',
      caption: 'Cat',
      imageUrl: 'images/flashcards/3-cat.png'
    },
    {
      id: '4',
      caption: 'Dog',
      imageUrl: 'images/flashcards/4-dog.jpg'
    },
    {
      id: '5',
      caption: 'House',
      imageUrl: 'images/flashcards/5-house.jpg'
    },
    {
      id: '6',
      caption: 'Car',
      imageUrl: 'images/flashcards/6-car.jpg'
    },
    {
      id: '7',
      caption: 'Ball',
      imageUrl: 'images/flashcards/7-ball.jpg'
    },
    {
      id: '8',
      caption: 'Apple',
      imageUrl: 'images/flashcards/8-apple.jpg'
    },
    {
      id: '9',
      caption: 'Book',
      imageUrl: 'images/flashcards/9-book.jpg'
    },
    {
      id: '10',
      caption: 'Rain',
      imageUrl: 'images/flashcards/10-rain.png'
    },
    {
      id: '11',
      caption: 'Truck',
      imageUrl: 'images/flashcards/11-truck.png'
    },
    {
      id: '12',
      caption: 'Clock',
      imageUrl: 'images/flashcards/12-clock.png'
    },
    {
      id: '13',
      caption: 'Pick',
      imageUrl: 'images/flashcards/13-pick.jpg'
    },
    {
      id: '14',
      caption: 'Quick',
      imageUrl: 'images/flashcards/14-quick.jpg'
    },
    {
      id: '15',
      caption: 'Snack',
      imageUrl: 'images/flashcards/15-snack.jpg'
    },
    {
      id: '16',
      caption: 'Duck',
      imageUrl: 'images/flashcards/16-duck.jpg'
    },
    {
      id: '17',
      caption: 'Lock',
      imageUrl: 'images/flashcards/17-lock.jpg'
    },
    {
      id: '18',
      caption: 'Neck',
      imageUrl: 'images/flashcards/18-neck.jpg'
    },
    {
      id: '19',
      caption: 'Jog',
      imageUrl: 'images/flashcards/19-jog.png'
    },
    {
      id: '20',
      caption: 'Cop',
      imageUrl: 'images/flashcards/20-cop.jpg'
    },
    {
      id: '21',
      caption: 'Hop',
      imageUrl: 'images/flashcards/21-hop.jpg'
    },
    {
      id: '22',
      caption: 'Top',
      imageUrl: 'images/flashcards/22-top.png'
    },
    {
      id: '23',
      caption: 'Pop',
      imageUrl: 'images/flashcards/23-pop.jpg'
    },
    {
      id: '24',
      caption: 'Pot',
      imageUrl: 'images/flashcards/24-pot.jpg'
    },
    {
      id: '25',
      caption: 'Stop',
      imageUrl: 'images/flashcards/25-stop.jpg'
    },
    {
      id: '26',
      caption: 'Mop',
      imageUrl: 'images/flashcards/26-mop.jpg'
    },
    {
      id: '27',
      caption: 'Fog',
      imageUrl: 'images/flashcards/27-fog.jpg'
    },
    {
      id: '28',
      caption: 'Rod',
      imageUrl: 'images/flashcards/28-rod.png'
    },
    {
      id: '29',
      caption: 'Rob',
      imageUrl: 'images/flashcards/29-rob.jpg'
    },
    {
      id: '30',
      caption: 'Sob',
      imageUrl: 'images/flashcards/30-sob.jpg'
    },
    {
      id: '31',
      caption: 'Computer',
      imageUrl: 'images/flashcards/31-computer.jpg'
    },
    {
      id: '32',
      caption: 'Tablet',
      imageUrl: 'images/flashcards/32-tablet.png'
    },
    {
      id: '33',
      caption: 'Smart Speaker',
      imageUrl: 'images/flashcards/33-smart-speaker.jpg'
    },
    {
      id: '34',
      caption: 'Vacuum Cleaner',
      imageUrl: 'images/flashcards/34-vacuum-cleaner.jpg'
    },
    {
      id: '35',
      caption: 'Voice assistant',
      imageUrl: 'images/flashcards/35-voice-assistant.webp'
    },
    {
      id: '36',
      caption: 'Google Map',
      imageUrl: 'images/flashcards/36-google-map.jpg'
    },
    {
      id: '37',
      caption: 'Robot',
      imageUrl: 'images/flashcards/37-robot.jpg'
    },
    {
      id: '38',
      caption: 'Smartphone',
      imageUrl: 'images/flashcards/38-smartphone.png'
    },
    {
      id: '39',
      caption: 'Coding',
      imageUrl: 'images/flashcards/39-coding.jpg'
    },
    {
      id: '40',
      caption: 'Sensor',
      imageUrl: 'images/flashcards/40-sensor.jpg'
    },
    {
      id: '41',
      caption: 'Move Forward',
      imageUrl: 'images/flashcards/41-move-forward.jpg'
    },
    {
      id: '42',
      caption: 'Move Backward',
      imageUrl: 'images/flashcards/42-move-backward.jpg'
    },
    {
      id: '43',
      caption: 'Turn Left',
      imageUrl: 'images/flashcards/43-turn-left.jpg'
    },
    {
      id: '44',
      caption: 'Turn Right',
      imageUrl: 'images/flashcards/44-turn-right.jpg'
    },
    {
      id: '45',
      caption: 'Step',
      imageUrl: 'images/flashcards/45-step.jpg'
    },
    {
      id: '46',
      caption: 'Loop',
      imageUrl: 'images/flashcards/46-loop.png'
    },
    {
      id: '47',
      caption: 'Sequence',
      imageUrl: 'images/flashcards/47-sequence.jpg'
    },
    {
      id: '48',
      caption: 'Spring',
      imageUrl: 'images/flashcards/48-spring.jpg'
    },
    {
      id: '49',
      caption: 'King',
      imageUrl: 'images/flashcards/49-king.jpg'
    },
    {
      id: '50',
      caption: 'Bring',
      imageUrl: 'images/flashcards/50-bring.jpg'
    },
    {
      id: '51',
      caption: 'Song',
      imageUrl: 'images/flashcards/51-song.jpg'
    },
    {
      id: '56',
      caption: 'Ring',
      imageUrl: 'images/flashcards/56-ring.jpg'
    },
    {
      id: '57',
      caption: 'Ping Pong',
      imageUrl: 'images/flashcards/57-ping-pong.jpg'
    },
    {
      id: '58',
      caption: 'Wing',
      imageUrl: 'images/flashcards/58-wing.jpg'
    },
    {
      id: '59',
      caption: 'Building',
      imageUrl: 'images/flashcards/59-building.jpg'
    },
    {
      id: '52',
      caption: 'Mink',
      imageUrl: 'images/flashcards/52-mink.jpg'
    },
    {
      id: '53',
      caption: 'Bank',
      imageUrl: 'images/flashcards/53-bank.jpg'
    },
    {
      id: '54',
      caption: 'Blank',
      imageUrl: 'images/flashcards/54-blank.png'
    },
    {
      id: '55',
      caption: 'Wink',
      imageUrl: 'images/flashcards/55-wink.jpg'
    },
    {
      id: '60',
      caption: 'Sink',
      imageUrl: 'images/flashcards/60-sink.jpg'
    },
    {
      id: '61',
      caption: 'Pink',
      imageUrl: 'images/flashcards/61-pink.png'
    },
    {
      id: '62',
      caption: 'Drink',
      imageUrl: 'images/flashcards/62-drink.jpg'
    },
    {
      id: '63',
      caption: 'Think',
      imageUrl: 'images/flashcards/63-think.jpg'
    },
    {
      id: '64',
      caption: 'Photo',
      imageUrl: 'images/flashcards/64-photo.png'
    },
    {
      id: '65',
      caption: 'Dolphin',
      imageUrl: 'images/flashcards/65-dolphin.jpg'
    },
    {
      id: '66',
      caption: 'Elephant',
      imageUrl: 'images/flashcards/66-elephant.jpg'
    },
    {
      id: '67',
      caption: 'Bug',
      imageUrl: 'images/flashcards/67-bug.jpg'
    },
    {
      id: '68',
      caption: 'Tug',
      imageUrl: 'images/flashcards/68-tug.jpg'
    },
    {
      id: '69',
      caption: 'Nut',
      imageUrl: 'images/flashcards/69-nut.jpg'
    },
    {
      id: '70',
      caption: 'Mud',
      imageUrl: 'images/flashcards/70-mud.jpg'
    },
    {
      id: '71',
      caption: 'Hut',
      imageUrl: 'images/flashcards/71-hut.jpg'
    },
    {
      id: '72',
      caption: 'Cut',
      imageUrl: 'images/flashcards/72-cut.jpg'
    },
    {
      id: '73',
      caption: 'Tub',
      imageUrl: 'images/flashcards/73-tub.jpg'
    },
    {
      id: '74',
      caption: 'Fun',
      imageUrl: 'images/flashcards/74-fun.jpg'
    },
    {
      id: '75',
      caption: 'Hug',
      imageUrl: 'images/flashcards/75-hug.jpg'
    },
    {
      id: '76',
      caption: 'Rug',
      imageUrl: 'images/flashcards/76-rug.jpg'
    },

    // Handicrafts I
    {
      id: '77',
      caption: 'Pottery/Ceramic',
      imageUrl: 'images/flashcards/77-pottery-ceramic.jpg'
    },
    {
      id: '78',
      caption: 'Bamboo/Rattan',
      imageUrl: 'images/flashcards/78-bamboo-rattan.jpg'
    },
    {
      id: '79',
      caption: 'Paper',
      imageUrl: 'images/flashcards/79-paper.png'
    },
    {
      id: '80',
      caption: 'Plastic',
      imageUrl: 'images/flashcards/80-plastic.jpg'
    },
    {
      id: '81',
      caption: 'Fabric',
      imageUrl: 'images/flashcards/81-fabric.png'
    },
    {
      id: '82',
      caption: 'Yarn/Wool',
      imageUrl: 'images/flashcards/82-yarn-wool.jpg'
    },
    {
      id: '83',
      caption: 'Glass',
      imageUrl: 'images/flashcards/83-glass.jpg'
    },
    {
      id: '84',
      caption: 'Rubber',
      imageUrl: 'images/flashcards/84-rubber.webp'
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
    //   imageUrl: 'images/flashcards/86-case.jpg'
    // },
    // {
    //   id: '87',
    //   caption: 'Chair',
    //   imageUrl: 'https://bestflashcard.com/images/vocabulary/english/oxford-phonics-world-2-unit-1-a/chair.PNG'
    // },
    // {
    //   id: '88',
    //   caption: 'Basket',
    //   imageUrl: 'images/flashcards/88-basket.jpg'
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
    //   imageUrl: 'images/flashcards/93-scarf.jpg'
    // },
    // {
    //   id: '94',
    //   caption: 'Sweater',
    //   imageUrl: 'images/flashcards/94-sweater.jpg'
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
      imageUrl: 'images/flashcards/260-hope.jpg'
    },
    {
      id: '99',
      caption: 'Knot',
      imageUrl: 'images/flashcards/99-knot.jpg'
    },
    {
      id: '100',
      caption: 'Knead',
      imageUrl: 'images/flashcards/100-knead.jpg'
    },
    {
      id: '101',
      caption: 'Knee',
      imageUrl: 'images/flashcards/101-knee.jpg'
    },
    // 2 Consonant pattern: TCH - catch, pitch, crutch, match
    {
      id: '102',
      caption: 'Catch',
      imageUrl: 'images/flashcards/102-catch.jpg'
    },
    {
      id: '103',
      caption: 'Pitch',
      imageUrl: 'images/flashcards/103-pitch.jpg'
    },
    {
      id: '104',
      caption: 'Crutch',
      imageUrl: 'images/flashcards/104-crutch.jpg'
    },
    {
      id: '105',
      caption: 'Match',
      imageUrl: 'images/flashcards/105-match.jpg'
    },
    // 3 Consonant pattern: MB - lamb, limb, crumb, thumb
    {
      id: '106',
      caption: 'Lamb',
      imageUrl: 'images/flashcards/106-lamb.jpg'
    },
    {
      id: '107',
      caption: 'Limb',
      imageUrl: 'images/flashcards/107-limb.jpg'
    },
    {
      id: '108',
      caption: 'Crumb',
      imageUrl: 'images/flashcards/108-crumb.jpg'
    },
    {
      id: '109',
      caption: 'Thumb',
      imageUrl: 'images/flashcards/109-thumb.jpg'
    },
    // 4 Consonant pattern: WR - wrap, unwrap, write, wreath
    {
      id: '110',
      caption: 'Wrap',
      imageUrl: 'images/flashcards/110-wrap.jpg'
    },
    {
      id: '111',
      caption: 'Unwrap',
      imageUrl: 'images/flashcards/111-unwrap.jpg'
    },
    {
      id: '112',
      caption: 'Write',
      imageUrl: 'images/flashcards/112-write.jpg'
    },
    {
      id: '113',
      caption: 'Wreath',
      imageUrl: 'images/flashcards/113-wreath.jpg'
    },

    // Long Vowel A (ai / ay)
    {
      id: '114',
      caption: 'Snail',
      imageUrl: 'images/flashcards/114-snail.jpg'
    },
    {
      id: '115',
      caption: 'Paint',
      imageUrl: 'images/flashcards/115-paint.jpg'
    },
    {
      id: '116',
      caption: 'Tail',
      imageUrl: 'images/flashcards/116-tail.jpg'
    },
    {
      id: '117',
      caption: 'Rail',
      imageUrl: 'images/flashcards/117-rail.jpg'
    },
    {
      id: '118',
      caption: 'Play',
      imageUrl: 'images/flashcards/118-play.jpg'
    },
    {
      id: '119',
      caption: 'Tray',
      imageUrl: 'images/flashcards/119-tray.jpg'
    },
    {
      id: '120',
      caption: 'Hay',
      imageUrl: 'images/flashcards/120-hay.jpg'
    },
    {
      id: '121',
      caption: 'Clay',
      imageUrl: 'images/flashcards/121-clay.jpg'
    },

    // Long Vowel A (a_e)
    {
      id: '122',
      caption: 'Bake',
      imageUrl: 'images/flashcards/122-bake.jpg'
    },
    {
      id: '123',
      caption: 'Cake',
      imageUrl: 'images/flashcards/123-cake.jpg'
    },
    {
      id: '124',
      caption: 'Late',
      imageUrl: 'images/flashcards/124-late.jpg'
    },
    {
      id: '125',
      caption: 'Take',
      imageUrl: 'images/flashcards/125-take.jpg'
    },
    {
      id: '126',
      caption: 'Lake',
      imageUrl: 'images/flashcards/126-lake.jpg'
    },
    {
      id: '127',
      caption: 'Wave',
      imageUrl: 'images/flashcards/127-wave.jpg'
    },
    {
      id: '128',
      caption: 'Same',
      imageUrl: 'images/flashcards/128-same.jpg'
    },
    {
      id: '129',
      caption: 'Name',
      imageUrl: 'images/flashcards/129-name.jpg'
    },

    // Letter Dd words
    {
      id: '130',
      caption: 'Dive',
      imageUrl: 'images/flashcards/130-dive.jpg'
    },
    {
      id: '131',
      caption: 'Dig',
      imageUrl: 'images/flashcards/131-dig.jpg'
    },
    {
      id: '132',
      caption: 'Dad',
      imageUrl: 'images/flashcards/132-dad.jpg'
    },
    {
      id: '133',
      caption: 'Panda',
      imageUrl: 'images/flashcards/133-panda.jpg'
    },
    {
      id: '134',
      caption: 'Windy',
      imageUrl: 'images/flashcards/134-windy.jpg'
    },
    {
      id: '135',
      caption: 'Candy',
      imageUrl: 'images/flashcards/135-candy.jpg'
    },
    {
      id: '136',
      caption: 'Lid',
      imageUrl: 'images/flashcards/136-lid.jpg'
    },
    {
      id: '137',
      caption: 'Sled',
      imageUrl: 'images/flashcards/137-sled.jpg'
    },
    {
      id: '138',
      caption: 'Bed',
      imageUrl: 'images/flashcards/138-bed.jpg'
    },

    // Letter Gg words
    {
      id: '139',
      caption: 'Garden',
      imageUrl: 'images/flashcards/139-garden.jpg'
    },
    {
      id: '140',
      caption: 'Grab',
      imageUrl: 'images/flashcards/140-grab.jpg'
    },
    {
      id: '141',
      caption: 'Goat',
      imageUrl: 'images/flashcards/141-goat.jpg'
    },
    {
      id: '142',
      caption: 'Sugar',
      imageUrl: 'images/flashcards/142-sugar.jpg'
    },
    {
      id: '143',
      caption: 'Yogurt',
      imageUrl: 'images/flashcards/143-yogurt.jpg'
    },
    {
      id: '144',
      caption: 'Dragon',
      imageUrl: 'images/flashcards/144-dragon.jpg'
    },
    {
      id: '145',
      caption: 'Frog',
      imageUrl: 'images/flashcards/145-frog.jpg'
    },

    // Letter Oo words
    {
      id: '146',
      caption: 'Ostrich',
      imageUrl: 'images/flashcards/146-ostrich.jpg'
    },
    {
      id: '147',
      caption: 'Otter',
      imageUrl: 'images/flashcards/147-otter.jpg'
    },
    {
      id: '148',
      caption: 'Orange',
      imageUrl: 'images/flashcards/148-orange.png'
    },
    {
      id: '149',
      caption: 'Sock',
      imageUrl: 'images/flashcards/149-sock.jpg'
    },
    {
      id: '150',
      caption: 'Rock',
      imageUrl: 'images/flashcards/150-rock.jpg'
    },

    // Consonant pattern: G
    {
      id: '151',
      caption: 'Game',
      imageUrl: 'images/flashcards/151-game.jpg'
    },
    {
      id: '152',
      caption: 'Glide',
      imageUrl: 'images/flashcards/152-glide.jpg'
    },
    {
      id: '153',
      caption: 'Gap',
      imageUrl: 'images/flashcards/153-gap.jpg'
    },
    {
      id: '154',
      caption: 'Goal',
      imageUrl: 'images/flashcards/154-goal.jpg'
    },
    {
      id: '155',
      caption: 'Gem',
      imageUrl: 'images/flashcards/155-gem.jpg'
    },
    {
      id: '156',
      caption: 'Magic',
      imageUrl: 'images/flashcards/156-magic.jpg'
    },
    {
      id: '157',
      caption: 'Stage',
      imageUrl: 'images/flashcards/157-stage.jpg'
    },
    {
      id: '158',
      caption: 'Huge',
      imageUrl: 'images/flashcards/158-huge.jpg'
    },

    // Consonant pattern: C
    {
      id: '159',
      caption: 'Cape',
      imageUrl: 'images/flashcards/159-cape.jpg'
    },
    {
      id: '160',
      caption: 'Cane',
      imageUrl: 'images/flashcards/160-cane.jpg'
    },
    {
      id: '161',
      caption: 'Cab',
      imageUrl: 'images/flashcards/161-cab.png'
    },
    {
      id: '162',
      caption: 'Cone',
      imageUrl: 'images/flashcards/162-cone.jpg'
    },
    {
      id: '163',
      caption: 'Mice',
      imageUrl: 'images/flashcards/163-mice.png'
    },
    {
      id: '164',
      caption: 'City',
      imageUrl: 'images/flashcards/164-city.jpg'
    },
    {
      id: '165',
      caption: 'Fancy',
      imageUrl: 'images/flashcards/165-fancy.jpg'
    },
    {
      id: '166',
      caption: 'Lacy',
      imageUrl: 'images/flashcards/166-lacy.jpg'
    },

    // Musical Instruments
    {
      id: '167',
      caption: 'Guitar',
      imageUrl: 'images/flashcards/167-guitar.jpg'
    },
    {
      id: '168',
      caption: 'Tambourine',
      imageUrl: 'images/flashcards/168-tambourine.jpg'
    },
    {
      id: '169',
      caption: 'Drum',
      imageUrl: 'images/flashcards/169-drum.jpg'
    },
    {
      id: '170',
      caption: 'Piano',
      imageUrl: 'images/flashcards/170-piano.png'
    },
    {
      id: '171',
      caption: 'Maracas',
      imageUrl: 'images/flashcards/171-maracas.jpg'
    },
    {
      id: '174',
      caption: 'Violin',
      imageUrl: 'images/flashcards/174-violin.jpg'
    },
    {
      id: '175',
      caption: 'Xylophone',
      imageUrl: 'images/flashcards/175-xylophone.jpg'
    },
    {
      id: '176',
      caption: 'Handbell',
      imageUrl: 'images/flashcards/176-handbell.jpg'
    },
    {
      id: '177',
      caption: 'tea',
      imageUrl: 'images/flashcards/177-tea.png'
    },
    {
      id: '178',
      caption: 'pea',
      imageUrl: "images/flashcards/178-pea.jpg"
    },
    {
      id: '179',
      caption: 'seal',
      imageUrl: "images/flashcards/179-seal.jpg"
    },
    {
      id: '180',
      caption: 'meal',
      imageUrl: "images/flashcards/180-meal.jpg"
    },
    {
      id: '181',
      caption: 'leap',
      imageUrl: "images/flashcards/181-leap.jpeg"
    },
    {
      id: '182',
      caption: 'clean',
      imageUrl: "images/flashcards/182-clean.jpg"
    },
    {
      id: '183',
      caption: 'stream',
      imageUrl: "images/flashcards/183-stream.jpg"
    },
    {
      id: '184',
      caption: 'dream',
      imageUrl: "images/flashcards/184-dream.jpg"
    },
    {
      id: '185',
      caption: 'see',
      imageUrl: "images/flashcards/185-see.jpg"
    },
    {
      id: '186',
      caption: 'meet',
      imageUrl: "images/flashcards/186-meet.jpg"
    },
    {
      id: '187',
      caption: 'seed',
      imageUrl: "images/flashcards/187-seed.jpg"
    },
    {
      id: '188',
      caption: 'feed',
      imageUrl: "images/flashcards/188-feed.jpg"
    },
    {
      id: '189',
      caption: 'need',
      imageUrl: "images/flashcards/189-need.jpg"
    },
    {
      id: '190',
      caption: 'week',
      imageUrl: "images/flashcards/190-week.jpg"
    },
    {
      id: '191',
      caption: 'beet',
      imageUrl: "images/flashcards/191-beet.jpg"
    },
    {
      id: '192',
      caption: 'leek',
      imageUrl: "images/flashcards/192-leek.jpg"
    },
    {
      id: '193',
      caption: 'Clean/decorate the house',
      imageUrl: "images/flashcards/193-clean-decorate-the-house.jpg"
    },
    {
      id: '194',
      caption: 'Make Chung cake',
      imageUrl: "images/flashcards/194-make-chung-cake.jpg"
    },
    {
      id: '195',
      caption: 'Go to the Tet market',
      imageUrl: "images/flashcards/195-go-to-the-tet-market.jpg"
    },
    {
      id: '196',
      caption: 'Visit grandparents',
      imageUrl: "images/flashcards/196-visit-grandparents.jpg"
    },
    {
      id: '197',
      caption: 'Meet friends',
      imageUrl: "images/flashcards/197-meet-friends.jpg"
    },
    {
      id: '198',
      caption: 'Watch fireworks',
      imageUrl: "images/flashcards/198-watch-fireworks.jpg"
    },
    {
      id: '199',
      caption: 'Go to the Pagoda',
      imageUrl: "images/flashcards/199-go-to-the-pagoda.jpg"
    },
    {
      id: '200',
      caption: 'Get lucky money',
      imageUrl: "images/flashcards/200-get-lucky-money.jpg"
    },
    {
      id: '201',
      caption: 'Lucky money',
      imageUrl: 'images/flashcards/201-lucky-money.jpg'
    },
    {
      id: '202',
      caption: 'Chung cake',
      imageUrl: 'images/flashcards/202-chung-cake.jpg'
    },
    {
      id: '203',
      caption: 'Kumquat tree',
      imageUrl: 'images/flashcards/203-kumquat-tree.jpg'
    },
    {
      id: '204',
      caption: 'Fireworks',
      imageUrl: 'images/flashcards/204-fireworks.jpg'
    },
    {
      id: '205',
      caption: 'Firecrackers',
      imageUrl: 'images/flashcards/205-firecrackers.jpg'
    },
    {
      id: '206',
      caption: 'Peach blossom',
      imageUrl: 'images/flashcards/206-peach-blossom.jpg'
    },

    // Vowel patterns: oi, oy
    {
      id: '207',
      caption: 'oink',
      imageUrl: "images/flashcards/207-oink.jpg"
    },
    {
      id: '208',
      caption: 'oil',
      imageUrl: "images/flashcards/208-oil.jpg"
    },
    {
      id: '209',
      caption: 'soil',
      imageUrl: "images/flashcards/209-soil.jpg"
    },
    {
      id: '210',
      caption: 'coin',
      imageUrl: "images/flashcards/210-coin.jpg"
    },
    {
      id: '211',
      caption: 'boy',
      imageUrl: "images/flashcards/211-boy.jpg"
    },
    {
      id: '212',
      caption: 'toy',
      imageUrl: "images/flashcards/212-toy.jpg"
    },
    {
      id: '213',
      caption: 'joy',
      imageUrl: "images/flashcards/213-joy.jpg"
    },
    {
      id: '214',
      caption: 'soybean',
      imageUrl: "images/flashcards/214-soybean.jpg"
    },

    // Vowel patterns: ou and ow
    {
      id: '215',
      caption: 'shout',
      imageUrl: "images/flashcards/215-shout.jpg"
    },
    {
      id: '216',
      caption: 'pouch',
      imageUrl: "images/flashcards/216-pouch.jpg"
    },
    {
      id: '217',
      caption: 'pout',
      imageUrl: "images/flashcards/217-pout.jpg"
    },
    {
      id: '218',
      caption: 'ground',
      imageUrl: "images/flashcards/218-ground.jpg"
    },
    {
      id: '219',
      caption: 'owl',
      imageUrl: "images/flashcards/219-owl.jpg"
    },
    {
      id: '220',
      caption: 'cow',
      imageUrl: "images/flashcards/220-cow.jpg"
    },
    {
      id: '221',
      caption: 'frown',
      imageUrl: "images/flashcards/221-frown.jpg"
    },
    {
      id: '222',
      caption: 'down',
      imageUrl: "images/flashcards/222-down.jpg"
    },

    // Letter Uu - beginning and middle sounds
    {
      id: '224',
      caption: 'umbrella',
      imageUrl: "images/flashcards/224-umbrella.png"
    },
    {
      id: '225',
      caption: 'up',
      imageUrl: "images/flashcards/225-up.jpg"
    },
    {
      id: '226',
      caption: 'under',
      imageUrl: "images/flashcards/226-under.jpg"
    },
    {
      id: '227',
      caption: 'Cup',
      imageUrl: "images/flashcards/227-cup.jpg"
    },

    // Letter Ll - beginning and middle sounds
    {
      id: '228',
      caption: 'Lion',
      imageUrl: "images/flashcards/228-lion.jpg"
    },
    {
      id: '229',
      caption: 'little',
      imageUrl: "images/flashcards/229-little.jpg"
    },
    {
      id: '230',
      caption: 'laugh',
      imageUrl: "images/flashcards/230-laugh.jpg"
    },
    {
      id: '231',
      caption: 'leg',
      imageUrl: "images/flashcards/231-leg.jpg"
    },
    {
      id: '232',
      caption: 'lime',
      imageUrl: "images/flashcards/232-lime.jpg"
    },
    {
      id: '233',
      caption: 'plum',
      imageUrl: "images/flashcards/233-plum.jpg"
    },
    {
      id: '234',
      caption: 'fly',
      imageUrl: "images/flashcards/234-fly.jpg"
    },
    {
      id: '235',
      caption: 'to fly',
      imageUrl: "images/flashcards/235-to-fly.jpg"
    },
    {
      id: '236',
      caption: 'plane',
      imageUrl: "images/flashcards/236-plane.jpg"
    },

    // Letter Bb - beginning, middle, and ending sounds
    {
      id: '237',
      caption: 'Box',
      imageUrl: 'images/flashcards/237-box.jpg'
    },
    {
      id: '238',
      caption: 'bee',
      imageUrl: 'images/flashcards/238-bee.jpg'
    },
    {
      id: '239',
      caption: 'bird',
      imageUrl: 'images/flashcards/239-bird.jpg'
    },
    {
      id: '240',
      caption: 'bus',
      imageUrl: 'images/flashcards/240-bus.jpeg'
    },
    {
      id: '241',
      caption: 'bag',
      imageUrl: 'images/flashcards/241-bag.jpg'
    },
    {
      id: '242',
      caption: 'cowboy',
      imageUrl: 'images/flashcards/242-cowboy.jpg'
    },
    {
      id: '243',
      caption: 'web',
      imageUrl: 'images/flashcards/243-web.jpg'
    },
    {
      id: '244',
      caption: 'crab',
      imageUrl: 'images/flashcards/244-crab.jpg'
    },
    {
      id: '245',
      caption: 'bib',
      imageUrl: 'images/flashcards/245-bib.jpg'
    },

    // Letter Jj - beginning sounds
    {
      id: '246',
      caption: 'Jungle',
      imageUrl: 'images/flashcards/246-jungle.jpg'
    },
    {
      id: '247',
      caption: 'jaguar',
      imageUrl: 'images/flashcards/247-jaguar.jpg'
    },
    {
      id: '248',
      caption: 'jump',
      imageUrl: 'images/flashcards/248-jump.jpg'
    },

    // Letter Ww - beginning and middle sounds
    {
      id: '249',
      caption: 'Watch',
      imageUrl: 'images/flashcards/249-watch.jpg'
    },
    {
      id: '250',
      caption: 'wolf',
      imageUrl: 'images/flashcards/250-wolf.jpg'
    },
    {
      id: '251',
      caption: 'wig',
      imageUrl: 'images/flashcards/251-wig.jpg'
    },
    {
      id: '252',
      caption: 'wet',
      imageUrl: 'images/flashcards/252-wet.jpg'
    },
    {
      id: '253',
      caption: 'swing',
      imageUrl: 'images/flashcards/253-swing.jpg'
    },
    {
      id: '254',
      caption: 'swan',
      imageUrl: 'images/flashcards/254-swan.jpg'
    },

    // Long vowel: o_e
    {
      id: '255',
      caption: 'mole',
      imageUrl: 'images/flashcards/255-mole.jpg'
    },
    {
      id: '256',
      caption: 'home',
      imageUrl: 'images/flashcards/256-home.jpg'
    },
    {
      id: '257',
      caption: 'hole',
      imageUrl: 'images/flashcards/257-hole.jpg'
    },
    {
      id: '258',
      caption: 'rope',
      imageUrl: 'images/flashcards/258-rope.png'
    },
    {
      id: '259',
      caption: 'bone',
      imageUrl: 'images/flashcards/259-bone.jpg'
    },
    {
      id: '260',
      caption: 'hope',
      imageUrl: 'images/flashcards/260-hope.jpg'
    },
    {
      id: '261',
      caption: 'poke',
      imageUrl: 'images/flashcards/261-poke.jpg'
    },
    {
      id: '262',
      caption: 'stone',
      imageUrl: 'images/flashcards/262-stone.jpg'
    },

    // Vowel pattern: oo
    {
      id: '263',
      caption: 'wood',
      imageUrl: 'images/flashcards/263-wood.jpg'
    },
    {
      id: '264',
      caption: 'cook',
      imageUrl: 'images/flashcards/264-cook.jpg'
    },
    {
      id: '265',
      caption: 'foot',
      imageUrl: 'images/flashcards/265-foot.jpg'
    },
    {
      id: '266',
      caption: 'scoop',
      imageUrl: 'images/flashcards/266-scoop.jpg'
    },
    {
      id: '267',
      caption: 'spoon',
      imageUrl: 'images/flashcards/267-spoon.jpg'
    },
    {
      id: '268',
      caption: 'food',
      imageUrl: 'images/flashcards/268-food.jpg'
    },
    {
      id: '269',
      caption: 'zoo',
      imageUrl: 'images/flashcards/269-zoo.jpg'
    },

    // Vowel patterns: au, aw
    {
      id: '270',
      caption: 'August',
      imageUrl: 'images/flashcards/270-august.jpg'
    },
    // {
    //   id: '271',
    //   caption: 'lunch',
    //   imageUrl: 'images/flashcards/271-lunch.jpg'
    // },
    {
      id: '271',
      caption: 'launch',
      imageUrl: 'images/flashcards/271-launch.jpg'
    },
    {
      id: '272',
      caption: 'laundry',
      imageUrl: 'images/flashcards/272-laundry.jpg'
    },
    {
      id: '273',
      caption: 'maul',
      imageUrl: 'images/flashcards/273-maul.jpg'
    },
    {
      id: '274',
      caption: 'hawk',
      imageUrl: 'images/flashcards/274-hawk.jpeg'
    },
    {
      id: '275',
      caption: 'crawl',
      imageUrl: 'images/flashcards/275-crawl.jpg'
    },
    {
      id: '276',
      caption: 'paw',
      imageUrl: 'images/flashcards/276-paw.jpg'
    },
    {
      id: '277',
      caption: 'claw',
      imageUrl: 'images/flashcards/277-claw.jpg'
    },

    // Vowel pattern: ar
    {
      id: '278',
      caption: 'farm',
      imageUrl: 'images/flashcards/278-farm.jpg'
    },
    {
      id: '279',
      caption: 'cart',
      imageUrl: 'images/flashcards/279-cart.jpg'
    },
    {
      id: '280',
      caption: 'yard',
      imageUrl: 'images/flashcards/280-yard.png'
    },
    {
      id: '281',
      caption: 'barn',
      imageUrl: 'images/flashcards/281-barn.jpg'
    },

    // Caterpillar story (The Very Hungry Caterpillar) – characters & food
    {
      id: '282',
      caption: 'egg',
      imageUrl: 'images/flashcards/282-egg.jpg'
    },
    {
      id: '283',
      caption: 'caterpillar',
      imageUrl: 'images/flashcards/283-caterpillar.jpg'
    },
    {
      id: '284',
      caption: 'cocoon',
      imageUrl: 'images/flashcards/284-cocoon.jpg'
    },
    {
      id: '285',
      caption: 'butterfly',
      imageUrl: 'images/flashcards/285-butterfly.jpg'
    },
    {
      id: '287',
      caption: 'pear',
      imageUrl: 'images/flashcards/287-pear.jpg'
    },
    {
      id: '288',
      caption: 'strawberry',
      imageUrl: 'images/flashcards/288-strawberry.jpg'
    },
    {
      id: '289',
      caption: 'chocolate cake',
      imageUrl: 'images/flashcards/289-chocolate-cake.jpg'
    },
    {
      id: '290',
      caption: 'ice-cream cone',
      imageUrl: 'images/flashcards/290-ice-cream-cone.jpg'
    },
    {
      id: '291',
      caption: 'pickle',
      imageUrl: 'images/flashcards/291-pickle.jpg'
    },
    {
      id: '292',
      caption: 'slice of cheese',
      imageUrl: 'images/flashcards/292-slice-of-cheese.jpg'
    },
    {
      id: '293',
      caption: 'slice of salami',
      imageUrl: 'images/flashcards/293-slice-of-salami.jpg'
    },
    {
      id: '294',
      caption: 'lollipop',
      imageUrl: 'images/flashcards/294-lollipop.jpg'
    },
    {
      id: '295',
      caption: 'piece of cherry pie',
      imageUrl: 'images/flashcards/295-piece-of-cherry-pie.jpg'
    },
    {
      id: '296',
      caption: 'sausage',
      imageUrl: 'images/flashcards/296-sausage.jpg'
    },
    {
      id: '297',
      caption: 'green leaf',
      imageUrl: 'images/flashcards/297-green-leaf.jpg'
    },

    // Farm and home words (from photo set)
    {
      id: '298',
      caption: 'fork',
      imageUrl: 'images/flashcards/298-fork.jpg'
    },
    {
      id: '299',
      caption: 'corn',
      imageUrl: 'images/flashcards/299-corn.jpg'
    },
    {
      id: '300',
      caption: 'porch',
      imageUrl: 'images/flashcards/300-porch.jpg'
    },
    {
      id: '301',
      caption: 'north',
      imageUrl: 'images/flashcards/301-north.jpg'
    },

    // Vowel patterns: air, are, ear
    {
      id: '302',
      caption: 'airplane',
      imageUrl: 'images/flashcards/302-airplane.jpg'
    },
    {
      id: '303',
      caption: 'fair',
      imageUrl: 'images/flashcards/303-fair.jpg'
    },
    {
      id: '304',
      caption: 'chair',
      imageUrl: 'images/flashcards/304-chair.jpg'
    },
    {
      id: '305',
      caption: 'hare',
      imageUrl: 'images/flashcards/305-hare.jpg'
    },
    {
      id: '306',
      caption: 'square',
      imageUrl: 'images/flashcards/306-square.jpg'
    },
    {
      id: '307',
      caption: 'share',
      imageUrl: 'images/flashcards/307-share.jpg'
    },
    {
      id: '308',
      caption: 'bear',
      imageUrl: 'images/flashcards/308-bear.jpg'
    },
    {
      id: '309',
      caption: 'tear',
      imageUrl: 'images/flashcards/309-tear.jpg'
    },

    // Camping
    {
      id: '310',
      caption: 'tent',
      imageUrl: 'images/flashcards/310-tent.jpg'
    },
    {
      id: '311',
      caption: 'torch',
      imageUrl: 'images/flashcards/311-torch.jpg'
    },
    {
      id: '311b',
      caption: 'flashlight',
      imageUrl: 'images/flashcards/311b-flashlight.jpg'
    },
    {
      id: '312',
      caption: 'map',
      imageUrl: 'images/flashcards/312-map.jpg'
    },
    {
      id: '313',
      caption: 'sleeping bag',
      imageUrl: 'images/flashcards/313-sleeping-bag.jpg'
    },
    {
      id: '314',
      caption: 'backpack',
      imageUrl: 'images/flashcards/314-backpack.png'
    },

    // Long vowel: u_e
    {
      id: '315',
      caption: 'mule',
      imageUrl: 'images/flashcards/315-mule.jpg'
    },
    {
      id: '316',
      caption: 'cube',
      imageUrl: 'images/flashcards/316-cube.jpg'
    },
    {
      id: '317',
      caption: 'cute',
      imageUrl: 'images/flashcards/317-cute.png'
    },
    {
      id: '318',
      caption: 'mute',
      imageUrl: 'images/flashcards/318-mute.jpg'
    },
    {
      id: '319',
      caption: 'June',
      imageUrl: 'images/flashcards/319-june.jpg'
    },
    {
      id: '320',
      caption: 'dune',
      imageUrl: 'images/flashcards/320-dune.jpg'
    },
    {
      id: '321',
      caption: 'tube',
      imageUrl: 'images/flashcards/321-tube.jpg'
    },
    {
      id: '322',
      caption: 'tune',
      imageUrl: 'images/flashcards/322-tune.jpg'
    },

    // Review short vowel a
    {
      id: '323',
      caption: 'mat',
      imageUrl: 'images/flashcards/323-mat.jpg'
    },
    {
      id: '324',
      caption: 'jam',
      imageUrl: 'images/flashcards/324-jam.jpg'
    },
    {
      id: '325',
      caption: 'nap',
      imageUrl: 'images/flashcards/325-nap.jpg'
    },
    {
      id: '326',
      caption: 'rat',
      imageUrl: 'images/flashcards/326-rat.jpg'
    },
    {
      id: '327',
      caption: 'mad',
      imageUrl: 'images/flashcards/327-mad.jpg'
    },

    // Review short vowel e
    {
      id: '328',
      caption: 'hen',
      imageUrl: 'images/flashcards/328-hen.png'
    },
    {
      id: '329',
      caption: 'pen',
      imageUrl: 'images/flashcards/329-pen.png'
    },
    {
      id: '330',
      caption: 'ten',
      imageUrl: 'images/flashcards/330-ten.png'
    },
    {
      id: '331',
      caption: 'men',
      imageUrl: 'images/flashcards/331-men.png'
    },
    {
      id: '332',
      caption: 'red',
      imageUrl: 'images/flashcards/332-red.png'
    },
    {
      id: '333',
      caption: 'pet',
      imageUrl: 'images/flashcards/333-pet.png'
    },
    {
      id: '334',
      caption: 'end',
      imageUrl: 'images/flashcards/334-end.png'
    },
    {
      id: '335',
      caption: 'bend',
      imageUrl: 'images/flashcards/335-bend.png'
    },
    {
      id: '336',
      caption: 'help',
      imageUrl: 'images/flashcards/336-help.png'
    },
    {
      id: '337',
      caption: 'vet',
      imageUrl: 'images/flashcards/337-vet.png'
    },
    {
      id: '338',
      caption: 'rest',
      imageUrl: 'images/flashcards/338-rest.png'
    },
    {
      id: '339',
      caption: 'rules',
      imageUrl: 'images/flashcards/339-rules.png'
    },
    {
      id: '340',
      caption: 'be quiet',
      imageUrl: 'images/flashcards/340-be-quiet.png'
    },
    {
      id: '341',
      caption: 'sit nicely',
      imageUrl: 'images/flashcards/341-sit-nicely.png'
    },
    {
      id: '342',
      caption: 'be nice/kind',
      imageUrl: 'images/flashcards/342-be-nice-kind.png'
    },
    {
      id: '343',
      caption: 'listen to the teacher',
      imageUrl: 'images/flashcards/343-listen-to-the-teacher.png'
    },
    {
      id: '344',
      caption: 'look and listen',
      imageUrl: 'images/flashcards/344-look-and-listen.png'
    },
    {
      id: '345',
      caption: 'speak English',
      imageUrl: 'images/flashcards/345-speak-english.png'
    },
    {
      id: '346',
      caption: 'raise your hand',
      imageUrl: 'images/flashcards/346-raise-your-hand.png'
    },
    {
      id: '347',
      caption: 'wait your turn',
      imageUrl: 'images/flashcards/347-wait-your-turn.png'
    },
    {
      id: '348',
      caption: 'clean up',
      imageUrl: 'images/flashcards/348-clean-up.png'
    },
    {
      id: '349',
      caption: 'learning corner',
      imageUrl: 'images/flashcards/349-learning-corner.png'
    },
    {
      id: '350',
      caption: 'reading corner',
      imageUrl: 'images/flashcards/350-reading-corner.png'
    },
    {
      id: '351',
      caption: 'building corner',
      imageUrl: 'images/flashcards/351-building-corner.png'
    },
    {
      id: '352',
      caption: 'music corner',
      imageUrl: 'images/flashcards/352-music-corner.png'
    },
    {
      id: '353',
      caption: 'cooking corner',
      imageUrl: 'images/flashcards/353-cooking-corner.png'
    },
    {
      id: '354',
      caption: 'role play corner',
      imageUrl: 'images/flashcards/354-role-play-corner.png'
    },

    // Review short vowel i
    {
      id: '355',
      caption: 'big',
      imageUrl: 'images/flashcards/355-big.png'
    },
    {
      id: '356',
      caption: 'pig',
      imageUrl: 'images/flashcards/356-pig.png'
    },
    {
      id: '357',
      caption: 'sit',
      imageUrl: 'images/flashcards/357-sit.png'
    },
    {
      id: '358',
      caption: 'pit',
      imageUrl: 'images/flashcards/358-pit.png'
    },
    {
      id: '359',
      caption: 'kid',
      imageUrl: 'images/flashcards/359-kid.png'
    },
    {
      id: '360',
      caption: 'bin',
      imageUrl: 'images/flashcards/360-bin.png'
    },
    {
      id: '361',
      caption: 'fig',
      imageUrl: 'images/flashcards/361-fig.png'
    },
    {
      id: '362',
      caption: 'tip',
      imageUrl: 'images/flashcards/362-tip.png'
    },
    {
      id: '363',
      caption: 'rip',
      imageUrl: 'images/flashcards/363-rip.png'
    },
    {
      id: '364',
      caption: 'hit',
      imageUrl: 'images/flashcards/364-hit.png'
    },
    {
      id: '365',
      caption: 'gift',
      imageUrl: 'images/flashcards/365-gift.png'
    },
    {
      id: '366',
      caption: 'twin',
      imageUrl: 'images/flashcards/366-twin.png'
    },
    {
      id: '367',
      caption: 'trip',
      imageUrl: 'images/flashcards/367-trip.png'
    },
    {
      id: '368',
      caption: 'slip',
      imageUrl: 'images/flashcards/368-slip.png'
    },
    {
      id: '369',
      caption: 'flip',
      imageUrl: 'images/flashcards/369-flip.png'
    },

    // Learning Corner
    {
      id: '370',
      caption: 'pencil',
      imageUrl: 'images/flashcards/370-pencil.png'
    },
    {
      id: '371',
      caption: 'crayon',
      imageUrl: 'images/flashcards/371-crayon.png'
    },
    {
      id: '372',
      caption: 'glue',
      imageUrl: 'images/flashcards/372-glue.png'
    },
    {
      id: '373',
      caption: 'scissors',
      imageUrl: 'images/flashcards/373-scissors.png'
    },
    {
      id: '374',
      caption: 'write the letter',
      imageUrl: 'images/flashcards/374-write-the-letter.png'
    },
    {
      id: '375',
      caption: 'do homework',
      imageUrl: 'images/flashcards/375-do-homework.png'
    },

    // Reading Corner
    {
      id: '376',
      caption: 'bookshelf',
      imageUrl: 'images/flashcards/376-bookshelf.png'
    },
    {
      id: '377',
      caption: 'story books',
      imageUrl: 'images/flashcards/377-story-books.png'
    },
    {
      id: '378',
      caption: 'table',
      imageUrl: 'images/flashcards/378-table.png'
    },
    {
      id: '379',
      caption: 'read a book',
      imageUrl: 'images/flashcards/379-read-a-book.png'
    },
    {
      id: '380',
      caption: 'listen to the story',
      imageUrl: 'images/flashcards/380-listen-to-the-story.png'
    },
    {
      id: '381',
      caption: 'tell the story',
      imageUrl: 'images/flashcards/381-tell-the-story.png'
    },

    // Building Corner
    {
      id: '382',
      caption: 'blocks',
      imageUrl: 'images/flashcards/382-blocks.png'
    },
    {
      id: '383',
      caption: 'bricks',
      imageUrl: 'images/flashcards/383-bricks.png'
    },
    {
      id: '384',
      caption: 'safety helmet',
      imageUrl: 'images/flashcards/384-safety-helmet.png'
    },
    {
      id: '385',
      caption: 'build the house',
      imageUrl: 'images/flashcards/385-build-the-house.png'
    },
    {
      id: '386',
      caption: 'build the bridge',
      imageUrl: 'images/flashcards/386-build-the-bridge.png'
    },

    // Music Corner
    {
      id: '387',
      caption: 'musical instruments',
      imageUrl: 'images/flashcards/387-musical-instruments.png'
    },
    {
      id: '388',
      caption: 'play the musical instruments',
      imageUrl: 'images/flashcards/388-play-the-musical-instruments.png'
    },
    {
      id: '389',
      caption: 'sing a song',
      imageUrl: 'images/flashcards/389-sing-a-song.png'
    },

    // Disneyland
    {
      id: '390',
      caption: 'castle',
      imageUrl: 'images/flashcards/390-castle.png'
    },
    {
      id: '391',
      caption: 'park',
      imageUrl: 'images/flashcards/391-park.png'
    },
    {
      id: '392',
      caption: 'princess',
      imageUrl: 'images/flashcards/392-princess.png'
    },
    {
      id: '393',
      caption: 'prince',
      imageUrl: 'images/flashcards/393-prince.png'
    },
    {
      id: '394',
      caption: 'fairy',
      imageUrl: 'images/flashcards/394-fairy.png'
    },
    {
      id: '395',
      caption: 'Mickey & Minnie Mouse',
      imageUrl: 'images/flashcards/395-mickey-minnie-mouse.jpg'
    },
    {
      id: '396',
      caption: 'Donald Duck',
      imageUrl: 'images/flashcards/396-donald-duck.jpg'
    },
    {
      id: '397',
      caption: 'Elsa',
      imageUrl: 'images/flashcards/397-elsa.jpg'
    },
    {
      id: '398',
      caption: 'Anna',
      imageUrl: 'images/flashcards/398-anna.jpg'
    },
    {
      id: '399',
      caption: 'Cinderella',
      imageUrl: 'images/flashcards/399-cinderella.png'
    },
    {
      id: '400',
      caption: 'Moana',
      imageUrl: 'images/flashcards/400-moana.jpg'
    },
    {
      id: '401',
      caption: 'Judy',
      imageUrl: 'images/flashcards/401-judy.jpg'
    },
    {
      id: '402',
      caption: 'Belle',
      imageUrl: 'images/flashcards/402-belle.jpg'
    },
    {
      id: '403',
      caption: 'Beast',
      imageUrl: 'images/flashcards/403-beast.jpg'
    },
    {
      id: '404',
      caption: 'Snow White',
      imageUrl: 'images/flashcards/404-snow-white.png'
    },
    {
      id: '405',
      caption: 'stepmother',
      imageUrl: 'images/flashcards/405-stepmother.jpg'
    },
    {
      id: '406',
      caption: 'stepsisters',
      imageUrl: 'images/flashcards/406-stepsisters.jpg'
    },
    {
      id: '407',
      caption: 'fairy Godmother',
      imageUrl: 'images/flashcards/407-fairy-godmother.jpg'
    },
    {
      id: '408',
      caption: 'pumpkin',
      imageUrl: 'images/flashcards/408-pumpkin.png'
    },
    {
      id: '409',
      caption: 'lizard',
      imageUrl: 'images/flashcards/409-lizard.png'
    },
    {
      id: '410',
      caption: 'mouse',
      imageUrl: 'images/flashcards/410-mouse.png'
    },
    {
      id: '411',
      caption: 'carriage',
      imageUrl: 'images/flashcards/411-carriage.jpg'
    },
    {
      id: '412',
      caption: 'driver',
      imageUrl: 'images/flashcards/412-driver.png'
    },
    {
      id: '413',
      caption: 'sad',
      imageUrl: 'images/flashcards/413-sad.png'
    },
    {
      id: '414',
      caption: 'happy',
      imageUrl: 'images/flashcards/414-happy.png'
    },
    {
      id: '415',
      caption: 'beautiful',
      imageUrl: 'images/flashcards/415-beautiful.png'
    },
    {
      id: '416',
      caption: 'ugly',
      imageUrl: 'images/flashcards/416-ugly.png'
    },
    {
      id: '417',
      caption: 'mean',
      imageUrl: 'images/flashcards/417-mean.png'
    },
    {
      id: '418',
      caption: 'Pinocchio',
      imageUrl: 'images/flashcards/418-pinocchio.jpg'
    },
    {
      id: '419',
      caption: 'fox',
      imageUrl: 'images/flashcards/419-fox.png'
    },
    {
      id: '420',
      caption: 'donkey',
      imageUrl: 'images/flashcards/420-donkey.png'
    },
    {
      id: '421',
      caption: 'sea gull',
      imageUrl: 'images/flashcards/421-sea-gull.png'
    },
    {
      id: '422',
      caption: 'whale',
      imageUrl: 'images/flashcards/422-whale.png'
    },
    {
      id: '423',
      caption: 'long',
      imageUrl: 'images/flashcards/423-long.png'
    },
    {
      id: '424',
      caption: 'small',
      imageUrl: 'images/flashcards/424-small.png'
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
      flashcardIds: ['11', '12', '13', '14', '15', '16', '17', '18'],
      highlightPatterns: ['CK']
    },
    {
      id: 'set6',
      name: 'Short vowel O',
      description: 'Words with short vowel O sound',
      flashcardIds: ['19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
      highlightPatterns: ['O']
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
      flashcardIds: ['48', '49', '50', '51', '56', '57', '58', '59'],
      highlightPatterns: ['NG']
    },
    {
      id: 'set10',
      name: 'Consonant pattern: NK',
      description: 'Words with NK consonant pattern',
      flashcardIds: ['52', '53', '54', '55', '60', '61', '62', '63'],
      highlightPatterns: ['NK']
    },
    {
      id: 'set11',
      name: 'Consonant pattern: PH',
      description: 'Words with PH consonant pattern',
      flashcardIds: ['38', '64', '65', '66'],
      highlightPatterns: ['PH']
    },
    {
      id: 'set12',
      name: 'Short vowel U',
      description: 'Words with short vowel U sound',
      flashcardIds: ['67', '68', '69', '70', '71', '72', '73', '74', '75', '76'],
      highlightPatterns: ['U']
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
      flashcardIds: ['98', '99', '100', '101'],
      highlightPatterns: ['KN']
    },
    {
      id: 'set15',
      name: 'Consonant pattern: TCH',
      description: 'Words with TCH consonant pattern',
      flashcardIds: ['102', '103', '104', '105'],
      highlightPatterns: ['TCH']
    },
    {
      id: 'set16',
      name: 'Consonant pattern: MB',
      description: 'Words with MB consonant pattern',
      flashcardIds: ['106', '107', '108', '109'],
      highlightPatterns: ['MB']
    },
    {
      id: 'set17',
      name: 'Consonant pattern: WR',
      description: 'Words with WR consonant pattern',
      flashcardIds: ['110', '111', '112', '113'],
      highlightPatterns: ['WR']
    },
    {
      id: 'set18',
      name: 'Long Vowel AI / AY',
      description: 'Words with long vowel A sound spelled ai or ay',
      flashcardIds: ['114', '115', '116', '117', '118', '119', '120', '121'],
      highlightPatterns: ['AI', 'AY']
    },
    {
      id: 'set19',
      name: 'Long Vowel A_E',
      description: 'Words with long vowel A sound',
      flashcardIds: ['122', '123', '124', '125', '126', '127', '128', '129'],
      highlightPatterns: ['A', 'E']
    },
    {
      id: 'set20',
      name: 'Letter Dd',
      description: 'Words with Dd sound (beginning, middle, and ending)',
      flashcardIds: ['130', '131', '132', '4', '16', '133', '134', '135', '136', '137', '138'],
      highlightPatterns: ['D']
    },
    {
      id: 'set21',
      name: 'Letter Gg',
      description: 'Words with Gg sound (beginning, middle, and ending)',
      flashcardIds: ['139', '140', '141', '142', '143', '144', '145', '68', '4'],
      highlightPatterns: ['G']
    },
    {
      id: 'set22',
      name: 'Letter Oo',
      description: 'Words with Oo sound (beginning and middle)',
      flashcardIds: ['146', '147', '148', '149', '12', '150'],
      highlightPatterns: ['O']
    },
    {
      id: 'set23',
      name: 'Consonant pattern: G',
      description: 'Words with G consonant pattern (hard and soft G)',
      flashcardIds: ['151', '152', '153', '154', '155', '156', '157', '158'],
      highlightPatterns: ['G']
    },
    {
      id: 'set24',
      name: 'Consonant pattern: C',
      description: 'Words with C consonant pattern (hard and soft C)',
      flashcardIds: ['159', '160', '161', '162', '163', '164', '165', '166'],
      highlightPatterns: ['C']
    },
    {
      id: 'set25',
      name: 'Musical Instruments',
      description: 'Musical instruments vocabulary',
      flashcardIds: ['167', '168', '169', '170', '171', '174', '175', '176']
    },
    {
      id: 'set26',
      name: 'Long vowel: ea',
      description: 'Words with long vowel EA sound',
      flashcardIds: ['177', '178', '179', '180', '181', '182', '183', '184'],
      highlightPatterns: ['EA']
    },
    {
      id: 'set27',
      name: 'Long vowel: ee',
      description: 'Words with long vowel EE sound',
      flashcardIds: ['185', '186', '187', '188', '189', '190', '191', '192'],
      highlightPatterns: ['EE']
    },
    {
      id: 'set28',
      name: 'Tet Holiday',
      description: 'Tet holiday activities',
      flashcardIds: ['193', '194', '195', '196', '197', '198', '199', '200']
    },
    {
      id: 'set29',
      name: 'Tet Symbols',
      description: 'Symbols associated with Tet holiday',
      flashcardIds: ['201', '202', '203', '204', '205', '206']
    },
    {
      id: 'set30',
      name: 'Vowel patterns: oi, oy',
      description: 'Words with oi and oy vowel patterns',
      flashcardIds: ['207', '208', '209', '210', '211', '212', '213', '214'],
      highlightPatterns: ['OI', 'OY']
    },
    {
      id: 'set31',
      name: 'Vowel patterns: ou and ow',
      description: 'Words with ou and ow vowel patterns',
      flashcardIds: ['215', '216', '217', '218', '219', '220', '221', '222'],
      highlightPatterns: ['OU', 'OW']
    },
    {
      id: 'set32',
      name: 'Letter Uu',
      description: 'Words with Uu sound (beginning and middle)',
      flashcardIds: ['223', '224', '225', '226', '227', '2', '70'],
      highlightPatterns: ['U']
    },
    {
      id: 'set33',
      name: 'Letter Ll',
      description: 'Words with Ll sound (beginning and middle)',
      flashcardIds: ['228', '229', '230', '231', '232', '233', '234', '235'],
      highlightPatterns: ['L']
    },
    {
      id: 'set34',
      name: 'Letter Bb',
      description: 'Letter name & sound intro: Bb – beginning, middle, and ending sounds',
      flashcardIds: ['237', '238', '239', '240', '241', '138', '37', '242', '32', '243', '244', '245'],
      highlightPatterns: ['B']
    },
    {
      id: 'set35',
      name: 'Letter Jj',
      description: 'Letter name & sound intro: Jj – beginning sounds',
      flashcardIds: ['246', '247', '248'],
      highlightPatterns: ['J']
    },
    {
      id: 'set36',
      name: 'Letter Ww',
      description: 'Letter name & sound intro: Ww – beginning and middle sounds',
      flashcardIds: ['249', '250', '251', '243', '252', '253', '254'],
      highlightPatterns: ['W']
    },
    {
      id: 'set37',
      name: 'Long vowel: o_e',
      description: 'Words with long vowel O sound (silent e pattern)',
      flashcardIds: ['255', '256', '257', '258', '259', '260', '261', '262'],
      highlightPatterns: ['O', 'E']
    },
    {
      id: 'set38',
      name: 'Vowel pattern: oo',
      description: 'Words with oo vowel pattern',
      flashcardIds: ['263', '9', '264', '265', '266', '267', '268', '269'],
      highlightPatterns: ['OO']
    },
    {
      id: 'set39',
      name: 'Vowel patterns: au, aw',
      description: 'Words with au and aw vowel patterns',
      flashcardIds: ['270', '271', '272', '273', '274', '275', '276', '277'],
      highlightPatterns: ['AU', 'AW']
    },
    {
      id: 'set40',
      name: 'Vowel pattern: ar',
      description: 'Words with ar vowel pattern',
      flashcardIds: ['278', '279', '280', '281'],
      highlightPatterns: ['AR']
    },
    {
      id: 'set41',
      name: 'Caterpillar story',
      description: 'The Very Hungry Caterpillar – characters and caterpillar food',
      flashcardIds: ['282', '283', '284', '285', '286', '8', '287', '233', '288', '148', '289', '290', '291', '292', '293', '294', '295', '296', '297']
    },
    {
      id: 'set42',
      name: 'Vowel pattern: ar, or',
      description: 'Vocabulary from photo set: fork, corn, barn, farm, porch, north, cart, yard',
      flashcardIds: ['298', '299', '281', '278', '300', '301', '279', '280'],
      highlightPatterns: ['AR', 'OR']
    },
    {
      id: 'set43',
      name: 'Vowel patterns: air, are, ear',
      description: 'Words with air, are, and ear vowel patterns',
      flashcardIds: ['302', '303', '304', '305', '306', '307', '308', '287', '309'],
      highlightPatterns: ['AIR', 'ARE', 'EAR']
    },
    {
      id: 'set44',
      name: 'Camping',
      description: 'Camping vocabulary: tent, torch, flashlight, match, map, sleeping bag, backpack',
      flashcardIds: ['310', '311', '311b', '105', '312', '313', '314']
    },
    {
      id: 'set45',
      name: 'Long vowel: u_e',
      description: 'Words with long vowel U sound (silent e pattern)',
      flashcardIds: ['315', '316', '317', '318', '319', '320', '321', '322'],
      highlightPatterns: ['U', 'E']
    },
    {
      id: 'set46',
      name: 'Review short vowel a',
      description: 'Review vocabulary with short vowel A sound',
      flashcardIds: ['3', '323', '324', '325', '326', '327', '312'],
      highlightPatterns: ['A']
    },
    {
      id: 'set47',
      name: 'Review short vowel e',
      description: 'Review vocabulary with short vowel E sound',
      flashcardIds: ['328', '329', '330', '331', '332', '252', '333', '243', '334', '137', '335', '336', '337', '338', '231'],
      highlightPatterns: ['E']
    },
    {
      id: 'set48',
      name: 'Classroom',
      description: 'Classroom rules and activity corner vocabulary',
      flashcardIds: ['339', '340', '341', '342', '343', '344', '345', '346', '347', '348', '349', '350', '351', '352', '353', '354']
    },
    {
      id: 'set49',
      name: 'Review short vowel i',
      description: 'Review vocabulary with short vowel I sound',
      flashcardIds: ['355', '356', '357', '358', '359', '360', '361', '362', '136', '363', '364', '365', '366', '367', '368', '369'],
      highlightPatterns: ['I']
    },
    {
      id: 'set50',
      name: 'Learning Corner',
      description: 'Objects and activities in the learning corner',
      flashcardIds: ['79', '370', '371', '372', '373', '374', '375']
    },
    {
      id: 'set51',
      name: 'Reading Corner',
      description: 'Objects and activities in the reading corner',
      flashcardIds: ['376', '377', '304', '378', '379', '380', '381']
    },
    {
      id: 'set52',
      name: 'Building Corner',
      description: 'Objects and activities in the building corner',
      flashcardIds: ['382', '383', '384', '385', '386']
    },
    {
      id: 'set53',
      name: 'Music Corner',
      description: 'Objects and activities in the music corner',
      flashcardIds: ['387', '388', '389']
    },
    {
      id: 'set54',
      name: 'Disneyland',
      description: 'Disneyland places and characters vocabulary',
      flashcardIds: ['390', '391', '392', '393', '394', '395', '396', '397', '398', '399', '400', '401', '402', '403', '404']
    },
    {
      id: 'set55',
      name: 'Cinderella story',
      description: 'Cinderella story vocabulary: characters, feelings, and concepts',
      flashcardIds: ['399', '405', '406', '407', '393', '408', '239', '409', '410', '411', '5', '412', '413', '414', '415', '416', '417']
    },
    {
      id: 'set56',
      name: 'Pinocchio story',
      description: 'Pinocchio story vocabulary: characters, feelings, concepts, and structure',
      flashcardIds: ['418', '394', '419', '3', '420', '211', '421', '422', '414', '423', '424']
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

  private normalizeFlashcard(flashcard: Flashcard): Flashcard {
    return {
      ...flashcard,
      caption: flashcard.caption.toUpperCase()
    };
  }

  getAllFlashcards(): Flashcard[] {
    return this.flashcards.map(flashcard => this.normalizeFlashcard(flashcard));
  }

  getAllSets(): FlashcardSet[] {
    return [...this.flashcardSets];
  }

  getFlashcardsBySetId(setId: string): Flashcard[] {
    const set = this.flashcardSets.find(s => s.id === setId);
    if (!set) {
      return [];
    }
    return this.flashcards
      .filter(flashcard => set.flashcardIds.includes(flashcard.id))
      .map(flashcard => this.normalizeFlashcard(flashcard));
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

  getHighlightPatternsForFlashcard(flashcardId: string, sets: FlashcardSet[]): string[] | undefined {
    const patterns = new Set<string>();

    for (const set of sets) {
      if (!set.highlightPatterns?.length || !set.flashcardIds.includes(flashcardId)) {
        continue;
      }

      set.highlightPatterns.forEach(pattern => patterns.add(pattern.toUpperCase()));
    }

    return patterns.size > 0 ? Array.from(patterns) : undefined;
  }
}

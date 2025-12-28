import { Injectable } from '@angular/core';
import { Prize } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PrizeService {
  private prizes: Prize[] = [
    {
      id: '1',
      caption: 'Red Labubu',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/051/895/584/non_2x/pink-labubu-illustration-free-vector.jpg'
    },
    {
      id: '2',
      caption: 'Blue Labubu',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/051/895/588/non_2x/blue-labubu-illustration-free-vector.jpg'
    },
    {
      id: '3',
      caption: 'Elsa',
      imageUrl: 'https://i.pinimg.com/564x/76/a7/bf/76a7bf34596fed510d97aa3b60288fe1.jpg'
    },
    {
      id: '4',
      caption: 'Pokemon',
      imageUrl: 'https://gamestop.vn/wp-content/uploads/2025/07/pikachu.jpg'
    },
    {
      id: '5',
      caption: 'Lego Unicorn',
      imageUrl: 'https://salt.tikicdn.com/cache/w300/ts/product/a8/71/fa/4a171a5cb555870f015c2924d5b18748.jpg'
    },
    {
      id: '6',
      caption: 'Cinnamoroll',
      imageUrl: 'https://cdn.sanriowiki.com/2/23/Cinnamoroll.png'
    },
    {
      id: '7',
      caption: 'Kuromi',
      imageUrl: 'https://m.media-amazon.com/images/I/31ftiZ+4zpL._SS400_.jpg'
    },
    {
      id: '8',
      caption: 'Hello Kitty',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/052/921/531/non_2x/blue-hello-kitty-free-vector.jpg'
    },
    {
      id: '9',
      caption: 'Robot',
      imageUrl: 'https://media.istockphoto.com/id/1927293012/vector/cute-yellow-and-blue-robot.jpg?s=612x612&w=0&k=20&c=yz-GVpHq_IRpLfFnDRhXs0GpNiJMeA0oR8eIY2KI7yY='
    },
    {
      id: '10',
      caption: 'Dinosaur',
      imageUrl: 'https://media.istockphoto.com/id/1440486497/vector/little-cartoon-tyrannosaurus-dinosaur.jpg?s=612x612&w=0&k=20&c=rEPIxJh0yQPUNdHDdUB0Om5KnJPL8k2G5lvyLqUjzG8='
    },
    {
      id: '11',
      caption: 'Teddy Bear',
      imageUrl: 'https://www.buildabear.co.uk/dw/image/v2/BBNG_PRD/on/demandware.static/-/Sites-buildabear-master/default/dwa49d338d/29231221227229x20237010.jpg?sw=800&sh=800&sm=fit'
    },
    {
      id: '12',
      caption: 'Slime',
      imageUrl: 'https://m.media-amazon.com/images/I/61zNHy52lZL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: '13',
      caption: 'Capibara',
      imageUrl: 'https://m.media-amazon.com/images/I/510jrZgVARL.jpg'
    },
    {
      id: '14',
      caption: 'Spiderman',
      imageUrl: 'https://wibu.com.vn/wp-content/uploads/2025/02/SPIDERMAN.png'
    },
    {
      id: '15',
      caption: 'LOL Doll',
      imageUrl: 'https://image.smythstoys.com/original/mobile/243709.webp'
    },
    {
      id: '16',
      caption: 'Minon',
      imageUrl: 'https://file.hstatic.net/1000231532/file/cua_hang_ban_minion_stuart_laughing_action_figure_grande.jpg'
    },
    {
      id: '17',
      caption: 'Doraemon',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png'
    },
    {
      id: '18',
      caption: 'Baby Cry',
      imageUrl: 'https://product.hstatic.net/200000863773/product/remove-bg.ai_1733232751906_56282c9f079041d196c500b986ac9ce5_grande.png'
    },
    {
      id: '19',
      caption: 'Creeper',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/vi/4/49/Creeper_%28Minecraft%29.png'
    },
    {
      id: '20',
      caption: 'Sword',
      imageUrl: 'https://preview.redd.it/uqoo11j3qzs31.jpg?width=640&crop=smart&auto=webp&s=8981138c1e854e1c738a10c63b250a22c33364d4'
    },
    {
      id: '21',
      caption: 'Lego Set',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7OyOeOKsuWTSvsUODPSJGEtPr32E_F-tBw&s'
    },
    {
      id: '22',
      caption: 'Transformer',
      imageUrl: 'https://cdn.hswstatic.com/gif/real-transformer-movie-5.jpg'
    },
    {
      id: '23',
      caption: 'Barbie Mermaid',
      imageUrl: 'https://en.barbiepedia.com/img/barbie/800/1434_mermaid_0.jpg'
    },
    {
      id: '24',
      caption: 'Puzzle',
      imageUrl: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_500/store/software/switch/70010000046736/7de12a1e2afb905cc4e62721ac8c22d313544a4e9f5a3df4920a741104442aa8'
    },
    {
      id: '25',
      caption: 'Mickey Mouse',
      imageUrl: 'https://cdn.ecommercedns.uk/files/4/247674/3/53143433/animasorc-g.jpg'
    },
    {
      id: '26',
      caption: 'Furby',
      imageUrl: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rcf4-ltt2e1bs13t89e'
    },
    {
      id: '27',
      caption: 'Monster',
      imageUrl: 'https://noodoll.com/media/catalog/product/cache/125bf494f9df1a37688f140f29689719/n/o/noodoll-monster-plush-toy-ricemon-1_1.jpg'
    },
    {
      id: '28',
      caption: 'Steve',
      imageUrl: 'https://s.namemc.com/3d/skin/body.png?id=59e3a240bd150317&model=classic&width=308&height=308'
    },
    {
      id: '29',
      caption: 'Skeleton',
      imageUrl: 'https://png.pngtree.com/png-vector/20241119/ourlarge/pngtree-cute-pink-skeleton-toy-for-children-png-image_14498543.png'
    },
    {
      id: '30',
      caption: 'Pickaxe',
      imageUrl: 'https://i5.walmartimages.com/seo/Minecraft-Diamond-Foam-Pickaxe-Exclusive_a8f35304-e644-45c9-84a7-1b55bb82f19f.a24c0e8dc764fb51f2d8fa3cb0a56099.jpeg'
    }
  ];

  constructor() { }

  getAllPrizes(): Prize[] {
    return [...this.prizes];
  }

  getRandomPrize(): Prize {
    const randomIndex = Math.floor(Math.random() * this.prizes.length);
    return this.prizes[randomIndex];
  }
}

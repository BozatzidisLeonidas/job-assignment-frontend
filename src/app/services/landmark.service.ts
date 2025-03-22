import { Injectable } from '@angular/core';
import { Landmark } from '../models/landmark/landmark.model';

@Injectable({
  providedIn: 'root'
})
export class LandmarkService {
  protected landmarkList: Landmark[] = [

    {
      order: 7,
      title: "Eiffel Tower",
      short_info: "Iconic Parisian landmark with stunning views.",
      photo_thumb: "http://localhost:5000/parse/files/NqqPKd9Mzzdk0Es6P7NdzXOXNb4tsqdq6Q8p0cZi/eb702eb64e7b2a851269d3ca2e5da208_thumb_a8a93570589a53f2c9ec324fd1240034_Mall_of_the_Emirates.jpg",
      description: "The 1,539 room nautically themed resort has two accommodation wings, consisting of the East and the West Tower, linked together by the Royal Bridge Suite. It is complemented by the Aquaventure water park and the Nasimi Beach, which frequently plays host to concerts and other events.",
      url: "https://www.atlantisthepalm.com/"
    },
    {
      order: 8,
      title: "Colosseum",
      short_info: "Ancient Roman amphitheater in Rome.",
      photo_thumb: "http://localhost:5000/parse/files/NqqPKd9Mzzdk0Es6P7NdzXOXNb4tsqdq6Q8p0cZi/78cd0051dc952300c7028b1bca6b0122_thumb_d11e4c5d99e33966d035c5b5803c0ce1_SkiDubai7176.jpg",
      description: "The multi-level shopping mall currently features more than 630 retail outlets, 7900 parking spaces, over 100 restaurants & Cafes, 80 luxury stores and 250 flagship stores. It has a total gross leasable area of 255,489 square meters. It also hosts family leisure activities including Ski Dubai (the Middle East’s first indoor ski resort and snow park), the 500-seat capacity Dubai Community Theatre and Arts Centre and Magic planet, one of the largest indoor family entertainment centres in Dubai.",
      url: "http://www.malloftheemirates.com/"
    },
    {
      order: 9,
      title: "Statue of Liberty",
      short_info: "Famous symbol of freedom in New York.",
      photo_thumb: "http://localhost:5000/parse/files/NqqPKd9Mzzdk0Es6P7NdzXOXNb4tsqdq6Q8p0cZi/fc81d066a8f1d1528e085dfb8fd506d2_thumb_36c280f37b6feda3a56cb679cd23d5b8_Angle_view_of_Dubai_Frame.jpg",
      description: "Opened in November 2005, the indoor resort features an 85-metre-high indoor mountain (equivalent to 25 stories high building) with 5 slopes of varying steepness and difficulty, this is 80 sq. meter wide, including a 400-metre-long run, the world's first indoor black diamond run, and various features (boxes, rails, kickers) that are changed on a regular basis. A quad lift and a tow lift carry skiers and snowboarders up the mountain. All the equipment, such as skis and jackets are provided with the ticket and you can buy equipment in the nearby stores. Adjoining the slopes is a 3,000-square-metre Snow Park play area comprising sled and toboggan runs, an icy body slide, climbing towers, giant snowballs and an ice cave. Ski Dubai also houses a number of penguins who are let out of their enclosures several times a day. Penguin encounters can be booked, allowing the public to interact directly with the penguins.In 2007 Ski Dubai was awarded the Thea Outstanding Achievement Award by the Themed Entertainment Association. The Snow Play Area was designed and produced by Thinkwell Group.",
      url: "https://www.skidxb.com/"
    },
    {
      order: 5,
      title: "Big Ben",
      short_info: "Iconic clock tower in London.",
      photo_thumb: "http://localhost:5000/parse/files/NqqPKd9Mzzdk0Es6P7NdzXOXNb4tsqdq6Q8p0cZi/8fca30958ed9708f040a278d683000a5_thumb_e9aa8f0c66da254110ea57e1e8250297_Princess_Tower.jpg",
      description: "Opened in November 2005, the indoor resort features an 85-metre-high indoor mountain (equivalent to 25 stories high building) with 5 slopes of varying steepness and difficulty, this is 80 sq. meter wide, including a 400-metre-long run, the world's first indoor black diamond run, and various features (boxes, rails, kickers) that are changed on a regular basis. A quad lift and a tow lift carry skiers and snowboarders up the mountain. All the equipment, such as skis and jackets are provided with the ticket and you can buy equipment in the nearby stores. Adjoining the slopes is a 3,000-square-metre Snow Park play area comprising sled and toboggan runs, an icy body slide, climbing towers, giant snowballs and an ice cave. Ski Dubai also houses a number of penguins who are let out of their enclosures several times a day. Penguin encounters can be booked, allowing the public to interact directly with the penguins.In 2007 Ski Dubai was awarded the Thea Outstanding Achievement Award by the Themed Entertainment Association. The Snow Play Area was designed and produced by Thinkwell Group.",
      url: "https://www.skidxb.com/"
    },
    {
      order: 4,
      title: "Machu Picchu",
      short_info: "Ancient Inca city in the Andes Mountains.",
      photo_thumb: "http://localhost:5000/parse/files/NqqPKd9Mzzdk0Es6P7NdzXOXNb4tsqdq6Q8p0cZi/3ab765c3d9d8e02f24d3a38cb3a27409_thumb_f13d86e251629bd46477a7aaf772af7a_Dubai_mall_indoor.jpg",
      description: "Opened in November 2005, the indoor resort features an 85-metre-high indoor mountain (equivalent to 25 stories high building) with 5 slopes of varying steepness and difficulty, this is 80 sq. meter wide, including a 400-metre-long run, the world's first indoor black diamond run, and various features (boxes, rails, kickers) that are changed on a regular basis. A quad lift and a tow lift carry skiers and snowboarders up the mountain. All the equipment, such as skis and jackets are provided with the ticket and you can buy equipment in the nearby stores. Adjoining the slopes is a 3,000-square-metre Snow Park play area comprising sled and toboggan runs, an icy body slide, climbing towers, giant snowballs and an ice cave. Ski Dubai also houses a number of penguins who are let out of their enclosures several times a day. Penguin encounters can be booked, allowing the public to interact directly with the penguins.In 2007 Ski Dubai was awarded the Thea Outstanding Achievement Award by the Themed Entertainment Association. The Snow Play Area was designed and produced by Thinkwell Group.",
      url: "https://www.skidxb.com/"
    },
    {
      order: 3,
      title: "Christ the Redeemer",
      short_info: "Famous statue overlooking Rio de Janeiro.",
      photo_thumb: "http://localhost:5000/parse/files/NqqPKd9Mzzdk0Es6P7NdzXOXNb4tsqdq6Q8p0cZi/0aa6152c16fa0b52b386de85671987e4_thumb_ce4502218bfb0a56f9778f028ecc68d1_Infinity_Tower_-_Dubai.jpg",
      description: "Opened in November 2005, the indoor resort features an 85-metre-high indoor mountain (equivalent to 25 stories high building) with 5 slopes of varying steepness and difficulty, this is 80 sq. meter wide, including a 400-metre-long run, the world's first indoor black diamond run, and various features (boxes, rails, kickers) that are changed on a regular basis. A quad lift and a tow lift carry skiers and snowboarders up the mountain. All the equipment, such as skis and jackets are provided with the ticket and you can buy equipment in the nearby stores. Adjoining the slopes is a 3,000-square-metre Snow Park play area comprising sled and toboggan runs, an icy body slide, climbing towers, giant snowballs and an ice cave. Ski Dubai also houses a number of penguins who are let out of their enclosures several times a day. Penguin encounters can be booked, allowing the public to interact directly with the penguins.In 2007 Ski Dubai was awarded the Thea Outstanding Achievement Award by the Themed Entertainment Association. The Snow Play Area was designed and produced by Thinkwell Group.",
      url: "https://www.skidxb.com/"
    },
    {
      order: 6,
      title: "Sydney Opera House",
      short_info: "Architectural marvel in Sydney, Australia.",
      photo_thumb: "http://localhost:5000/parse/files/NqqPKd9Mzzdk0Es6P7NdzXOXNb4tsqdq6Q8p0cZi/6dfef2bd12978a2ad6f426143e5477bb_thumb_a4310ecc18d9e00c68eefcd730136286_Burj_Al_Arab_Dubai_by_Joi_Ito_Dec2007.jpg",
      description: "Opened in November 2005, the indoor resort features an 85-metre-high indoor mountain (equivalent to 25 stories high building) with 5 slopes of varying steepness and difficulty, this is 80 sq. meter wide, including a 400-metre-long run, the world's first indoor black diamond run, and various features (boxes, rails, kickers) that are changed on a regular basis. A quad lift and a tow lift carry skiers and snowboarders up the mountain. All the equipment, such as skis and jackets are provided with the ticket and you can buy equipment in the nearby stores. Adjoining the slopes is a 3,000-square-metre Snow Park play area comprising sled and toboggan runs, an icy body slide, climbing towers, giant snowballs and an ice cave. Ski Dubai also houses a number of penguins who are let out of their enclosures several times a day. Penguin encounters can be booked, allowing the public to interact directly with the penguins.In 2007 Ski Dubai was awarded the Thea Outstanding Achievement Award by the Themed Entertainment Association. The Snow Play Area was designed and produced by Thinkwell Group.",
      url: "https://www.skidxb.com/"
    },
    {
      order: 2,
      title: "Taj Mahal",
      short_info: "Majestic white marble mausoleum in India.",
      photo_thumb: "http://localhost:5000/parse/files/NqqPKd9Mzzdk0Es6P7NdzXOXNb4tsqdq6Q8p0cZi/f609bb254731415a370af212eaa799f5_thumb_9df2bcc37f4f81edfe5f7b7ae8be5437_Burj_Khalifa.jpg",
      description: "Opened in November 2005, the indoor resort features an 85-metre-high indoor mountain (equivalent to 25 stories high building) with 5 slopes of varying steepness and difficulty, this is 80 sq. meter wide, including a 400-metre-long run, the world's first indoor black diamond run, and various features (boxes, rails, kickers) that are changed on a regular basis. A quad lift and a tow lift carry skiers and snowboarders up the mountain. All the equipment, such as skis and jackets are provided with the ticket and you can buy equipment in the nearby stores. Adjoining the slopes is a 3,000-square-metre Snow Park play area comprising sled and toboggan runs, an icy body slide, climbing towers, giant snowballs and an ice cave. Ski Dubai also houses a number of penguins who are let out of their enclosures several times a day. Penguin encounters can be booked, allowing the public to interact directly with the penguins.In 2007 Ski Dubai was awarded the Thea Outstanding Achievement Award by the Themed Entertainment Association. The Snow Play Area was designed and produced by Thinkwell Group.",
      url: "https://www.skidxb.com/"
    },
    {
      order: 1,
      title: "Great Wall of China",
      short_info: "Ancient series of walls and fortifications.",
      photo_thumb: "http://localhost:5000/parse/files/NqqPKd9Mzzdk0Es6P7NdzXOXNb4tsqdq6Q8p0cZi/0b613d86f930de9a1d3760e5859d1d22_thumb_d1e4a11ab0078450b004a50a3d0511db_Atlantis_The_Palm_Exterior_small.jpg",
      description: "Opened in November 2005, the indoor resort features an 85-metre-high indoor mountain (equivalent to 25 stories high building) with 5 slopes of varying steepness and difficulty, this is 80 sq. meter wide, including a 400-metre-long run, the world's first indoor black diamond run, and various features (boxes, rails, kickers) that are changed on a regular basis. A quad lift and a tow lift carry skiers and snowboarders up the mountain. All the equipment, such as skis and jackets are provided with the ticket and you can buy equipment in the nearby stores. Adjoining the slopes is a 3,000-square-metre Snow Park play area comprising sled and toboggan runs, an icy body slide, climbing towers, giant snowballs and an ice cave. Ski Dubai also houses a number of penguins who are let out of their enclosures several times a day. Penguin encounters can be booked, allowing the public to interact directly with the penguins.In 2007 Ski Dubai was awarded the Thea Outstanding Achievement Award by the Themed Entertainment Association. The Snow Play Area was designed and produced by Thinkwell Group.",
      url: "https://www.skidxb.com/"
    }
  ];

  constructor() { }

  getAllLandmarks(): Landmark[] {
    return this.landmarkList;
  }

  getLandmarkByOrder(id: Number): Landmark | undefined {
    return this.landmarkList.find(landmark => landmark.order === id);
  }
}

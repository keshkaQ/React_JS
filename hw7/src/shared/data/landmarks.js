export const landmarks = [
  {
    id: "kremlin",
    title: "Нижегородский кремль",
    shortDescription:
      "Главная историческая крепость города на высоком берегу Волги и Оки.",
    description:
      "Нижегородский кремль — каменная крепость начала XVI века и один из самых узнаваемых символов города. На территории кремля расположены музеи, памятники, смотровые площадки и административные здания.",
    location: "Центр города, Кремль",
    period: "XVI век",
    imageUrl:
      "https://avatars.mds.yandex.net/i?id=04f6673bd10947ba6366ee2cb06cc678ca01fb79-9234158-images-thumbs&n=13",
    isMain: true,
  },
  {
    id: "chkalov-staircase",
    title: "Чкаловская лестница",
    shortDescription:
      "Монументальная лестница в форме восьмерки, соединяющая верхнюю и нижнюю набережные.",
    description:
      "Чкаловская лестница была построена в 1940-х годах и стала одной из визитных карточек Нижнего Новгорода. С верхней площадки открывается панорама на Волгу, Стрелку и Заволжье.",
    location: "Площадь Минина и Пожарского",
    period: "1943–1949 годы",
    imageUrl:
      "https://avatars.mds.yandex.net/i?id=da2fad7bb986d40f0d9e9ebf2f2fe3351c8b7338-5160619-images-thumbs&n=13",
    isMain: false,
  },
  {
    id: "pokrovka",
    title: "Большая Покровская улица",
    shortDescription:
      "Пешеходная улица в историческом центре с театрами, кафе и архитектурой XIX века.",
    description:
      "Большая Покровская — центральная прогулочная улица Нижнего Новгорода. Здесь находятся старинные особняки, Нижегородский драмтеатр, городские скульптуры и множество культурных площадок.",
    location: "Нижегородский район",
    period: "XVIII–XIX века",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bolshaya_Pokrovskaya_Street_%28June_2024%29_-_3.jpg/1200px-Bolshaya_Pokrovskaya_Street_%28June_2024%29_-_3.jpg",
    isMain: false,
  },
  {
    id: "alexander-nevsky-cathedral",
    title: "Собор Александра Невского",
    shortDescription:
      "Кафедральный собор на Стрелке — одна из доминант городского силуэта.",
    description:
      "Собор Александра Невского расположен на Стрелке, в месте слияния Оки и Волги. Храм известен своей масштабной архитектурой, высокими шатрами и панорамными видами на реку.",
    location: "Стрелка, Канавинский район",
    period: "XIX век",
    imageUrl:
      "https://avatars.mds.yandex.net/i?id=66a6a89867595b5df1c2ea675ef4aa8da60efd3d-9099609-images-thumbs&n=13",
    isMain: false,
  },
  {
    id: "fedorovsky-embankment",
    title: "Набережная Федоровского",
    shortDescription:
      "Популярная смотровая зона с видами на Стрелку, мосты и исторический центр.",
    description:
      "Набережная Федоровского — одно из лучших мест для прогулок и наблюдения за закатом. Отсюда хорошо видны Волга, Ока, Рождественская сторона и городские мосты.",
    location: "Верхняя часть города",
    period: "Современное благоустройство",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/NN_30-06-2022_Fedorovsky_Embankment.jpg/1280px-NN_30-06-2022_Fedorovsky_Embankment.jpg",
    isMain: false,
  },
  {
    id: "nizhny-fair",
    title: "Нижегородская ярмарка",
    shortDescription:
      "Исторический торговый комплекс, сыгравший важную роль в экономике России.",
    description:
      "Нижегородская ярмарка — исторический выставочно-торговый центр. В XIX веке она была крупнейшей ярмаркой Российской империи, а сегодня используется для форумов, выставок и городских событий.",
    location: "Канавинский район",
    period: "XIX век",
    imageUrl:
      "https://avatars.mds.yandex.net/i?id=bb565ed5b393ea3f101f3ef262f0d2ad70dcea1f-12569572-images-thumbs&n=13",
    isMain: false,
  },
];

export const userPictures = [
  {
    nickname: "anton22",
    email: "anton22@email.com",
    description: "Фото с моего первого визита в город",
    imageUrl:
      "https://avatars.mds.yandex.net/i?id=f2dedc474dc9e23521d97476ff3b0e02a3905865-12179187-images-thumbs&n=13",
  },
  {
    nickname: "anton21",
    email: "anton21@email.com",
    description: "Набережная",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/NN_28-08-2021_11.jpg/1280px-NN_28-08-2021_11.jpg",
  },
];

export const mainLandmark = landmarks.find((landmark) => landmark.isMain);

export const otherLandmarks = landmarks.filter((landmark) => !landmark.isMain);

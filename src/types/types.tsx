export type video = {
  imgsrc: string;
  clip: string;
};

export type link = {
  icon: string;
};

export interface IHeroApi {
  title: string;
  subtitle: string;
  img: string;
  btntext: string;
  videos: video[];
  sociallinks: link[];
}

export interface ISneakers {
  id: string;
  title: string;
  text: string;
  rating: string;
  btn: string;
  img: string;
  price: string;
  color: string;
  shadow: string;
}

export interface ISales {
  title: string;
  items: ISneakers[];
}

export interface ITextContent {
  heading: string;
  title: string;
  text: string;
  btn: string;
  url: string;
  img: string;
}

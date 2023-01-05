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

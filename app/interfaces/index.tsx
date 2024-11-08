
export interface CardInterface {
  card_image: string;
  card_title: React.ReactNode;
  card_description: React.ReactNode;
}

export interface CardsInterface {
  section_header: string;
  section_title: React.ReactNode;
  section_description: string;
  cards: CardInterface[];
}

export interface ParallaxContextInterface {
  title: string;
  header: string;
  description: React.ReactNode;
  image: string;
}

export interface ParallaxContextsInterface {
  ParallaxContext: ParallaxContextInterface[];
}

export interface CarouselParallaxContextInterface extends ParallaxContextInterface {
  section_icon: string;
}

export interface CarouselParallaxContextsInterface {
  CarouselParallaxContext: CarouselParallaxContextInterface[];
}
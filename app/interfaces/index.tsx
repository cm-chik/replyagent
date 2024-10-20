export interface CardInterface {
  card_image: string;
  card_title: React.ReactNode;
  card_description: React.ReactNode;
}

export interface ThreeCardsInterface {
  section_header: string;
  section_title: React.ReactNode;
  section_description: string;
  cards: CardInterface[];
}

export interface ParallaxContextInterface {
  title: string;
  header: string;
  description: string;
  image: string;
}

export interface ParallaxContextsInterface {
  ParallaxContext: ParallaxContextInterface[];
}
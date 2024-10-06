export interface Card {
  card_image: string;
  card_title: React.ReactNode;
  card_description: React.ReactNode;
}

export interface CardSection {
  section_header: string;
  section_title: React.ReactNode;
  section_description: string;
  cards: Card[];
}

export interface VerticalRollingCard {
  title: string;
  header: string;
  description: string;
  image: string;
}

export interface VerticalRollingCardSection {
  sections: VerticalRollingCard[];
}

export interface Card {
  card_image: string;
  card_title: React.ReactNode;
  card_description: React.ReactNode;
}

export interface CardMessage {
  section_header: string;
  section_title: React.ReactNode;
  section_description: string;
  cards: Card[];
}

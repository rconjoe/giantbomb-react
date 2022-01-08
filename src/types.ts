type FirstAppearedInGame = {
  api_detail_url: string;
  id: number;
  name: string;
}

type CharacterImage = {
  icon_url: string;
  image_tags: string;
  medium_url: string;
  original_url: string;
  screen_large_url: string;
  screen_url: string;
  small_url: string;
  super_url: string;
  thumb_url: string;
  tiny_url: string;
}

type CharacterImageTag = {
  api_detail_url: string;
  name: string;
  total: number
}

export interface BaseCharacter {
  aliases: string[];
  api_detail_url: string;
  birthday: string;
  date_added: string;
  date_last_updated: string;
  deck: string;
  description: string;
  first_appeared_in_game: FirstAppearedInGame;
  gender: number;
  guid: string;
  id: number;
  image: CharacterImage;
  image_tags: CharacterImageTag[];
  last_name: string;
  name: string;
  real_name: string;
  site_detail_url: string;
}
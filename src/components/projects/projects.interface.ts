import { StaticImageData } from "next/image";

export type ProjectCardProps = {
  id: number
};

export interface itemList {
  itemtitle: string;
  itemText: string;
}

export interface ListData {
  titleList: string;
  textList: itemList[];
}

export interface projectsData {
  id: number;
  title: string;
  text: string;
  longText: string;
  longTextSecondary?: string;
  longTextThirty?: string;
  addList: boolean;
  lists: ListData[];
  images: StaticImageData[];
  technologies : string[];
}
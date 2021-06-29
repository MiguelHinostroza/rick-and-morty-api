import {CharacterSearched} from "../models/CharacterSearched";
import HttpRickAdnMorty from "../utils/httpRickAndMorty.util";
import {Character} from "../models/Character";

export enum EnumRequestType {
    character = 'character',
    location = 'location',
    episode = 'episode'
}

export type TypesRequestType = 'character' | 'location' | 'episode';

const getType = (type?: TypesRequestType): string => {
    return type ? `${type}/` : '';
}

export default class RickAndMortyHttp {
    public static instance: RickAndMortyHttp;

    private constructor() {
    }

    public static getInstance(): RickAndMortyHttp {
        if (!RickAndMortyHttp.instance) {
            RickAndMortyHttp.instance = new RickAndMortyHttp();
        }
        return RickAndMortyHttp.instance;
    }

    async getCharacteresBySearch(type?: TypesRequestType, name?: string,): Promise<CharacterSearched> {
        const characters: CharacterSearched = await HttpRickAdnMorty.get(`${getType(type)}?name=${name}`);
        return characters;
    }

    async getCharacterById(type?: TypesRequestType, id?: number): Promise<Character> {
        const character: Character = await HttpRickAdnMorty.get(`${getType(type)}${id}`);
        return character;
    }

    async getLocationById(type?: TypesRequestType, id?: number): Promise<Character> {
        const location: Character = await HttpRickAdnMorty.get(`${getType(type)}${id}`);
        return location;
    }

    async getEpisodeById(type?: TypesRequestType, id?: number): Promise<Character> {
        const episode: Character = await HttpRickAdnMorty.get(`${getType(type)}${id}`);
        return episode;
    }

}
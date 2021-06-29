export interface Result {
    id: number;
    name: string;
    status: Status;
    species: Species;
    type: Type;
    gender: Gender;
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}

export interface CharacterSearched {
    info: Info;
    results: Result[];
}

export interface Info {
    count?: number;
    pages?: number;
    next?: string;
    prev?: null;
}

export enum Gender {
    Male = "Male",
    Female = "Female"
}

export interface Location {
    name?: string;
    url?: string;
}

export enum Species {
    Alien = "Alien",
    Cronenberg = "Cronenberg",
    Human = "Human",
    Humanoid = "Humanoid",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}

export enum Type {
    Empty = "",
    FishPerson = "Fish-Person",
    HumanWithAntennae = "Human with antennae",
    Robot = "Robot",
}
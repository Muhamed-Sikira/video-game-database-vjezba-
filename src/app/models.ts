export interface Game{
    id: any;
    background_image: string;
    name: any;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatforms>;
    publishers: Array<Publishers>;
    ratings: Array<Rating>;
    screenshots: Array<Screenshots>;
    trailers: Array<Trailer>;
}
export interface APIResponse <T>{
    results: Array<T>;
}
interface Genre {
    name: string;
}
interface ParentPlatforms{
[x: string]: any;
    platform: {
slug: any;
        name: string;
    };
}
interface Publishers {
    name: string;
}
interface Rating{
    id: number;
    count: number;
    title: string;
}
interface Screenshots{
    image: string;
}
interface Trailer{
    data: {
        max: string;
    };
}

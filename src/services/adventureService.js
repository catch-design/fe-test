import adventure from './adventure.json';

export default class AdventureService {
    static getAdventures() {
        return adventure ? adventure : [];
    }
}

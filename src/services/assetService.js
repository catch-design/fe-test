import adventure from './adventure.json';

export default class AssetService {
    static getAssets() {
        return adventure ? adventure : [];
    }
}

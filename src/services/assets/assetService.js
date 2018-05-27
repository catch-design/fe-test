import adventure from './adventures.json';

export default class AssetService {
    static getAssets() {
        return adventure ? adventure : [];
    }
}

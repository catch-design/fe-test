import city from './cities.json';

export default class cityService {
    static getCities() {
        return city ? city : [];
    }
}

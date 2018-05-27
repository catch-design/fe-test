import gallery from './gallery.json';

export default class galleryService {
    static getGallery() {
        return gallery ? gallery : [];
    }
}

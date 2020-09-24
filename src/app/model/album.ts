import {Song} from './song'
export class Album{

    constructor(
        public name = 'Album',
        public songs : Song[] = []

    ){}
}
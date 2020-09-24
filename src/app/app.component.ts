import { Component } from '@angular/core';
import { Album } from './model/album'
import { Song } from './model/song';
import { UtilService } from './services/util.service'


@Component({
  selector: 'app-root-test',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  album = new Album('pick');

  public pi  =0;

  constructor(private u:UtilService){
    this.pi = this.u.round2(22/7);
    this.album.songs.push(new Song('song 1'));
    this.album.songs.push(new Song('song 2'));
  }
}

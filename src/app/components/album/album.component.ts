import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../model/album'
import { Song } from '../../model/song'
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input() public album: Album;
  public currentSong: Song;

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(s: Song) {
    this.currentSong = s;
    console.log(this.currentSong)
  }
}

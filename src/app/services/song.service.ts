import { Injectable } from '@angular/core'

import { Song } from '../models/song.model'
import { Subject } from 'rxjs';


@Injectable({ providedIn: 'root'})
export class SongService {
  songListChanged = new Subject<Song[]>();
  songList: Song[] = [
    new Song('Aflitos', 100, 'Gm', 'Felipe Chernicharo', 'Maracatu Baião'),
    new Song('Khatwat Habib', 90, 'Gm', 'Mushamad Al Wahab', 'Sirto Baião'),
    new Song('De onde vem o Baião', 94, 'D', 'Gilberto Gil', 'Baião'),
    new Song('É', 110, 'C', 'Gonzaguinha', 'Samba')
  ];


  constructor() {}

  addNewSong(song: Song) {
    this.songList.push(song);
    this.songListChanged.next(this.songList);
    console.log(this.songList)
  }
}

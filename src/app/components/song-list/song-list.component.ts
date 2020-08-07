import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/models/song.model';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {
  songs: Song[];

  constructor(
    private songService: SongService
  ) { }

  ngOnInit(): void {
    this.songs = this.songService.songList;
    this.songService
  }

}

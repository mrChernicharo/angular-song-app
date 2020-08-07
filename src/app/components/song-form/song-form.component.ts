import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/models/song.model';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss']
})
export class SongFormComponent implements OnInit {
  @ViewChild('songform', { static: false }) form: NgForm;
  public keys =[
    "Bb",
    "Bbm",
    "B",
    "Bm",
    "C",
    "Cm",
    "Db",
    "C#m",
    "D",
    "Dm",
    "Eb",
    "Ebm",
    "E",
    "Em",
    "F",
    "Fm",
    "Gb",
    "F#m",
    "G",
    "Gm",
    "Ab",
    "Abm",
    "A",
    "Am"
  ]
  public defaultKey = this.keys[4];
  public defaultTempo = 90;


  constructor(
    private songService: SongService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    const newSong: Song = {
      songname: form.value.songname,
      tempo: form.value.tempo,
      key: form.value.key,
      composer: form.value.composer,
      style: form.value.style
    }
    this.songService.addNewSong(newSong);
    this.form.reset();
  }

  onClearForm() {
    this.form.reset();
    console.log(this.form);
  }

}

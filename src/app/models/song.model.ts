export class Song {
  public songname: string;
  public tempo: number;
  public key: string;
  public composer: string;
  public style: string;

  constructor(songname: string, tempo: number, key: string, composer: string, style: string) {
    this.songname = songname;
    this.tempo = tempo;
    this.key = key;
    this.composer = composer;
    this.style = style;
  }
}

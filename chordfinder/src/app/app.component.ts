import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public title: string = 'chordfinder';
  public notes = ['c','c#','d','d#','e','f','f#','g','g#','a','a#','b']
  public tuningC6 = ['e', 'c', 'a', 'g', 'e', 'c'];
  public ruleOf18: number = 17.817;
  public scaleLength: number = 1200; 
  public fretNumber: number = 30;

  public ngOnInit():void {
    this.addFretboard();
  }

  public addFretboard() {
    for(let note in this.tuningC6) {
      var fretBoardRow = document.createElement('div');
      fretBoardRow.classList.add('fretboardrow');
      document.getElementById('fretboard')?.appendChild(fretBoardRow);

      let scaleLengthFretDifference = 0;
      let fretLength;

      for(let i = 0; i < this.fretNumber; i++) {
          var divFret = document.createElement('div');
          let notePosition = this.notes.map(function(e) {return e;}).indexOf(this.tuningC6[note]);
          var noteNumber = i + notePosition;

          if(i >= this.notes.length - notePosition) {
             noteNumber = noteNumber % this.notes.length;
          }

          fretLength = ((this.scaleLength - scaleLengthFretDifference) / this.ruleOf18);
          scaleLengthFretDifference += ((this.scaleLength - scaleLengthFretDifference) / this.ruleOf18);
          console.log(fretLength);

          divFret.innerHTML = this.notes[noteNumber];
          divFret.classList.add('fret');
          divFret.style.width = fretLength + 'px'

          fretBoardRow.appendChild(divFret);
      }
    }
  }
}
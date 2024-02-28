import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from '../Service/player.service';

@Component({
  selector: 'app-Player_card',
  templateUrl: './Player_card.component.html',
  styleUrls: ['./Player_card.component.css'],
})
export class Player_cardComponent implements OnInit {
  playerForm!: FormGroup;

  @ViewChild('inputName') inputBox!: ElementRef;
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  @ViewChild('modalcanclebutton') modalcanclebutton!: ElementRef<HTMLButtonElement>;
  @ViewChild('updateCancleButton') updateCancleButton!: ElementRef<HTMLButtonElement>;

  playercard: any[] = [];
  index: number = 0;
  title = 'User Record';
  name: String = '';
  Seracharray: String[] = [];
  filteredArr: String[] = [];
  isSubmittedClicked = false;
  deleteplayerIndex: number = 0;
  updateplayerindex: number = 0;

  constructor(private fb: FormBuilder, private service: PlayerService) {}

  ngOnInit() {
    this.getplayer();
    this.formvalidation();
  }

  getplayer() {
    this.service.getplayer().subscribe((carddata) => {
      this.playercard = carddata;
    });
  }

  addPlayer() {
    this.isSubmittedClicked = true;
    if (this.playerForm.valid) {
      this.isImageDefinedorNot();
    } else {
      console.log('form error');
    }
  }

  isImageDefinedorNot() {
    if (this.playerForm.value.playerimage) {
      this.imageDefined();
    } else {
      this.playerForm.value.playerimage = '/assets/default _image.jpg';
      this.addPlayer();
    }
  }

  imageDefined() {
    this.service.addPlayer(this.playerForm.value).subscribe(
      (Response) => {
        alert(`New player ${Response.playername} was added`);
        this.playerForm.reset();
        this.isSubmittedClicked = false;
        (this.modalcanclebutton.nativeElement as HTMLButtonElement).click();
        this.getplayer();
      },
      (error) => {
        console.error('error in adding player', error);
      }
    );
  }
  deletePlayerIndexFetch(playerid: number) {
    this.deleteplayerIndex = playerid;
  }

  deletePlayer(deleteplayerIndex: number) {
    this.service.deleteplayer(deleteplayerIndex).subscribe(() => {
      this.getplayer();
    });
  }

  updatePlayerFetch(playerid: number) {
    this.updateplayerindex = playerid;
    this.service
      .getplayerbyid(this.updateplayerindex)
      .subscribe((playerdata) => {
        this.playerForm.patchValue(playerdata);
      });
  }

  updateplayer(){
    if (this.playerForm.valid) {
      this.service
        .updateplayer(this.updateplayerindex, this.playerForm.value)
        .subscribe(() => {
          this.playerForm.reset();
          this.isSubmittedClicked=false;
          (this.updateCancleButton.nativeElement as HTMLButtonElement).click();
          this.getplayer();
        });
    }
  }

  search() {
    const searchTerm = this.searchInput.nativeElement.value.toLowerCase();
    this.filteredArr = this.Seracharray.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );
  }

  formvalidation() {
    this.playerForm = this.fb.group({
      playerimage: [''],
      playername: ['', Validators.required],
      playerrating: ['', Validators.required],
      playerposition: ['', Validators.required],
      playercountry: ['', Validators.required],
    });
  }

  formreset() {
    this.playerForm.reset();
  }
}

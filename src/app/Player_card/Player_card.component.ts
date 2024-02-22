import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  PatternValidator,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Player_card',
  templateUrl: './Player_card.component.html',
  styleUrls: ['./Player_card.component.css'],
})
export class Player_cardComponent implements OnInit {
  playerForm: FormGroup;

  playercard: any[] = [
    {
      imageSrc: '/assets/crcardimg.webp',
      playerName: 'Cristiano Ronaldo',
      position: 'Central Forward',
      rating: 98,
    },
    {
      imageSrc: '/assets/tony.jpg',
      playerName: 'T Kroos',
      position: 'CMF',
      rating: 96,
    },
    {
      imageSrc: '/assets/judecardimg.jpg',
      playerName: 'Jude Bellingham',
      position: 'Central Forward',
      rating: 95,
    },
    {
      imageSrc: '/assets/camavinga.jpg',
      playerName: 'camavinga',
      position: 'CMF',
      rating: 98,
    },
    {
      imageSrc: '/assets/carvajal.jpg',
      playerName: 'Carvajal',
      position: 'RB',
      rating: 96,
    },
    {
      imageSrc: '/assets/militao.jpg',
      playerName: 'E Militao',
      position: 'Central Back',
      rating: 97,
    },
    {
      imageSrc: '/assets/rudiger.jpg',
      playerName: 'Rudiger',
      position: 'Central Back',
      rating: 95,
    },
    {
      imageSrc: '/assets/vinicardimg.jpg',
      playerName: 'Vinicius junior',
      position: 'LWF',
      rating: 94,
    },
    {
      imageSrc: '/assets/courtois.jpg',
      playerName: 'courtois',
      position: 'Goal Keeper',
      rating: 98,
    },
    {
      imageSrc: '/assets/kepa.jpg',
      playerName: 'Kepa',
      position: 'GoalKeeper',
      rating: 95,
    },
    {
      imageSrc: '/assets/modric.jpg',
      playerName: 'Luca modric',
      position: 'CMF',
      rating: 95,
    },
  ];

  @ViewChild('inputName') inputBox!: ElementRef;
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  @ViewChild('modalcanclebutton')

  modalcanclebutton!: ElementRef<HTMLInputElement>;
  index: number = 0;
  title = 'User Record';
  name: String = '';
  arr: String[] = [];
  filteredArr: String[] = [];
  isSubmittedClicked = false;

  constructor(private fb: FormBuilder, private route: Router) {
    this.playerForm = this.fb.group({
      playerImage: [''],
      playerName: ['', Validators.required],
      rating: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      position: ['', Validators.required],
    });
  }

  /* Load data from local storage upon initialization */
  ngOnInit() {}

  /* Save data to local storage */
  private saveDataToLocalStorage() {
    localStorage.setItem('userRecords', JSON.stringify(this.arr));
  }

  search() {
    const searchTerm = this.searchInput.nativeElement.value.toLowerCase();
    this.filteredArr = this.arr.filter((item) =>
      item.toLowerCase().includes(searchTerm)
    );
  }

  sidenavfunction() {
    alert('the page will be updated soon');
  }

  popularitytablefunction() {
    this.route.navigate(['/popularity_table']);
  }

  onSubmit() {
    this.isSubmittedClicked = true;
    if (this.playerForm.valid) {
      this.playercard.push(this.playerForm.value);
      (this.modalcanclebutton.nativeElement as HTMLButtonElement).click();
      this.playerForm.reset();
      this.isSubmittedClicked = false;
    } else {
      console.log('error');
    }
  }

  closebutton() {
    this.playerForm.reset();
  }
}

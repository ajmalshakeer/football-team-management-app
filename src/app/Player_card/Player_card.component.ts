import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from '../Service/player.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-Player_card',
    templateUrl: './Player_card.component.html',
    styleUrls: ['./Player_card.component.css'],
})
export class Player_cardComponent implements OnInit {
    playerForm!: FormGroup;

    @ViewChild('inputName') inputBox!: ElementRef;
    @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
    @ViewChild('modalCancleButton') modalCancleButton!: ElementRef<HTMLButtonElement>;
    @ViewChild('updateCancleButton') updateCancleButton!: ElementRef<HTMLButtonElement>;

    playerCard: any[] = [];
    SearchArray: String[] = [];
    FilteredArray: String[] = [];
    isSubmittedClicked = false;
    deleteplayerIndex = 0;
    updatePlayerIndex = 0;
    loader = false;
    currentPage = 1;
    totalPages = 0;
    playersPerPage= 12;
    totalPlayerCount = 0;
    paginatedPlayerCard:any[]=[];


    constructor(private formBuilder: FormBuilder, private service: PlayerService, private toastr: ToastrService) { }

    ngOnInit() {
        this.getPlayer();
        this.validateForm();
    }

    getPlayer() {

        this.service.getplayer().subscribe((carddata) => {
            this.playerCard = carddata;
            this.EmployeeCount();
            this.totalPages = Math.ceil(this.playerCard.length / this.playersPerPage);
            this.updatePaginatedPlayerCard();
        });
    }

    addPlayer() {
        this.isSubmittedClicked = true;
        this.playerForm.valid ? this.checkIfImageDefinedOrNot() : this.toastr.error('form error');
    }

    checkIfImageDefinedOrNot() {
        this.playerForm.value.playerimage ? this.imageDefined() : (this.playerForm.value.playerimage = '/assets/default _image.jpg', this.addPlayer());
    }

    imageDefined() {
        this.service.addPlayer(this.playerForm.value).subscribe(
            (response) => {
                this.toastr.success(`New player ${response.playername}  added Successfully`);
                this.playerForm.reset();
                this.isSubmittedClicked = false;
                (this.modalCancleButton.nativeElement as HTMLButtonElement).click();
                this.getPlayer();
            },
            (error) => {
                this.toastr.error('error in adding player', error);
            }
        );
    }

    fetchDeletePlayerIndex(playerid: number) {
        this.deleteplayerIndex = playerid;
    }

    deletePlayer(deleteplayerIndex: number) {
        this.service.deleteplayer(deleteplayerIndex).subscribe(() => {
            this.toastr.success('Deleted Succesfully')
            this.getPlayer();
        });
    }

    fetchUpdatePlayerIndex(playerid: number) {
        this.updatePlayerIndex = playerid;
        this.service.getplayerbyid(this.updatePlayerIndex).subscribe((playerdata) => {
            this.playerForm.patchValue(playerdata);
        });
    }

    updatePlayer() {
        if (this.playerForm.valid) {
            this.service.updateplayer(this.updatePlayerIndex, this.playerForm.value).subscribe(() => {
                this.playerForm.reset();
                this.isSubmittedClicked = false;
                (this.updateCancleButton.nativeElement as HTMLButtonElement).click();
                this.toastr.success('Updated successfully');
                this.getPlayer();
            });
        }
    }

    searchSepcificCard() {
        const searchTerm = this.searchInput.nativeElement.value.toLowerCase();
        this.FilteredArray = this.SearchArray.filter((item) =>
            item.toLowerCase().includes(searchTerm)
        );
    }

    validateForm() {
        this.playerForm = this.formBuilder.group({
            playerimage: [''],
            playername: ['', Validators.required],
            playerrating: ['', Validators.required],
            playerposition: ['', Validators.required],
            playercountry: ['', Validators.required],
        });
    }

    resetForm() {
        this.playerForm.reset();
    }

    EmployeeCount() {
        this.totalPlayerCount = this.playerCard.length;
    }
    updatePaginatedPlayerCard() {
        const startIndex = (this.currentPage - 1) * this.playersPerPage;
        const endIndex = startIndex + this.playersPerPage;
        this.paginatedPlayerCard = this.playerCard.slice(startIndex, endIndex);
      }

      onPageChange(page: number) {
        this.currentPage = page;
        this.updatePaginatedPlayerCard();
      }
}

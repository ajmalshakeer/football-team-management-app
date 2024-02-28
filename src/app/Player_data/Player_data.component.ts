import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../Service/player.service';

@Component({
  selector: 'app-Player_data',
  templateUrl: './Player_data.component.html',
  styleUrls: ['./Player_data.component.css'],
})
export class Player_dataComponent implements OnInit {
  value: any = '';

  constructor(private service: PlayerService) {}

  ngOnInit() {
    this.getValue();
  }

  getValue() {
    this.value = this.service.sample_test();
  }
}

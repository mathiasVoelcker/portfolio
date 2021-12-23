import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isRTOpen: boolean = false;
  isTSPSOpen: boolean = false;
  skill0: boolean = false;
  skill1: boolean = false;
  skill2: boolean = false;
  skill3: boolean = false;
  skill4: boolean = false;
  skill5: boolean = false;
  skill6: boolean = false;
  skill7: boolean = false;
  skill8: boolean = false;
  skill9: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openCloseRT() {
    this.isRTOpen = !this.isRTOpen;
  }

  openCloseTSPS()
  {
    this.isTSPSOpen = !this.isTSPSOpen;
  }

  openSkill(skillIndex: number)
  {
    switch(skillIndex)
    {
      case 0:
        this.skill0 = !this.skill0;
        break;
      case 1:
        this.skill1 = !this.skill1;
        break;
      case 2:
        this.skill2 = !this.skill2;
        break;
      case 3:
        this.skill3 = !this.skill3;
        break;
      case 4:
        this.skill4 = !this.skill4;
        break;
      case 5:
        this.skill5 = !this.skill5;
        break;
      case 6:
        this.skill6 = !this.skill6;
        break;
      case 7:
        this.skill7 = !this.skill7;
        break;
      case 8:
        this.skill8 = !this.skill8;
        break;
      case 9:
        this.skill9 = !this.skill9;
        break;
    }
  }

}

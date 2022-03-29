import { Component, OnInit } from '@angular/core';
import { MealsInteface } from 'src/app/intefaces/meals-inteface';
import { PlatillosService } from 'src/app/services/platillos/platillos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  urlImage: String = "";
  platillo :MealsInteface[] = [];

  constructor(private platillosService: PlatillosService) { 
    this.getImage();
  }

  ngOnInit(): void {
  }

  private getImage() {
    this.platillosService.getPlatilloRandom().subscribe((response: any) => {
      this.platillo = response.meals;
      console.log(this.platillo);
    })
  }

  iniciarSesion(event: boolean) {
    if(event) {
      location.replace("/home");
    }
  }
}

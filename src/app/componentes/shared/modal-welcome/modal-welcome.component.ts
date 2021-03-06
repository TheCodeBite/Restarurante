import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MealsInteface } from 'src/app/intefaces/meals-inteface';
import { PlatillosService } from 'src/app/services/platillos/platillos.service';

@Component({
  selector: 'app-modal-welcome',
  templateUrl: './modal-welcome.component.html',
  styleUrls: ['./modal-welcome.component.css']
})
export class ModalWelcomeComponent implements OnInit {
  platillo :MealsInteface[] = [];

  constructor(private platillosService: PlatillosService, public dialogRef: MatDialogRef<ModalWelcomeComponent>) { 
    this.getImage();
  }

  ngOnInit(): void {
  }

  private getImage(): void  {
    this.platillosService.getPlatilloRandom().subscribe((response: any) => {
      this.platillo = response.meals;
      console.log(this.platillo);
    })
  }

  verDetalles(): void {
    this.dialogRef.close(this.platillo[0].idMeal);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { MealsInteface } from 'src/app/intefaces/meals-inteface';
import { PlatillosService } from 'src/app/services/platillos/platillos.service';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  @Input() id_catalogo: Number = 0;

  platillo: MealsInteface[] = [] ; 

  constructor(private platilloService: PlatillosService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  private getDetails(): void {
    this.platilloService.getPlatilloById(this.id_catalogo).subscribe((response: any) => {
      this.platillo = response;
      console.log(this.platillo);
    });
  }

}

import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';
@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {

  constructor(private route: ActivatedRoute) {};

  @Input()
  photoCover: string = "";
  @Input()
  contentTitle: string = "";
  @Input()
  contentDescription: string = "";
  private id: string | null = "0";

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id')
    )

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
   const result = dataFake.filter(
                    article => article.id == id)[0];

      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photoCover;

  }

}

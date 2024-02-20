import { Component, Input, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

	@Input() nome1: string = ''
	nome2: string = "OIOIOI"

  constructor() {
		console.log(`Metodo Construtor ${this.nome1}`)

	}

  ngOnInit(): void {
			console.log("Metodo OnInit")
  }

	ngOnChanges(): void {
		console.log(`Metodo OnChange ${this.nome1}`)
	}



}

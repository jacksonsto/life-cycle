import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life-cycle';
	isAliveCheckSample: Boolean = true
	labelButton: string = 'Destruir'

	disposeCheckSample(): void{
		if (this.isAliveCheckSample == false)
		{
		  this.labelButton = "Destruir"
		  this.isAliveCheckSample = true
		}
		else if (this.isAliveCheckSample == true)
		{
			this.labelButton = "Criar"
			this.isAliveCheckSample = false
	  }
	}
}

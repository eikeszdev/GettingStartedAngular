import { Component, Input } from '@angular/core'; // Para receber os dados do produto vamos ter que importar o "Input"
import { Product } from '../products';// Importando o objeto/arquivo que possui meus produtos

@Component({ // Aqui eu declaro que a classe a seguir se trata de um componente. E também informa os Metadados deste componente.
  selector: 'app-product-alerts', // identifica o componente, o padrão é "app-"+Nome do componente
  templateUrl: './product-alerts.component.html', // refere-se ao Html que vai ser rederizado no componente
  styleUrls: ['./product-alerts.component.css'] // refere-se ao css que será renderizado no componente.
})

export class ProductAlertsComponent { // também exportamos a classe que irá manipular as funcionalidades do componente
  @Input() product: Product | undefined; // O decorator "@input()" indica que a propriedade do valor (product) pode receber um valor a partir de um componente pai "Product", ou será vazio
}

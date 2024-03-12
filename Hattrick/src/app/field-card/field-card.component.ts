import { Component, Input } from '@angular/core';
import { FIELDS } from 'src/fields';

@Component({
  selector: 'app-field-card',
  templateUrl: './field-card.component.html',
  styleUrls: ['./field-card.component.css']
})
export class FieldCardComponent {
  @Input() sportType : any
  fields = FIELDS
}

import { Input, Component} from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `<p>Имя пользователя: {{userName}}</p>
              <p>Возраст пользователя: {{userAge}}</p>`
})
export class ChildComponent{
  @Input() userName: string;
  @Input() userAge: number;
}

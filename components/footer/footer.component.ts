import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Copyright © 2019 Vimosure. All rights reserved. </span>
    <div class="socials">
      <a href="https://www.facebook.com/Vimosure" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://www.twitter.com/Vimosure" target="_blank" class="ion ion-social-twitter"></a>
    </div>
  `,
})
export class FooterComponent {
}

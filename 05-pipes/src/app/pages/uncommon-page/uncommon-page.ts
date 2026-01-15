import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import Card from '../../componentes/card/card';
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'david',
  gender: 'male',
  age: 39,
  address: 'calle 35b',
};

const client2 = {
  name: 'vivian',
  gender: 'female',
  age: 33,
  address: 'calle 19 23',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe, I18nPluralPipe],
  templateUrl: './uncommon-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPage {
  //i18n select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  //i18plural

  clientsMap = signal({
    '=0': 'no tenemos ningun cliente',
    '=1': 'tenemos un cliente',
    '=2': 'tenemos 2 clientes',
    other: 'tenemos # clientes',
  });

  clients = signal([
    'maria',
    'pedro',
    'fernando',
    'pancracius',
    'lorencia',
    'aristobulus',
    'ferminia',
    'clencia',
    'honorio',
  ]);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }
}

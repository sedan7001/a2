import { InMemoryDbService } from 'angular-in-memory-web-api';

export class PersonData implements InMemoryDbService {
  createDb() {
    let member = [
      { id: 1, name: '전덕재' },
      { id: 2, name: '김용연' },
      { id: 3, name: '서지희' },
      { id: 4, name: '김형태' },
      { id: 5, name: '박재현' },
    ];
    return { member };
  }
}
// 메모리DB

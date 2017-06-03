import { InMemoryDbService } from 'angular-in-memory-web-api';

export class PersonData implements InMemoryDbService {
  createDb() {
    let member = [
      { id: 1, name: '김재훈' },
      { id: 2, name: '김형태' },
      { id: 3, name: '박혜지' },
      { id: 4, name: '박효창' },
      { id: 5, name: '서주완' },
      { id: 6, name: '주영인' },
      { id: 7, name: '차용진' },
      { id: 8, name: '최연기' },
      { id: 9, name: '홍내영' }
    ];
    return { member };
  }
}
// 메모리DB

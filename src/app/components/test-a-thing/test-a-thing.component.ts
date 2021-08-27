import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSomething } from 'src/app/store/testing/testing.selectors';

@Component({
  selector: 'app-test-a-thing',
  templateUrl: './test-a-thing.component.html',
  styleUrls: ['./test-a-thing.component.scss'],
})
export class TestAThingComponent implements OnInit {
  testSomething$ = this.store.select(selectSomething);

  constructor(private store: Store) {}

  ngOnInit(): void {}
}

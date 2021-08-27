import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TestAThingComponent } from './test-a-thing.component';

describe('TestAThingComponent', () => {
  let component: TestAThingComponent;
  let fixture: ComponentFixture<TestAThingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestAThingComponent],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

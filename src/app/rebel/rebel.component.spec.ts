import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebelComponent } from './rebel.component';

describe('RebelComponent', () => {
  let component: RebelComponent;
  let fixture: ComponentFixture<RebelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kol2ItemComponent } from './kol2-item.component';

describe('Kol2ItemComponent', () => {
  let component: Kol2ItemComponent;
  let fixture: ComponentFixture<Kol2ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kol2ItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kol2ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

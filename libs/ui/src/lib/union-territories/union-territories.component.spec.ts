import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionTerritoriesComponent } from './union-territories.component';

describe('UnionTerritoriesComponent', () => {
  let component: UnionTerritoriesComponent;
  let fixture: ComponentFixture<UnionTerritoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnionTerritoriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UnionTerritoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

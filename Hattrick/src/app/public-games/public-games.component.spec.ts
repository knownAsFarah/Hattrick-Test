import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicGamesComponent } from './public-games.component';

describe('PublicGamesComponent', () => {
  let component: PublicGamesComponent;
  let fixture: ComponentFixture<PublicGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicGamesComponent]
    });
    fixture = TestBed.createComponent(PublicGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldInfoComponent } from './field-info.component';

describe('FieldInfoComponent', () => {
  let component: FieldInfoComponent;
  let fixture: ComponentFixture<FieldInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldInfoComponent]
    });
    fixture = TestBed.createComponent(FieldInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

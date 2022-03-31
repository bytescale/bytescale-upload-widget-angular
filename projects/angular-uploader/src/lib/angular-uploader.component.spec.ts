import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularUploaderComponent } from './angular-uploader.component';

describe('AngularUploaderComponent', () => {
  let component: AngularUploaderComponent;
  let fixture: ComponentFixture<AngularUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

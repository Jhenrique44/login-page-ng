import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultInputForm } from './default-input-form';

describe('DefaultInputForm', () => {
  let component: DefaultInputForm;
  let fixture: ComponentFixture<DefaultInputForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultInputForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultInputForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

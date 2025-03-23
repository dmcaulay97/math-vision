import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeCheckComponent } from './prime-check.component';

describe('PrimeCheckComponent', () => {
  let component: PrimeCheckComponent;
  let fixture: ComponentFixture<PrimeCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimeCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

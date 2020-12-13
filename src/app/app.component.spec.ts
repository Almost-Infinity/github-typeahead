import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;

    let input = compiled.querySelector('.main .main__input');
    input.value = 'Almost-Infinity';
    input.dispatchEvent(new Event('keyup'));
    
    fixture.detectChanges();
  });
  
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  
  it('should search works', () => {
    let output = compiled.querySelector('.main .main__output');
    expect(output.querySelector('.user__login').textContent).toBe('Almost-Infinity');
  });
});

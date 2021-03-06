import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FancyButtonComponent } from './fancy-button.component';

describe('FancyButtonComponent', () => {
  let component: FancyButtonComponent;
  let fixture: ComponentFixture<FancyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FancyButtonComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoUIModule } from '../../demo-ui/demo-ui.module';
import { RouterTestingModule } from '@angular/router/testing';
import { FeatureBComponent } from './feature-b.component';

describe('FeatureBComponent', () => {
  let component: FeatureBComponent;
  let fixture: ComponentFixture<FeatureBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DemoUIModule,
        RouterTestingModule
      ],
      declarations: [FeatureBComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

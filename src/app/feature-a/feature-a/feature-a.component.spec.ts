import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DemoUIModule } from '../../demo-ui/demo-ui.module';
import { FeatureAComponent } from './feature-a.component';

describe('FeatureAComponent', () => {
  let component: FeatureAComponent;
  let fixture: ComponentFixture<FeatureAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DemoUIModule,
        RouterTestingModule
      ],
      declarations: [FeatureAComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

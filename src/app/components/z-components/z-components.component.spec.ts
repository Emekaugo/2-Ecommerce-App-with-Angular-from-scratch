import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZComponentsComponent } from './z-components.component';

describe('ZComponentsComponent', () => {
  let component: ZComponentsComponent;
  let fixture: ComponentFixture<ZComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZComponentsComponent]
    });
    fixture = TestBed.createComponent(ZComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

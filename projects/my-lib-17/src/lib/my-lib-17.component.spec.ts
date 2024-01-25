import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLib17Component } from './my-lib-17.component';

describe('MyLib17Component', () => {
  let component: MyLib17Component;
  let fixture: ComponentFixture<MyLib17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLib17Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyLib17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

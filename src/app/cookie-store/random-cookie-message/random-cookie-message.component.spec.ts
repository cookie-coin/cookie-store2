import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RandomCookieMessageComponent} from './random-cookie-message.component';

describe('RandomCookieMessageComponent', () => {
  let component: RandomCookieMessageComponent;
  let fixture: ComponentFixture<RandomCookieMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RandomCookieMessageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomCookieMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

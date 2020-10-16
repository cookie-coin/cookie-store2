import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CookieTransactionComponent} from './cookie-transaction.component';

describe('CookieTransactionComponent', () => {
  let component: CookieTransactionComponent;
  let fixture: ComponentFixture<CookieTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CookieTransactionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

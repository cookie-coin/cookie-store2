import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CookieStoreComponent} from './cookie-store.component';

describe('CookieStoreComponent', () => {
  let component: CookieStoreComponent;
  let fixture: ComponentFixture<CookieStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CookieStoreComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

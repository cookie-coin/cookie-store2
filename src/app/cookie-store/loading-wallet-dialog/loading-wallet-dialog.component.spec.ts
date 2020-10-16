import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoadingWalletDialogComponent} from './loading-wallet-dialog.component';

describe('LoadingWalletDialogComponent', () => {
  let component: LoadingWalletDialogComponent;
  let fixture: ComponentFixture<LoadingWalletDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingWalletDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingWalletDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

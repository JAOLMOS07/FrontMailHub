import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaArchivoComponent } from './bandeja-archivo.component';

describe('BandejaArchivoComponent', () => {
  let component: BandejaArchivoComponent;
  let fixture: ComponentFixture<BandejaArchivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandejaArchivoComponent]
    });
    fixture = TestBed.createComponent(BandejaArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsExplorerComponent } from './logs-explorer.component';

describe('LogsExplorerComponent', () => {
  let component: LogsExplorerComponent;
  let fixture: ComponentFixture<LogsExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsExplorerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

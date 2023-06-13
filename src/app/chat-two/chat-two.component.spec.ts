import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTwoComponent } from './chat-two.component';

describe('ChatTwoComponent', () => {
  let component: ChatTwoComponent;
  let fixture: ComponentFixture<ChatTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

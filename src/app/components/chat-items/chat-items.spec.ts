import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatItems } from './chat-items';

describe('ChatItems', () => {
  let component: ChatItems;
  let fixture: ComponentFixture<ChatItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatItems],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatItems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

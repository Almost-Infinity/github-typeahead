import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  const stubUser = {
    html_url: 'https://github.com/Almost-Infinity',
    avatar_url: 'https://avatars0.githubusercontent.com/u/37065532?v=4',
    login: 'Almost-Infinity'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.userInfo = stubUser;
    fixture.detectChanges();
  });
  
  it('should render correctly', () => {
    expect(fixture.nativeElement.querySelector('.user .user__link').href).toContain(stubUser.html_url);
    expect(fixture.nativeElement.querySelector('.user .user__avatar').src).toContain(stubUser.avatar_url);
    expect(fixture.nativeElement.querySelector('.user .user__login').textContent).toContain(stubUser.login);
  });
});


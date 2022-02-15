import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeNotePage } from './home-note.page';

describe('HomeNotePage', () => {
  let component: HomeNotePage;
  let fixture: ComponentFixture<HomeNotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

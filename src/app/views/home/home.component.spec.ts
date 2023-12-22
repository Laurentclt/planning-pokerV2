import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {VotingSystemModel} from "../../core/models/voting-system.model";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should create a session', () => {
  //     const name: string = "test new session"
  //     const votingSystem: VotingSystemModel = {id: "1", values: [1,2,3,4]}
  //     expect(component.createNewSession({name, votingSystem}).toBeTruthy())
  // })
});

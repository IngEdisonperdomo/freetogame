import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { FreetogameService } from '../shared/services/freetogame.service';
import { of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let freetogameService: FreetogameService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        NgbPaginationModule,
        FormsModule,
      ],
      providers: [FreetogameService, provideHttpClient()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    freetogameService = TestBed.inject(FreetogameService);

    spyOn(freetogameService, 'getGames').and.returnValue(
      of([
        {
          title: 'Game 1',
          short_description: 'Description 1',
          thumbnail: 'image1.jpg',
          game_url: 'url1',
        },
        {
          title: 'Game 2',
          short_description: 'Description 2',
          thumbnail: 'image2.jpg',
          game_url: 'url2',
        },
      ])
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch games on init', () => {
    expect(component.allGamesAux.length).toBe(2);
    expect(component.allGames.length).toBe(2);
  });

  it('should change page', () => {
    component.changePage(2);
    expect(component.page).toBe(2);
  });

  it('should search game', () => {
    component.search = 'game 1';
    component.searchGame();
    expect(component.allGames.length).toBe(1);
  });

  it('should search game by category', () => {
    component.selectedGenre = 'genre';
    spyOn(freetogameService, 'getGamesByCategory').and.returnValue(
      of([
        {
          title: 'Game 1',
          short_description: 'Description 1',
          thumbnail: 'image1.jpg',
          game_url: 'url1',
        },
      ])
    );
    component.searchGameCategory();
    expect(component.allGames.length).toBe(1);
  });

  it('should search game by platform', () => {
    component.selectedPlatform = 'platform';
    spyOn(freetogameService, 'getGamesByPlatform').and.returnValue(
      of([
        {
          title: 'Game 1',
          short_description: 'Description 1',
          thumbnail: 'image1.jpg',
          game_url: 'url1',
        },
      ])
    );
    component.searchGamePlataform();
    expect(component.allGames.length).toBe(1);
  });
});

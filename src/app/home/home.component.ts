import { Component, OnInit } from '@angular/core';
import { FreetogameService } from '@shared/services/freetogame.service';
import { CATEGORY, PLATFORM } from '@shared/data/category.json';
import { FreetogameI, GenreI } from '@shared/interfaces/freetogame';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allGames: FreetogameI[] = [];
  allGamesAux: FreetogameI[] = [];
  page = 1;
  pageSize = 1;
  search = '';
  selectedGenre = '';
  selectedPlatform = '';
  genres = CATEGORY;
  platforms = PLATFORM;

  constructor(private freetogameService: FreetogameService) {}

  ngOnInit() {
    this.freetogameService.getGames().subscribe((data) => {
      this.allGamesAux = data;
      this.pagination(data);
    });
  }

  trackByIndex(index: number, item: any): any {
    return index;
  }

  changePage(page: number) {
    this.page = page;
    this.allGames = this.allGamesAux.slice((page - 1) * 20, page * 20);
  }

  searchGame() {
    this.allGames = this.allGamesAux.filter((game) =>
      game.title.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  searchGameCategory() {
    this.freetogameService
      .getGamesByCategory(this.selectedGenre)
      .subscribe((data) => {
        this.pagination(data);
      });
  }

  searchGamePlataform() {
    this.freetogameService
      .getGamesByPlatform(this.selectedPlatform)
      .subscribe((data) => {
        this.pagination(data);
      });
  }

  pagination(data: any) {
    this.allGames = data.slice(0, 20);
    this.pageSize = Math.ceil(data.length / 20);
  }
}

import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import {} from '';



// Declarations
import { AppComponent } from './app.component';

// Footer
import { FooterComponent } from './components/footer/footer.component';

// Header
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/header/search/search.component';

// Main
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/main/home/home.component'
import { UserCardComponent } from './components/main/user-card/user-card.component';
import { HouseCardComponent } from './components/main/house-card/house-card.component';
import { HouseCardInfoComponent } from './components/main/house-card/house-card-info/house-card-info.component';

// Not-found
import { NotFoundComponent } from './not-found/not-found.component';




// Imports/Providers
import { UserService } from './services/user/user.service';



// Колекция страниц
const appRoutes: Routes = [
	// параметры страниц {путь, компонент} 
	{ path: '', component: HomeComponent },

	// { path: `card/user-card/:id`, component: UserCardComponent },

	{ path: 'user-card', component: UserCardComponent },

	{ path: 'app-house-card', component: HouseCardComponent },

	{ path: 'app-house-card/app-house-card-info/:id', component: HouseCardInfoComponent },

	{ path: 'house-card', redirectTo: '/house-card', pathMatch: 'full' },

	// добавляем подстановочный маршрут ** , чтобы поймать любой unexpected/unmatched/unlisted url и добавить перенаправление на /card-detail
	{ path: '**', component: NotFoundComponent },
	{ path: '**', redirectTo: '/' }
	// путь ** в последнем маршруте является подстановочным знаком. Маршрутизатор выберет этот маршрут, если запрошенный URL не соответствует никаким путям для маршрутов, определенных ранее в конфигурации
]




@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		MainComponent,
		FooterComponent,
		UserCardComponent,
		HomeComponent,
		SearchComponent,
		NotFoundComponent,
		HouseCardComponent,
		HouseCardInfoComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		RouterModule.forRoot(appRoutes)	// Подключение и инициализация методом .forRoot() модуля роутера 
	],
	providers: [UserService],
	bootstrap: [AppComponent]
})
export class AppModule { }

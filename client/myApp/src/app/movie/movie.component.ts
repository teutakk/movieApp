import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/services/movies.service';
import * as AOS from "aos"

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  
  constructor(private route:Router, private movieService: MoviesService){}

  movies: any
  user: any
  hideContent = false
  searchText: any


  ngOnInit(): void {
    AOS.init({
      duration: 1800,
      delay: 100,
      once: false,
      mirror:true
    })
      
    let token = localStorage.getItem("token")
      token = JSON.parse(token as string)
      this.user = token
      // console.log(this.route.url);
      
      if(this.route.url.includes('moviedetails')){
        this.hideContent=true;
      }
      console.log(this.hideContent);
      
      
      // console.log(this.user);
       this.movieService.getMovies().subscribe(
        (data) =>{
          console.log(data);
          this.movies = data;
        },
        (err) =>{
          console.log(err);

        }
       )
      if(this.user == null){
        this.route.navigateByUrl("/login")
      }
  }
  // logOut(){
  //   localStorage.removeItem("token")
  //   this.route.navigateByUrl("/login")
  // }

  movieDetails(id: number){
    this.route.navigateByUrl(`/dashboard/moviedetails/${id}`)
  }

}

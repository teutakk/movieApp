import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute, private movieSevices: MoviesService){

  }
  movieDetails: any

  ngOnInit(): void {

    let token = localStorage.getItem("token")

    console.log(token);
    
    this.router.params.subscribe(

      (data) => {
        this.movieSevices.getMoviesDetails(data["id"]).subscribe(
          (data)=>{
            console.log(data)
            this.movieDetails = data

          },
          (err)=>{
            console.log(err)
          }
        )
        console.log(data)
      },
      (err) => {
        console.log(err);
      }
    )

  }

  increase(){
      this.movieDetails.vote_count += 1
  }

}

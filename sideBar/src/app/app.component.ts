import { Component, OnInit } from "@angular/core";
import { PhotosService } from "./services/photos.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  albumsId = [1, 2, 3];
  constructor(public PhotosService: PhotosService) {}
}

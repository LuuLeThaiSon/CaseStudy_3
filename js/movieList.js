class MovieList {
     name;
     image;

     constructor(name,image) {
          this.name = name;
          this.image = image;
     }

     getName() {
          return this.name;
     }

     getImage() {
          return this.image;
     }

     setName(name) {
          this.name = name;
     }

     setImage(image) {
          this.image = image;
     }
}

angular.module('myApp')
.directive('beatlesHeader', function() {
  return {
    restrict: 'E',
    template: '<!-- nav bar header --> <div class="navbar-header"> <div> <h1>The Beatles</h1> <h3>Song Catalog</h3> </div> <div> <img class=" " src="../../artwork/album_covers/Abbey_Road.jpg" alt="Abbey Road" height="115" width="115"> <img class=" " src="../../artwork/album_covers/Yellow_Submarine.jpg" alt="Yellow Submarine" height="115" width="115"> <img class=" " src="../../artwork/album_covers/White_Album.jpg" alt="White Album" height="115" width="115"> <img class=" " src="../../artwork/album_covers/Beatles_For_Sale.jpg" alt="Beatles For Sale" height="115" width="115"> <img class=" " src="../../artwork/album_covers/Sgt_Pepper.jpg" alt="Sgt. Pepper" height="115" width="115"> <img class=" " src="../../artwork/album_covers/Help.jpg" alt="Help" height="115" width="115"> <img class=" " src="../../artwork/album_covers/Let_It_Be.jpg" alt="Let It Be" height="115" width="115"> <img class=" " src="../../artwork/album_covers/Revolver.jpg" alt="Revolver" height="115" width="115"> <img class=" " src="../../artwork/album_covers/AHDN.jpg" alt="Hard Days Night" height="115" width="115"> <img class=" " src="../../artwork/album_covers/With_The_Beatles.jpg" alt="With The Beatles" height="115" width="115"> <img class=" " src="../../artwork/album_covers/Please_Please_Me.jpg" alt="Please Please Me" height="115" width="115"> <img class=" " src="../../artwork/album_covers/Rubber_Soul.jpg" alt="Rubber_Soul" height="115" width="115"> <hr> </div> </div>'
  };
});

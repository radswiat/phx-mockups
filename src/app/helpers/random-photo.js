export default function(app) {

  app.directive('helperRandomPhoto', function() {
    return {
      template: `
        <md-button class="md-button">
          <img ng-src="{{photo}}" style="
          width: 50px;
          height: 50px;
          margin-top: 10px;
          margin-right: 0px;
        ">
          <md-tooltip md-direction="left">
            John Doe
          </md-tooltip>
        </md-button>
      `,
      scope: {},
      link: ($scope) => {
        let photos = [
          'http://adornsalonstudio.com/wp-content/uploads/2014/08/Coye-Face-Circle-176x176.gif',
          'http://diysinger.com/wp-content/uploads/2014/03/Circle_Headshot.png',
          'http://www.sacraprofana.org/wp-content/uploads/2016/02/Natalie-Face-Circle.png',
          'http://www.coachville.com/wp-content/uploads/2011/05/CoachByPhoneCircle265tran-png.png',
          'http://svoimiglazami.eu/images/uploads/1.png',
          'https://act.everyaction.com/hs-fs/hubfs/Devon-circle-face-3.png?t=1479852125464&width=190&name=Devon-circle-face-3.png'
        ];
        let rnd = Math.floor(Math.random() * ((photos.length - 1 ) - 0 + 1)) + 0;
        $scope.photo = photos[rnd];
      }
    };
  });

}
/**
 * Created by 608234548 on 09/12/2016.
 */

// bespoke google map functions inspired by google developer docs on google.com/developer, edited by Jon Tarrant
function initialize() {
  var myLatlng = new google.maps.LatLng(52.5254925,-0.9333317);
var icon = { 
    url: 'img/icon/googleMarker.png'
};
  var mapOptions = {
    zoom: 7,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker1 = new google.maps.Marker({      //catching lives
      position: {lat: 51.274299, lng: 1.077288},
      map: map,
      title: 'Catching Lives',
      icon: icon,
  });
    
    
     window.google.maps.event.addListener(marker1, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Catching Lives");
    $('#address').empty().append("Canterbury Open Centre, 13 Station Road East, Canterbury, Kent, CT1 2RB");
    $('#contact').empty().append("www.Catchinglives.org");
          map.panTo(marker1.getPosition());
          map.setZoom( 13);
         

  });

    var marker2 = new google.maps.Marker({                  // porchlight canterbury
      position: { lat: 51.2768125, lng: 1.0798867},
      map: map,
icon: icon,
  });
     window.google.maps.event.addListener(marker2, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Porchlight Canterbury");
    $('#address').empty().append("18-19 Watling Street, Canterbury, Kent CT1 2UA");
    $('#contact').empty().append("www.Porchlight.org.uk");
          map.panTo(marker2.getPosition());
          map.setZoom( 13);
  });
    
    
        var marker3 = new google.maps.Marker({           // porchlight dover
      position: { lat: 51.1242258, lng: 1.3149638},
      map: map,
    icon: icon,
  });
    
     window.google.maps.event.addListener(marker3, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Porchlight Dover");
    $('#address').empty().append("Fern Court, 4 Leyburne Road, Dover, Kent CT16 1SN");
    $('#contact').empty().append("www.Porchlight.org.uk");
          map.panTo(marker3.getPosition());
          map.setZoom( 13);
  });    
    
    
        var marker4 = new google.maps.Marker({               //porchlight maidstone
      position: { lat: 51.1461698, lng: 0.9036574},   
      map: map,
    icon: icon,
  });

     window.google.maps.event.addListener(marker4, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Porchlight Ashford");
    $('#address').empty().append("Simon Mead House, Simon's Avenue, Ashford, TN23 5BH");
    $('#contact').empty().append("www.Porchlight.org.uk");
          map.panTo(marker4.getPosition());
          map.setZoom( 13);
  });
    
    
    
        var marker5 = new google.maps.Marker({           // maidstone day centre for homeless
      position: { lat: 51.270264, lng: 0.524234},
      map: map,
    icon: icon,
  });
     window.google.maps.event.addListener(marker5, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Maidstone Homeless Day Centre");
    $('#address').empty().append("15 Knightrider Street, Maidstone, Kent ME15 6LP");
    $('#contact').empty().append("www.Homelessinmaidstone.org.uk");
          map.panTo(marker5.getPosition());
          map.setZoom( 13);
  });
    
    
          var marker6 = new google.maps.Marker({           // homeless link
      position: { lat: 51.4867758, lng: -0.1104438},
      map: map,
      icon: icon,
  });
     window.google.maps.event.addListener(marker6, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Homeless Link");
    $('#address').empty().append("Homeless Link, Gateway House, Milverton Street, London SE11 4AP");
    $('#contact').empty().append("www.homeless.org.uk");
          map.panTo(marker6.getPosition());
          map.setZoom( 13);
  });
    
            var marker7 = new google.maps.Marker({           // big issue
      position: { lat:51.4855836, lng: -0.1237756},
      map: map,
        icon: icon,
  });
     window.google.maps.event.addListener(marker7, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("The Big Issue");
    $('#address').empty().append("Bank Chambers/1-5 Wandsworth Rd, London SW8 2LN");
    $('#contact').empty().append("www.Bigissue.org.uk");
          map.panTo(marker7.getPosition());
          map.setZoom( 13);
  });
    
            var marker8 = new google.maps.Marker({           // shelter london
      position: { lat: 51.5236065, lng:-0.0951375},
      map: map,
        icon: icon,
  });
     window.google.maps.event.addListener(marker8, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Shelter London");
    $('#address').empty().append(" 4 Garrett Street, London EC1Y 0TY");
    $('#contact').empty().append("www.Shelter.org.uk");
          map.panTo(marker8.getPosition());
          map.setZoom( 13);
  });
    
            var marker9 = new google.maps.Marker({           // shelter bournemouth
      position: { lat: 50.7198063, lng: -1.8872065},
      map: map,
        icon: icon,
  });
     window.google.maps.event.addListener(marker9, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Shelter Bournemouth");
    $('#address').empty().append("30 Poole Hill, Bournemouth BH2 5PS ");
    $('#contact').empty().append("www.Shelter.org.uk");
          map.panTo(marker9.getPosition());
          map.setZoom( 13);
  });
    
            var marker10 = new google.maps.Marker({           // emmaus london
      position: { lat: 51.4867965, lng: 0.0816328},
      map: map,
        icon: icon,
  });
     window.google.maps.event.addListener(marker10, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Emmaus London");
    $('#address').empty().append("226 Elmley Street, London SE18 7NN");
    $('#contact').empty().append("www.Emmaus.org.uk");
          map.panTo(marker10.getPosition());
          map.setZoom( 13);
  });
    
            var marker11 = new google.maps.Marker({           // emmaus stroud
      position: { lat: 51.7439778, lng: -2.2165089},
      map: map,
        icon: icon,
  });
     window.google.maps.event.addListener(marker11, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Emmaus Stroud");
    $('#address').empty().append("54 London Road, Stroud GL5 2AZ");
    $('#contact').empty().append("www.Emmaus.org.uk");
          map.panTo(marker11.getPosition());
          map.setZoom( 13);
  });
    
            var marker12 = new google.maps.Marker({           // emmaus bristol
      position: { lat: 51.46168, lng: -2.5892264},
      map: map,
        icon: icon,
  });
     window.google.maps.event.addListener(marker12, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Emmaus Bristol");
    $('#address').empty().append("Shaftesbury House, Kingsland Road, Saint Philips, Bristol BS2 0QW");
    $('#contact').empty().append("www.Emmaus.org.uk");
          map.panTo(marker12.getPosition());
          map.setZoom( 13);
  });
    
            var marker13 = new google.maps.Marker({           // emaus brighton hove
      position: { lat: 50.8437632, lng: -0.2174428},
      map: map,
        icon: icon,
  });
     window.google.maps.event.addListener(marker13, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Emmaus Brighton & Hove");
    $('#address').empty().append("Drove Road, Portslade, Brighton BN41 2PA");
    $('#contact').empty().append("www.Emmaus.org.uk");
          map.panTo(marker13.getPosition());
          map.setZoom( 13);
  });
    
            var marker14 = new google.maps.Marker({           // emaus sheffield
      position: { lat: 53.3868606, lng: -1.4547607},
      map: map,
        icon: icon,
  });
     window.google.maps.event.addListener(marker14, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Emmaus Sheffield");
    $('#address').empty().append("Unit 5, Sipelia Works, Cadman Street, Sheffield S4 7ZG");
    $('#contact').empty().append("www.Emmaus.org.uk");
        map.panTo(marker14.getPosition());
        map.setZoom( 13);
  });
    
            var marker15 = new google.maps.Marker({          
      position: { lat: 53.4967866, lng: -2.2731214},   // emaus manchester
      map: map,
        icon: icon,
  });
     window.google.maps.event.addListener(marker15, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Emmaus Salford");
    $('#address').empty().append("100 Seaford Road, Salford M6 6EP");
    $('#contact').empty().append("www.Emmaus.org.uk");
          map.panTo(marker15.getPosition());
          map.setZoom( 13);
  });
    
            var marker16 = new google.maps.Marker({          
      position: { lat: 52.4037596, lng: -1.4475844}, // emaus conventry
      map: map,
        icon: icon,
  });
     window.google.maps.event.addListener(marker16, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Emmaus Conventry");
    $('#address').empty().append("The Old Vicarage/Emmaus/Brinklow Rd, Coventry CV3 2DT");
    $('#contact').empty().append("www.Emmaus.org.uk");
          map.panTo(marker16.getPosition());
          map.setZoom( 13);
  });
    
            var marker17 = new google.maps.Marker({          
      position: { lat: 52.6311865, lng: -1.1338579},     // conventry shelter
      map: map,
        icon: icon,
  });
     window.google.maps.event.addListener(marker17, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Catching Lives");
    $('#address').empty().append("Not available at this time.");
    $('#contact').empty().append("www.Shelter.org.uk");
          map.panTo(marker17.getPosition());
          map.setZoom( 13);
  });
    
            var marker18 = new google.maps.Marker({           // lacancaster district homeless action service ldhas.org.uk
      position: { lat: 54.0488756, lng: -2.7953347},
      map: map,
        icon: icon,
  });
     window.google.maps.event.addListener(marker18, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Lancaster District Homeless Action Service");
    $('#address').empty().append("Edward Street, Lancaster, Lancashire LA1 1QH");
    $('#contact').empty().append("www.Ldhas.org.uk");
          map.panTo(marker18.getPosition());
          map.setZoom( 13);
  });
    
            var marker19 = new google.maps.Marker({           // cambridge young people YMCA
      position: { lat: 52.2004571, lng: 0.1307276},
      map: map,
        icon: icon,
  });
     window.google.maps.event.addListener(marker19, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("YMCA Cambridgeshire & Peterborough");
    $('#address').empty().append("Queen Anne House, Gonville Place, Cambridge, CB1 1ND");
    $('#contact').empty().append("www.Theymca.org.uk/");
          map.panTo(marker19.getPosition());
          map.setZoom( 13);
  });
    
            var marker20 = new google.maps.Marker({           // NORWICH ST MARTINS HOUSING TRUST stmartinshousing.org.uk
      position: { lat: 52.6325088, lng: 1.3068651},
      map: map,
        icon: icon,
  });
     window.google.maps.event.addListener(marker20, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("St Martins Housing Trust");
    $('#address').empty().append("St Martins Housing Trust, 35 Bishopgate, Norwich, Norfolk, NR1 4AA");
    $('#contact').empty().append("www.Stmartinshousing.org.uk");
          map.panTo(marker20.getPosition());
          map.setZoom( 13);
  });
    
            var marker21 = new google.maps.Marker({           // benhamin foundation great yarmouth benjaminfoundation.co.uk
      position: { lat: 52.6082307, lng: 1.7256325},
      map: map,
        icon: icon,
  });
     window.google.maps.event.addListener(marker21, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("The Benjamin Foundation");
    $('#address').empty().append("King's Arms Street, North Walsham, Norfolk NR28 9JX");
    $('#contact').empty().append("www.Benjaminfoundation.co.uk");
          map.panTo(marker21.getPosition());
          map.setZoom( 13);
  });
    
            var marker22 = new google.maps.Marker({           // bedford kingsarmsproject.org
      position: { lat: 52.1187136, lng: -0.475819},
      map: map,
        icon: icon,
  });
     window.google.maps.event.addListener(marker22, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Kings Arms Project");
    $('#address').empty().append("245 Ampthill Road, Bedford MK42 9AZ");
    $('#contact').empty().append("www.Kingsarmsproject.org");
          map.panTo(marker22.getPosition());
          map.setZoom( 13);
  });
    
            var marker23 = new google.maps.Marker({           // thl.org.uk
      position: { lat: 51.5627192, lng: -1.7886402},
      map: map,
        icon: icon,
  });
     window.google.maps.event.addListener(marker23, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Threshold Housing Link");
    $('#address').empty().append("Harding Street, Swindon SN1 5BZ");
    $('#contact').empty().append("www.Thl.org.uk");
          map.panTo(marker23.getPosition());
          map.setZoom( 13);
  });
    
            var marker24 = new google.maps.Marker({           // salvation army swindon
      position: { lat: 51.5712599, lng: -1.7768657},
      map: map,
        icon: icon,
  });
     window.google.maps.event.addListener(marker24, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("The Salvation Army Swindon");
    $('#address').empty().append("Devizes Road, Swindon, Wiltshire SN1 4BG");
    $('#contact').empty().append("www.Salvationarmy.org.uk");
          map.panTo(marker24.getPosition());
          map.setZoom( 13);
  });
    
            var marker25 = new google.maps.Marker({           // salvation army northcroft
      position: { lat: 51.4020945, lng: -1.3250991},
      map: map,
        icon: icon,
  });
     window.google.maps.event.addListener(marker25, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("The Salvation Army Northcroft");
    $('#address').empty().append("The Salvation Army, Northcroft Lane, Newbury RG14 1BU");
    $('#contact').empty().append("www.Salvationarmy.org.uk");
          map.panTo(marker25.getPosition());
          map.setZoom( 13);
  });
    
           var marker26 = new google.maps.Marker({           // salvation army trowbridge
      position: { lat: 51.3203095, lng: -2.2083321},
      map: map,
       icon: icon,
  });
     window.google.maps.event.addListener(marker26, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("The Salvation Army Trowbridge");
    $('#address').empty().append("Castle Street, Trowbridge, Witshire");
    $('#contact').empty().append("www.Salvationarmy.org.uk");
          map.panTo(marker26.getPosition());
          map.setZoom( 13);
  });
    
           var marker27 = new google.maps.Marker({           // harrogate-homeless-project.org.uk north yorkshire
      position: { lat: 53.9944583, lng: -1.536461},
      map: map,
       icon: icon,
  });
     window.google.maps.event.addListener(marker27, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Harrogate Homeless Project");
    $('#address').empty().append("7 Bower Street, Harrogate, North Yorkshire HG1 5BQ");
    $('#contact').empty().append("www.Harrogate-homeless-project.org.uk");
          map.panTo(marker27.getPosition());
          map.setZoom( 13);
  });
    
           var marker28 = new google.maps.Marker({           // teeside homeless action group
      position: { lat: 54.6174902, lng: -1.0601501},
      map: map,
       icon: icon,
  });
     window.google.maps.event.addListener(marker28, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("Teeside Homeless Action Group");
    $('#address').empty().append("145 High Street, Redcar, Cleveland TS10 3DQ");
    $('#contact').empty().append("01642 478885");
          map.panTo(marker28.getPosition());
          map.setZoom( 13);
  });
    
           var marker29 = new google.maps.Marker({           // shaid.org.uk stanley
      position: { lat: 54.8693157, lng: -1.6996069},
      map: map,
       icon: icon,
  });
     window.google.maps.event.addListener(marker29, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("SHAID - Durham");
    $('#address').empty().append("Clifford Rd, Stanley DH9 0XG");
    $('#contact').empty().append("www.shaid.org.uk");
          map.panTo(marker29.getPosition());
          map.setZoom( 13);
  });
    
           var marker30 = new google.maps.Marker({           // sifa fireside sidafireside.co.uk
      position: { lat: 52.4755983, lng: -1.8798283},
      map: map,
       icon: icon,
  });
     window.google.maps.event.addListener(marker30, 'click', function () {
    $('#map-prompt').hide();
    $('#info-container').show();
    $('#name').empty().append("SIFA Fireside");
    $('#address').empty().append("48-52 Allcock St, Birmingham, B9 4DY");
    $('#contact').empty().append("www.Sifafireside.co.uk");
          map.panTo(marker30.getPosition());
          map.setZoom( 13);
  });
    
    
}

google.maps.event.addDomListener(window, 'load', initialize);
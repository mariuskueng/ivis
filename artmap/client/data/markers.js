// Markers for Paul Klee exhibitions
const markers = [
  {
    "position": {
      "lat": 51.3423734,
      "lng": 12.3757553
    },
    "title": "Museum der Bildenden Künste",
    "city": "Leipzig",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 51.2277411,
      "lng": 6.7734556
    },
    "title": "Kunstsammlung Nordrhein-Westfalen",
    "city": "Düsseldorf",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 48.782602,
      "lng": 9.187097699999999
    },
    "title": "Staatsgalerie Stuttgart",
    "city": "",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 50.937531,
      "lng": 6.9602786
    },
    "title": "DuMont Kunsthalle",
    "city": "Köln",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 47.5595986,
      "lng": 7.5885761
    },
    "title": "Öffentliche Kunstsammlung Basel, Kupferstichkabinett",
    "city": "Basel",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 47.2014207,
      "lng": 8.7777241
    },
    "title": "Seedamm-Kulturzentrum",
    "city": "Pfäffikon (SZ)",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 48.5734053,
      "lng": 7.752111299999999
    },
    "title": "Les Musées de la Ville de Strasbourg",
    "city": "Strasbourg",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 50.1109221,
      "lng": 8.6821267
    },
    "title": "Schirn Kunsthalle",
    "city": "Frankfurt am Main",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 52.363873,
      "lng": 9.739173
    },
    "title": "Sprengel Museum",
    "city": "Hannover",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 53.8654673,
      "lng": 10.6865593
    },
    "title": "Kunsthalle St.Annen",
    "city": "Lübeck",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.95080799999999,
      "lng": 7.472878
    },
    "title": "Zentrum Paul Klee",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 40.7127837,
      "lng": -74.0059413
    },
    "title": "Neue Galerie. Museum for German and Austrian Art",
    "city": "New York",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 29.7604267,
      "lng": -95.3698028
    },
    "title": "The Menil Collection",
    "city": "Houston",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.95080799999999,
      "lng": 7.472878
    },
    "title": "Zentrum Paul Klee",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 50.937531,
      "lng": 6.9602786
    },
    "title": "Museum Ludwig",
    "city": "Köln",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 50.830441,
      "lng": 6.910565999999999
    },
    "title": "Max Ernst Museum",
    "city": "Brühl",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.95080799999999,
      "lng": 7.472878
    },
    "title": "Zentrum Paul Klee",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 49.24015720000001,
      "lng": 6.996932699999999
    },
    "title": "Saarlandmuseum. Moderne Galerie",
    "city": "Saarbrücken",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 47.80949,
      "lng": 13.05501
    },
    "title": "Museum der Moderne",
    "city": "Salzburg",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 48.20430589999999,
      "lng": 16.3690259
    },
    "title": "Albertina",
    "city": "Wien",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.95080799999999,
      "lng": 7.472878
    },
    "title": "Zentrum Paul Klee",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.95080799999999,
      "lng": 7.472878
    },
    "title": "Zentrum Paul Klee",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 45.4654219,
      "lng": 9.1859243
    },
    "title": "Fondazione Antonio Mazzotta",
    "city": "Milano",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 38.9071923,
      "lng": -77.0368707
    },
    "title": "The Phillips Collection",
    "city": "Washington",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 51.6738583,
      "lng": 7.815981600000001
    },
    "title": "Städtisches Gustav-Lübcke-Museum",
    "city": "Hamm",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 49.3987524,
      "lng": 8.6724335
    },
    "title": "Heidelberger Kunstverein",
    "city": "Heidelberg",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.95080799999999,
      "lng": 7.472878
    },
    "title": "Zentrum Paul Klee",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 47.5595986,
      "lng": 7.5885761
    },
    "title": "Galerie Beyeler",
    "city": "Basel",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.95080799999999,
      "lng": 7.472878
    },
    "title": "Zentrum Paul Klee",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.95080799999999,
      "lng": 7.472878
    },
    "title": "Zentrum Paul Klee",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.95080799999999,
      "lng": 7.472878
    },
    "title": "Zentrum Paul Klee",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.95080799999999,
      "lng": 7.472878
    },
    "title": "Zentrum Paul Klee",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 52.52000659999999,
      "lng": 13.404954
    },
    "title": "Neue Nationalgalerie, Staatliche Museen zu Berlin - Preussischer Kulturbesitz",
    "city": "Berlin",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.4312213,
      "lng": 6.9106799
    },
    "title": "Maison Visinand",
    "city": "Montreux",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.95080799999999,
      "lng": 7.472878
    },
    "title": "Zentrum Paul Klee",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 51.4556432,
      "lng": 7.0115552
    },
    "title": "Museum Folkwang Essen",
    "city": "Essen",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 51.2277411,
      "lng": 6.7734556
    },
    "title": "Kunstsammlung Nordrhein-Westfalen",
    "city": "Düsseldorf",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.95080799999999,
      "lng": 7.472878
    },
    "title": "Zentrum Paul Klee",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.95080799999999,
      "lng": 7.472878
    },
    "title": "Zentrum Paul Klee",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 50.937531,
      "lng": 6.9602786
    },
    "title": "Museum für Ostasiatische Kunst",
    "city": "Köln",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 41.9027835,
      "lng": 12.4963655
    },
    "title": "Galleria Nazionale d'Arte Moderna",
    "city": "Roma",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 53.5510846,
      "lng": 9.9936818
    },
    "title": "Hamburger Kunsthalle",
    "city": "Hamburg",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 40.4167754,
      "lng": -3.7037902
    },
    "title": "Fundación Juan March",
    "city": "Madrid",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 45.7349551,
      "lng": 7.313076199999999
    },
    "title": "Museo archeologico regionale",
    "city": "Aosta",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 48.3705449,
      "lng": 10.89779
    },
    "title": "H2 - Zentrum für Gegenwartskunst im Glaspalast",
    "city": "Augsburg",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 47.6775102,
      "lng": 11.2041398
    },
    "title": "Schlossmuseum Murnau",
    "city": "Murnau",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 48.8595374,
      "lng": 2.3668699
    },
    "title": "Cité de la musique",
    "city": "Paris",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 51.4556432,
      "lng": 7.0115552
    },
    "title": "E. & A. Silberman Galleries, inc.",
    "city": "New York",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 40.7127837,
      "lng": -74.0059413
    },
    "title": "Museum of Modern Art",
    "city": "New York",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 48.1351253,
      "lng": 11.5819806
    },
    "title": "Städtische Galerie  im Lenbachhaus",
    "city": "München",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 40.4167754,
      "lng": -3.7037902
    },
    "title": "Fundación Juan March",
    "city": "Madrid",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 50.8503396,
      "lng": 4.3517103
    },
    "title": "Palais des Beaux-Arts",
    "city": "Bruxelles",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 51.8222436,
      "lng": 12.2424516
    },
    "title": "Stiftung Bauhaus Dessau",
    "city": "Dessau",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 53.5510846,
      "lng": 9.9936818
    },
    "title": "Hamburger Kunsthalle",
    "city": "Hamburg",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 41.9992618,
      "lng": 12.0999962
    },
    "title": "Palazzo Ruspoli",
    "city": "Rom",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 51.507721,
      "lng": -0.0991941
    },
    "title": "Tate Modern",
    "city": "London",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 40.7127837,
      "lng": -74.0059413
    },
    "title": "Buchholz Gallery C. Valentin",
    "city": "New York",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.9509867,
      "lng": 7.443583400000001
    },
    "title": "Kunstmuseum Bern",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.95080799999999,
      "lng": 7.472878
    },
    "title": "Zentrum Paul Klee",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 51.3423734,
      "lng": 12.3757553
    },
    "title": "Museum der bildenden Künste Leipzig",
    "city": "Leipzig",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 47.6775102,
      "lng": 11.2041398
    },
    "title": "Schlossmuseum Murnau",
    "city": "Murnau",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.9509867,
      "lng": 7.443583400000001
    },
    "title": "Kunstmuseum Bern",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 40.7127837,
      "lng": -74.0059413
    },
    "title": "Museum of Modern Art",
    "city": "New York",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.95080799999999,
      "lng": 7.472878
    },
    "title": "Zentrum Paul Klee",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.95080799999999,
      "lng": 7.472878
    },
    "title": "Zentrum Paul Klee",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.95080799999999,
      "lng": 7.472878
    },
    "title": "Zentrum Paul Klee",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 53.5510846,
      "lng": 9.9936818
    },
    "title": "Hamburger Kunsthalle",
    "city": "Hamburg",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.95080799999999,
      "lng": 7.472878
    },
    "title": "Zentrum Paul Klee",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.95080799999999,
      "lng": 7.472878
    },
    "title": "Zentrum Paul Klee",
    "city": "Bern",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 52.52000659999999,
      "lng": 13.404954
    },
    "title": "Kupferstichkabinett, Berlin",
    "city": "",
    "defaultAnimation": 2
  },
  {
    "position": {
      "lat": 46.95080799999999,
      "lng": 7.472878
    },
    "title": "Zentrum Paul Klee",
    "city": "Bern",
    "defaultAnimation": 2
  }
];

export default markers;

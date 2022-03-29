var people = [
    {
      city: "Raškovice",
      first_name: "Nollie",
      last_name: "Larkings",
      country: "Czech Republic",
    },
    {
      city: "Sanchahe",
      first_name: "Modestia",
      last_name: "Lange",
      country: "China",
    },
    {
      city: "Xinan",
      first_name: "Storm",
      last_name: "Latch",
      country: "China",
    },
    {
      city: "Pamarayan",
      first_name: "Reube",
      last_name: "Parffrey",
      country: "Indonesia",
    },
    {
      city: "Asunción",
      first_name: "Nelly",
      last_name: "Draaisma",
      country: "Paraguay",
    },
    {
      city: "Wanjiazhuang",
      first_name: "Randie",
      last_name: "Havercroft",
      country: "China",
    },
    {
      city: "Zubrzyca Dolna",
      first_name: "Aliza",
      last_name: "MacIllrick",
      country: "Poland",
    },
    {
      city: "Panitan",
      first_name: "Reeva",
      last_name: "Bosnell",
      country: "Philippines",
    },
    {
      city: "Palana",
      first_name: "Erminia",
      last_name: "Ewings",
      country: "Russia",
    },
    {
      city: "Lauro de Freitas",
      first_name: "Letisha",
      last_name: "Melsom",
      country: "Brazil",
    },
    {
      city: "Novi Pazar",
      first_name: "Marcel",
      last_name: "Aiskovitch",
      country: "Serbia",
    },
    {
      city: "Colcabamba",
      first_name: "Krystal",
      last_name: "Besse",
      country: "Peru",
    },
    {
      city: "Kema",
      first_name: "Bat",
      last_name: "Fowgies",
      country: "Indonesia",
    },
    {
      city: "Alès",
      first_name: "Pam",
      last_name: "Schellig",
      country: "France",
    },
    {
      city: "Łazy",
      first_name: "Chrysa",
      last_name: "Colman",
      country: "Poland",
    },
    {
      city: "Tiguion",
      first_name: "Ramon",
      last_name: "Covey",
      country: "Philippines",
    },
    {
      city: "Heemskerk",
      first_name: "Guillermo",
      last_name: "Posnette",
      country: "Netherlands",
    },
    {
      city: "Yangzi",
      first_name: "Erroll",
      last_name: "Gleaves",
      country: "China",
    },
    {
      city: "Panite",
      first_name: "Boniface",
      last_name: "McGrowther",
      country: "Indonesia",
    },
    {
      city: "Kysyl-Syr",
      first_name: "Orelia",
      last_name: "Blune",
      country: "Russia",
    },
    {
      city: "Bamencheng",
      first_name: "Dagny",
      last_name: "Brockway",
      country: "China",
    },
    {
      city: "Åtvidaberg",
      first_name: "Gertrude",
      last_name: "Van Leijs",
      country: "Sweden",
    },
    {
      city: "Sydney",
      first_name: "Cordell",
      last_name: "Rosenblatt",
      country: "Australia",
    },
    {
      city: "Dali",
      first_name: "Jorge",
      last_name: "Youens",
      country: "China",
    },
    {
      city: "Tangwu",
      first_name: "Jeddy",
      last_name: "Casterot",
      country: "China",
    },
    {
      city: "As Saffānīyah",
      first_name: "Jolie",
      last_name: "Benley",
      country: "Saudi Arabia",
    },
    {
      city: "Shar",
      first_name: "Salaidh",
      last_name: "Plover",
      country: "Kazakhstan",
    },
    {
      city: "Sobienie Jeziory",
      first_name: "Granthem",
      last_name: "Smissen",
      country: "Poland",
    },
    {
      city: "San Vicente",
      first_name: "Jamesy",
      last_name: "Betton",
      country: "Philippines",
    },
    {
      city: "Kampungsusah",
      first_name: "Gardy",
      last_name: "Hambelton",
      country: "Indonesia",
    },
  ];
  var newArray = people.filter(function(item) {
      return item.country == "China"
  });

  for (var i=0 ; i<newArray.length ; i++) {
      console.log(newArray[i].first_name);
  }
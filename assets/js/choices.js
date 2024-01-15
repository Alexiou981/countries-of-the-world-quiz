/* 
This array holds all flags info, including possible 
answers out of which only one is correct each time.
*/
let choices = [
  {
    image: "assets/images/flags/algeria.png",
    answers: [
      { text: "Greece" },
      { text: "Germany" },
      { text: "Algeria" },
      { text: "Brazil" }
    ],
    correct: "Algeria"
  },
  {
    image: "assets/images/flags/argentina.png",
    answers: [
      { text: "Brazil" },
      { text: "Argentina" },
      { text: "Colombia" },
      { text: "Ecuador" }
    ],
    correct: "Argentina"
  },
  {
    image: "assets/images/flags/australia.png",
    answers: [
      { text: "Greece" },
      { text: "Australia" },
      { text: "Bahamas" },
      { text: "Cyprus" }
    ],
    correct: "Australia"
  },
  {
    image: "assets/images/flags/bahamas.png",
    answers: [
      { text: "Malaysia" },
      { text: "Lebanon" },
      { text: "Spain" },
      { text: "Bahamas" }
    ],
    correct: "Bahamas"
  },
  {
    image: "assets/images/flags/bangladesh.png",
    answers: [
      { text: "Bangladesh" },
      { text: "Chile" },
      { text: "Germany" },
      { text: "India" }
    ],
    correct: "Bangladesh"
  },
  {
    image: "assets/images/flags/belgium.png",
    answers: [
      { text: "Germany" },
      { text: "Belgium" },
      { text: "Indonesia" },
      { text: "Ireland" }
    ],
    correct: "Belgium"
  },
  {
    image: "assets/images/flags/belize.png",
    answers: [
      { text: "Iran" },
      { text: "Ireland" },
      { text: "Belize" },
      { text: "Malaysia" }
    ],
    correct: "Belize"
  },
  {
    image: "assets/images/flags/bolivia.png",
    answers: [
      { text: "Lybia" },
      { text: "Singapore" },
      { text: "Saudi-Arabia" },
      { text: "Bolivia" }
    ],
    correct: "Bolivia"
  },
  {
    image: "assets/images/flags/brazil.png",
    answers: [
      { text: "Kenya" },
      { text: "Brazil" },
      { text: "New-Zealand" },
      { text: "Spain" }
    ],
    correct: "Brazil"
  },
  {
    image: "assets/images/flags/bulgaria.png",
    answers: [
      { text: "Bulgaria" },
      { text: "Finland" },
      { text: "Cameroon" },
      { text: "Cambodia" }
    ],
    correct: "Bulgaria"
  },
  {
    image: "assets/images/flags/cambodia.png",
    answers: [
      { text: "Greece" },
      { text: "Germany" },
      { text: "Cambodia" },
      { text: "Italy" }
    ],
    correct: "Cambodia"
  },
  {
    image: "assets/images/flags/cameroon.png",
    answers: [
      { text: "India" },
      { text: "Cameroon" },
      { text: "Iran" },
      { text: "Lebanon" }
    ],
    correct: "Cameroon"
  },
  {
    image: "assets/images/flags/chile.png",
    answers: [
      { text: "Algeria" },
      { text: "Sri-Lanka" },
      { text: "Lybia" },
      { text: "Chile" }
    ],
    correct: "Chile"
  },
  {
    image: "assets/images/flags/colombia.png",
    answers: [
      { text: "Japan" },
      { text: "Colombia" },
      { text: "Australia" },
      { text: "Bahamas" }
    ],
    correct: "Colombia"
  },
  {
    image: "assets/images/flags/costa-rica.png",
    answers: [
      { text: "Singapore" },
      { text: "Belgium" },
      { text: "Costa-Rica" },
      { text: "Bulgaria" }
    ],
    correct: "Costa-Rica"
  },
  {
    image: "assets/images/flags/cuba.png",
    answers: [
      { text: "Cuba" },
      { text: "Cambodia" },
      { text: "Spain" },
      { text: "Italy" }
    ],
    correct: "Cuba"
  },
  {
    image: "assets/images/flags/finland.png",
    answers: [
      { text: "Belize" },
      { text: "Finland" },
      { text: "Bangladesh" },
      { text: "Cameroon" }
    ],
    correct: "Finland"
  },
  {
    image: "assets/images/flags/germany.png",
    answers: [
      { text: "Italy" },
      { text: "Germany" },
      { text: "Greece" },
      { text: "Ireland" }
    ],
    correct: "Germany"
  },
  {
    image: "assets/images/flags/greece.png",
    answers: [
      { text: "Chile" },
      { text: "Colombia" },
      { text: "Cuba" },
      { text: "Greece" }
    ],
    correct: "Greece"
  },
  {
    image: "assets/images/flags/india.png",
    answers: [
      { text: "Bangladesh" },
      { text: "India" },
      { text: "Sri-Lanka" },
      { text: "Costa-Rica" }
    ],
    correct: "India"
  },
  {
    image: "assets/images/flags/indonesia.png",
    answers: [
      { text: "Indonesia" },
      { text: "Taiwan" },
      { text: "Serbia" },
      { text: "China" }
    ],
    correct: "Indonesia"
  },
  {
    image: "assets/images/flags/iran.png",
    answers: [
      { text: "Saudi-Arabia" },
      { text: "Israel" },
      { text: "Iran" },
      { text: "Turkey" }
    ],
    correct: "Iran"
  },
  {
    image: "assets/images/flags/ireland.png",
    answers: [
      { text: "England" },
      { text: "Netherlands" },
      { text: "Bulgaria" },
      { text: "Ireland" },
    ],
    correct: "Ireland"
  },
  {
    image: "assets/images/flags/italy.png",
    answers: [
      { text: "Italy" },
      { text: "France" },
      { text: "Cyprus" },
      { text: "Egypt" },
    ],
    correct: "Italy"
  },
  {
    image: "assets/images/flags/japan.png",
    answers: [
      { text: "Taiwan" },
      { text: "Pakistan" },
      { text: "Serbia" },
      { text: "Japan" }
    ],
    correct: "Japan"
  },
  {
    image: "assets/images/flags/kenya.png",
    answers: [
      { text: "Somalia" },
      { text: "Kenya" },
      { text: "Lybia" },
      { text: "Ghana" }
    ],
    correct: "Kenya"
  },
  {
    image: "assets/images/flags/lebanon.png",
    answers: [
      { text: "Lebanon" },
      { text: "Morocco" },
      { text: "Algeria" },
      { text: "Madagascar" }
    ],
    correct: "Lebanon"
  },
  {
    image: "assets/images/flags/lybia.png",
    answers: [
      { text: "Israel" },
      { text: "Turkey" },
      { text: "Lybia" },
      { text: "Syria" }
    ],
    correct: "Lybia"
  },
  {
    image: "assets/images/flags/malaysia.png",
    answers: [
      { text: "Indonesia" },
      { text: "Taiwan" },
      { text: "Malaysia" },
      { text: "China" }
    ],
    correct: "Malaysia"
  },
  {
    image: "assets/images/flags/mexico.png",
    answers: [
      { text: "Guatemala" },
      { text: "Mexico" },
      { text: "Ecuador" },
      { text: "Cuba" }
    ],
    correct: "Mexico"
  },
  {
    image: "assets/images/flags/new-zealand.png",
    answers: [
      { text: "Indonesia" },
      { text: "Australia" },
      { text: "Japan" },
      { text: "New-Zealand" }
    ],
    correct: "New-Zealand"
  },
  {
    image: "assets/images/flags/saudi-arabia.png",
    answers: [
      { text: "Dubai" },
      { text: "Saudi-Arabia" },
      { text: "Egypt" },
      { text: "China" }
    ],
    correct: "Saudi-Arabia"
  },
  {
    image: "assets/images/flags/singapore.png",
    answers: [
      { text: "Indonesia" },
      { text: "Taiwan" },
      { text: "Serbia" },
      { text: "Singapore" }
    ],
    correct: "Singapore"
  },
  {
    image: "assets/images/flags/spain.png",
    answers: [
      { text: "Spain" },
      { text: "France" },
      { text: "Italy" },
      { text: "Andorra" }
    ],
    correct: "Spain"
  },
  {
    image: "assets/images/flags/sri-lanka.png",
    answers: [
      { text: "Sri-Lanka" },
      { text: "Indonesia" },
      { text: "Taiwan" },
      { text: "China" }
    ],
    correct: "Sri-Lanka"
  }
];
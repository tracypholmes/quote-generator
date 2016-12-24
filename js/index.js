var quotes = [
  'No person is your friend who demands your silence, or denies your right to grow. -Alice Walker',
  'What God intended for you goes far beyond anything you can imagine. -Oprah Winfrey',
  'I did what my conscience told me to do, and you can\'t fail if you do that. -Anita Hill',
  'Life is very short and what we have to do must be done in the now. -Audre Lorde',
  'If you don\'t like something, change it. If you can\'t change it, change your attitude. -Maya Angelou',
  'Mistakes are a fact of life. It is the response to the error that counts. -Nikki Giovanni',
  'Don\'t feel entitled to anything you didn\'t sweat and struggle for. -Marian Wright Edelman',
  'No matter what accomplishments you make, somebody helped you. -Althea Gibson',
  'As you become more clear about who you really are, you\'ll be better able to decide what is best for you - the first time around. -Oprah Winfrey',
  'Hate is too great a burden to bear. It injures the hater more than it injures the hated. -Coretta Scott King',
  'It\'s not the load that breaks you down, it\'s the way you carry it. -Lena Horne',
  'It is not our differences that divide us. It is our inability to recognize, accept, and celebrate those differences. -Audre Lorde',
  'There\'s always something to suggest that you\'ll never be who you wanted to be. Your choice is to take it or keep on moving. -Phylicia Rashad',
  'Don\'t wait around for other people to be happy for you. Any happiness you get you\'ve got to make yourself. -Alice Walker'
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
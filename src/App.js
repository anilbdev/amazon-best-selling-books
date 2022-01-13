import './App.css';
import BookList from './BookList';
import Header from './components/Header';
const books = [
  {
    id:1,
    title:'The Psychology of Money',
    auther:'Morgan Housel',
    img:'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL906_SR906,600_.jpg'
  },
  {
    id:2,
    title:'DO EPIC SHIT',
    auther:'Ankur Warikoo',
    img:'https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL302_SR302,200_.jpg'
  },
  {
    id:3,
    title:'Atomic Habits',
    auther:'James Clear ',
    img:'https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL302_SR302,200_.jpg'
  },
  {
    id:4,
    title:'Ikigai',
    auther:'Héctor García ',
    img:'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL906_SR906,600_.jpg'
  },
  {
    id:5,
    title:'Word Power Made Easy',
    auther:'Norman Lewis',
    img:'https://images-eu.ssl-images-amazon.com/images/I/818e+fq7+BL._AC_UL906_SR906,600_.jpg'
  },
  {
    id:6,
    title:'The Psychology of Money',
    auther:'Morgan Housel',
    img:'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL906_SR906,600_.jpg'
  },
  {
    id:7,
    title:'DO EPIC SHIT',
    auther:'Ankur Warikoo',
    img:'https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL302_SR302,200_.jpg'
  },
  {
    id:8,
    title:'Atomic Habits',
    auther:'James Clear ',
    img:'https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL302_SR302,200_.jpg'
  },
  {
    id:9,
    title:'Ikigai',
    auther:'Héctor García ',
    img:'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL906_SR906,600_.jpg'
  },
  {
    id:10,
    title:'Word Power Made Easy',
    auther:'Norman Lewis',
    img:'https://images-eu.ssl-images-amazon.com/images/I/818e+fq7+BL._AC_UL906_SR906,600_.jpg'
  },
]

function App() {
  // console.log('books,>>',books);
  return (
    <div className="container">
      <Header/>
      <BookList books={books}/>
    </div>
  );
}

export default App;

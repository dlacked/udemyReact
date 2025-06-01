import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

const reactDescription = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  )
}

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[genRandomInt(reactDescription.length)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <ul>
            <CoreConcept title='Components' 
            description='The core UI building block.'
            img={componentsImg}/>
            <CoreConcept title='Props'/>
            <CoreConcept />
            <CoreConcept />
          </ul>  
        </section>
      </main>
    </div>
  );
}

export default App;

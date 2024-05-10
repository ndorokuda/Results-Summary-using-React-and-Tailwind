import ResultSummaryMain from './components/ResultSummaryMain';
import YourResult from './components/YourResult';
import Summary from './components/Summary';

const App = () => {
  return (
    <div className='h-screen md:flex flex-col justify-center items-center'>
      <ResultSummaryMain>
        <YourResult />
        <Summary />
      </ResultSummaryMain>
    </div>
  );
};

export default App;

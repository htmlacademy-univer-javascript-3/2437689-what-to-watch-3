import MainPage from '../../pages/main_page/main_page.tsx';

type AppScreenProps = {
  filmCardTitle: string;
  filmCardGenre: string;
  filmCardYear: number;
}

function App({ filmCardTitle, filmCardGenre, filmCardYear }: AppScreenProps): JSX.Element {
  return (
    <MainPage filmCardTitle={filmCardTitle} filmCardGenre={filmCardGenre} filmCardYear={filmCardYear} />
  );
}

export default App;

import {useState} from 'react';
import {TabType, tabTypes} from '../../consts.ts';
import TabOverview from './tab-overview/tab-overview.tsx';
import TabReviews from './tab-reviews/tab-reviews.tsx';
import {useAppSelector} from '../hooks/hooks.ts';
import TabDetails from './tab-details/tab-details.tsx';
import {getReviews} from '../../store/film-reducer/selectors.ts';
import {FilmType, Review} from "../../types/types.ts";

function getTab(tab: TabType, film: FilmType, reviews: Review[]): JSX.Element {
  switch (tab) {
    case TabType.Overview:
      return <TabOverview film={film} />;
    case TabType.Details:
      return <TabDetails film={film} />;
    case TabType.Reviews:
      return <TabReviews reviews={reviews} />;
  }
}

type TabsProps = {
  film: FilmType;
}

export function Tabs({ film }: TabsProps): JSX.Element {
  const [tab, setTab] = useState<TabType>(TabType.Overview);
  const reviews = useAppSelector(getReviews);
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabTypes.map((item) => (
            <li className="film-nav__item" key={item}>
              <div onClick={() => {
                setTab(item);
              }} className="film-nav__link"
              >
                {item}
              </div>
            </li>
          ))}
        </ul>
      </nav>
      {getTab(tab, film, reviews)}
    </div>
  );
}

import {useState} from 'react';
import {Film} from '../../types/films';
import {TabType, tabTypes} from '../../utils/consts.ts';
import {TabOverview} from './tab-overview.tsx';
import {TabDetails} from './tab-details.tsx';
import {TabReviews} from './tab-reviews.tsx';

type TabsProps = {
  film: Film;
};

function GetTabComponent(tab: TabType, film: Film): JSX.Element {
  switch (tab) {
    case TabType.Overview:
      return <TabOverview film={film} />;
    case TabType.Details:
      return <TabDetails film={film} />;
    case TabType.Reviews:
      return <TabReviews film={film} />;
  }
}
export function Tabs({ film }: TabsProps): JSX.Element {
  const [tab, setTab] = useState<TabType>(TabType.Overview);
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabTypes.map((item) => (
            <li className="film-nav__item" key={item}>
              <div
                onClick={() => {
                  setTab(item);
                }}
                className="film-nav__link"
              >
                {item}
              </div>
            </li>
          ))}
        </ul>
      </nav>
      {GetTabComponent(tab, film)}
    </div>
  );
}

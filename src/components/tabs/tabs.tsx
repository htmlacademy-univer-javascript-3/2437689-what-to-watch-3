import {useState} from 'react';
import {Review} from '../../types/films';
import {TabType, tabTypes} from '../../utils/consts.ts';
import TabOverview from './tab-overview.tsx';
import TabReviews from './tab-reviews.tsx';
import {useAppSelector} from "../hooks/hooks.ts";
import TabDetails from "./tab-details.tsx";

function GetTabComponent(tab: TabType, reviews: Review[]): JSX.Element {
  switch (tab) {
    case TabType.Overview:
      return <TabOverview />;
    case TabType.Details:
      return <TabDetails />;
    case TabType.Reviews:
      return <TabReviews reviews={reviews} />;
  }
}
export function Tabs(): JSX.Element {
  const [tab, setTab] = useState<TabType>(TabType.Overview);
  const reviews = useAppSelector((state) => state.reviews);
  console.log("Reviews: ", reviews);
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
      {GetTabComponent(tab, reviews)}
    </div>
  );
}

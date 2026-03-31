import InfoPage from "@/pages/InfoPage";
import MainLandmarkPage from "@/pages/MainLandmarkPage";
import PicturesPage from "@/pages/PicturesPage";
import LandmarkPage from "@/pages/LandmarkPage";
import UserPicturesPage from "@/pages/UserPicturesPage";
import OtherLandmarksPage from "@/pages/OtherLandmarksPage";
import Menu from "@/shared/Menu";
import Router from "./routing/Router";
import "./App.css";

export default function App() {
  const routes = [
    { path: "/", component: InfoPage },
    { path: "/pictures", component: PicturesPage },
    { path: "/mainLandmark", component: MainLandmarkPage },
    { path: "/otherLandmarks", component: OtherLandmarksPage },
    { path: "/otherLandmarks/:id", component: LandmarkPage },
    { path: "/userPictures", component: UserPicturesPage },
    { path: "*", component: () => <h1>404 Page not found</h1> },
  ];

  return (
    <div className="app">
      <header className="appHeader">
        <h1 className="appTitle">Достопримечательности Нижнего Новгорода</h1>
        <p className="appSubtitle">
          Небольшой путеводитель по главным местам города на слиянии Оки и Волги.
        </p>
      </header>

      <Menu />

      <main className="appContent">
        <Router routes={routes} />
      </main>
    </div>
  );
}

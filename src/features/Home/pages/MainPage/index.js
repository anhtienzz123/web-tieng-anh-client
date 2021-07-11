import Landing from "features/Home/components/Landing";
import React from "react";
import { useSelector } from "react-redux";


function MainPage() {

  const listVideoRecommend = useSelector(state => state.home.listVideoRecommend);
  const listTestRecommend = useSelector(state => state.home.listTestRecommend);
  console.log(listTestRecommend);

  return (
    <div id="landing_page">
      <Landing listTestRecommend={listTestRecommend} listVideoRecommend={listVideoRecommend} />
    </div>
  );
}

export default MainPage;

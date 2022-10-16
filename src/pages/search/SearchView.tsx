import React from "react";

const SearchView: React.FC = () => {
  let params = new URL(document.location.toString()).searchParams;
  let searchedTerm = params.get('s')

  return <p>This is Searching page</p>;
};

export default SearchView;

import eventBus from "../../EventBus";

function Search() {
  
  let searched = (event) => {
    eventBus.dispatch("searched",{query:event.nativeEvent.target.value});
  }

  return (
    <input type="text" placeholder="Search" onKeyUp={searched}/>
  );
}

export default Search;

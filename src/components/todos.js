import { useState, useEffect } from "react";
import Footer from "./Footer/footer";
import Form from "./Form/form";
import Lists from "./List/lists";

function Todos() {
  const [element, setElement] = useState([]);
  const [filteredTodo, setFilteredTodo] = useState(element);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("list"));
    setElement(items);
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(element));
  }, [element, filteredTodo]);
  return (
    <section className="todoapp">
      <Form setElement={setElement} element={element} />
      <Lists
        displayElement={element}
        setDisplayElement={setElement}
        filteredTodo={filteredTodo}
      />
      <Footer
        showElement={element}
        filteredTodo={filteredTodo}
        setFilteredTodo={setFilteredTodo}
      />
    </section>
  );
}

export default Todos;

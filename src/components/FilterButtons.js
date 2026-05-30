import useUIStore from "../store/uiStore";

const FilterButtons = () => {
  const { filter, setFilter, language } = useUIStore();

  const texts = {
    fa: {
      all: "همه",
      active: "فعال",
      completed: "انجام شده",
    },
    en: {
      all: "All",
      active: "Active",
      completed: "Completed",
    },
  };

  return (
    <div className="filter-buttons">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        {texts[language].all}
      </button>

      <button
        className={filter === "active" ? "active" : ""}
        onClick={() => setFilter("active")}
      >
        {texts[language].active}
      </button>

      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => setFilter("completed")}
      >
        {texts[language].completed}
      </button>
    </div>
  );
};

export default FilterButtons;

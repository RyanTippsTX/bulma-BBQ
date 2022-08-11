import MenuCard from './menuCard';

export default function Menu() {
  return (
    <section id="menu" className="section" style={{ overflowY: 'auto', height: '100%' }}>
      <div className="container is-max-desktop">
        <div className="columns">
          <div className="column">
            <MenuCard menuCategory="Meats" />
            <MenuCard menuCategory="Sauces" />
            <MenuCard menuCategory="Snacks" />
          </div>

          <div className="column">
            <MenuCard menuCategory="Sides" />
            <MenuCard menuCategory="Desserts" />
            <MenuCard menuCategory="Breakfast Tacos" />
          </div>

          <div className="column">
            <MenuCard menuCategory="Breakfast Baked Goods" />
            <MenuCard menuCategory="Non-BBQ Mains" />
            <MenuCard menuCategory="Non-BBQ Sides" />
          </div>
        </div>
      </div>
    </section>
  );
}

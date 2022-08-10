export default function Menu() {
  return (
    <section id="menu" className="section" style={{ overflowY: 'auto', height: '100%' }}>
      <div className="container is-max-desktop">
        <div className="columns">
          <div className="column">
            <div className="box content is-medium-small">
              <h6 className="mb-2">Meats</h6>
              <p className="m-0">Brisket</p>
              <p className="m-0">Pork spare ribs</p>
              <p className="m-0">Beef ribs</p>
              <p className="m-0">Chicken</p>
              <p className="m-0">Chopped brisket jalapeno poppers</p>
              <p className="m-0">Ribeye steak (bbq-style)</p>
              <p className="m-0">Venison steak, bacon wraped</p>
            </div>

            <div className="box content is-medium-small">
              <h6 className="mb-2">Sauces</h6>
              <p className="m-0">Lady Bird's BBQ sauce</p>
              <p className="m-0">Central Texas BBQ sauce</p>
              <p className="m-0">Gold BBQ Sauce</p>
              <p className="m-0">Franklin's Espresso BBQ Sauce</p>
            </div>
            <div className="box content is-medium-small">
              <h6 className="mb-2">Snacks</h6>
              <p className="m-0">Smoked Cheez-its</p>
              <p className="m-0">Dried venison sausage</p>
              <p className="m-0">Thanksgiving Iced latte</p>
            </div>
          </div>

          <div className="column">
            <div className="box content is-medium-small">
              <h6 className="mb-2">Sides</h6>
              <p className="m-0">Grandma B's German potato salad</p>
              <p className="m-0">Steve's Mexicorn salad</p>
              <p className="m-0">Tipps BBQ beans</p>
              <p className="m-0">Keck's green beans</p>
              <p className="m-0">Ranch style beans</p>
              <p className="m-0">Smoked corn on the cob</p>
            </div>

            <div className="box content is-medium-small">
              <h6 className="mb-2">Desserts</h6>
              <p className="m-0">Dutch oven blueberry cobbler</p>
              <p className="m-0">Tres Leches</p>
              <p className="m-0">Andy's Arroz con leche</p>
            </div>

            <div className="box content is-medium-small">
              <h6 className="mb-2">Breakfast Tacos</h6>
              <span>Flour or corn tortilla, with any of the following:</span>
              <div className="columns variable">
                <div className="column">
                  <p className="m-0">Egg</p>
                  <p className="m-0">Bacon</p>
                  <p className="m-0">Brisket</p>
                  <p className="m-0">Steak</p>
                </div>
                <div className="column">
                  <p className="m-0">Tomato</p>
                  <p className="m-0">Avocado</p>
                  <p className="m-0">Beans</p>
                  <p className="m-0">Cheese</p>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="box content is-medium-small">
              <h6 className="mb-2">Breakfast Baked Goods</h6>
              <p className="m-0">Dutch apple coffee cake</p>
              <p className="m-0">Alex's banana bread</p>
            </div>

            <div className="box content is-medium-small">
              <h6 className="mb-2">Non-BBQ Mains</h6>
              <p className="m-0">Lady Bird's Pedernales River chili</p>
              <p className="m-0">KC's Sweet chicken bacon wraps</p>
              <p className="m-0">Mom's meatloaf</p>
              <p className="m-0">Mom's Tuna burgers</p>
            </div>

            <div className="box content is-medium-small">
              <h6 className="mb-2">Non-BBQ Sides</h6>
              <p className="m-0">Baked tomatoes w/ parmesan</p>
              <p className="m-0">Sauteed spinach w/ tomatoes & garlic</p>
              <p className="m-0">Dirty street corn</p>
              <p className="m-0">Grilled sauerkraut w/ onions & peppers</p>
              <p className="m-0">Grilled Vegetable shish-kabobs</p>
              <p className="m-0">Grilled broccolini</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

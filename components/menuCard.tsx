// import menu from '../menu/menu.json';
const menu: any = require('../menu/menu.json');

// interface Menu any;

export default function MenuCard({ menuCategory }: { menuCategory: string }) {
  const menuItems: any = menu[menuCategory].map((item: any) => {
    if (typeof item === 'string') {
      return (
        <p key={item} className="m-0">
          {item}
        </p>
      );
    } else if (typeof item === 'object' && item['Note']) {
      return (
        <span key={item['Note']} className="m-0">
          {item['Note']}
        </span>
      );
    }
  });

  return (
    <div className="box content is-medium-small">
      <h6 className="mb-2">{menuCategory}</h6>
      <>{menuItems}</>
    </div>
  );
}

import MenuCard from './MenuCard';

const Menu = () => {
  const menuData = [
    {
      title: "Sun's Out, BOGO's Out",
      description: 'Through 8/15!',
      imageUrl: './food-item/burger1.jpg',
      buttonText: 'Order Now',
    },
    {
      title: 'Special Burger Combo',
      description: 'Limited Time Offer!',
      imageUrl: './food-item/combo1.jpg',
      buttonText: 'Order Now!',
    },
    {
      title: 'Dog Days of Summer!',
      description: 'Every Friday $3 hot dogs throughout this summer season!',
      imageUrl: './food-item/hotdog4.jpg',
      buttonText: 'View Details',
    },
    {
      title: 'Fan Favorites',
      description: 'See our refuse to leave items!',
      imageUrl: './food-item/milkshake.jpg',
      buttonText: 'Order Now',
    },
    {
      title: 'Burger Day',
      description: 'Learn about burger facts and history',
      imageUrl: './food-item/burgerday.jpg',
      buttonText: 'Learn More',
    },
    {
      title: 'Our Story',
      description: 'Why we wanted to create your perfect burger',
      imageUrl: './food-item/burgerstore.jpg',
      buttonText: 'Read More',
    },
  ];

  return (
    
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-2 gap-6">
      {menuData.map((item, index) => (
        <MenuCard
          key={index}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          buttonText={item.buttonText}
        />
      ))}
    </div>
    
  );
};

export default Menu;

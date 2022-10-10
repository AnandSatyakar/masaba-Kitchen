import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Veg Pizza',
    description: 'Finest tomatoes and veggies',
    price: 225,
  },
  {
    id: 'm2',
    name: 'Chicken Kebab',
    description: 'Boneless chicken perfect for starters ',
    price: 120,
  },
  {
    id: 'm3',
    name: 'Chicken Biryani',
    description: 'Biryani rice + Chicken sherwa + Raitha',
    price: 150,
  },
  {
    id: 'm4',
    name: 'Chole Bhature',
    description: 'perfect for breakfast',
    price: 80,
  },
  {
    id: 'm5',
    name: 'Chicken butter Masala',
    description: 'Finest chicken for main course',
    price: 160,
  },
  {
    id: 'm6',
    name: 'Veg Pulao',
    description: 'Rice cooked with fresh veggies',
    price: 125,
  },
  {
    id: 'm1',
    name: 'Gulabjamun',
    description: 'Finish meal with dessert',
    price: 25,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
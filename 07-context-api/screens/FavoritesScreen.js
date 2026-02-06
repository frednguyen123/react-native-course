import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";

import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id),
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.backgroundColor}>
      <MealsList items={favoriteMeals} />
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3f2f25",
    // need to add style on new version of rnative
  },
  backgroundColor: {
    flex: 1, 
    backgroundColor: "#3f2f25",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

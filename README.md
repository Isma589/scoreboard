# Scoreboard

This web application is a basketball score counter. During the game, a home team and a visitor team alternatively get attributed 1, 2 or 3 points. A reset button helps reset both teams' scores to zero if needed. 

# Objective

This serves as a learning project to practice JavaScript, CSS and HTML coding.

# Main lessons

- Avoid code redundancy : in the first versions of the code, I did repeat the same function numerous times instead of abstracting the common logic.
  
- Learn to properly use `let` and `const`. The first one is for variables that will change, while the latter is for those that won't.
  
- Use variables as `points` by passing them as an argument to the function instead of manipulating them directly inside the function. Directly using them inside the functions can lead to issues with state management and debugging.
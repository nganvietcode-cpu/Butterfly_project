# Butterfly Particle Data Visualisation
## Table of Contents
1. Project Overview
2. Technologies Used
3. Project File Structure
4. Dataset
5. Features
6. How it works
7. Run the project
8. Project development
9. Limitations and Future Improvements
10. Resources and References 

## Project Overview

This project explores the relationship between scientific data and digital art through an animated butterfly created using p5.js.

Instead of presenting butterfly population data through numbers or traditional graphs, I wanted to create a more engaging visual experience. The animation uses a particle system to form the silhouette of a butterfly, with the number of visible particles changing according to historical butterfly observation records.

The aim is to explore how creative coding can transform numerical data into a visual artwork while encouraging viewers to think about changes in butterfly populations over time.

## Technologies Used

- **p5.js:** A JavaScript library used to create the animation and visual elements.
- **JavaScript:** Used to program the particle system, movement, and data transitions.
- **CSV dataset:** Stores historical butterfly observation records used to control the animation.
- **p5.js Web Editor:** The development environment used to write, test, and run the code.

## Project File Structure

1. sketch.js – Main Animation
The main JavaScript file that runs the p5.js animation. It controls the canvas, particle movement, and visual changes based on the dataset.

2. butterfly.js – Butterfly Animation Components
A separate JavaScript file used to organise code related to the butterfly animation. Its specific role depends on the functions defined inside it.

3. draft.js – Development and Experimentation
A JavaScript file used for testing and experimenting with earlier versions of the code during the development process, it contains my previous drafts.

4. resource.csv – Historical Observation Data
Contains selected and filtered butterfly observation records from the original Natural History Museum dataset, focusing on the years 1815 to 1819. The data was organised into two columns, Year and Count, and is used to control the number of visible particles in the animation.

5. index.html – Webpage Structure
Provides the basic webpage structure and loads the necessary JavaScript files, p5.js library, and CSS stylesheet.

6. style.css – Visual Presentation
Controls the webpage's visual appearance, including its background, layout, and canvas positioning.

## Dataset

The project uses historical butterfly and moth observation data from the Natural History Museum, London.

For this animation, I selected annual observation records from 1815 to 1819 and organised them into a simplified CSV file containing two columns: `Year` and `Count`.

The observation counts are used to control the number of visible particles in the animation. Higher counts are represented by more particles, while lower counts produce fewer particles.

These values represent recorded observations rather than exact butterfly population sizes.

**Original dataset:** [Natural History Museum – Butterfly and Moth Records](https://data.nhm.ac.uk/dataset/buttmoth/resource/c1727662-2d1e-426f-818c-d144552a747c)

## Features

- A particle system that forms the silhouette of a butterfly.
- Animated particles that move continuously within the visual composition.
- Changes in particle density based on historical observation data.
- Year-by-year transitions that demonstrate changes in the dataset.
- A pink colour palette and glowing particle effects to create a visually engaging artwork.

## How It Works

The animation begins by creating a canvas and generating particles that form a butterfly silhouette.

Each particle has its own position and movement, allowing the butterfly to appear animated rather than static.

The program reads the CSV dataset and uses the observation count for each year to determine the number of particles displayed. As the animation moves between years, the particle density changes to reflect the data.

By combining movement, colour, and data, the project turns historical records into an animated visual experience.

## Run the Project

1. Open the project in the p5.js Web Editor.
2. Make sure the JavaScript code, butterfly image, and CSV dataset are included in the project files.
3. Click the **Play** button to start the animation.
4. Watch the butterfly change as the animation progresses through the years.

## Project Development

Throughout the development process, I experimented with particle size, movement speed, colours, and the overall butterfly shape.

One of the main challenges was creating a recognisable butterfly silhouette while keeping the particles moving naturally. I also worked on connecting the CSV data to the animation so that the visual changes were controlled by the observation records.

This project helped me develop my understanding of particle systems, data mapping, and animation using JavaScript and p5.js.

## Limitations and Future Improvements

Firstly, the project focuses on observation records from 1815 to 1819, which represents a small portion of the original dataset. Additionally, these records do not reflect exact butterfly population sizes, meaning the animation visualises recorded observations rather than actual population changes.

The animation also has limited user interaction, as viewers can only watch the changes between years without controlling the visualisation themselves. In the future, I would like to expand the dataset to include more years and introduce interactive features, such as allowing viewers to select a specific year and observe the corresponding changes in particle density. I would also explore different particle movements and visual effects to make the animation more dynamic and engaging.

## Resources and References

- [p5.js](https://p5js.org/) – Creative coding library and documentation.
- [The Nature of Code](https://natureofcode.com/) – Learning resource for particle systems and computational animation.
- [Natural History Museum Data Portal](https://data.nhm.ac.uk/) – Original butterfly and moth observation dataset.
- [University of Delaware](https://www.udel.edu/udaily/2025/january/michael-crossley-monarch-butterfly-protection/) – Background research on butterfly conservation.

## Project Creator

Phuong Thanh Truc Nguyen (Celia)

52685 Creative Coding Project, 2026

import { useState, useEffect } from 'react';
import styles from './styles';

export default function Sort() {
  const [colors, setColors] = useState([]);
  const [selectedAlgo, setSelectedAlgo] = useState('Selection Sort');
  const [sorting, setSorting] = useState(false);

  // eslint-disable-next-line
  useEffect(() => generateColors(50), []);

  // helper method to generate n random colors, and set them into state
  const generateColors = n => {
    if (sorting) return;
    const colors_ = [];

    for (let i = 0; i < n; i++) {
      // generate random number in [0, 0xFFFFFF] (color range)
      const num = ~~(Math.random() * (0xffffff + 1));
      // push hex to colors_
      colors_.push('#' + num.toString(16).padStart(6, 0));
    }

    setColors(colors_);
  };

  const timer = ms => new Promise(resolve => setTimeout(resolve, ms));

  /**
   *
   * @param {string} color
   */
  const colorToInt = color => {
    const [r, g, b] = [color.slice(1, 3), color.slice(3, 5), color.slice(5, 7)];
    // return sum of hues
    return parseInt(r, 16) + parseInt(g, 16) + parseInt(b, 16);
  };

  // selection sort
  const selectionSort = async () => {
    setSorting(true);
    const colors_ = [...colors];

    for (let i = 0; i < colors_.length; i++) {
      let min = i;
      for (let j = i + 1; j < colors_.length; j++) {
        if (colorToInt(colors_[j]) < colorToInt(colors_[min])) {
          min = j;
        }
      }
      [colors_[i], colors_[min]] = [colors_[min], colors_[i]];
      setColors([...colors_]);
      // sleep
      await timer(100);
    }
    setSorting(false);
  };

  // bubble sort
  const bubbleSort = async () => {
    setSorting(true);
    const colors_ = [...colors];

    while (true) {
      let swapped = false;
      for (let i = 0; i < colors_.length - 1; i++) {
        if (colorToInt(colors_[i]) > colorToInt(colors_[i + 1])) {
          [colors_[i], colors_[i + 1]] = [colors_[i + 1], colors_[i]];
          swapped = true;
          setColors([...colors_]);
          await timer(1);
        }
      }
      if (!swapped) break;
    }
    setSorting(false);
  };

  // insertion sort
  const insertionSort = async () => {
    setSorting(true);
    const colors_ = [...colors];

    for (let i = 1; i < colors_.length; i++) {
      const key = colors_[i];
      let j = i - 1;
      while (j >= 0 && colorToInt(key) < colorToInt(colors_[j])) {
        colors_[j + 1] = colors_[j];
        j--;
        setColors([...colors_]);
        await timer(1);
      }
      colors_[j + 1] = key;
    }
    setSorting(false);
  };

  // quick sort
  const quickSort = async () => {
    setSorting(true);
    const colors_ = [...colors];

    const partition = async (low, high) => {
      const pivot = colors_[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        if (colorToInt(colors_[j]) < colorToInt(pivot)) {
          i++;
          [colors_[i], colors_[j]] = [colors_[j], colors_[i]];
          setColors([...colors_]);
          await timer(1);
        }
      }
      [colors_[i + 1], colors_[high]] = [colors_[high], colors_[i + 1]];
      setColors([...colors_]);
      await timer(1);
      return i + 1;
    };

    const quickSortHelper = async (low, high) => {
      if (low < high) {
        const pi = await partition(low, high);
        await quickSortHelper(low, pi - 1);
        await quickSortHelper(pi + 1, high);
      }
    };

    await quickSortHelper(0, colors_.length - 1);
    setSorting(false);
  };


  const algos = {
    'Selection Sort': selectionSort,
    'Bubble Sort': bubbleSort,
    'Insertion Sort': insertionSort,
    'Quick Sort': quickSort,
  };

  return (
    <div style={styles.itemContainer}>
      <header style={styles.itemHeader}>Sort Visualization</header>
      <br />
      <p style={styles.itemParagraph}>
        Below is a simple visualization for various, famous sorting algorithms. Colors are really just hexadecimal
        values, so they will be sorted as if the colors are numbers.
      </p>
      <br />
      <button style={styles.betButton} onClick={() => generateColors(100)}>
        Randomize
      </button>
      <br />
      <form action="#">
        <label htmlFor="algo" style={styles.algoLabel}>
          Algorithm:{' '}
        </label>
        <select id="algo" name="algo" style={styles.algoSelect} onChange={e => setSelectedAlgo(e.target.value)}>
          {Object.keys(algos).map(algo => (
            <option key={algo} value={algo}>
              {algo}
            </option>
          ))}
        </select>
      </form>
      <br />
      <button
        style={styles.betButton}
        onClick={() => {
          if (!sorting) {
            algos[selectedAlgo]();
            // ReactGA.event({ category: 'Interaction', action: `${selectedAlgo}` });
          }
        }}
      >
        Sort
      </button>
      <br />
      {colors.map((color, i) => (
        <div key={`${i}`} style={{ ...styles.colorCell, backgroundColor: color }} />
      ))}
    </div>
  );
}
